import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`-my-8 bg-gray-800 ${isScrolled ? 'fixed top-0 w-full z-50' : ''}`}>
      <header className={`relative flex max-w-screen-xl h-40 flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center ${isScrolled ? 'shadow-lg' : ''}`}>
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
    </div>
  );
}

export default Navbar;
