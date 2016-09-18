import {
  TOGGLE_IN_LIST,
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  REQUEST_POKEMON_STATS,
  RECEIVE_POKEMON_STATS
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
      return Object.assign({}, state, {
        isFetching: false,
        next: action.next,
        values: state.values.concat(action.values.map(value => {
          value.inList = false;
          value.statsFetching = false;
          return value;
        }))
      });
    case REQUEST_POKEMON_STATS:
      return Object.assign({}, state, {
        values: state.values.map(value => {
          if (value.name === action.name) {
            value.statsFetching = true;
          }
          return value;
        })
      });
    case RECEIVE_POKEMON_STATS:
      return Object.assign({}, state, {
        values: state.values.map(value => {
          if (value.name === action.name) {
            value.stats = action.stats;
            value.statsFetching = false;
          }
          return value;
        })
      });
    case TOGGLE_IN_LIST:
      return Object.assign({}, state, {
        values: state.values.map(value => {
          if (value.name === action.name) {
            value.inList = !value.inList;
          }
          return value;
        })
      });
    default:
      return state;
  }
}

export default pokemons;
