import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selector';
import LoginForm from 'components/LoginForm/LoginForm';
import { Box, Container } from '@chakra-ui/react';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box as="section" py={20}>
      <Container maxW="2xl">{!isLoggedIn && <LoginForm />}</Container>
    </Box>
  );
};

export default LoginPage;
