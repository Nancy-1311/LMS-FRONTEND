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

import VideoRoom from "./pages/VideoRoom";
import Success from "./pages/Success";

import AdminDashboard from "./pages/admin/AdminDashboard";
import TutorDashboard from "./pages/tutor/TutorDashboard";
import MyBookings from "./pages/student/MyBookings";
import Earnings from "./pages/tutor/Earnings";

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-200 dark:bg-gray-950">
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

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
                    <Route path="lessons" element={<MyLessons />} />
                    <Route path="payments" element={<PaymentHistory />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="room/:roomId" element={<VideoRoom />} />
                    <Route path="success" element={<Success />} />
                    <Route path="my-bookings" element={<MyBookings />} />
                    <Route path="earnings" element={<Earnings />} />
                    
                    
                    { <Route
                      path="admin"
                      element={
                        <ProtectedRoute role="admin">
                          <AdminDashboard />
                        </ProtectedRoute>
                      }
                    /> }

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