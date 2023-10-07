import { Outlet } from "react-router-dom";
import Brand from "../components/Brand/Brand";

function Root() {
  return (
    <main>
      <Brand/>
      <Outlet/>
    </main>
  )
}

export default Root;
