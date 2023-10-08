import { NavLink } from "react-router-dom";

function LogOutState() {
  return (
    <div className="flex justify-center items-center gap-10 flex-1">
      <NavLink to={`/login`}>
        <button className="btn font-bold text-xl bg-burntSienna text-white px-8">
          Login
        </button>
      </NavLink>
    </div>
  );
}


export default LogOutState;
