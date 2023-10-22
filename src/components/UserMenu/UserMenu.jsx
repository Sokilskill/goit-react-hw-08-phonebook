import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selector';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p> Welcome {user.name}</p>
      <button onClick={() => dispatch(logOut())}>LogOut Button</button>
    </div>
  );
};
export default UserMenu;
