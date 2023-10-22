import { Outlet } from "react-router-dom";
import store from "./Database/store";
import { Provider } from "react-redux";

const AuthLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </>
  );
};

export default AuthLayout;
