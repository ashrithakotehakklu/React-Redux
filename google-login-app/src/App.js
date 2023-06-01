import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { signIn, signOut } from './actions/authActions';

const App = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = (response) => {
    dispatch(signIn(response.profileObj));
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <div>
      {!auth.isSignedIn ? (
        <GoogleLogin
          clientId="776418814053-hccb99mo0ks8o9l3o3e5plhsn43p96rk.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={'single_host_origin'}
        />
      ) : (
        <div>
          <h3>Welcome, {auth.user.name}!</h3>
          <GoogleLogout
            clientId="776418814053-hccb99mo0ks8o9l3o3e5plhsn43p96rk.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={handleLogout}
          />
        </div>
      )}
    </div>
  );
};

export default App;
