import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    upcoming: 0,
    completed: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/bookings",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const bookings = res.data;

      const total = bookings.length;

      const now = new Date();

      let upcoming = 0;
      let completed = 0;

      bookings.forEach((b) => {
        const bookingDate = new Date(b.date);

        if (bookingDate > now) {
          upcoming++;
        } else {
          completed++;
        }
      });

      setStats({ total, upcoming, completed });

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        Welcome Back 👋
      </h2>

      <div className="grid grid-cols-3 gap-6">

        {/* TOTAL */}
        <div className="p-6 rounded-2xl 
        bg-gradient-to-r from-purple-500/20 to-blue-500/20 
        backdrop-blur-lg border border-white/10
        hover:scale-105 transition-all shadow-lg">
          
          <h3 className="text-gray-400">Total Lessons</h3>
          <p className="text-3xl font-bold mt-2">
            {stats.total}
          </p>
        </div>

        {/* UPCOMING */}
        <div className="p-6 rounded-2xl 
        bg-gradient-to-r from-pink-500/20 to-purple-500/20 
        backdrop-blur-lg border border-white/10
        hover:scale-105 transition-all shadow-lg">
          
          <h3 className="text-gray-400">Upcoming</h3>
          <p className="text-3xl font-bold mt-2">
            {stats.upcoming}
          </p>
        </div>

        {/* COMPLETED */}
        <div className="p-6 rounded-2xl 
        bg-gradient-to-r from-green-500/20 to-blue-500/20 
        backdrop-blur-lg border border-white/10
        hover:scale-105 transition-all shadow-lg">
          
          <h3 className="text-gray-400">Completed</h3>
          <p className="text-3xl font-bold mt-2">
            {stats.completed}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;