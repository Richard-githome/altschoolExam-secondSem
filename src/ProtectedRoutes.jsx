import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useState } from "react";
// import { useEffect, useState } from "react";

const ProtectedRoutes = () => {

  const user = useSelector((state) => state.user.userData);


  return (
    <>
        {user.isAuthenticated === true ? <Outlet /> : <Navigate to={"/login"} />}
    </>
  );
};

export default ProtectedRoutes;
