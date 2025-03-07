import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const basePath = "/dash";

interface DashSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const DashSidebar: React.FC<DashSidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-gray-900 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold">My SaaS</h2>
        <nav className="space-y-2">
          <Link to={`${basePath}`} className="block p-2 rounded hover:bg-gray-700">
            Dashboard
          </Link>
          <Link to={`${basePath}/settings`} className="block p-2 rounded hover:bg-gray-700">
            Settings
          </Link>
          <Link to={`${basePath}/profile`} className="block p-2 rounded hover:bg-gray-700">
            Profile
          </Link>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden m-2">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-gray-900 text-white p-4">
          <h2 className="text-xl font-bold mb-4">My SaaS</h2>
          <nav className="space-y-2">
            <Link to={`${basePath}/`} className="block p-2 rounded hover:bg-gray-700">
              Dashboard
            </Link>
            <Link to={`${basePath}/settings`} className="block p-2 rounded hover:bg-gray-700">
              Settings
            </Link>
            <Link to={`${basePath}/profile`} className="block p-2 rounded hover:bg-gray-700">
              Profile
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default DashSidebar;
