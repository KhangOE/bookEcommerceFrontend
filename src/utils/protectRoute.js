import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouteAuth = ({ user, redirectPath, children }) => {
  if (!user) {
    console.log(user, "authhhhhhhhhhhhhh");
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
export const ProtectedRouteAdmin = ({ user, redirectPath, children }) => {
  console.log(
    user?.role.name,
    "roleeeeeeeeeeeee22222222222",
    user?.role?.name === "admin"
  );
  if (user?.role?.name === "admin") {
    console.log("ingggggggggggggggggg");
    return children ? children : <Outlet />;
  } else {
    console.log("outtttttttttttt");
    return <Navigate to={redirectPath} replace />;
  }
};
// if (user.role.name == "admin") {
//
// } else {
//
// }
