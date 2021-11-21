import heroesReducer from '../heroesReducer';
import { HeroesActions, HeroeState } from '../../../types/app.types';

describe('Given the reducers folder', () => {
  describe('Given the heroesReducer function', () => {
    test('When receive an action with type HEROES_LIST_LOAD_SUCCEED and payload the new state should have the payload in the heroesList field', () => {
      const action: HeroesActions = { type: 'HEROES_LIST_LOAD_SUCCEED', payload: [{ a: 0 }] };

      const newState = heroesReducer(undefined, action);

      expect(newState.heroesList).toEqual([{ a: 0 }]);
    });
    test('When receive an action with type HEROE_DETAIL_LOAD_SUCCEED and payload the new state should have the payload in the heroeDetail field', () => {
      const action: HeroesActions = { type: 'HEROE_DETAIL_LOAD_SUCCEED', payload: { b: 1 } };

      const newState: HeroeState = heroesReducer(undefined, action);

      expect(newState.heroeDetail).toEqual({ b: 1 });
    });
    test('When receive an action with type HEROES_LIST_LOAD_ERROR and payload the new state should have the payload in the heroeError field and heroesList should be null', () => {
      const action: HeroesActions = { type: 'HEROES_LIST_LOAD_ERROR', payload: { error: 'fakeError' } };

      const newState: HeroeState = heroesReducer(undefined, action);

      expect(newState.heroeError).toEqual({ error: 'fakeError' });

      expect(newState.heroesList).toBeNull();
    });
    test('When receive an action with type HEROE_DETAIL_LOAD_ERROR and payload the new state should have the payload in the heroeError field and the heroeDetail should be null', () => {
      const action: HeroesActions = { type: 'HEROE_DETAIL_LOAD_ERROR', payload: { error: 'newFakeError' } };

      const newState: HeroeState = heroesReducer(undefined, action);

      expect(newState.heroeError).toEqual({ error: 'newFakeError' });

      expect(newState.heroeDetail).toBeNull();
    });
    test('When receive an action with type different from HEROES_LIST_LOAD_SUCCEED, HEROES_LIST_LOAD_ERROR, HEROE_DETAIL_LOAD_SUCCEED and HEROE_DETAIL_LOAD_ERROR should return the same state', () => {
      const action: HeroesActions = { type: 'HEROE_DETAIL_ACTION_NEW', payload: { c: '3' } };

      const newState: HeroeState = heroesReducer(undefined, action);

      expect(newState).toEqual({
        heroDetail: undefined,
        heroesList: undefined,
        heroeError: undefined
      });
    });
  });
});
