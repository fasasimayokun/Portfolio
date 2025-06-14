import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const linkClass = ({ isActive }) =>
    isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 text-center md:text-left w-full md:w-auto">
          Fasasi Mayokun
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/resume" className={linkClass}>Resume</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 flex flex-col space-y-4 text-center shadow-md">
          <NavLink to="/" className={linkClass} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeMenu}>About</NavLink>
          <NavLink to="/projects" className={linkClass} onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/resume" className={linkClass} onClick={closeMenu}>Resume</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={closeMenu}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
