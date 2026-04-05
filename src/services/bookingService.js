import axios from "axios";

const API = "http://localhost:5000/api/bookings";

export const createBooking = async (data) => {
  const res = await axios.post(API, data);
  return res.data;
};

export const getBookings = async () => {
  const res = await axios.get(API);
  return res.data;
};