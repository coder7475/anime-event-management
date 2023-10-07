import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-charcoal text-white pt-24 pb-10">
      <ul className="flex flex-col md:flex-row justify-center align-center gap-4 md:gap-20 text-3xl md:text-4xl">
        <li className="text-center">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink
            to="/services"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Services
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink
            to="/events"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Featured Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
