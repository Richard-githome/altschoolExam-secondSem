import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Error404 from "./Components/Error404";
import AllMovies from "./Components/AllMovies";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import EachMovie from "./Components/EachMovie";
import ProtectedRoutes from "./ProtectedRoutes";
import AuthLayout from "./AuthLayout";
import RegisterForm from "./Components/AuthComponents/RegisterForm";
import LoginForm from "./Components/AuthComponents/LoginForm";
import Logout from "./Components/Logout";
import { Provider } from "react-redux";
import store from "./Database/store";
import Fallback from "./Components/Fallback";

const router = createBrowserRouter([
  {
    element: (
      <Provider store={store}>
        <ProtectedRoutes />
      </Provider>
    ),
    children: [
      {
        element:<AppLayout />,
        errorElement: <Fallback  />,
        children: [
          {
            path: "/",
            element: <Home />,
            // errorElement: <div>Something went wrong</div>
          },
          {
            path: "/movies",
            children: [
              {
                index: true,
                element: <AllMovies />,
              },
              {
                path: ":id",
                element: <EachMovie />,
              },
            ],
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/logout",
            element: <Logout />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
    {
      path: "*",
      element: <Error404 />,

    }
]);

export default router;
//