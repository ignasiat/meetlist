import axios from 'axios';
import { loadHeroeDetail, loadHeroesList } from '../heroesActionsCreators';

jest.mock('axios');

describe('Given a heroActionsCreators file', () => {
  describe('Given a loadHeroesList function', () => {
    test('Should dispatch an action with type HEROES_LIST_LOAD_SUCCED when the request is ok', async () => {
      axios.get = jest.fn()
        .mockImplementationOnce(() => Promise.resolve({ data: { data: { results: [] } } }));

      const dispatch = jest.fn();

      await loadHeroesList()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: 'HEROES_LIST_LOAD_SUCCEED', payload: [] });
    });
    test('Should dispatch an action with type HEROES_LIST_LOAD_ERROR   when the request is KO', async () => {
      axios.get = jest.fn()
        .mockImplementationOnce(() => Promise.reject(new Error('fakeError')));

      const dispatch = jest.fn();

      await loadHeroesList()(dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: 'HEROES_LIST_LOAD_ERROR', payload: new Error('fakeError') });
    });
  });
  describe('Given a loadHeroeDetail function', () => {
    test('Should dispatch an action with type HEROE_DETAIL_LOAD_SUCCEED when the request is ok', async () => {
      axios.get = jest.fn()
        .mockImplementationOnce(() => Promise.resolve({ data: { data: { results: [{}] } } }));

      const dispatch = jest.fn();

      await loadHeroeDetail('fakeHeroId', dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: 'HEROE_DETAIL_LOAD_SUCCEED', payload: {} });
    });
    test('Should dispatch an action with type HEROE_DETAIL_LOAD_ERROR when the request is KO', async () => {
      axios.get = jest.fn()
        .mockImplementationOnce(() => Promise.reject(new Error('fakeError')));

      const dispatch = jest.fn();

      await loadHeroeDetail('fakeId', dispatch);

      expect(dispatch).toHaveBeenCalledWith({ type: 'HEROE_DETAIL_LOAD_ERROR', payload: new Error('fakeError') });
    });
  });
});
