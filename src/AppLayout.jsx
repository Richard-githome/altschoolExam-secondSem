import { Outlet } from "react-router-dom";
import LoadingSimulator from "./Components/LoadingSimulator";
import { useEffect, useState } from "react";
import store from "./Database/store";
import { Provider } from "react-redux";
import Navbar from "./Components/Navbar";
import { Toaster, toast } from "react-hot-toast";

const AppLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    toast.success("Welcome");
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <>
      {isLoading && (
        <>
          <LoadingSimulator />
        </>
      )}
      {!isLoading && (
        <>
            <Navbar />
            <Provider store={store}>
              <Outlet />
            </Provider>
        </>
      )}
      <Toaster
        position="top-center"
        toastOptions={{ style: { fontSize: "1.2em" } }}
      />
    </>
  );
};

export default AppLayout;
