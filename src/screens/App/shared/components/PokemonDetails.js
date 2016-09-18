import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { fetchPokemonStatsIfNeeded } from '../../../../shared/actions/pokemons';
import Progress from './Progress';
import PokemonStats from './PokemonStats';

class PokemonDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
    this.props.dispatch(fetchPokemonStatsIfNeeded(
      this.props.name,
      this.props.url
    ));
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const actions = [
      this.props.toggleInListAction,
      <FlatButton
        label='Close'
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <span>
        <FlatButton label='Stats' onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.name}
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
          contentStyle={{ width: '90%' }}
          titleStyle={{ border: 'none' }}
          actionsContainerStyle={{ border: 'none' }}
        >
          <div style={{ padding: '10px 0' }}>
            {this.props.statsFetching ? <Progress /> : <PokemonStats {...this.props.stats} />}
          </div>
        </Dialog>
      </span>
    );
  }

}

PokemonDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  stats: PropTypes.object,
  statsFetching: PropTypes.bool.isRequired,
  toggleInListAction: PropTypes.element.isRequired,
  url: PropTypes.string.isRequired
};

const mapStateToProps = (state, props) => {
  const { values } = state.pokemons;
  const pokemon = values.filter(value => value.name === props.name)[0];
  return {
    stats: pokemon.stats,
    statsFetching: pokemon.statsFetching
  }
};

export default connect(mapStateToProps)(PokemonDetails);
