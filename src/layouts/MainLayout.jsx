import { Outlet } from "react-router-dom";
import Brand from "../components/Brand/Brand";
import Navbar from "../components/Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Root() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <main className="font-display ">
      <div 
        data-aos="fade-up"
        data-aos-duration="3000"
        >
        <Brand/>
      </div>
      <div 
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        <Navbar/>
      </div>

      <Outlet/>
    </main>
  )
}

export default Root;
