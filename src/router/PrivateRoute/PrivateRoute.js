import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>This is a spinner</div>;
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
