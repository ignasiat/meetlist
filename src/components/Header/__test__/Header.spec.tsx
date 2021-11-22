/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Provider } from 'react-redux';
import { act, render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import Header from '..';
import configureStore from '../../../redux/store/configureStore';
import { HeroeState } from '../../../types/app.types';

describe('Given a Header component', () => {
  let container : HTMLDivElement | null | any;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container = null;
  });

  describe('When is invoked', () => {
    test('Then should render an element with class header__title with MeetList inside', () => {
      const initialHeroState: HeroeState = {
        heroesList: undefined,
        heroeDetail: {
          name: 'fakeName', id: 0, description: 'fakeDescription', modified: new Date(), thumbnail: { path: 'fakePath', extension: 'jpg' }, urls: [{ type: 'detail', url: 'fakeDetail' }, { type: 'comiclink', url: 'fakeComicLink' }, { type: 'wiki', url: 'fakeWiki' }]
        },
        heroeError: undefined
      };

      const testStore = configureStore({ heroes: initialHeroState });
      act(() => {
        render(<Provider store={testStore}>
          <MemoryRouter initialEntries={['/detail/0']}>
            <Routes>
              <Route path="/detail/:id" element={<Header />} />
            </Routes>
          </MemoryRouter>
        </Provider>, container);
      });

      const div: HTMLParagraphElement | null | any = document.getElementsByClassName('header__title');

      expect(div[0].innerHTML).toBe('MeetList');
    });
  });

  describe('When is invoked and the route is /dashboard', () => {
    test('Then should not render the links', () => {
      const initialHeroState: HeroeState = {
        heroesList: undefined,
        heroeDetail: undefined,
        heroeError: undefined
      };

      const testStore = configureStore({ heroes: initialHeroState });
      act(() => {
        render(<Provider store={testStore}>
          <MemoryRouter initialEntries={['/dashboard']}>
            <Routes>
              <Route path="/dashboard" element={<Header />} />
            </Routes>
          </MemoryRouter>
        </Provider>, container);
      });

      const nav: HTMLParagraphElement[] | null | any = document.getElementsByClassName('nav__item');

      expect(nav.length).toBe(0);
    });
  });
});
