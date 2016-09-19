import React, { Component, PropTypes } from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { toggleInList } from '../../../../shared/actions/pokemons';
import PokemonDetails from './PokemonDetails';

class PokemonCard extends Component {

  constructor(props) {
    super(props);
    this.handleListToggle = this.handleListToggle.bind(this);
  }

  handleListToggle() {
    this.props.dispatch(toggleInList(this.props.name));
  }

  render() {
    const toggleInListAction = (
      <FlatButton
        label={this.props.inList ? 'Remove from list' : 'Add to list'}
        onTouchTap={this.handleListToggle}
      />
    );

    return (
      <Card style={{ marginBottom: '20px' }}>
        <CardHeader title={this.props.name} />
        <CardActions>
          <PokemonDetails
            toggleInListAction={toggleInListAction}
            {...this.props}
          />
          {toggleInListAction}
        </CardActions>
      </Card>
    );
  }

}

PokemonCard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  inList: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  stats: PropTypes.object,
  statsFetching: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
};

export default connect()(PokemonCard);
