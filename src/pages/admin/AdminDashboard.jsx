import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true); 

useEffect(() => {
console.log("useEffect triggered");
fetchUsers();
}, []);

const fetchUsers = async () => {
try {
console.log("Fetching users...");
setLoading(true);


  const res = await axios.get(
    "http://localhost:5000/api/admin/users",
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  console.log("API RESPONSE:", res.data);

  setUsers(res.data);

} catch (err) {
  console.error("❌ ERROR:", err.response?.data || err.message);
} finally {
  setLoading(false); 
}

};

const deleteUser = async (id) => {
try {
const token = localStorage.getItem("token");

  await axios.delete(
    `http://localhost:5000/api/admin/users/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  fetchUsers();
} catch (err) {
  console.error(err);
}

};

const toggleStatus = async (id) => {
try {
const token = localStorage.getItem("token");

  await axios.put(
    `http://localhost:5000/api/admin/users/${id}/toggle`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  fetchUsers();
} catch (err) {
  console.error(err);
}

};

const changeRole = async (id, role) => {
try {
const token = localStorage.getItem("token");

  await axios.put(
    `http://localhost:5000/api/admin/users/${id}/role`,
    { role },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  fetchUsers();
} catch (err) {
  console.error(err);
}

};

const updatePrice = async (id, price) => {
try {
const token = localStorage.getItem("token");

  await axios.put(
    `http://localhost:5000/api/tutors/admin/${id}`,
    { price },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  fetchUsers();
} catch (err) {
  console.error(err);
}

};

console.log("STATE USERS:", users);

return ( <div> <h2 className="text-3xl font-bold mb-6">
Admin Panel 👨‍💼 </h2>

  {loading ? (
    <p>Loading...</p>
  ) : users.length === 0 ? (
    <p>No users found</p>
  ) : (
    <div className="grid grid-cols-3 gap-6">
      {users.map((u) => (
        <div
          key={u._id}
          className="p-5 rounded-2xl bg-white dark:bg-gray-900 border shadow"
        >
          <h3 className="font-semibold">{u.name}</h3>
          <p className="text-gray-400">{u.email}</p>

          <p className="text-sm mt-1">
            Role: <b>{u.role}</b>
          </p>

          {u.role === "tutor" && (
            <div className="mt-2">
              <input
                type="number"
                placeholder="₹ Price"
                defaultValue={u.price || ""}
                onBlur={(e) =>
                  updatePrice(u._id, e.target.value)
                }
                className="w-full p-2 border rounded dark:bg-black"
              />
            </div>
          )}

          <p className="text-sm mt-2 ">
            Status:{" "}
            <span
              className={
                u.isActive
                  ? "text-green-500 font-semibold"
                  : "text-red-500 font-semibold"
              }
            >
              {u.isActive ? "Active" : "Blocked"}
            </span>
          </p>

          <select
            value={u.role}
            onChange={(e) =>
              changeRole(u._id, e.target.value)
            }
            className="mt-3 w-full p-2 border rounded dark:bg-black"
          >
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
            <option value="admin">Admin</option>
          </select>

          <button
            onClick={() => toggleStatus(u._id)}
            className="mt-2 w-full py-2 bg-yellow-500 text-white rounded"
          >
            {u.isActive ? "Deactivate" : "Activate"}
          </button>

          <button
            onClick={() => deleteUser(u._id)}
            className="mt-2 w-full py-2 bg-red-500 text-white rounded"
          >
            Delete User ❌
          </button>
        </div>
      ))}
    </div>
  )}
</div>

);
};

export default AdminDashboard;
