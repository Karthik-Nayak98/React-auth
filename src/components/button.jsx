import React from 'react';

function Button({ clickMethod, value }) {
  return (
    <div className='text-center mt-6'>
      <button
        type='submit'
        className='w-full h-10 rounded-md mb-3 bg-blue-500 hover:bg-blue-600 text-gray-100 font-semibold uppercase tracking-wider'
        onClick={clickMethod}>
        {value}
      </button>
    </div>
  );
}

export default Button;
