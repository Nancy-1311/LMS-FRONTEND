import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/auth/me",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setUser(res.data);
  };

  const handleSave = async () => {
    await axios.put(
      "http://localhost:5000/api/auth/me",
      user,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    setEditing(false);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        My Profile 👤
      </h2>

      <div className="p-6 rounded-2xl 
      bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">

        {/* Name */}
        <input
          type="text"
          value={user.name}
          disabled={!editing}
          onChange={(e) =>
            setUser({ ...user, name: e.target.value })
          }
          className="w-full p-3 mb-3 rounded-lg border 
          dark:bg-gray-800 dark:text-white"
        />

        {/* Email */}
        <input
          type="text"
          value={user.email}
          disabled
          className="w-full p-3 mb-3 rounded-lg border 
          dark:bg-gray-800 dark:text-white"
        />

        {/* Button */}
        <button
          onClick={() =>
            editing ? handleSave() : setEditing(true)
          }
          className="w-full py-3 rounded-xl 
          bg-gradient-to-r from-purple-500 to-blue-500 text-white"
        >
          {editing ? "Save Profile" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default Profile;