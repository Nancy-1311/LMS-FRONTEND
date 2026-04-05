import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      
      <Sidebar />

      <div className="flex-1 ml-64">
        <Navbar />

        <div className="p-6">
          {children}
        </div>
      </div>

    </div>
  );
};

export default MainLayout;