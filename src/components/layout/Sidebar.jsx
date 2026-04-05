import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-900 border-r p-6">
      <h1 className="text-2xl font-bold mb-10">
        LMS 
      </h1>

      <nav className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/tutors">Find Tutors</Link>
        <Link to="/lessons">My Lessons</Link>
        <Link to="/payments">Payment History 💳</Link>
        <Link to="/profile">Profile 👤</Link>
        <Link to="/tutor">Tutor Dashboard 🎓</Link>
      </nav>
    </div>
  );
};

export default Sidebar;