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
        ...state,
        heroesList: action.payload
      };
    case heroesActionsTypes.HEROE_DETAIL_LOAD_SUCCEED:
      return {
        ...state,
        heroeDetail: action.payload
      };
    case heroesActionsTypes.HEROES_LIST_LOAD_ERROR:
      return {
        ...state,
        heroesList: null,
        heroeError: action.payload

      };
    case heroesActionsTypes.HEROE_DETAIL_LOAD_ERROR:
      return {
        ...state,
        heroeError: action.payload,
        heroeDetail: null
      };
    default:
      return state;
  }
}
