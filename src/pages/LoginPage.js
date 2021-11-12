import React, { useContext, useState } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { UserContext } from '../contexts/UserContext';
import loginPagePic from '../assets/login_page.png';
import GoogleLogo from '../components/shared/GoogleLogo';
import Alert from '../components/shared/Alert';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const LoginPage = () => {
  const { setUserData } = useContext(UserContext);
  const [error, setError] = useState(null);

  const onSuccess = (res) => {
    const { name, email, imageUrl } = res.profileObj;
    setUserData({ loggedIn: true, name, email, imageUrl });
  };

  const onFailure = (res) => {
    console.error('Login failed!', res);
    setError(res.details);
  };

  // onSuccess and onFailure are required callbacks for login
  // if isSignedIn true it will return user data on load, if user gave the app permission

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: CLIENT_ID,
    isSignedIn: true,
    accessType: 'offline',
  });

  return (
    <div className='flex flex-col h-screen w-screen items-center justify-around'>
      <h1 className='text-6xl font-bold'>Meeting App?</h1>
      <img src={loginPagePic} alt='Meeting app' />
      <button
        className='bg-white border rounded-full hover:bg-blue-50 hover:border-blue-200 flex flex-row justify-center leading-8 transition duration-200 pl-1 pr-4 py-2'
        onClick={signIn}
      >
        <GoogleLogo width='32px' height='32px' />
        <span>Sign in with Google</span>
      </button>
      {error && <Alert error='Login failed!' detail={error} />}
    </div>
  );
};
export default LoginPage;
