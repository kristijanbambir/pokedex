import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS
} from '../actions/pokemons';

const pokemons = (state = {
  isFetching: false
}, action) => {
  switch (action.type) {
    case REQUEST_POKEMONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POKEMONS:
      return Object.assign({}, state, {
        isFetching: false,
        values: action.pokemons
      });
    default:
      return state;
  }
}

export default pokemons;
