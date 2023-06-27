import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { logIn } from 'redux/auth/authThunk';
import { getAuthError } from '../../redux/auth/AuthSelectors';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);

  const onLogin = data => {
    if (status === 400) {
      toast.success('You are unauthorized or incorrect data');
    }
    // if (status === 401) {
    //   toast.success('You are unauthorized');
    // }
    dispatch(logIn(data));
  };

  return (
    <>
      <LoginForm onData={onLogin} />
    </>
  );
};

export default LoginPage;