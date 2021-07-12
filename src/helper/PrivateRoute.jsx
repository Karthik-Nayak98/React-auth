import React, { useContext } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import authenticate from '../helper/authentication';
// import { AuthContext } from '../helper/authContext';

function PrivateRoute({ component: Component, auth, ...rest }) {
  // const { currentUser } = useContext(AuthContext);
  let history = useHistory();
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(auth);
        if (auth) {
          if (authenticate.isEmailVerified()) {
            console.log('email verified');
            return <Component {...props} />;
          } else {
            console.log('email not verified');
            return history.push('/verify');
          }
        } else {
          console.log('auth is not verified');
          history.push('/login');
          // <Redirect to='/login' />;
          // <Redirect
          //   to={{
          //     pathname: '/login',
          //     state: props.location,
          //   }}
          // />;
        }
      }}
    />
  );
}
export default PrivateRoute;
