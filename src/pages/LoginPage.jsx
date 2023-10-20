import LoginForm from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selector';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn && <LoginForm />;
};

export default LoginPage;
