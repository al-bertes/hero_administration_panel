import { createReducer } from '@reduxjs/toolkit';

import { heroesFetching, heroesFetched, heroesFetchingError, createHeroes, deliteHero } from '../actions';

const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
};

const heroes = createReducer(
  initialState,
  {
    [heroesFetching]: (state) => {
      state.heroesLoadingStatus = 'loading';
    },
    [heroesFetched]: (state, action) => {
      state.heroesLoadingStatus = 'idle';
      state.heroes = action.payload;
    },
    [heroesFetchingError]: (state) => {
      state.heroesFetchingError = 'error';
    },
    [createHeroes]: (state, action) => {
      state.heroes.push(action.payload);
      state.heroesLoadingStatus = 'idle';
    },
    [deliteHero]: (state, action) => {
      state.heroes.filter(({ id }) => id != action.payload);
      state.heroesLoadingStatus = 'idle';
    },
  },
  [],
  (state) => state,
);

export default heroes;
