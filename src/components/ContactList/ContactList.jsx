import PropTypes from 'prop-types';
// import { Button } from '@mui/material';
import css from './ContactList.module.css'


export const ContactList = ({ contacts, onDeleteContact }) => {
  //   console.log(contacts);
  return (
<ul className={css.ul}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.li} key={id}>
          <div className={css.contacts}>
            <span> {name}: </span>
            <span>{number}</span>
          </div>
          <button 
            className={css.button}
            type="button"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
            }}
            onClick={() => onDeleteContact(id)}>
              Delete
          </button>
        </li>
      ))}
    </ul>
    
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};