import { useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const hasRun = useRef(false);

  // useEffect(() => {
  //   if (hasRun.current) return; // 🔥 STOP duplicate calls
  //   hasRun.current = true;

  //   const confirm = async () => {
  //     try {
  //       const params = new URLSearchParams(window.location.search);

  //       const bookingId = params.get("bookingId");
  //       const price = params.get("price");

  //       if (!bookingId) return;

  //       // ✅ CONFIRM PAYMENT
  //       await axios.post(
  //         "http://localhost:5000/api/payment/confirm",
  //         { bookingId, price },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         }
  //       );

  //       console.log("✅ Payment confirmed");

  //       // ⏳ Redirect after success
  //       setTimeout(() => {
  //         navigate("/lessons");
  //       }, 2000);

  //     } catch (err) {
  //       console.error("❌ Payment confirm error:", err);
  //     }
  //   };

  //   confirm();

  // }, []);

  useEffect(() => {
  const confirm = async () => {
    try {
      const params = new URLSearchParams(window.location.search);

      const bookingId = params.get("bookingId");
      const price = params.get("price");

      if (!bookingId) return;

      await axios.post(
        "http://localhost:5000/api/payment/confirm",
        { bookingId, price },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("✅ Payment confirmed");

    } catch (err) {
      console.error("❌ Confirm error:", err);
    }
  };

  confirm();
}, []);

  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div>
        <h1 className="text-3xl font-bold text-green-500">
          Payment Successful 🎉
        </h1>

        <p className="mt-4 text-gray-400">
          Your lesson has been booked successfully!
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Redirecting to your lessons...
        </p>
      </div>
    </div>
  );
};

export default Success;