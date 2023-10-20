import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selector';

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'orange',
};
const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header style={styles}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
export default Header;
