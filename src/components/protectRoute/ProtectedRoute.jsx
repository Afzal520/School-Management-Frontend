import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAuth } from "../../feature/authSlice";

function ProtectedRoute({ children, allowedRoles }) {
  console.log("hello protect");

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authData, loading } = useSelector((state) => state.auth); // Assuming `loading` exists in the auth slice

  // Fetch authentication data on mount
  useEffect(() => {
    if (userId) {
      dispatch(fetchAuth({ id: userId }));
    }
  }, [dispatch, userId]);

  // Handle authentication and role-based access
  useEffect(() => {
    console.log(authData)
    if (!loading && authData) {
      if (!token) {
        navigate("/login");
      } else if (!authData?.data?.role && !allowedRoles.includes(authData.data.role)) {
        console.log("Redirecting to /unauthorized");
        navigate("/unauthorized");
      }
    }
  }, [navigate, token, authData, allowedRoles, loading]);

  // Show loading while authentication is in progress
  if (loading || !authData) {
    return <div>Loading...</div>;
  }

  // Show message if authData is missing (unexpected case)
  if (!authData?.data?.role) {
    return <h1>Check Student</h1>;
  }

  // Render children if authenticated and authorized
  console.log(authData.data.role)
  return allowedRoles.includes(authData.data.role) ? children : navigate("/studentlayout");
}

export default ProtectedRoute;
