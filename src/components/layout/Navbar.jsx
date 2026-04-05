import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    // Clear all stored data
    localStorage.clear();
    sessionStorage.clear(); 

    // Force full reload
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between items-center p-4 border-b bg-white dark:bg-gray-900">
      
      <h2 className="text-xl font-bold">Dashboard</h2>

      <div className="flex items-center gap-4">
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-purple-500 text-white"
        >
          {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded bg-red-500 text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;