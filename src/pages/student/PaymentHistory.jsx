import { useEffect, useState } from "react";
import axios from "axios";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/payment/my-payments", // ✅ FIXED
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setPayments(res.data); // ✅ FIXED

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Payment History 💳
      </h2>

      {payments.length === 0 ? (
        <p className="text-gray-400">
          No payments yet
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {payments.map((p) => (
            <div
              key={p._id}
              className="p-5 rounded-2xl bg-white dark:bg-gray-900 border"
            >
              <h3 className="text-xl font-semibold">
                {p.tutorName || "Tutor"}
              </h3>

              <p className="text-green-500 font-bold mt-2">
                ₹{p.amount}
              </p>

              <p className="text-gray-400 text-sm mt-1">
                {p.date
                  ? new Date(p.date).toLocaleDateString()
                  : "No Date"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;