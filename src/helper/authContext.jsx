import React, { useState, createContext, useEffect } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
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

  const functions = {
    authenticated,
  };
  return (
    <AuthContext.Provider value={functions}>
      {props.chilren}
    </AuthContext.Provider>
  );
};
