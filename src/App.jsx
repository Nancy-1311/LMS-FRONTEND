import { Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/student/Dashboard";
import FindTutors from "./pages/student/FindTutors";
import MyLessons from "./pages/student/MyLessons";
import PaymentHistory from "./pages/student/PaymentHistory";
import Profile from "./pages/student/Profile";
import VideoRoom from "./pages/VideoRoom";
import Success from "./pages/Success";

import ProtectedRoute from "./components/ProtectedRoute";
import TutorDashboard from "./pages/tutor/TutorDashboard";
import MyBookings from "./pages/student/MyBookings";
import Earnings from "./pages/tutor/Earnings";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      {/* Login */}
      <Route path="/login" element={<Login />} />
      

      {/* Protected App */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <div className="flex min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white">
              
              <Sidebar />

              <div className="flex-1">
                <Navbar />

                <div className="p-6">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/tutors" element={<FindTutors />} />
                    <Route path="/lessons" element={<MyLessons />} />
                    <Route path="/payments" element={<PaymentHistory />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/tutor" element={<TutorDashboard />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/room/:roomId" element={<VideoRoom />} />
                    <Route path="my-bookings" element={<MyBookings/>}/>
                    <Route path="/earnings" element={<Earnings />} />

                    {/* Tutor only */}
                    <Route
                      path="/tutor"
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
  );
}

export default App;