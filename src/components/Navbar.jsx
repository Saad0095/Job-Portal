import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className="bg-white bg-opacity-60 backdrop-blur-lg sticky top-0 z-50 shadow-md mb-4">
      <div className="flex justify-between px-10 items-center min-h-16 border-b-[1px]">
        <div className="logo font-bold text-lg text-blue-800">JobSearch</div>
        <div
          className="naviconBtn sm:hidden cursor-pointer text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </div>
        <ul className="hidden sm:flex sm:space-x-12 font-semibold justify-center">
          <NavLink
            to="/"
            className="text-gray-800 hover:text-green-600 transition duration-300 ease-in-out"
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-800 hover:text-green-600 transition duration-300 ease-in-out"
          >
            Contact
          </NavLink>
          {!isAuthenticated ? (
            <NavLink
              className="text-gray-800 hover:text-green-600 transition duration-300 ease-in-out"
              to="/login"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </NavLink>
          ) : (
            <NavLink
              className="text-gray-800 hover:text-green-600 transition duration-300 ease-in-out"
              to="/"
              onClick={() => {
                setIsOpen(false);
                logout();
              }}
            >
              Log Out
            </NavLink>
          )}
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col sm:hidden font-semibold bg-gray-50 border-black border-b-[1px]">
          <NavLink
            className="p-2 text-gray-800 hover:text-green-600 transition duration-300 ease-in-out"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="p-2 text-gray-800 hover:text-green-600 transition duration-300 ease-in-out"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          {!isAuthenticated ? (
            <NavLink
              className="p-2 text-gray-800 hover:text-green-600 transition duration-300 ease-in-out"
              to="/login"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </NavLink>
          ) : (
            <NavLink
              className="p-2 text-gray-800 hover:text-green-600 transition duration-300 ease-in-out"
              to="/"
              onClick={() => {
                setIsOpen(false);
                logout();
              }}
            >
              Log Out
            </NavLink>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
