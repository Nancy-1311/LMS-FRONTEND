import { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [newTime, setNewTime] = useState("");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await axios.get("http://localhost:5000/api/bookings");
    setBookings(res.data);
  };

  // RESCHEDULE
  const reschedule = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/bookings/${id}/reschedule`,
        { newTime }
      );

      alert("Rescheduled ✅");
      setNewTime("");
      fetchBookings();
    } catch (err) {
      alert("Failed ❌");
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        My Bookings 📅
      </h2>

      {bookings.map((b) => (
        <div
          key={b._id}
          className="p-5 mb-4 border rounded-xl"
        >
          <p>Tutor: {b.tutorName}</p>
          <p>Time: {b.time}</p>

          {/* RESCHEDULE */}
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              placeholder="New time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="p-2 border rounded w-full"
            />

            <button
              onClick={() => reschedule(b._id)}
              className="px-4 bg-blue-500 text-white rounded"
            >
              Reschedule
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;