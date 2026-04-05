import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyLessons = () => {
  const [bookings, setBookings] = useState([]);
  const [recordingUrl, setRecordingUrl] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();
  const [newTimes, setNewTimes] = useState({});

const reschedule = async (id) => {
  try {
    await axios.put(
      `http://localhost:5000/api/bookings/${id}/reschedule`,
      { newTime: newTimes[id] }
    );

    alert("Rescheduled ✅");
    fetchLessons();
  } catch (err) {
    alert("Failed ❌");
  }
};


  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/bookings"
    );
    setBookings(res.data);
  };

  const joinClass = (booking) => {
    const roomId = `${booking.tutorName}-${booking.time}`.replace(
      /\s+/g,
      ""
    );
    navigate(`/room/${roomId}`);
  };

  const uploadRecording = async () => {
    await axios.put(
      `http://localhost:5000/api/bookings/${selectedId}/recording`,
      { recordingUrl }
    );

    setRecordingUrl("");
    setSelectedId(null);
    fetchBookings();
  };

  // ❌ CANCEL FUNCTION
  const cancelBooking = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/bookings/${id}`
      );

      // remove from UI instantly
      setBookings(bookings.filter((b) => b._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        My Lessons 📚
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {bookings.map((b) => (
          <div
            key={b._id}
            className="p-5 rounded-2xl bg-white dark:bg-gray-900 border"
          >
            <h3 className="text-xl font-semibold">
              {b.tutorName}
            </h3>

            <p className="text-gray-400">{b.subject}</p>

            <p className="text-purple-500 mt-2">{b.time}</p>

            {/* Join */}
            <button
              onClick={() => joinClass(b)}
              className="mt-3 w-full py-2 bg-green-500 text-white rounded"
            >
              Join Class 🎥
            </button>

            {/* Cancel */}
            <button
              onClick={() => cancelBooking(b._id)}
              className="mt-2 w-full py-2 bg-red-500 text-white rounded"
            >
              Cancel Booking ❌
            </button>

            {/* Upload Recording */}
            <button
              onClick={() => setSelectedId(b._id)}
              className="mt-2 w-full py-2 bg-blue-500 text-white rounded"
            >
              Upload Recording
            </button>

            {selectedId === b._id && (
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Paste video URL"
                  value={recordingUrl}
                  onChange={(e) => setRecordingUrl(e.target.value)}
                  className="w-full p-2 border rounded mb-2"
                />

                <button
                  onClick={uploadRecording}
                  className="w-full py-2 bg-purple-500 text-white rounded"
                >
                  Save Recording
                </button>
              </div>
            )}

            {/* Show Recording */}
            {b.recordingUrl && (
              <video
                src={b.recordingUrl}
                controls
                className="mt-3 w-full rounded"
              />
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLessons;