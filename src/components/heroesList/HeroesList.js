import { useHttp } from "../../hooks/http.hook";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  deliteHero
} from "../../actions";

import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from "../spinner/Spinner";

const HeroesList = () => {
  const { heroesLoadingStatus, activeHeroes } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
      .then((data) => dispatch(heroesFetched(data)))
      .catch(() => dispatch(heroesFetchingError()));

    // eslint-disable-next-line
  }, []);
  const onDelete = useCallback((id) => {
    request(`http://localhost:3001/heroes/${id}`, "DELETE")
            .then(dispatch(deliteHero(id))).catch(console.log('error from delete'))
  }, [request]);
  if (heroesLoadingStatus === "loading") {
    return <Spinner />;
  } else if (heroesLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>;
    }

    return arr.map(({ ...props }) => {
      return <HeroesListItem key={props.id} {...props} onDelete={() => onDelete(props.id)} />;
    });
  };

  const elements = renderHeroesList(activeHeroes);
  return <ul>{elements}</ul>;
};

export default HeroesList;
