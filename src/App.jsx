import { Routes, Route } from "react-router-dom";

import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/student/Dashboard";
import FindTutors from "./pages/student/FindTutors";
import MyLessons from "./pages/student/MyLessons";
import PaymentHistory from "./pages/student/PaymentHistory";
import Profile from "./pages/student/Profile";
import TutorProfile from "./pages/student/TutorProfile";
import TutorBookings from "./pages/tutor/TutorBookings";

import VideoRoom from "./pages/VideoRoom";
import Success from "./pages/Success";

import AdminDashboard from "./pages/admin/AdminDashboard";
import TutorDashboard from "./pages/tutor/TutorDashboard";
import MyBookings from "./pages/student/MyBookings";
import Earnings from "./pages/tutor/Earnings";
import Reviews from "./pages/admin/Reviews";

import AdminLayout from "./pages/admin/AdminLayout";
import AdminRoutes from "./routes/AdminRoutes";
import Users from "./pages/admin/Users";
import Bookings from "./pages/admin/Bookings";
import Revenue from "./pages/admin/Revenue";

function App() {
  const storedUser = localStorage.getItem("user");
const user = storedUser ? JSON.parse(storedUser) : null;
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-200 dark:bg-gray-950">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="bookings" element={<Bookings />} />

<Route path="reviews" element={<Reviews />} />
<Route path="revenue" element={<Revenue />} />
          </Route>
        </Route>

        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="flex min-h-screen dark:bg-gray-950 text-black dark:text-white">
                
                <Sidebar />

                <div className="flex-1">
                  <Navbar />

                  <div className="p-6">
                    <Routes>

                      <Route index element={<Dashboard />} />

                      <Route path="tutors" element={<FindTutors />} />
                      <Route path="tutors/:id" element={<TutorProfile />} />
                      {/* <Route path="lessons" element={<MyLessons />} /> */}
                      {user?.role === "student" && (
  <Route path="/lessons" element={<MyLessons />} />
)}

{user?.role === "tutor" && (
  <Route path="/bookings" element={<TutorBookings />} />
)}
                      <Route path="payments" element={<PaymentHistory />} />
                      <Route path="profile" element={<Profile />} />
                      <Route path="room/:roomId" element={<VideoRoom />} />
                      <Route path="success" element={<Success />} />
                      <Route path="my-bookings" element={<MyBookings />} />
                      <Route path="earnings" element={<Earnings />} />

                      <Route
                        path="tutor"
                        element={
                          <ProtectedRoute role="tutor">
                            <TutorDashboard />
                          </ProtectedRoute>
                        }
                      />

                    </Routes>
                  </div>
                </div>

              </div>
            </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
