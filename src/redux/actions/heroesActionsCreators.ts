import axios from 'axios';
import { Dispatch } from 'react';
import { API_URL } from '../../constants/app.constants';
import { ApiResponseHeroes, HeroesActions } from '../../types/app.types';
import heroesActionsTypes from './heroesActionsTypes';
import { getUrlParameters } from './heroActions.utils';

export const loadHeroesList = () => async (dispatch: Dispatch<HeroesActions>) => {
  const { ts, publicKey, hash } = getUrlParameters();
  const url = `${API_URL}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const { data }: ApiResponseHeroes = await axios.get(url);
    dispatch({
      type: heroesActionsTypes.HEROES_LIST_LOAD_SUCCEED,
      payload: data.data.results
    });
  } catch (error) {
    dispatch({
      type: heroesActionsTypes.HEROES_LIST_LOAD_ERROR,
      payload: error
    });
  }
};

// eslint-disable-next-line arrow-body-style
export const loadHeroeDetail = (heroId: string, dispatch: Dispatch<HeroesActions>) => {
  return (async () => {
    const { ts, publicKey, hash } = getUrlParameters();
    const url = `${API_URL}/${heroId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    try {
      const { data } = await axios.get(url);
      dispatch({
        type: heroesActionsTypes.HEROE_DETAIL_LOAD_SUCCEED,
        payload: data.data.results[0]
      });
    } catch (error) {
      dispatch({
        type: heroesActionsTypes.HEROE_DETAIL_LOAD_ERROR,
        payload: error
      });
    }
  })();
};
