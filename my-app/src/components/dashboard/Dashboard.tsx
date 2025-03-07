import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashSidebar from "./Sidebar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <DashSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 p-6 overflow-auto">
        <Outlet />
      </div>

      {/* Main Content */}
    </div>
  );
};

export default Dashboard;


{/* Main Content */}
{/* <div className="flex-1 p-6 overflow-auto">
  <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    <Card>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">Stat 1</h2>
        <p className="text-gray-600">Some metric here</p>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">Stat 2</h2>
        <p className="text-gray-600">Another metric</p>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold">Stat 3</h2>
        <p className="text-gray-600">A different metric</p>
      </CardContent>
    </Card>
  </div>
</div> */}