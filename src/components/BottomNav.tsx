import React from "react";
import { LayoutGrid, User, Search } from "lucide-react";

interface BottomNavProps {
  activeTab: "marketplace" | "profile";
  setActiveTab: (tab: "marketplace" | "profile") => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 flex justify-around items-center z-50">
      <button
        onClick={() => setActiveTab("marketplace")}
        className={`flex flex-col items-center space-y-1 transition-colors ${
          activeTab === "marketplace" ? "text-blue-600" : "text-slate-400"
        }`}
      >
        <Search size={24} />
        <span className="text-[10px] font-medium uppercase tracking-wider">Explore</span>
      </button>
      
      <button
        onClick={() => setActiveTab("profile")}
        className={`flex flex-col items-center space-y-1 transition-colors ${
          activeTab === "profile" ? "text-blue-600" : "text-slate-400"
        }`}
      >
        <User size={24} />
        <span className="text-[10px] font-medium uppercase tracking-wider">Profile</span>
      </button>
    </nav>
  );
};