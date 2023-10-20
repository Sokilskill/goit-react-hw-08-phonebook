import { NavLink } from 'react-router-dom';
const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
};

const AuthNav = () => {
  return (
    <ul style={styles}>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
