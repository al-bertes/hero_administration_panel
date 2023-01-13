import { createAction } from "@reduxjs/toolkit";
export const fetchHeroes = (request) => (dispatch) => {
  dispatch(heroesFetching());
  request("http://localhost:3001/heroes")
      .then(data => dispatch(heroesFetched(data)))
      .catch(() => dispatch(heroesFetchingError()))
}
export const fetchFilters = (request) => (dispatch) => {
   request("http://localhost:3001/filters")
      .then(data => dispatch(createFilter(data)))
}

export const heroesFetching = createAction("HEROES_FETCHING");

export const heroesFetched = createAction("HEROES_FETCHED");

export const heroesFetchingError = createAction("HEROES_FETCHING_ERROR");

export const createHeroes = createAction("HEROES_CREATE");

export const deliteHero = createAction("HEROES_DELETE");

export const createFilter = createAction("HEROES_FILTER");

export const setActiveFilter = createAction("SET_ACTIVE");
