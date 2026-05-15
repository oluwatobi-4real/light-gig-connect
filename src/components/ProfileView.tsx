import React from "react";
import { MOCK_USER } from "../data/mockData";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { 
  ShieldCheck, 
  ExternalLink, 
  ShoppingBag, 
  Activity, 
  CreditCard, 
  BookOpen,
  MapPin,
  Mail,
  MoreVertical,
  Settings
} from "lucide-react";
import { toast } from "sonner";

const IconMap: Record<string, any> = {
  ShoppingBag,
  Activity,
  CreditCard,
  BookOpen,
};

export const ProfileView: React.FC = () => {
  const handlePortfolioClick = (title: string) => {
    toast.success(`Opening ${title}...`, {
      description: "Data-light mode: Project overview loading without heavy assets."
    });
  };

  return (
    <div className="pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="relative bg-blue-600 pt-10 pb-20 px-6 overflow-hidden">
        {/* Abstract background patterns */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-8 -mb-8" />
        
        <div className="flex justify-between items-start">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-blue-600 text-3xl font-black">
              {MOCK_USER.name.charAt(0)}
            </span>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20">
              <Settings size={20} />
            </button>
            <button className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>
        
        <div className="mt-4 text-white">
          <h1 className="text-2xl font-bold">{MOCK_USER.name}</h1>
          <p className="text-blue-100 font-medium">{MOCK_USER.role}</p>
        </div>
      </header>

      <main className="-mt-8 px-4 space-y-6">
        {/* Stats Section */}
        <Card className="border-none shadow-md overflow-hidden">
          <CardContent className="p-0 flex divide-x divide-slate-100">
            <div className="flex-1 p-4 text-center">
              <div className="font-bold text-lg">42</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Gigs Done</div>
            </div>
            <div className="flex-1 p-4 text-center">
              <div className="font-bold text-lg">4.9</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rating</div>
            </div>
            <div className="flex-1 p-4 text-center">
              <div className="font-bold text-lg">98%</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Completion</div>
            </div>
          </CardContent>
        </Card>

        {/* Bio */}
        <section>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">About</h3>
          <p className="text-slate-600 leading-relaxed text-sm bg-white p-4 rounded-xl border border-slate-100">
            {MOCK_USER.bio}
          </p>
        </section>

        {/* Verified Skills */}
        <section>
          <div className="flex justify-between items-center mb-3 px-1">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Verified Skills</h3>
            <ShieldCheck className="text-emerald-500" size={18} />
          </div>
          <div className="flex flex-wrap gap-2">
            {MOCK_USER.skills.map((skill) => (
              <Badge 
                key={skill} 
                className="bg-white text-slate-700 border-slate-200 hover:bg-slate-50 py-1.5 px-3 flex items-center gap-1.5"
                variant="outline"
              >
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section>
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">Portfolio Gallery</h3>
          <div className="grid grid-cols-2 gap-3">
            {MOCK_USER.portfolio.map((item) => {
              const Icon = IconMap[item.icon] || ExternalLink;
              return (
                <button
                  key={item.id}
                  onClick={() => handlePortfolioClick(item.title)}
                  className="group text-left p-4 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 transition-all hover:shadow-sm"
                >
                  <div className="mb-4 w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-slate-400">
                    <Icon size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-tight">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-slate-50 rounded-2xl p-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-slate-600 text-sm">
              <div className="p-2 bg-white rounded-lg"><Mail size={16} /></div>
              <span>sarah.jenkins@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 text-sm">
              <div className="p-2 bg-white rounded-lg"><MapPin size={16} /></div>
              <span>Cape Town, South Africa</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};