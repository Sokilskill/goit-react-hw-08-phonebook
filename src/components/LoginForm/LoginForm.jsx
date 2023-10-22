import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { FormLabel, Input, Button, Flex } from '@chakra-ui/react';

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
    <Flex as="form" direction="column" gap="10px" onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">
        Email
        <Input type="email" name="email" id="name" />
      </FormLabel>
      <FormLabel htmlFor="password">
        Password
        <Input type="password" name="password" id="password" />
      </FormLabel>
      <Button
        px={4}
        maxW="md"
        margin=" 0 auto"
        type="submit"
        variant="changeBg"
      >
        Log In
      </Button>
    </Flex>
  );
};

export default LoginForm;
