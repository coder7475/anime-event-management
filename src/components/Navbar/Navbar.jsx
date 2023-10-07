import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-charcoal text-white pt-24 pb-10">
      <ul className="flex flex-col md:flex-row justify-center align-center gap-4 md:gap-20 text-3xl md:text-4xl">
        <li className="text-center">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active border p-2" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink
            to="/login" 
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active border p-2" : ""
            }
          >
            Login
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink
            to="/registration"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active border p-2" : ""
            }
          >
            Register
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
