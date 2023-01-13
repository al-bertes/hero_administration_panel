
import { filtersActive, fetchFilters } from "./filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import classNames from "classnames";
const HeroesFilters = () => {
  const dispatch = useDispatch();
  const {filters, activeFilter} = useSelector(state => state.filters);
  useEffect(() => {
    dispatch(fetchFilters())
  }, [])
  const rendereFilters = () => {
    return filters.map(({type, text, classes},index) => {
      const classItem = classNames("btn", classes, {'acitve': type === activeFilter });
    
      return (
        <button key={index} onClick={() => dispatch(filtersActive(type))} className={classItem}>{text}</button>
      )
    })
  }
  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          {rendereFilters()}
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;