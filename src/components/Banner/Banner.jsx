import { NavLink } from "react-router-dom";

function Banner() {
  return (
  <div className="hero min-h-screen">
  <img src="/images/banner.png" alt="banner" className="w-full h-full"/>
  <div className="hero-overlay bg-opacity-60">
  </div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md flex flex-col gap-36">
      <h1 className="mb-5 text-7xl font-bold">Hello Folks</h1>
      <p className="mt-5 text-2xl">Anime Events is your premier destination for all things anime, where we specialize in curating unforgettable events that celebrate this dynamic and captivating art form. Let&apos;s dive into world of anime.</p>
      <NavLink to="/registration" >
        <button className="btn bg-burntSienna text-white px-6 text-3xl font-semibold rounded-xl">Register now</button>
      </NavLink>
    </div>
  </div>
</div>
  )
}

export default Banner;
