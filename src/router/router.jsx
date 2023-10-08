import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import serviceLoader from "../utilities/serviceLoader";
import ErrorPage from "../pages/Error/Error";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:serviceId",
        element: <ServiceDetails />,
        loader: serviceLoader,
      },
      {
        path: "/registration",
        element: <Registration/>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ],
  },
]);

export default router;
