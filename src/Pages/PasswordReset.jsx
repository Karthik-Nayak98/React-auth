import React, { useState } from 'react';
import authenticate from '../helper/authentication';
import Header from '../components/header';
import Button from '../components/button';
import { Link } from 'react-router-dom';

function PasswordReset() {
  // const email = authenticate.getEmail();
  const [email, setEmail] = useState();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function sendPasswordResetMail() {
    // console.log(email)
    const response = authenticate.passwordReset(email);
    console.log(response);
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full md:w-3/4 lg:w-1/3 m-1 border-2 rounded-lg flex flex-col pl-5 p-4 shadow-lg'>
        <Header title='Password Reset' />
        <p className='self-center w-10/12 my-3'>
          Enter the email address associated with your account and we'll send
          you a link to reset your pasword.
        </p>
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
        <Button value='reset password' clickMethod={sendPasswordResetMail} />
        <div className='mb-3 flex justify-between text-sm text-blue-500'>
          <Link to='/login' className='hover:underline'>
            Already have an account? Sign in
          </Link>
        </div>
        {/* <div className='text-center mt-6'>
          <button
            type='submit'
            className='w-full h-10 rounded-md mb-3 bg-blue-500 hover:bg-blue-600 text-gray-100 font-semibold uppercase tracking-wider'
            onClick={sendPasswordResetMail}>
            Continue
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default PasswordReset;
