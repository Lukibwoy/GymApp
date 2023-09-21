import React from 'react';
import headerPhoto from './header-photo.jpg'
export default function Home() {
  return (
    <div className="w-full h-screen bg-white-500 flex justify-center items-center bg-gray-900">
      <div className="w-1/2 ml-20">
        <h1 className="text-5xl md:text-7xl uppercase font-extrabold text-black">Fitness<br />Manager</h1>
      </div>
      <div className="hidden md:block w-1/2 h-full">
        <img className='w-3/5 b rounded-bl-lg mt-20' src={headerPhoto} alt="man muscles"/>
      </div>
    </div>
  );
}
