import RegisterForm from 'components/RegistrForm/RegisterForm';
import { Box, Container } from '@chakra-ui/react';

const RegisterPage = () => {
  return (
    <Box as="section" py={20}>
      <Container maxW="2xl">
        <RegisterForm />
      </Container>
    </Box>
  );
};

export default RegisterPage;
