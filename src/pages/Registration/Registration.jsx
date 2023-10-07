import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="hero mt-20 mb-20 py-10">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold mb-10">Registration Form!</h1>
        </div>
        <div className="card w-full max-w-5xl shadow-xl bg-base-100">
          <form className="card-body"> 
          <div className="form-control">
              <label className="label">
                <span className="label-text text-3xl font-semibold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your"
                className="input input-bordered"
                required
              />
            </div>  
            <div className="form-control">
              <label className="label">
                <span className="label-text text-3xl font-semibold">Profile</span>
              </label>
              <input
                type="text"
                placeholder="Profile Picture URL"
                className="input input-bordered"
                required
              />
            </div>         
            <div className="form-control">
              <label className="label">
                <span className="label-text text-3xl font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-3xl font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="text-xl font-medium mt-6">
              <p>Already Have an Account? Please <Link to={`/login`} className="text-saffron font-bold">Login</Link></p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-burntSienna text-white text-xl">
                Register
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Registration;
