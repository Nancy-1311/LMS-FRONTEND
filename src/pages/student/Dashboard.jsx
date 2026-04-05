const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        Welcome Back 👋
      </h2>

      <div className="grid grid-cols-3 gap-6">
        
        <div className="p-6 rounded-2xl 
        bg-gradient-to-r from-purple-500/20 to-blue-500/20 
        backdrop-blur-lg border border-white/10
        hover:scale-105 transition-all duration-300 shadow-lg">
          
          <h3 className="text-gray-400">Total Lessons</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="p-6 rounded-2xl 
        bg-gradient-to-r from-pink-500/20 to-purple-500/20 
        backdrop-blur-lg border border-white/10
        hover:scale-105 transition-all duration-300 shadow-lg">
          
          <h3 className="text-gray-400">Upcoming</h3>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>

        <div className="p-6 rounded-2xl 
        bg-gradient-to-r from-green-500/20 to-blue-500/20 
        backdrop-blur-lg border border-white/10
        hover:scale-105 transition-all duration-300 shadow-lg">
          
          <h3 className="text-gray-400">Completed</h3>
          <p className="text-3xl font-bold mt-2">9</p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;