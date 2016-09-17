import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import PokemonCard from '../../shared/components/PokemonCard';

class MyPokemon extends Component {

  render() {
    return (
      <Row>
        {this.props.pokemons.map((pokemon) => (
          <Col key={pokemon.name} sm={6} md={4}>
            <PokemonCard {...pokemon} />
          </Col>
        ))}
      </Row>
    );
  }

}

const mapStateToProps = (state) => {
  const { values } = state.pokemons;
  return {
    pokemons: values.filter(value => value.inList)
  }
};

export default connect(mapStateToProps)(MyPokemon);
