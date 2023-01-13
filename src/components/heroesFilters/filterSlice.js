import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';

const initialState = {
  filters: [],
  activeFilter: 'all',
};
export const fetchFilters = createAsyncThunk('heroes/fetchFilters', () => {
  const { request } = useHttp();
  return request('http://localhost:3001/filters');
});
const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filtersActive: (state, action) => {
      state.heroesLoadingStatus = 'idle';
      state.activeFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.heroesLoadingStatus = 'idle';
      state.filters = action.payload;
    });
  },
});
const { actions, reducer } = filterSlice;

export default reducer;

export const { filtersCreate, filtersActive } = actions;
