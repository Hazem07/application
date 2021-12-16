import React from "react";
// import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// const PrivateElement = ({ element }) => {
//   const token = localStorage.getItem("token");

//   const isAuth = useSelector((state) => state.userReducer.isAuth);
//   let location = useLocation();
//   return token ? element : <Navigate to="/login" />;
// };

function PrivateRoute({ element, ...rest }) {
  const token = localStorage.getItem("token");

  return token ? <Outlet {...rest} /> : <Navigate to="/login" />;
}

export default PrivateRoute;
