import React, { useState, useEffect } from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Welcome from './Pages/Welcome';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './helper/PrivateRoute';
import PasswordReset from './Pages/PasswordReset';
import UpdateProfile from './Pages/updateProfile';
import EmailVerification from './Pages/emailVerification';
import { auth } from './firebase';

function App() {
  const [authenticated, isAuthenticated] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        isAuthenticated(true);
      } else {
        isAuthenticated(false);
      }
    });
  }, []);
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route exact path='/forgot' component={PasswordReset} />
        <Route exact path='/verify' component={EmailVerification} />
        <PrivateRoute
          exact
          path='/home'
          auth={authenticated}
          component={Welcome}
        />
        <PrivateRoute
          exact
          path='/update'
          auth={authenticated}
          component={UpdateProfile}
        />
        <Redirect to='/login' />
      </Switch>
    </div>
  );
}

export default App;
