import { Flex, Box, Container } from '@chakra-ui/react';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selector';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box as="header" p={4} bg="orange">
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Container>
    </Box>
  );
};
export default Header;
