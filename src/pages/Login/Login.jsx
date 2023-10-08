import { Link } from "react-router-dom";

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
  }

  return (
    <div className="hero mt-20 mb-20 py-10">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold mb-10">Login In your Account!</h1>
        </div>
        <div className="card w-full max-w-5xl shadow-xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>            
            <div className="form-control">
              <label className="label">
                <span className="label-text text-3xl font-semibold">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
                autoComplete="true"
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
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
                autoComplete="true"
                required
              />
            </div>
            <div className="text-xl font-medium mt-6">
              <p>Don&apos;t Have an Account yet? Please <Link to={`/registration`} className="text-saffron font-bold">Sign Up</Link></p>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-burntSienna text-white text-xl">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
