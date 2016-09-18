import 'whatwg-fetch';

export const REQUEST_POKEMONS = 'REQUEST_POKEMONS';
export const RECEIVE_POKEMONS = 'RECEIVE_POKEMONS';
export const REQUEST_POKEMON_STATS = 'REQUEST_POKEMON_STATS';
export const RECEIVE_POKEMON_STATS = 'RECEIVE_POKEMON_STATS';
export const TOGGLE_IN_LIST = 'TOGGLE_IN_LIST';

const FETCH_URL = 'http://pokeapi.co/api/v2/pokemon/?limit=24';

const requestPokemons = () => ({
  type: REQUEST_POKEMONS
});

export const receivePokemons = (pokemons) => ({
  type: RECEIVE_POKEMONS,
  next: pokemons.next,
  values: pokemons.results
});

const requestPokemonStats = (name) => ({
  type: REQUEST_POKEMON_STATS,
  name
});

const receivePokemonStats = (name, stats) => ({
  type: RECEIVE_POKEMON_STATS,
  name,
  stats
});

export const toggleInList = (name) => ({
  type: TOGGLE_IN_LIST,
  name
});

export const fetchPokemons = (fetchUrl) => {
  return (dispatch) => {
    dispatch(requestPokemons());
    return fetch(fetchUrl || FETCH_URL)
      .then(res => res.json())
      .then(pokemons => dispatch(receivePokemons(pokemons)));
  };
};

const fetchPokemonStats = (name, fetchUrl) => {
  return (dispatch) => {
    dispatch(requestPokemonStats(name));
    return fetch(fetchUrl)
      .then(res => res.json())
      .then(stats => dispatch(receivePokemonStats(name, stats)));
  };
};

const shouldFetchPokemonStats = (name, state) => {
  const pokemon = state.pokemons.values.filter(value => value.name === name)[0];
  return !pokemon.stats && !pokemon.statsFetching;
};

export const fetchPokemonStatsIfNeeded = (name, fetchUrl) => {
  return (dispatch, getState) => {
    if (shouldFetchPokemonStats(name, getState())) {
      return dispatch(fetchPokemonStats(name, fetchUrl));
    }
    return Promise.resolve();
  }
};
