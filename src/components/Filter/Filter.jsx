import PropTypes from 'prop-types';

import css from './Filter.module.css'

export const Filter = ({ value, onChangeFilter }) => {

  return (
    <div className={css.form}>
      <p className={css.searchContact} >Search contacts:</p>
      <label >
        <input className={css.input} 
          type="text"
          value={value}
          onChange={onChangeFilter}
          placeholder="Enter contact..."        
        />
      </label>
    </div>
    
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};