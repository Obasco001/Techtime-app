import React from 'react';
import { 
  LayoutDashboard, 
  Clock, 
  Calendar, 
  Settings, 
  LogOut, 
  PieChart,
  Users
} from 'lucide-react';

interface SidebarProps {
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const navItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard", active: true },
    { icon: <Clock className="w-5 h-5" />, label: "Time Tracker", active: false },
    { icon: <Calendar className="w-5 h-5" />, label: "Schedule", active: false },
    { icon: <PieChart className="w-5 h-5" />, label: "Reports", active: false },
    { icon: <Users className="w-5 h-5" />, label: "Team", active: false },
  ];

  return (
    <aside className="w-64 bg-dark-card border-r border-dark-border flex flex-col h-screen fixed left-0 top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary-600 p-1.5 rounded-lg">
          <Clock className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold text-white">TechTime</span>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-6">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
              item.active 
                ? 'bg-primary-600/10 text-primary-500' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-dark-border space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg">
          <Settings className="w-5 h-5" />
          Settings
        </button>
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-400/5 rounded-lg"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};