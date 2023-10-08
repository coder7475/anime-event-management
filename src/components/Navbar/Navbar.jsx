import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-persianGreen text-white flex flex-col md:flex-row justify-between items-center gap-10 py-1">
      <ul className="flex flex-col md:flex-row justify-center flex-1 align-center gap-4 md:gap-20 text-3xl ">
        <li className="text-center">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active border p-2 font-bold" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li className="text-center">
          <NavLink
            to="/registration"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active border p-2 font-bold" : ""
            }
          >
            Register
          </NavLink>
        </li>
        <li className="text-center">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active border p-2 font-bold" : ""
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
      
      <div className="flex justify-center items-center gap-10 flex-1">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" className="bg-white"/>
          </div>
        </div>
        <div>
          {
          user? 
            <button className="btn bg-saffron text-charcoal text-xl font-bold px-8">SignOut</button>
            :
            <NavLink to={`/login`} >
            <button className="btn font-bold text-xl bg-burntSienna text-white px-8">
              Login
            </button>
            </NavLink>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
