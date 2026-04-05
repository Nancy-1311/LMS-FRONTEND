import { useEffect, useState } from "react";
import axios from "axios";

const Earnings = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchEarnings();
  }, []);

  const fetchEarnings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/payment/earnings"
      );
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!data) return <p>Not Available</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Earnings 💰</h2>

      {/* SUMMARY */}
      <div className="flex gap-6 mb-6">
        <div className="p-5 border rounded-xl">
          <h3>Total Earnings</h3>
          <p className="text-xl font-bold">₹{data.totalEarnings}</p>
        </div>

        <div className="p-5 border rounded-xl">
          <h3>Total Lessons</h3>
          <p className="text-xl font-bold">{data.totalLessons}</p>
        </div>
      </div>

      {/* LIST */}
      {data.bookings.map((b) => (
        <div key={b._id} className="p-4 mb-3 border rounded">
          <p>{b.tutorName}</p>
          <p>₹{b.price}</p>
          <p>{b.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Earnings;