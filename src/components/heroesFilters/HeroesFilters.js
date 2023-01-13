import { useHttp } from "../../hooks/http.hook";
import { fetchFilters, setActiveFilter } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import classNames from "classnames";
const HeroesFilters = () => {
  const {request} = useHttp();
  const dispatch = useDispatch();
  const {filters, activeFilter} = useSelector(state => state.filters);
  useEffect(() => {
    dispatch(fetchFilters(request))
  }, [])
  const rendereFilters = () => {
    return filters.map(({type, text, classes},index) => {
      const classItem = classNames("btn", classes, {'acitve': type === activeFilter });
    
      return (
        <button key={index} onClick={() => dispatch(setActiveFilter(type))} className={classItem}>{text}</button>
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
