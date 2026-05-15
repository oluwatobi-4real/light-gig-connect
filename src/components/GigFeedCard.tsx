import React from "react";
import { Gig } from "../data/mockData";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface GigFeedCardProps {
  gig: Gig;
  userSkills: string[];
}

export const GigFeedCard: React.FC<GigFeedCardProps> = ({ gig, userSkills }) => {
  const calculateMatch = () => {
    const matched = gig.requiredSkills.filter((skill) =>
      userSkills.map((s) => s.toLowerCase()).includes(skill.toLowerCase())
    );
    return Math.round((matched.length / gig.requiredSkills.length) * 100);
  };

  const matchScore = calculateMatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="mb-4 overflow-hidden border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-5">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">{gig.title}</h3>
              <div className="flex items-center text-slate-500 text-sm font-medium">
                <Briefcase size={14} className="mr-1.5" />
                <span>{gig.company}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div 
                className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  matchScore >= 80 ? "border-emerald-500 text-emerald-600" : 
                  matchScore >= 50 ? "border-blue-500 text-blue-600" : "border-slate-300 text-slate-400"
                }`}
              >
                <span className="text-xs font-bold">{matchScore}%</span>
                {matchScore >= 90 && (
                  <div className="absolute -top-1 -right-1 bg-white rounded-full">
                    <CheckCircle2 size={14} className="fill-emerald-500 text-white" />
                  </div>
                )}
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase mt-1">Match</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {gig.requiredSkills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-none text-[11px]"
              >
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-50">
            <div className="flex items-center text-slate-500 text-sm">
              <MapPin size={14} className="mr-1" />
              <span>{gig.location}</span>
            </div>
            <div className="font-bold text-blue-600 text-sm">
              {gig.pay}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};