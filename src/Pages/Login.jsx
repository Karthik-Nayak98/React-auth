import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import authenticate from '../helper/authentication';
// import { AuthContext } from '../helper/authContext';
import Header from '../components/header';
import Button from '../components/button';

function Login() {
  let history = useHistory();
  // const { login } = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // useEffect(() => {
  //   console.log('login auth', authenticate.authenticated);
  // }, []);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function submitHandle(event) {
    event.preventDefault();
    try {
      await authenticate.login(email, password);
      history.push('/home');
    } catch (error) {
      setErrorMsg('User not found!!');
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full md:w-3/4 lg:w-1/3 m-1 border-2 rounded-lg flex flex-col pl-5 p-4 shadow-lg'>
        <Header title='Sign in' />
        <p>{errorMsg}</p>
        <form className='' onSubmit={submitHandle}>
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
          <Button value='Sign In' />
          <div className='mb-3 flex justify-between text-sm text-blue-500'>
            <Link to='/forgot' className='hover:underline'>
              Forgot password?
            </Link>
            <Link to='/signup' className='hover:underline '>
              Don't have an Account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
