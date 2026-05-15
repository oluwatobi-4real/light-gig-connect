import React, { useState } from "react";
import { MOCK_GIGS, MOCK_USER } from "../data/mockData";
import { GigFeedCard } from "./GigFeedCard";
import { Input } from "./ui/input";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

export const MarketplaceView: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredGigs = MOCK_GIGS.filter(
    (gig) =>
      gig.title.toLowerCase().includes(search.toLowerCase()) ||
      gig.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pb-20">
      <header className="sticky top-0 bg-white/80 backdrop-blur-md z-40 p-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <Input
              type="text"
              placeholder="Search gigs or skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-slate-50 border-none focus-visible:ring-1 focus-visible:ring-blue-500"
            />
          </div>
          <button className="p-2 bg-slate-50 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
            <SlidersHorizontal size={20} />
          </button>
        </div>
        
        <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar pb-1">
          {["All", "Remote", "Full-time", "Contract", "Hourly"].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                filter === "All" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </header>

      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-slate-800">Recommended for you</h2>
          <span className="text-xs text-slate-400 font-medium">{filteredGigs.length} Gigs found</span>
        </div>
        
        {filteredGigs.length > 0 ? (
          filteredGigs.map((gig) => (
            <GigFeedCard key={gig.id} gig={gig} userSkills={MOCK_USER.skills} />
          ))
        ) : (
          <div className="py-20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 text-slate-300 mb-4">
              <Search size={32} />
            </div>
            <p className="text-slate-500 font-medium">No matches found for your search.</p>
          </div>
        )}
      </main>
    </div>
  );
};