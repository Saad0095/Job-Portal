import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mb-4">
      <div className="flex justify-between px-10 items-center min-h-16 border-b-[1px]">
        <div className="logo font-bold text-lg text-blue-800">JobSearch</div>
        <div
          className="naviconBtn sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </div>
        <ul className="hidden sm:flex sm:space-x-12 font-semibold">
          <NavLink to="/">Jobs</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </ul>
      </div>

      {isOpen ? (
        <ul className="flex flex-col sm:hidden font-semibold bg-gray-50 border-black border-b-[1px]">
          <NavLink className="p-2" to="/" onClick={() => setIsOpen(false)}>Jobs</NavLink>
          <NavLink className="p-2" to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <NavLink className="p-2" to="/login" onClick={() => setIsOpen(false)}>Log In</NavLink>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
