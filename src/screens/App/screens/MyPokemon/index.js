import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Empty from '../../shared/components/Empty';
import PokemonCard from '../../shared/components/PokemonCard';

class MyPokemon extends Component {

  render() {
    if (!this.props.pokemons || this.props.pokemons.length === 0) {
      return <Empty />;
    }
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

MyPokemon.propTypes = {
  pokemons: PropTypes.array
};

const mapStateToProps = (state) => {
  const { values } = state.pokemons;
  return {
    pokemons: values.filter(value => value.inList)
  }
};

export default connect(mapStateToProps)(MyPokemon);
