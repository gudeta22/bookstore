import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const slideInFromLeftAnimation = {
  animation: 'slideInFromLeft 2s ease-out',
};

const slideInFromRightAnimation = {
  animation: 'slideInFromRight 2s ease-out',
};

const keyframes = `
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

function Landingpage() {
  return (
    <div className="bg-gray-800">
      <style>{keyframes}</style>
      <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center">
        <a href="/" className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-blue-500">
          <img src={logo} alt='logo' className='w-28 h-28' />
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label className="absolute top-5 right-7 cursor-pointer md:hidden text-blue-600" htmlFor="navbar-open">
          <span className="sr-only">Toggle Navigation</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
          <ul className="flex flex-col items-center space-x-8 space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <Link to='/login'>
              <button className="rounded-full border-2 border-white px-6 py-1 font-medium text-white transition-colors hover:bg-white hover:text-gray-700">Login</button>
            </Link>
            <Link to='/register'>
              <button className="rounded-full border-2 border-white px-6 py-1 font-medium text-white transition-colors hover:bg-white hover:text-gray-700">SignUp</button>
            </Link>
          </ul>
        </nav>
      </header>

      <div className="mx-auto h-full px-4 py-28 md:py-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div>
            <div className="lg:max-w-xl lg:pr-5">
              <p className="flex text-sm uppercase text-gray-300" style={slideInFromLeftAnimation}>
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 inline h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
                An agency for high growth leaders
              </p>
              <h2 className="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-white sm:text-7xl sm:leading-snug" style={slideInFromLeftAnimation}>
                Reading Makes You
                <span className="my-1 inline-block border-b-8 border-white bg-orange-400 px-4 font-bold text-white">different</span>
              </h2>
              <p className="text-base text-gray-400" style={slideInFromLeftAnimation}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque it.</p>
            </div>
            <div className="mt-10 flex flex-col items-center md:flex-row">
              <a href="/" className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800" style={slideInFromLeftAnimation}>Stream Now</a>
              <a href="/" aria-label="" className="group inline-flex items-center font-semibold text-white" style={slideInFromLeftAnimation}>
                Watch how it works
                <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
            </svg>
            <div className="abg-orange-400 w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none" style={slideInFromRightAnimation}>
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute -left-10 -top-20 h-28 w-28 rounded-xl text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 -bottom-20 h-28 w-28 rounded-xl text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
              </svg>
              <div className="flex w-96 flex-wrap" style={slideInFromRightAnimation}>
                <div className="h-48 w-1/2 rounded-full rounded-br-none bg-red-400"></div>
                <div className="rounded-[6rem] h-48 w-1/2 rounded-tl-none rounded-br-none bg-violet-400"></div>
                <div className="h-48 w-1/2 rounded-full rounded-b-none rounded-br-none bg-yellow-400"></div>
                <div className="h-48 w-1/2 rounded-full rounded-t-none rounded-br-none bg-indigo-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
