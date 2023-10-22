import { Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const styles = {
  justifyContent: 'space-between',
  gap: '10px',
};

const AuthNav = () => {
  return (
    <Flex as="ul" {...styles}>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
    </Flex>
  );
};

export default AuthNav;
