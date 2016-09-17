export const TOGGLE_IN_LIST = 'TOGGLE_IN_LIST';
export const REQUEST_POKEMONS = 'REQUEST_POKEMONS';
export const RECEIVE_POKEMONS = 'RECEIVE_POKEMONS';

const FETCH_URL = 'http://pokeapi.co/api/v2/pokemon/?limit=24';

export const toggleInList = (name) => ({
  type: TOGGLE_IN_LIST,
  name
});

const requestPokemons = () => ({
  type: REQUEST_POKEMONS
});

export const receivePokemons = (pokemons) => ({
  type: RECEIVE_POKEMONS,
  next: pokemons.next,
  values: pokemons.results
});

export const fetchPokemons = (fetchUrl) => {
  return (dispatch) => {
    dispatch(requestPokemons());
    return fetch(fetchUrl || FETCH_URL)
      .then(res => res.json())
      .then(pokemons => dispatch(receivePokemons(pokemons)));
  };
};
