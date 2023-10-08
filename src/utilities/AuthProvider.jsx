import AuthContext from "../contexts/AuthContext";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebaseApp.config";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // console.log(user);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      // console.log("user in the auth state changed", currentUser);
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const notify = (err) => {
    return toast.error(
      err
        ? `You already have an account`
        : `Your Password must be atleast 6 character long, conatin 1 Uppercase and 1 special character.`,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
  };

  const success = (msg) =>
    toast.success(msg ?? `Succesfull SignIn`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const error = (msg) => toast.error(`${msg}`);

  

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setUser(null);
    return signOut(auth);
  }

  const signUp = (email, password) => {
    logOut();
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // implement google sign in
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => success(res))
      .catch((err) => error(err));
  };

  const authInfo = {
    user,
    signUp,
    login,
    logOut,
    googleSignIn,
    notify,
    success,
    error,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
