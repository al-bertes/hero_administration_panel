import { useHttp } from '../../hooks/http.hook';
import { v4 as uuid_v4 } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import {createHeroes } from '../../actions';
import { useState } from 'react';

const HeroesAddForm = () => {
  const [name, setName] = useState('');
  const [description, setDesctiption] = useState('');
  const [element, setElement] = useState('');
  const {filters, activeFilter, activeHeroes} = useSelector(state => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  const hendlerSubmit = (e) => {
    e.preventDefault()
    const formDatat = {
      id: uuid_v4(),
      name,
      description,
      element
    }
    request('http://localhost:3001/heroes', 'POST', JSON.stringify(formDatat))
    .then(dispatch(createHeroes(formDatat)))

    setName('');
    setDesctiption('');
    setElement('');

  }

  console.log(filters, activeFilter, activeHeroes)
  return (
   
      <form className="border p-4 shadow-lg rounded" onSubmit={hendlerSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fs-4">
            Имя нового героя
          </label>
          <input
            autoFocus={true}
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Как меня зовут?"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label fs-4">
            Описание
          </label>
          <textarea
            name="text"
            className="form-control"
            id="text"
            placeholder="Что я умею?"
            style={{ height: '130px' }}
            as="textarea"
            value={description}
            onChange={(e) => setDesctiption(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="element" className="form-label">
            Выбрать элемент героя
          </label>
          <select className="form-select" id="element" name="element" as="select" value={element} onChange={(e) => setElement(e.target.value)}>
            <option>Я владею элементом...</option>
            <option value="fire">Огонь</option>
            <option value="water">Вода</option>
            <option value="wind">Ветер</option>
            <option value="earth">Земля</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Создать
        </button>
      </form>
  );
};

export default HeroesAddForm;
