import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/student/Dashboard";
import FindTutors from "../pages/student/FindTutors";
import MyLessons from "../pages/student/MyLessons";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import ProtectedRoute from "./ProtectedRoute";

const Recordings = () => <h1>Recordings</h1>;
const Payments = () => <h1>Payments</h1>;
const Profile = () => <h1>Profile</h1>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tutors"
        element={
          <ProtectedRoute>
            <FindTutors />
          </ProtectedRoute>
        }
      />
      <Route
        path="/lessons"
        element={
          <ProtectedRoute>
            <MyLessons />
          </ProtectedRoute>
        }
      />

      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recordings" element={<Recordings />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;