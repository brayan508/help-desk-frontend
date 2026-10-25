import { createBrowserRouter } from "react-router";
import Login from "./Paginas/Login";
import Register from "./Paginas/Register";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

export default router;

