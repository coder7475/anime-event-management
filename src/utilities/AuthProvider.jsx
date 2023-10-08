import AuthContext from "../contexts/AuthContext";
import PropTypes from 'prop-types';
import {
   createUserWithEmailAndPassword, signInWithPopup
} from "firebase/auth";
import auth from "../firebase/firebaseApp.config";
import { GoogleAuthProvider } from "firebase/auth";


function AuthProvider({ children }) {
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password );
  }
  // implement google sign in
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const authInfo = {
    signUp,
    googleSignIn,
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
