import { useState } from "react";
import { registerUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      alert("Registered Successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[350px] p-6 rounded-2xl 
        bg-white dark:bg-gray-900 dark:text-white
        border border-gray-200 dark:border-gray-700 shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Register 📝
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-xl 
          bg-white dark:bg-gray-800 
          border border-gray-300 dark:border-gray-700 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-xl 
          bg-white dark:bg-gray-800 
          border border-gray-300 dark:border-gray-700 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-xl 
          bg-white dark:bg-gray-800 
          border border-gray-300 dark:border-gray-700 outline-none"
        />

        <select
          name="role"
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded-xl 
          bg-white dark:bg-gray-800 
          border border-gray-300 dark:border-gray-700 outline-none"
        >
          <option value="student">Student</option>
          <option value="tutor">Tutor</option>
        </select>

        <button className="w-full py-2 rounded-xl 
        bg-gradient-to-r from-purple-500 to-blue-500 text-white">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;