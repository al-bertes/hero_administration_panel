import { createReducer } from '@reduxjs/toolkit';
import { createFilter, setActiveFilter } from '../actions';
const initialState = {
  filters: [],
  activeFilter: 'all',
};

const filters = createReducer(
  initialState,
  {
    [createFilter]: (state, action) => {
      state.heroesLoadingStatus = 'idle';
      state.filters = action.payload;
    },
    [setActiveFilter]: (state, action) => {
      state.heroesLoadingStatus = 'idle';
      state.activeFilter = action.payload;
    },
  },
  [],
  (state) => state,
);
// const filters = (state = initialState, action) => {
//   switch (action.type) {
//     case 'HEROES_FILTER':
//       return {
//         ...state,
//         heroesLoadingStatus: 'idle',
//         filters: action.payload,
//       };
//     case 'SET_ACTIVE': {
//       return {
//         ...state,
//         heroesLoadingStatus: 'idle',
//         activeFilter: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

export default filters;
