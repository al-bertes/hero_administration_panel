
import { filtersCreate } from "../components/heroesFilters/filterSlice";

export const fetchFilters = (request) => (dispatch) => {
   request("http://localhost:3001/filters")
      .then(data => dispatch(filtersCreate(data)))
}

