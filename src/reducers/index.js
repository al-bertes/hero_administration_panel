const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  filters: [],
  activeFilter: 'all',
  activeHeroes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_FETCHING':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      };
    case 'HEROES_FETCHED':
      return {
        ...state,
        heroes: action.payload,
        activeHeroes:
          state.activeFilter === 'all'
            ? action.payload
            : state.heroes.filter(({ element }) => element === state.activeFilter),
        heroesLoadingStatus: 'idle',
      };
    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };
    case 'HEROES_CREATE':
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
        activeHeroes: [...state.activeHeroes, action.payload],
        activeFilter: 'all',
        heroesLoadingStatus: 'idle',
      };
    case 'HEROES_DELETE':
      return {
        ...state,
        heroes: state.heroes.filter(({ id }) => id != action.idHero),
        activeHeroes: state.activeHeroes.filter(({ id }) => id != action.idHero),
        heroesLoadingStatus: 'idle',
      };
    case 'HEROES_FILTER':
      return {
        ...state,
        heroesLoadingStatus: 'idle',
        filters: action.payload,
      };
    case 'SET_ACTIVE': {
      return {
        ...state,
        heroesLoadingStatus: 'idle',
        activeHeroes:
          action.active === 'all' ? state.heroes : state.heroes.filter(({ element }) => element === action.active),
        activeFilter: action.active,
      };
    }
    default:
      return state;
  }
};

export default reducer;
