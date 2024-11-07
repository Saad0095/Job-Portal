import React, { useState } from "react";
import LanguageDetector from "./LanguageDetector.jsx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="bg-white backdrop-blur-xl sticky top-0 z-50 shadow-lg mb-4 transition-all duration-500 ease-in-out">
      <div className="flex justify-between items-center px-6 py-4 md:px-10 min-h-16 border-b border-gray-200">
        <div className="flex space-x-8">
          <div
            className="logo text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-900 via-green-700 to-green-400 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => navigate("/")}
          >
            JobSearch
          </div>
          <LanguageDetector/>
        </div>
        <div
          className="sm:hidden cursor-pointer text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <>&#10005;</> : <>&#9776;</>}
        </div>
        <ul className="hidden sm:flex sm:space-x-8 lg:space-x-12 font-medium">
          <li>
            <NavLink
              to="/"
              className="relative text-gray-800 hover:text-green-500 transition-colors duration-300 ease-in-out group"
            >
              <span className="inline-block transition-transform transform group-hover:-translate-y-1 duration-300">
                Home
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="relative text-gray-800 hover:text-green-500 transition-colors duration-300 ease-in-out group"
            >
              <span className="inline-block transition-transform transform group-hover:-translate-y-1 duration-300">
                Contact
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </NavLink>
          </li>
          <li>
            {!isAuthenticated ? (
              <NavLink
                to="/login"
                className="relative text-gray-800 hover:text-green-500 transition-colors duration-300 ease-in-out group"
              >
                <span className="inline-block transition-transform transform group-hover:-translate-y-1 duration-300">
                  Log In
                </span>
                <FontAwesomeIcon
                  icon={faSignIn}
                  className="ml-2 inline-block transition-transform transform group-hover:-translate-y-1 duration-300"
                />
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </NavLink>
            ) : (
              <Link
                to=""
                onClick={() => logout()}
                className="relative text-gray-800 hover:text-red-600 transition-colors duration-300 ease-in-out group"
              >
                <span className="inline-block transition-transform transform group-hover:-translate-y-1 duration-300">
                  Logout
                </span>
                <FontAwesomeIcon
                  icon={faSignOut}
                  className="ml-2 inline-block transition-transform transform group-hover:-translate-y-1 duration-300"
                />
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            )}
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="flex flex-col sm:hidden font-medium bg-white bg-opacity-90 backdrop-blur-md shadow-lg border-t border-b border-gray-200 pt-3">
          <li>
            <NavLink
              to="/"
              className="p-4 text-gray-800 hover:text-green-500 transition-colors duration-300 ease-in-out group"
              onClick={() => setIsOpen(false)}
            >
              <span className="inline-block transition-transform transform group-hover:-translate-y-1 duration-300">
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
            >
              <span className="inline-block transition-transform transform group-hover:-translate-y-1 duration-300">
                Contact
              </span>
              <span className="block mt-1 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </NavLink>
          </li>
          <li>
            {!isAuthenticated ? (
              <NavLink
                to="/login"
                className="p-4 text-gray-800 hover:text-green-500 transition-colors duration-300 ease-in-out group"
                onClick={() => setIsOpen(false)}
              >
                <span className="inline-block transition-transform transform group-hover:-translate-y-1 duration-300">
                  Log In
                </span>
                <FontAwesomeIcon
                  icon={faSignIn}
                  className="ml-2 inline-block transition-transform transform group-hover:-translate-y-1 duration-300"
                />
                <span className="block mt-1 w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </NavLink>
            ) : (
              <Link
                className="p-4 text-gray-800 hover:text-red-500 transition-colors duration-300 ease-in-out group"
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  logout();
                }}
              >
                <span className="inline-block transition-transform transform group-hover:-translate-y-1 duration-300">
                  Log Out
                </span>
                <FontAwesomeIcon
                  icon={faSignOut}
                  className="ml-2 inline-block transition-transform transform group-hover:-translate-y-1 duration-300"
                />
                <span className="block mt-1 w-full h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
