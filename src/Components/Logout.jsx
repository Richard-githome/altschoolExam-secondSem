import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Database/slice";
import LoadingSimulator from "./LoadingSimulator";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      logoutUser({
        isAuthenticated: false,
      })
    );
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <>
      <LoadingSimulator />
    </>
  );
};

export default Logout;
