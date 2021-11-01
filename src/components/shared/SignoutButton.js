import { UserContext } from '../../contexts/UserContext';
import { useGoogleLogout } from 'react-google-login';
import { useContext } from 'react';

const SignoutButton = () => {
  const { setUserData } = useContext(UserContext);
  const CLIENT_ID = process.env.CLIENT_ID;

  const onLogoutSuccess = () =>
    setUserData({
      loggedIn: false,
      name: null,
      email: null,
      imageUrl: null,
    });

  const onFailure = (err) => console.error('Logout failed!', err);

  const { signOut } = useGoogleLogout({
    clientId: CLIENT_ID,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button className='bg-red-600 rounded text-white' onClick={signOut}>
      SIGN OUT
    </button>
  );
};
export default SignoutButton;
