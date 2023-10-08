import { Link } from "react-router-dom";

function Registration() {
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const profile = form.get('profile');
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password, name, profile);
  }

  return (
    <div className="hero mt-20 mb-20 py-10">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold mb-10">Registration Form!</h1>
        </div>
        <div className="card w-full max-w-5xl shadow-xl bg-base-100">
          <form className="card-body" onSubmit={handleSignUp}> 
          <div className="form-control" >
              <label className="label">
                <span className="label-text text-3xl font-semibold">Name</span>
              </label>
              <input
                name="name"
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
                name="profile"
                type="text"
                placeholder="Profile Picture URL"
                className="input input-bordered"
                required
                autoComplete="true"
              />
            </div>         
            <div className="form-control">
              <label className="label">
                <span className="label-text text-3xl font-semibold">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
                autoComplete="true"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-3xl font-semibold">
                  Password
                </span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="text-xl font-medium mt-6">
              <p>Already Have an Account? Please <Link to={`/login`} className="text-saffron text-2xl font-bold">Login</Link></p>
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
