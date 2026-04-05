import axios from "axios";

const API = "http://localhost:5000/api/tutors";

export const getTutors = async () => {
  const res = await axios.get(API);
  return res.data;
};