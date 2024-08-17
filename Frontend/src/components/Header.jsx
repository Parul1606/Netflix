/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { User } from 'lucide-react';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black'>
      <img 
        className='w-56' 
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6na0QB4n5f0ATS1TEOodBU17h7sadAKu6eA&s - binge logo url
        alt="netflix-logo" 
      />
      <div className='flex items-center'>
        <div className='relative'>
          <User 
            className='text-white items-left w-8 h-8 cursor-pointer' 
            onClick={() => setShowModal(true)} 
          />
          {showModal && (
            <div className='absolute top-12 right-0 w-max p-4 bg-black text-white rounded'>
              <p className='mb-2 font-poppins'>Parul Pandey</p>
              <button 
                className='bg-red-800 text-white px-4 py-2 rounded' 
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>
        <div className='ml-4 flex space-x-2'>
          <button className='font-poppins bg-red-800 text-white px-2 py-2 rounded'>Logout</button>
          <button className='font-poppins bg-red-800 text-white px-2 py-2 rounded'>Search Movies</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
