export const REQUEST_POKEMONS = 'REQUEST_POKEMONS';
export const RECEIVE_POKEMONS = 'RECEIVE_POKEMONS';

const FETCH_URL = '';

const requestPokemons = () => ({
  type: REQUEST_POKEMONS
});

export const receivePokemons = (pokemons) => ({
  type: RECEIVE_POKEMONS,
  pokemons
});

export const fetchPokemons = () => {
  return (dispatch) => {
    dispatch(requestPokemons());
    return fetch(FETCH_URL)
      .then(res => res.json())
      .then(pokemons => dispatch(receivePokemons({
        // TODO
      })));
  };
};

const shouldFetchPokemons = (state) => {
  return !state.pokemons.values && !state.pokemons.isFetching;
};

export const fetchSettingsIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchPokemons(getState())) {
      return dispatch(fetchPokemons());
    }
    return Promise.resolve();
  }
};
