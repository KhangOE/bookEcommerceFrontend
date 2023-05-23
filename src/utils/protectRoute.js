import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouteAuth = ({ user, redirectPath, children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export const ProtectedRouteAdmin = ({ user }) => {
  // if (!user?.role?.name == "user") {
  //   console.log(user);
  // }c

  if (user == "admin") {
    console.log(1);
    return <Outlet />;
  } else {
    return <Navigate to={"/"} replace />;
  }

  // if (user.role.name == "admin") {
  //
  // } else {
  //
  // }
};
