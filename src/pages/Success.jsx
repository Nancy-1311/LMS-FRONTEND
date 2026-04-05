import { useEffect } from "react";
import axios from "axios";

const Success = () => {
  useEffect(() => {
    handleSuccess();
  }, []);

  const handleSuccess = async () => {
    try {
      const booking = JSON.parse(localStorage.getItem("booking"));

      if (booking) {
        // Save booking
        await axios.post(
          "http://localhost:5000/api/bookings",
          booking
        );

        // Save payment
        await axios.post(
          "http://localhost:5000/api/payment-history",
          {
            tutorName: booking.tutorName,
            amount: booking.price || 500,
          }
        );

        localStorage.removeItem("booking");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div>
        <h1 className="text-3xl font-bold text-green-500">
          Payment Successful 🎉
        </h1>
        <p className="mt-4 text-gray-400">
          Your lesson has been booked successfully!
        </p>
      </div>
    </div>
  );
};

export default Success;