import axios from 'axios';
import { Dispatch } from 'react';
import md5 from 'md5';
import { API_URL } from '../../constants/app.constants';
import { ApiResponseHeroes, HeroesActions } from '../../types/app.types';
import heroesActionsTypes from './heroesActionsTypes';

export const loadHeroesList = () => async (dispatch: Dispatch<HeroesActions>) => {
  const ts = new Date().getTime();
  const privateKey: string = process.env.REACT_APP_PRIVATE_KEY ?? '';
  const publicKey: string = process.env.REACT_APP_PUBLIC_KEY ?? '';
  const hash = md5(ts + privateKey + publicKey).toString();
  const url = `${API_URL}?ts=${ts}&apikey=${publicKey}1&hash=${hash}`;

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
export const loadHeroeDetail = (heroId: string) => {
  return async (dispatch: Dispatch<HeroesActions>) => {
    const url = `${API_URL}/${heroId}ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_API_HASH}`;

    try {
      const { data: { results } } = await axios.get(url);
      dispatch({
        type: heroesActionsTypes.HEROE_DETAIL_LOAD_SUCCEED,
        payload: results
      });
    } catch (error) {
      dispatch({
        type: heroesActionsTypes.HEROE_DETAIL_LOAD_ERROR,
        payload: error
      });
    }
  };
};
