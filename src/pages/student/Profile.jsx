import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setEditing(false);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        My Profile 👤
      </h2>

      <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
        
        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            value={user.name}
            disabled={!editing}
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
            className="w-full p-2 rounded-lg border 
            bg-white text-black 
            dark:bg-gray-800 dark:text-white 
            outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="text"
            value={user.email}
            disabled={!editing}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
            className="w-full p-2 rounded-lg border 
            bg-white text-black 
            dark:bg-gray-800 dark:text-white 
            outline-none"
          />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">
            Bio
          </label>
          <textarea
            value={user.bio}
            disabled={!editing}
            onChange={(e) =>
              setUser({ ...user, bio: e.target.value })
            }
            className="w-full p-2 rounded-lg border 
            bg-white text-black 
            dark:bg-gray-800 dark:text-white 
            outline-none"
          />
        </div>

        {/* Buttons */}
        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="w-full py-2 rounded-xl 
            bg-purple-500 text-white 
            hover:opacity-90 transition"
          >
            Edit Profile
          </button>
        ) : (
          <button
            onClick={handleSave}
            className="w-full py-2 rounded-xl 
            bg-green-500 text-white 
            hover:opacity-90 transition"
          >
            Save Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;