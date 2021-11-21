/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Provider } from 'react-redux';
import { act, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Dashboard from '..';
import configureStore from '../../../redux/store/configureStore';
import { HeroeState } from '../../../types/app.types';

describe('Given a Dashboard component', () => {
  let container : HTMLDivElement | null | any;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container = null;
  });

  describe('When is invoked and the store contain a heroesList', () => {
    test('Then should render an element with class hero-card__title with fakeName inside', () => {
      const initialHeroState: HeroeState = {
        heroesList: [{
          name: 'fakeName', id: 0, description: 'fakeDescription', modified: new Date(), thumbnail: { path: 'fakePath', extension: 'jpg' }, urls: [{ type: 'fakeType', url: 'fakeUrl' }]
        }],
        heroeDetail: undefined,
        heroeError: undefined
      };
      const testStore = configureStore({ heroes: initialHeroState });
      act(() => {
        render(<Provider store={testStore}>
          <MemoryRouter>
            <Dashboard />
          </MemoryRouter>
        </Provider>, container);
      });

      const div: HTMLParagraphElement | null | any = document.getElementsByClassName('heroe-card__title');

      expect(div[0].innerHTML).toBe('fakeName');
    });
  });
  describe('When is invoked and the store contains heroesList undefined', () => {
    test('Then should not render any item', () => {
      const initialHeroState: HeroeState = {
        heroesList: undefined,
        heroeDetail: undefined,
        heroeError: undefined
      };
      const testStore = configureStore({ heroes: initialHeroState });

      act(() => {
        render(<Provider store={testStore}>
          <MemoryRouter>
            <Dashboard />
          </MemoryRouter>
        </Provider>, container);
      });

      const div: HTMLParagraphElement | null | any = document.getElementsByClassName('heroe-card__title');
      expect(div.length).toBe(0);
    });
  });
  describe('When is invoked and the store contains heroError different from undefined', () => {
    test('Then should not render any item', () => {
      const initialHeroState: HeroeState = {
        heroesList: undefined,
        heroeDetail: undefined,
        heroeError: { message: 'ErrorMessage' }
      };
      const testStore = configureStore({ heroes: initialHeroState });

      act(() => {
        render(<Provider store={testStore}>
          <MemoryRouter>
            <Dashboard />
          </MemoryRouter>
        </Provider>, container);
      });

      const p: HTMLParagraphElement | null | any = document.getElementsByClassName('message--error');
      expect(p.length).toBe(1);
    });
  });
});
