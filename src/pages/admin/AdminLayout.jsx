import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-950">

      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <AdminNavbar />

        {/* Page Content */}
        <div className="p-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 min-h-[80vh]">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;