import React, { Component } from 'react';
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
            name={this.props.name}
          />
          {toggleInListAction}
        </CardActions>
      </Card>
    );
  }

}

export default connect()(PokemonCard);
