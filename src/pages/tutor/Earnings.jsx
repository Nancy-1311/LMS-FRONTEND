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
        "http://localhost:5000/api/tutors/earnings", 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Earnings 💰
      </h2>

      <div className="flex gap-6 mb-6">
        <div className="p-5 border rounded-xl">
          <h3>Total Earnings</h3>
          <p className="text-xl font-bold">
            ₹{data.totalEarnings}
          </p>
        </div>

        <div className="p-5 border rounded-xl">
          <h3>Total Lessons</h3>
          <p className="text-xl font-bold">
            {data.totalLessons}
          </p>
        </div>
      </div>

      {data.payments.map((p) => (
        <div key={p._id} className="p-4 mb-3 border rounded">
          <p>Payment ID: {p._id}</p> 
          <p>₹{p.amount}</p>
          <p>{new Date(p.createdAt).toLocaleDateString()}</p> 
        </div>
      ))}
    </div>
  );
};

export default Earnings;