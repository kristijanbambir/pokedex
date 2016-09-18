import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { Row, Col } from 'react-bootstrap';
import { fetchPokemons } from '../../../../shared/actions/pokemons';
import PokemonCard from '../../shared/components/PokemonCard';
import Progress from '../../shared/components/Progress';

class Home extends Component {

  constructor(props) {
    super(props);
    this.loadItems = this.loadItems.bind(this);
  }

  loadItems(pageToLoad) {
    if (!this.props.isFetching) {
      this.props.dispatch(fetchPokemons(this.props.next));
    }
  }

  render() {
    return (
      <Row>
        <InfiniteScroll
          pageStart={-1}
          loadMore={this.loadItems}
          hasMore={true || false}
          loader={<Progress />}
        >
          {this.props.pokemons.map((pokemon) => (
            <Col key={pokemon.name} sm={6} md={4}>
              <PokemonCard {...pokemon} />
            </Col>
          ))}
        </InfiniteScroll>
      </Row>
    );
  }

}

Home.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  next: PropTypes.string,
  pokemons: PropTypes.array
};

const mapStateToProps = (state) => {
  const { isFetching, next, values: pokemons } = state.pokemons;
  return {
    isFetching,
    next,
    pokemons
  }
};

export default connect(mapStateToProps)(Home);
