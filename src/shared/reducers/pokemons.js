import {
  TOGGLE_IN_LIST,
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS
} from '../actions/pokemons';

const pokemons = (state = {
  isFetching: false,
  values: []
}, action) => {
  switch (action.type) {
    case TOGGLE_IN_LIST:
      const values = state.values.map(value => {
        if (value.name === action.name) {
          value.inList = !value.inList;
        }
        return value;
      });
      return Object.assign({}, state, {
        values
      });
    case REQUEST_POKEMONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POKEMONS:
      const newValues = action.values.map(value => {
        value.inList = false;
        return value;
      });
      return Object.assign({}, state, {
        isFetching: false,
        next: action.next,
        values: state.values.concat(newValues)
      });
    default:
      return state;
  }
}

export default pokemons;
