export const heroesFetching = () => {
  return {
    type: "HEROES_FETCHING",
  };
};

export const heroesFetched = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};

export const createHeroes = (hero) => {
  return {
    type: "HEROES_CREATE",
    payload: hero
  }
}

export const deliteHero = (id) => {
  return {
    type: "HEROES_DELETE",
    idHero: id
  }
}

export const createFilter = (filtres) => {
  return {
    type: "HEROES_FILTER",
    payload: filtres
  }
}

export const setActiveFilter = (active) => {
  return {
    type: "SET_ACTIVE",
    active,
  }
}

