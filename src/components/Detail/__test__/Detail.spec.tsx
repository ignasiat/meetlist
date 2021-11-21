/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Provider } from 'react-redux';
import { act, render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import Detail from '..';
import configureStore from '../../../redux/store/configureStore';
import { HeroeState } from '../../../types/app.types';

describe('Given a Detail component', () => {
  let container : HTMLDivElement | null | any;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    container = null;
  });

  describe('When is invoked and the store contain a heroeDetail that matches id from route', () => {
    test('Then should render an element with class hero-detail__title with fakeName inside', () => {
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
              <Route path="/detail/:id" element={<Detail />} />
            </Routes>
          </MemoryRouter>
        </Provider>, container);
      });

      const div: HTMLParagraphElement | null | any = document.getElementsByClassName('hero-detail__title');

      expect(div[0].innerHTML).toBe('fakeName');
    });
  });

  describe('When is invoked and the store contain a heroeDetail that matches id from route', () => {
    test('Then should render three buttons. Clicking the first should invoke window.open', () => {
      const initialHeroState: HeroeState = {
        heroesList: undefined,
        heroeDetail: {
          name: 'fakeName', id: 0, description: 'fakeDescription', modified: new Date(), thumbnail: { path: 'fakePath', extension: 'jpg' }, urls: [{ type: 'detail', url: 'fakeDetail' }, { type: 'comiclink', url: 'fakeComicLink' }, { type: 'wiki', url: 'fakeWiki' }]
        },
        heroeError: undefined
      };

      window.open = jest.fn();

      const testStore = configureStore({ heroes: initialHeroState });
      act(() => {
        render(<Provider store={testStore}>
          <MemoryRouter initialEntries={['/detail/0']}>
            <Routes>
              <Route path="/detail/:id" element={<Detail />} />
            </Routes>
          </MemoryRouter>
        </Provider>, container);
      });

      const buttons: HTMLParagraphElement[] | null | any = document.getElementsByClassName('heroe-detail__button-item');

      fireEvent.click(buttons[0]);

      expect(window.open).toHaveBeenCalled();
    });
  });

  describe('When is invoked and the store contain a heroeDetail that not matches id from route', () => {
    test('Then should render an element with class heroe-detail__description-text with Description no available inside', () => {
      // TO DO This test should spy loadHeroeDetail
      const initialHeroState: HeroeState = {
        heroesList: undefined,
        heroeDetail: {
          name: 'fakeName', id: 0, description: '', modified: new Date(), thumbnail: { path: 'fakePath', extension: 'jpg' }, urls: [{ type: 'fakeType', url: 'fakeUrl' }]
        },
        heroeError: undefined
      };
      const testStore = configureStore({ heroes: initialHeroState });
      act(() => {
        render(<Provider store={testStore}>
          <MemoryRouter initialEntries={['/detail/1']}>
            <Routes>
              <Route path="/detail/:id" element={<Detail />} />
            </Routes>
          </MemoryRouter>
        </Provider>, container);
      });

      const div: HTMLParagraphElement | null | any = document.getElementsByClassName('heroe-detail__description-text');

      expect(div[0].innerHTML).toBe('Description no available');
    });
  });

  describe('When is invoked and the store contains heroeDetail undefined', () => {
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
            <Detail />
          </MemoryRouter>
        </Provider>, container);
      });

      const div: HTMLParagraphElement | null | any = document.getElementsByClassName('heroe-card__title');

      expect(div.length).toBe(0);
    });
  });

  describe('When is invoked and the store contains heroError different from undefined', () => {
    test('Then should render one message with class message--error', () => {
      const initialHeroState: HeroeState = {
        heroesList: undefined,
        heroeDetail: undefined,
        heroeError: { message: 'ErrorMessage' }
      };
      const testStore = configureStore({ heroes: initialHeroState });

      act(() => {
        render(<Provider store={testStore}>
          <MemoryRouter>
            <Detail />
          </MemoryRouter>
        </Provider>, container);
      });

      const p: HTMLParagraphElement | null | any = document.getElementsByClassName('message--error');
      expect(p.length).toBe(1);
    });
  });
});
