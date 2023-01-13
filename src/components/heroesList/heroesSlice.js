import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';

// const heroesAdapter = createEntityAdapter();
// const initialState = heroesAdapter.initialState({
//   heroesLoadingStatus: 'idle',
// });
const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
};

export const fetchHeroes = createAsyncThunk('heroes/fetchHeroes', () => {
  const { request } = useHttp();
  return request('http://localhost:3001/heroes');
});
const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  reducers: {
    createHeroes: (state, action) => {
      state.heroes.push(action.payload);
      state.heroesLoadingStatus = 'idle';
    },
    deliteHero: (state, action) => {
      state.heroes = state.heroes.filter(({ id }) => id != action.payload);
      state.heroesLoadingStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroes.pending, (state) => {
        state.heroesLoadingStatus = 'loading';
      })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.heroesLoadingStatus = 'idle';
        state.heroes = action.payload;
      })
      .addCase(fetchHeroes.rejected, (state) => {
        state.heroesFetchingError = 'error';
      });
  },
});
const { actions, reducer } = heroesSlice;

export default reducer;

export const { heroesFetching, heroesFetched, heroesFetchingError, createHeroes, deliteHero } = actions;
