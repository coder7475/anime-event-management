import { Outlet } from "react-router-dom";
import Brand from "../components/Brand/Brand";
import Navbar from "../components/Navbar/Navbar";

function Root() {
  return (
    <main className="font-display ">
      <Brand/>
      <Navbar/>
      <Outlet/>
    </main>
  )
}

export default Root;
