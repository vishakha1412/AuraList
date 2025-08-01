 
import { NavLink } from 'react-router';
import React, { useState } from 'react';

const Update = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
         
        <div className="text-xl font-bold tracking-wide">
          <NavLink to='/'>📝 AuraList </NavLink>

        </div>

        
        <div className="space-x-6 hidden md:flex">
          
           <NavLink to="add" className="hover:text-white-200 transition hover:bg-red-500  hover:px-2 hover:rounded-4xl font-bold">Create</NavLink> 
           <NavLink to="tasks" className="hover:text-white-200 transition  hover:bg-red-500  hover:px-2 hover:rounded-4xl font-bold">Aura</NavLink> 
          <NavLink to="about" className="hover:text-white-200 transition  hover:bg-red-500  hover:px-2 hover:rounded-4xl font-bold">About</NavLink>
        </div>

         
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-indigo-500">
           <NavLink to="add" className="hover:text-indigo-200 transition">Create</NavLink> 
          <NavLink to="/tasks" className="block hover:text-indigo-200">Aura</NavLink>
           <NavLink to="/about" className="block hover:text-indigo-200">About</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Update

  
