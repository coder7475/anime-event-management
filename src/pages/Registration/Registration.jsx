/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebaseApp.config";

function Registration() {
  const { notify, signUp, googleSignIn, success, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const profile = form.get("profile");
    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password, name, profile);
    console.log(password);

    // password validation
    const re = /(?=.*[A-Z])(?=.*[\W_]).{6,}/g;
    const ans = re.test(password);
    
    // console.log(ans);
    if (!ans) {
      return notify();
    }
    
    signUp(email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: name, photoURL: profile
        })
          .then(res => success("Signed Up successfully! Please Login."))
          logOut();
          navigate("/login");
      } 
      )
      .catch((err) => notify(err));
  };

  return (
    <div className="hero mt-20 mb-20 py-10 font-display">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold mb-10">Registration Form!</h1>
        </div>
        <div className="card w-full max-w-5xl shadow-xl bg-base-100">
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text text-3xl font-semibold">Name</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your"
                className="input input-bordered"
                autoComplete="true"
                required
              />
            </div>
            <div className="form-control" htmlFor="profile">
              <label className="label">
                <span className="label-text text-3xl font-semibold">
                  Profile
                </span>
              </label>
              <input
                id="profile"
                name="profile"
                type="text"
                placeholder="Profile Picture URL"
                className="input input-bordered"
                required
                autoComplete="true"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text text-3xl font-semibold">Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
                autoComplete="true"
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text text-3xl font-semibold">
                  Password
                </span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                autoComplete="true"
                required
              />
            </div>
            <div className="text-xl font-medium mt-6">
              <p>
                Already Have an Account? Please{" "}
                <Link to={`/login`} className="text-saffron text-2xl font-bold">
                  Login
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-burntSienna text-white text-xl">
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="divider">OR</div>
        <div className="card w-full bg-base-100 shadow-xl max-w-5xl">
          <button className="btn w-full rounded-xl text-xl font-semibold" onClick={googleSignIn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M21.35 12.04c0-.79-.07-1.54-.18-2.29H12v4.35h6.35a5.86 5.86 0 0 1-2.53 3.86v3.2h4.05c2.38-2.19 3.75-5.42 3.75-9.12z"
              />
              <path
                fill="#34A853"
                d="M12 21c3.38 0 6.22-1.12 8.27-3.04l-4.05-3.2c-1.13.76-2.58 1.21-4.22 1.21-3.24 0-6.01-2.18-7.01-5.12H.94v3.2A11.98 11.98 0 0 0 12 21z"
              />
              <path
                fill="#FBBC05"
                d="M5.99 14.25c-.24-.68-.37-1.41-.37-2.15s.13-1.47.37-2.15V6.75H1.94A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.94 5.25l4.05-3.24z"
              />
              <path
                fill="#FF5E55"
                d="M12 5.25c1.77 0 3.36.61 4.61 1.92l3.45-3.45C18.23 1.19 15.38 0 12 0 7.99 0 4.39 2.34 2.37 5.75l4.05 3.24c1-.62 2.76-1.74 5.58-1.74z"
              />
            </svg>
            Register with Google
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Registration;
