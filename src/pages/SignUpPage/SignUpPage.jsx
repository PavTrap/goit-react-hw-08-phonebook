import { useDispatch } from 'react-redux';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { signUp } from 'redux/auth/authThunk';
import { useSelector } from 'react-redux';
import { getAuthError } from '../../redux/auth/AuthSelectors';
import toast from 'react-hot-toast';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);

  const onSignUp = data => {
    if (status === 400) {
      toast.success('You are already authorized');
    }
    // if (status === 401) {
    //   toast.success('You are unauthorized');
    // }
    dispatch(signUp(data));
  };

  return (
    <>
      <SignUpForm onData={onSignUp} />
    </>
  );
};

export default SignUpPage;