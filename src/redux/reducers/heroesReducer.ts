/* eslint-disable default-param-last */
import { HeroesActions, HeroeState } from '../../types/app.types';
import heroesActionsTypes from '../actions/heroesActionsTypes';

export default function heroesReducer(state = {
  heroesList: undefined,
  heroeDetail: undefined,
  heroeError: undefined
}, action: HeroesActions): HeroeState {
  switch (action.type) {
    case heroesActionsTypes.HEROES_LIST_LOAD_SUCCEED:
      return {
        heroesList: action.payload, heroeError: null, heroeDetail: null
      };
    case heroesActionsTypes.HEROE_DETAIL_LOAD_SUCCEED:
      return {
        heroesList: null,
        heroeError: null,
        heroeDetail: action.payload
      };
    case heroesActionsTypes.HEROES_LIST_LOAD_ERROR:
    case heroesActionsTypes.HEROE_DETAIL_LOAD_ERROR:
      return {
        heroesList: null, heroeError: action.payload, heroeDetail: null
      };
    default:
      return state;
  }
}
