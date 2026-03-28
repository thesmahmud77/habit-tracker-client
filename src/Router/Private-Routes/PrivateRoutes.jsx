import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router";

export default function PrivateRoutes({ children }) {
  const { user } = use(AuthContext);
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
}
