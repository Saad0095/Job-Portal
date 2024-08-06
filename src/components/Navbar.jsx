import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-70 backdrop-blur-xl sticky top-0 z-50 shadow-lg mb-4 transition-all duration-500 ease-in-out">
      <div className="flex justify-between items-center px-6 py-4 md:px-10 min-h-16 border-b border-gray-200">
        <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
          JobSearch
        </div>


        <div
          className="sm:hidden cursor-pointer text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <>&#10005;</> : <>&#9776;</>}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex sm:space-x-8 lg:space-x-12 font-medium">
          <li>
            <NavLink
              to="/"
              className="relative text-gray-800 hover:text-green-500 transition-colors duration-300 ease-in-out group"
              activeClassName="text-green-500 font-semibold"
            >
              <span className="inline-block transition-transform transform group-hover:-translate-y-1 group-hover:scale-110 duration-300">
                Home
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="relative text-gray-800 hover:text-green-500 transition-colors duration-300 ease-in-out group"
              activeClassName="text-green-500 font-semibold"
            >
              <span className="inline-block transition-transform transform group-hover:-translate-y-1 group-hover:scale-110 duration-300">
                Contact
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="relative text-gray-800 hover:text-green-500 transition-colors duration-300 ease-in-out group"
              activeClassName="text-green-500 font-semibold"
            >
              <span className="inline-block transition-transform transform group-hover:-translate-y-1 group-hover:scale-110 duration-300">
                Log In
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col sm:hidden font-medium bg-white bg-opacity-90 backdrop-blur-md shadow-lg border-t border-b border-gray-200">
          <li>
            <NavLink
              to="/"
              className="p-4 text-gray-800 hover:text-green-500 transition-colors duration-300 ease-in-out group"
              onClick={() => setIsOpen(false)}
              activeClassName="text-green-500 font-semibold"
            >
              <span className="inline-block transition-transform transform group-hover:-translate-y-1 group-hover:scale-110 duration-300">
                Home
              </span>
              <span className="block mt-1 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="p-4 text-gray-800 hover:text-green-500 transition-colors duration-300 ease-in-out group"
              onClick={() => setIsOpen(false)}
              activeClassName="text-green-500 font-semibold"
            >
              <span className="inline-block transition-transform transform group-hover:-translate-y-1 group-hover:scale-110 duration-300">
                Contact
              </span>
              <span className="block mt-1 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="p-4 text-gray-800 hover:text-green-500 transition-colors duration-300 ease-in-out group"
              onClick={() => setIsOpen(false)}
              activeClassName="text-green-500 font-semibold"
            >
              <span className="inline-block transition-transform transform group-hover:-translate-y-1 group-hover:scale-110 duration-300">
                Log In
              </span>
              <span className="block mt-1 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
