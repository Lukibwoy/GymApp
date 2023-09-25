import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NavLinks = ({ mobile }) => {
  const commonClasses = 'text-white hover:text-black';
  const mobileClasses = 'text-white hover:text-black-300 font-bold';
  
  return (
    <div className={mobile ? 'flex flex-col space-y-12 mt-4' : 'md:flex space-x-20 mr-20'}>
      <NavLink to="/" exact className={mobile ? mobileClasses : commonClasses} activeClassName="font-bold">
        Home
      </NavLink>
      <NavLink to="/plans" className={mobile ? mobileClasses : commonClasses} activeClassName="font-bold">
        Plans
      </NavLink>
      <NavLink to="/contact" className={mobile ? mobileClasses : commonClasses} activeClassName="font-bold">
        Contact
      </NavLink>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-violet-800 bg-white-500 bg-gray-900  p-1">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="md:flex hidden">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={ToggleNav}>
            {isOpen ? <X className="text-white" size="32" /> : <Menu className="text-white" size="32" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`navx md:hidden transition-max-h duration-700 ease-in-out ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          } overflow-hidden`}
        >
          <NavLinks mobile={true} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
