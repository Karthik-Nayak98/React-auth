import React, { useEffect } from 'react';
import authenticate from '../helper/authentication';
import { Link } from 'react-router-dom';
import Header from '../components/header';

function EmailVerification() {
  const email = authenticate.getEmail();

  useEffect(() => {
    authenticate.sendVerificationEmail();
  }, []);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full md:w-3/4 lg:w-1/3 m-1 border-2 rounded-lg flex flex-col pl-5 p-4 shadow-lg'>
        <Header title='Email Verification' />
        <p className='text-center mt-3'>
          Email verification link has been sent to
          <span className='italic text-lg font-medium text-blue-800'>
            {' '}
            {email}
          </span>
          . Please verify the email & then you can login.
        </p>
        <div className='text-center mt-6'>
          <Link to='/login'>
            <button className='w-full h-10 rounded-md mb-3 bg-blue-500 hover:bg-blue-600 text-gray-100 font-semibold uppercase tracking-wider'>
              Go to Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
