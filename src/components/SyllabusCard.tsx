import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SyllabusCardProps {
  id: string;
  title: string;
  type: "display" | "quiz" | "cheatsheet" | "activity" | "case-study" | "debate" | "reading" | "video" | "project";
  module: number;
  description: string;
  duration?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
  tags?: string[];
  onClick?: () => void;
}

const cardTypeColors = {
  display: "bg-blue-100 text-blue-800 border-blue-200",
  quiz: "bg-green-100 text-green-800 border-green-200",
  cheatsheet: "bg-yellow-100 text-yellow-800 border-yellow-200",
  activity: "bg-purple-100 text-purple-800 border-purple-200",
  "case-study": "bg-orange-100 text-orange-800 border-orange-200",
  debate: "bg-red-100 text-red-800 border-red-200",
  reading: "bg-indigo-100 text-indigo-800 border-indigo-200",
  video: "bg-pink-100 text-pink-800 border-pink-200",
  project: "bg-teal-100 text-teal-800 border-teal-200",
};

const difficultyColors = {
  beginner: "bg-gray-100 text-gray-700",
  intermediate: "bg-blue-100 text-blue-700",
  advanced: "bg-purple-100 text-purple-700",
};

export function SyllabusCard({ 
  id, 
  title, 
  type, 
  module, 
  description, 
  duration, 
  difficulty, 
  tags, 
  onClick 
}: SyllabusCardProps) {
  return (
    <Card 
      className="h-full cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge className={cardTypeColors[type]}>
            {type.replace("-", " ").toUpperCase()}
          </Badge>
          <Badge variant="outline" className="text-xs">
            Module {module}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight">{title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          {duration && <span>⏱️ {duration}</span>}
          {difficulty && (
            <Badge className={difficultyColors[difficulty]} variant="secondary">
              {difficulty}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-4">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <Button variant="outline" size="sm" className="w-full">
          Start Learning →
        </Button>
      </CardContent>
    </Card>
  );
}
