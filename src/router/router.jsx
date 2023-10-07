import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import serviceLoader from "../assets/utilities/serviceLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/:serviceId",
        element: <ServiceDetails/>,
        loader: serviceLoader
      }
    ]
  }
]);

export default router;