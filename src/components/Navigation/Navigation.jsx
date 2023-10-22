import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { selectIsLoggedIn } from 'redux/auth/selector';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Flex as="ul" gap="10px">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</li>
      </Flex>
    </nav>
  );
};

export default Navigation;
