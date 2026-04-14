import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyLessons = () => {
  const [bookings, setBookings] = useState([]);
  const [recordingUrl, setRecordingUrl] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [newTimes, setNewTimes] = useState({});
  const [reviewData, setReviewData] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/bookings",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBookings(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const joinClass = (booking) => {
    const roomId = booking._id;
    navigate(`/room/${roomId}`);
  };

  const uploadRecording = async () => {
    await axios.put(
      `http://localhost:5000/api/bookings/${selectedId}/recording`,
      { recordingUrl },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setRecordingUrl("");
    setSelectedId(null);
    fetchBookings();
  };

  const cancelBooking = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/bookings/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setBookings(bookings.filter((b) => b._id !== id));
  };

  const reschedule = async (id) => {
    await axios.put(
      `http://localhost:5000/api/bookings/${id}/reschedule`,
      { newTime: newTimes[id] },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    fetchBookings();
  };

  const getRecording = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/bookings/${id}/recording`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      window.open(res.data.recordingUrl, "_blank");
    } catch (err) {
      alert("Not authorized ❌");
    }
  };

  const submitReview = async (tutorId) => {
    try {
      const data = reviewData[tutorId];

      if (!data?.rating) {
        alert("Give rating");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/reviews",
        {
          tutorId,
          rating: data.rating,
          comment: data.comment,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Review submitted ✅");
      fetchBookings();
    } catch (err) {
      alert(err.response?.data?.message || "Error ❌");
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading lessons...</p>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        My Lessons 📚
      </h2>

      {bookings.filter((b) => b.isPaid).length === 0 ? (
        <div className="text-center text-gray-400 mt-10">
          <p>No lessons booked yet 📭</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {bookings
            .filter((b) => b.isPaid) // ✅ ONLY PAID BOOKINGS
            .map((b) => (
              <div
                key={b._id}
                className="p-5 rounded-2xl bg-white dark:bg-gray-900 border"
              >
                <h3 className="text-xl font-semibold">
                  {b.tutorName}
                </h3>

                <p className="text-gray-400">{b.subject}</p>

                <p className="text-purple-500 mt-2">
                  {b.date
                    ? new Date(b.date).toLocaleDateString()
                    : "No Date"}{" "}
                  | {b.time}
                </p>

                {/* JOIN */}
                <button
                  onClick={() => joinClass(b)}
                  disabled={!b.isPaid}
                  className={`mt-3 w-full py-2 rounded ${
                    b.isPaid
                      ? "bg-green-500 text-white"
                      : "bg-gray-400 text-white cursor-not-allowed"
                  }`}
                >
                  {b.isPaid ? "Join Class 🎥" : "Payment Pending"}
                </button>

                {/* CANCEL */}
                <button
                  onClick={() => cancelBooking(b._id)}
                  className="mt-2 w-full py-2 bg-red-500 text-white rounded"
                >
                  Cancel Booking ❌
                </button>

                {/* RESCHEDULE */}
                <input
                  type="text"
                  placeholder="New Time (e.g. 02:00 PM)"
                  className="w-full p-2 border rounded mt-2 dark:bg-black dark:text-white"
                  onChange={(e) =>
                    setNewTimes({
                      ...newTimes,
                      [b._id]: e.target.value,
                    })
                  }
                />

                <button
                  onClick={() => reschedule(b._id)}
                  className="mt-2 w-full py-2 bg-indigo-500 text-white rounded"
                >
                  Reschedule 🔄
                </button>

                {/* UPLOAD RECORDING */}
                {user?.role === "tutor" && (
                  <>
                    <input
                      type="text"
                      placeholder="Recording URL"
                      value={selectedId === b._id ? recordingUrl : ""}
                      onChange={(e) => {
                        setRecordingUrl(e.target.value);
                        setSelectedId(b._id);
                      }}
                      className="w-full p-2 border rounded mt-2 dark:bg-black dark:text-white"
                    />

                    <button
                      onClick={uploadRecording}
                      className="mt-2 w-full py-2 bg-purple-500 text-white rounded"
                    >
                      Upload Recording 📤
                    </button>
                  </>
                )}

                {/* REVIEW */}
                {!b.reviewed && (
                  <div className="mt-3">
                    <input
                      type="number"
                      placeholder="Rating (1-5)"
                      min="1"
                      max="5"
                      className="w-full p-2 border rounded mb-2 dark:bg-black dark:text-white"
                      onChange={(e) =>
                        setReviewData({
                          ...reviewData,
                          [b.tutorId]: {
                            ...reviewData[b.tutorId],
                            rating: Number(e.target.value),
                          },
                        })
                      }
                    />

                    <input
                      type="text"
                      placeholder="Comment"
                      className="w-full p-2 border rounded mb-2 dark:bg-black dark:text-white"
                      onChange={(e) =>
                        setReviewData({
                          ...reviewData,
                          [b.tutorId]: {
                            ...reviewData[b.tutorId],
                            comment: e.target.value,
                          },
                        })
                      }
                    />

                    <button
                      onClick={() => submitReview(b.tutorId)}
                      className="w-full py-2 bg-yellow-500 text-white rounded"
                    >
                      Submit Review ⭐
                    </button>
                  </div>
                )}

                {/* RECORDING */}
                {b.recordingUrl && (
                  <>
                    <p className="mt-2 text-sm text-gray-400">
                      Recording 🎥
                    </p>

                    <button
                      onClick={() => getRecording(b._id)}
                      className="mt-1 w-full py-2 bg-blue-500 text-white rounded"
                    >
                      Watch Recording 🎥
                    </button>
                  </>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MyLessons;