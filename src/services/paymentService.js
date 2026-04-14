import axios from "axios";

export const startPayment = async (data) => {
  try{
  const res = await axios.post(
    "http://localhost:5000/api/payment/checkout",
    {
      name: data.name,
      price: data.price,
      bookingId : data.bookingId,
      tutorId: data.tutorId,
    }
  );

  window.location.href = res.data.url;

} catch (err) {
  console.error("Payment error:", err);
}
};