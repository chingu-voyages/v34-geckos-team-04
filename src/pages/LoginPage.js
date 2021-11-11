import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import loginPagePic from '../assets/login_page.png';
import GoogleLogo from '../components/shared/GoogleLogo';
import Alert from '../components/shared/Alert';
import { getSignedInUserInfo, signInToGoogle } from '../utils/api';

const LoginPage = () => {
  const { setUserData } = useContext(UserContext);
  const [error, setError] = useState(null);

  const getAuthToGoogle = async () => {
    let successful = await signInToGoogle();
    if (successful) {
      getGoogleAuthedInfo();
    }
  };

  const getGoogleAuthedInfo = async () => {
    let info = await getSignedInUserInfo();
    if (info) {
      setUserData({
        loggedIn: true,
        ...info,
      });
    }
  };

  return (
    <div className='flex flex-col h-screen w-screen items-center justify-around'>
      <h1 className='text-6xl font-bold'>Meeting App?</h1>
      <img src={loginPagePic} alt='Meeting app' />
      <button
        className='bg-white border rounded-full hover:bg-blue-50 hover:border-blue-200 flex flex-row justify-center leading-8 transition duration-200 pl-1 pr-4 py-2'
        onClick={() => getAuthToGoogle()}
      >
        <GoogleLogo width='32px' height='32px' />
        <span>Sign in with Google</span>
      </button>
      {error && <Alert error='Login failed!' detail={error} />}
    </div>
  );
};
export default LoginPage;
