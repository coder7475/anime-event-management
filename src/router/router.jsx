import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import serviceLoader from "../utilities/serviceLoader";
import ErrorPage from "../pages/Error/Error";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import PrivateRoute from "../routes/PrivateRoutes";
import AccountDetails from "../pages/AccountDetails/AccountDetails";
import FeaturedEvent from "../pages/FeaturedEvents.jsx/FeaturedEvents";

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
        path: "/event",
        element: <PrivateRoute><FeaturedEvent /></PrivateRoute> ,
      },
      {
        path: "/:serviceId",
        element: <PrivateRoute><ServiceDetails /></PrivateRoute> ,
        loader: serviceLoader,
      },
      {
        path: "/account",
        element: <PrivateRoute><AccountDetails /></PrivateRoute>,        
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
