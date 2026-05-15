import { useState } from "react";
import { MarketplaceView } from "./components/MarketplaceView";
import { ProfileView } from "./components/ProfileView";
import { BottomNav } from "./components/BottomNav";
import { Toaster } from "./components/ui/sonner";

function App() {
  const [activeTab, setActiveTab] = useState<"marketplace" | "profile">("marketplace");

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden selection:bg-blue-100">
      {/* Mobile-first Max-width Container */}
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl relative flex flex-col">
        {activeTab === "marketplace" ? (
          <MarketplaceView />
        ) : (
          <ProfileView />
        )}
        
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Global Components */}
      <Toaster position="top-center" expand={true} richColors />
    </div>
  );
}

export default App;