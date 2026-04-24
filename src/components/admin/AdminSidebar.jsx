import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Users", path: "/admin/users" },
    { name: "Bookings", path: "/admin/bookings" },
    { name: "Revenue", path: "/admin/revenue" },
    { name: "Reviews", path: "/admin/reviews" }
  ];

  return (
    <div className="w-64 h-screen bg-[#0f172a] text-white p-6">
      <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>

      <ul className="space-y-4">
        {menu.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`block p-3 rounded-lg transition ${
                location.pathname === item.path
                  ? "bg-blue-600"
                  : "hover:bg-gray-700"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;