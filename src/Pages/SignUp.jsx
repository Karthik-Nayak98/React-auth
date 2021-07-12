import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import authenticate from '../helper/authentication';
import Header from '../components/header';

function SignUp() {
  let history = useHistory();
  const [username, setUsername] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function handleNameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  // Creates a new user
  // Updates the username with entered username in the textfield
  // Sends email for the verification of the user.
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await authenticate.createUser(email, password);
      await response.user.updateProfile({
        displayName: username,
      });
      // authenticate.sendVerificationEmail();
      history.push('/verify');
    } catch (error) {
      var errorCode = error.statusCode;
      var errorMessage = error.message;
      alert(errorMessage, errorCode);
      // setErrorMsg('User already found!!');
    }
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full md:w-3/4 lg:w-1/3 border-2 rounded-lg flex flex-col pl-5 p-4 shadow-lg'>
        <Header title='Sign up' />
        <p>{errorMsg}</p>
        <form className='' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1 mb-3'>
            <label htmlFor='text' className='pl-1 text-lg'>
              Username
            </label>
            <input
              type='text'
              placeholder='Enter Username'
              className='p-2 border-2 border-black rounded-md outline-none w-full focus:border-blue-400'
              onChange={handleNameChange}
            />
          </div>
          <div className='flex flex-col gap-1 mb-3'>
            <label htmlFor='email' className='pl-1 text-lg'>
              Email
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              className='p-2 border-2 border-black rounded-md outline-none w-full focus:border-blue-400'
              onChange={handleEmailChange}
            />
          </div>
          <div className='flex flex-col gap-1 mb-3'>
            <label htmlFor='password' className='pl-1 text-lg'>
              Password
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='p-2 border-2 border-black rounded-md outline-none w-full focus:border-blue-400'
              onChange={handlePasswordChange}
            />
          </div>
          <div className='text-center mt-6'>
            <button
              type='submit'
              className='w-full h-10 rounded-md mb-3 bg-blue-500 hover:bg-blue-600 text-gray-100 font-semibold uppercase tracking-wider'>
              Sign Up
            </button>
          </div>
          <div className='mb-3 flex justify-between text-sm text-blue-500'>
            <Link to='/login' className='hover:underline '>
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
