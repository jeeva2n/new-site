import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  // If token missing → not logged in → redirect to login
  if (!token) {
    return <Navigate to="/admin/login" />;
  }

  return children;
}

export default ProtectedRoute;
