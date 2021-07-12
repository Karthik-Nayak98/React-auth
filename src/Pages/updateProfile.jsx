import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import authenticate from '../helper/authentication';
import Button from '../components/button';
import Header from '../components/header';

function UpdateProfile() {
  const [username, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  function handleUpdate(event) {
    event.preventDefault();
    const user = authenticate.getCurrentUser();
    console.log('username', username);
    user
      .updateProfile({
        displayName: username,
      })
      .then(() => {
        setSuccessMsg('Profile updated successfully');
      })
      .catch((error) => {
        setErrorMsg('Cannot update');
      });
  }

  function handleUsername(event) {
    setName(event.target.value);
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full md:w-3/4 lg:w-1/3 border-2 rounded-lg flex flex-col pl-5 p-4 shadow-lg'>
        <Header title='Update Profile' />
        <div className='w-3/4 text-green-200'>
          <p className='text-green-500'>{successMsg}</p>
        </div>
        <form onSubmit={handleUpdate}>
          <div className='flex flex-col gap-1 mb-3'>
            <label htmlFor='password' className='pl-1 text-lg'>
              Username
            </label>
            <input
              type='text'
              placeholder='Enter Username'
              className='p-2 border-2 border-black rounded-md outline-none w-full focus:border-blue-400'
              onChange={handleUsername}
            />
          </div>
          <Button value='Update'></Button>
        </form>
        <div className='mb-3 flex justify-between text-sm text-blue-500'>
          <Link to='/home' className='hover:underline'>
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
