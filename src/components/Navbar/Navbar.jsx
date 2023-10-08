import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import LoggedState from "../LoggedState/LoggedState";
import LogOutState from "../LogOutState/LogOutState";

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-persianGreen text-white flex flex-col lg:flex-row justify-between items-center gap-10 py-5">
      <ul className="flex flex-col md:flex-row justify-center flex-1 align-center gap-4 md:gap-20 text-3xl ">
        <li className="text-center">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active border p-2 font-bold"
                : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li className="text-center">
          <NavLink
            to="/registration"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active border p-2 font-bold"
                : ""
            }
          >
            Register
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active border p-2 font-bold"
                : ""
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
      
      {
        user? <LoggedState/> : <LogOutState/>
      }
      
    </nav>
  );
}

export default Navbar;
