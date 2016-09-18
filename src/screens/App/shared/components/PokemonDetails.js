import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import Progress from './Progress';
import { fetchPokemonStatsIfNeeded } from '../../../../shared/actions/pokemons';

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

    let body;
    if (this.props.statsFetching) {
      body = <Progress />
    } else {
      body = JSON.stringify(this.props.stats);
    }

    return (
      <span>
        <FlatButton label='View details' onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.name}
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent
        >
          {body}
        </Dialog>
      </span>
    );
  }

}

const mapStateToProps = (state, props) => {
  const { values } = state.pokemons;
  const pokemon = values.filter(value => value.name === props.name)[0];
  return {
    stats: pokemon.stats,
    statsFetching: pokemon.statsFetching
  }
};

export default connect(mapStateToProps)(PokemonDetails);
