import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

function LoggedState() {
  const { user } = useContext(AuthContext);
  console.log(user.photoURL);
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 flex-1">
        <div className='font-bold text-2xl'>
          <h3>{user.displayName}</h3>
        </div>
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img
              src={user.photoURL}
              className="bg-white"
            />
          </div>
        </div>
        <div>
          <NavLink to={`/login`}>
            <button className="btn font-bold text-xl bg-charcoal text-white px-8">
              LogOut
            </button>
          </NavLink>
        </div>
      </div> 
  )
}


export default LoggedState;
