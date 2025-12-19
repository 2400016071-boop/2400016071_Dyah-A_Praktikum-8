import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block py-2 font-medium ${
      isActive
        ? "text-pink-700 border-b-2 border-pink-700"
        : "text-pink-900 hover:text-pink-700"
    }`;

  return (
    <nav className="w-full bg-pink-100 shadow-md">
      <div className="w-full px-6 md:px-10 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <h1 className="text-xl font-semibold text-pink-700">
          Dyah Amarruli
        </h1>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* HAMBURGER MOBILE */}
        <button
          className="md:hidden text-pink-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-pink-100 px-6 pb-4 space-y-3">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
