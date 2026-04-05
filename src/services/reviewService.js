import axios from "axios";

// GET reviews of a tutor
export const getReviewsByTutor = async (tutorId) => {
  const res = await axios.get(
    `http://localhost:5000/api/reviews/${tutorId}`
  );
  return res.data;
};