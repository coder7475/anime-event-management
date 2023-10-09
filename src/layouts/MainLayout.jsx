import { Outlet } from "react-router-dom";
import Brand from "../components/Brand/Brand";
import Navbar from "../components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Root() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="font-display ">
      <Brand />

      <div className="bg-charcoal">
        <Navbar />
      </div>

      <Outlet />
    </main>
  );
}

export default Root;
