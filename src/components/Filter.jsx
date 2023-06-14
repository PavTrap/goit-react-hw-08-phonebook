import React from 'react';
import css from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../store/sliceFilter';

export const Filter = () => {

	const filter = useSelector(state => state.filter)
  const dispatch = useDispatch();
  // console.log(filter);


   



  return (
    <div  className={css.filter}>
      <label>
        <h2>Find contacts by name</h2>
        <br/>
        <input className={css.input} type="text" value={filter} onChange={(e) => dispatch(setFilter(e.target.value))} />
      </label>
    </div>
  );
}
export default Filter;
