import { useState } from "react";
import { startPayment } from "../../services/paymentService";

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "04:00 PM",
  "06:00 PM",
];

const BookingModal = ({ tutor, onClose }) => {
  const [selectedSlot, setSelectedSlot] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!selectedSlot) {
      alert("Please select a time slot");
      return;
    }

    try {
      setLoading(true);

      // SAVE BOOKING TEMP (used after payment success)
      localStorage.setItem(
        "booking",
        JSON.stringify({
          tutorName: tutor.name,
          subject: tutor.subject,
          time: selectedSlot,
          price: tutor.price,
        })
      );

      // CALL STRIPE
      await startPayment({
        name: tutor.name,
        price: tutor.price,
      });

    } catch (err) {
      console.error(err);
      alert("Payment failed ❌");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className="w-[400px] p-6 rounded-2xl 
        bg-white dark:bg-gray-900 
        text-black dark:text-white
        border border-gray-200 dark:border-gray-700 shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-4">
          Book Lesson
        </h2>

        <p className="mb-4">
          <span className="font-semibold">{tutor.name}</span> -{" "}
          {tutor.subject}
        </p>

        {/* Time Slots */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`p-2 rounded-lg border transition 
              ${
                selectedSlot === slot
                  ? "bg-purple-500 text-white border-purple-500"
                  : "border-gray-300 dark:border-gray-600 hover:bg-purple-500 hover:text-white"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-3">
          <button
            onClick={onClose}
            className="w-1/2 py-2 rounded-lg 
            bg-gray-300 dark:bg-gray-700"
          >
            Cancel
          </button>

          <button
            onClick={handlePayment}
            disabled={loading}
            className="w-1/2 py-2 rounded-lg 
            bg-gradient-to-r from-purple-500 to-blue-500 text-white
            disabled:opacity-50"
          >
            {loading ? "Redirecting..." : `Pay ₹${tutor.price}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;