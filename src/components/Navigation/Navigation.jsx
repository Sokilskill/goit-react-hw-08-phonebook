import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selector';

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
};
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <ul style={styles}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</li>
      </ul>
    </nav>
  );
};

export default Navigation;
