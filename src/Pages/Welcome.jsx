import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import authenticate from '../helper/authentication';
import Button from '../components/button';
import Header from '../components/header';

function Welcome(props) {
  const [errorMsg, setErrorMsg] = useState('');
  const [username, setUsername] = useState('');
  let history = useHistory();
  useEffect(() => {
    console.log('useeffect');
    setUsername(authenticate.getDisplayName());
  }, []);

  async function handleSignout(event) {
    event.preventDefault();
    try {
      await authenticate.logout();
      history.push('/');
    } catch (error) {
      setErrorMsg(error.message);
      console.log('Cannot Logout!!');
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full md:w-3/4 lg:w-1/3 border-2 rounded-lg flex flex-col pl-5 p-4 shadow-lg'>
        <Header title='Welcome' />
        <p>{errorMsg}</p>
        <p className='text-center text-lg mt-2'>
          You are Logged as{' '}
          <span className='font-semibold text-blue-700'>{username}</span>.
        </p>
        <Button clickMethod={handleSignout} value='Sign out'></Button>
        <div className='mb-3 flex justify-between text-sm text-blue-500'>
          <Link to='/update' className='hover:underline'>
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
