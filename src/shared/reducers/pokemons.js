import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS
} from '../actions/pokemons';

const pokemons = (state = {
  isFetching: false,
  values: []
}, action) => {
  switch (action.type) {
    case REQUEST_POKEMONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POKEMONS:
      console.log('RECEIVE_POKEMONS');
      console.log(action);
      return Object.assign({}, state, {
        isFetching: false,
        next: action.next,
        values: state.values.concat(action.values)
      });
    default:
      return state;
  }
}

export default pokemons;
