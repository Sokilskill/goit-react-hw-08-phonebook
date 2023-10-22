import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormLabel, Input, Button, Flex } from '@chakra-ui/react';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex
      as="form"
      direction="column"
      gap="10px"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <FormLabel>
        Username
        <Input type="text" name="name" />
      </FormLabel>
      <FormLabel>
        Email
        <Input type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <Input type="password" name="password" />
      </FormLabel>
      <Button
        type="submit"
        px={4}
        maxW="md"
        margin=" 0 auto"
        variant="changeBg"
      >
        Register
      </Button>
    </Flex>
  );
};

export default RegisterForm;
