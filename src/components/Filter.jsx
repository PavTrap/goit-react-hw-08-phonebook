import React from 'react';
import css from './Contacts.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div  className={css.filter}>
      <label>
        <h2>Find contacts by name</h2>
        <br/>
        <input className={css.input} type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}