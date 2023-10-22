import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Button } from '@chakra-ui/react';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <Button type="submit" variant="changeBg">
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
