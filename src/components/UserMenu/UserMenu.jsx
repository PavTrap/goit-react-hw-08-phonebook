import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authThunk';
import { getUser } from 'redux/auth/AuthSelectors';
// import { Button } from '@mui/material';
import css from './UserMenu.module.css'

export const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  return (
    <div className={css.div}>
      <span className={css.span}>Hello, {name} </span>
      <button
      className={css.button}
      variant="contained"
      sx={{
        mt: 1,
        mb: 2,
      }}
        onClick={onLogOut} 
        type="button">
        Log Out
      </button>
    </div>
  );
};