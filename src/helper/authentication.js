import { auth } from '../firebase';

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  logout = () => {
    return auth.signOut();
    // try {
    //   await auth.signOut();
    //   this.authenticated = false;
    // } catch (err) {
    //   this.authenticated = true;
    //   alert(err.message);
    // }
  };

  createUser = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  getCurrentUser = () => {
    return auth.currentUser;
  };

  passwordReset = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  sendVerificationEmail = () => {
    return auth.currentUser.sendEmailVerification();
  };

  isEmailVerified = () => {
    return auth.currentUser.emailVerified;
  };

  getEmail = () => {
    return auth.currentUser.email;
  };

  getDisplayName = () => {
    return auth.currentUser.displayName;
  };
}

export default new Auth();
