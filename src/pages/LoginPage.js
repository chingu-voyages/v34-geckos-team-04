import React from 'react';
import { useGoogleLogin } from 'react-google-login';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const LoginPage = () => {
  const onSuccess = (res) => {
    console.log('Logged in!');
    console.log('response:', res);
  };

  const onFailure = (res) => {
    console.log('Login failed!', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId: CLIENT_ID,
    isSignedIn: true,
    accessType: 'offline',
  });

  return <button onClick={signIn}>Sign in with Google</button>;
};
export default LoginPage;
