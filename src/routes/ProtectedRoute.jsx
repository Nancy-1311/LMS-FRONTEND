import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  // Not logged in
  if (!user) {
    return <Navigate to="/register" replace />;
  }

  // Role check
  if (role && user.role !== role) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;