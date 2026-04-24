import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  if (!user) {
    return <Navigate to="/register" replace />;
  }

  if (role) {
    if (user.role !== role) {
      if (user.role === "admin") return <Navigate to="/admin" replace />;
      if (user.role === "tutor") return <Navigate to="/tutor" replace />;
      return <Navigate to="/" replace />;
    }
  }

  if (!role && user.role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;