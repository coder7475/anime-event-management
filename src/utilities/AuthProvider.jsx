import AuthContext from "../contexts/AuthContext";
import PropTypes from 'prop-types';
import {
   createUserWithEmailAndPassword
} from "firebase/auth";
import auth from "../firebase/firebaseApp.config";


function AuthProvider({ children }) {
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password );
  }



  const authInfo = {
    signUp,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.object,
}

export default AuthProvider;
