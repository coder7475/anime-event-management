import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>
  }
]);

export default router;