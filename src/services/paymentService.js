import axios from "axios";

export const startPayment = async (data) => {
  const res = await axios.post(
    "http://localhost:5000/api/payment/checkout",
    {
      name: data.name,
      price: data.price,
    }
  );

  window.location.href = res.data.url;
};