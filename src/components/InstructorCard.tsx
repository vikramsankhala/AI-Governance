import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface InstructorCardProps {
  name: string;
  title: string;
  affiliation: string;
  expertise: string[];
  bio: string;
  avatar?: string;
}

export function InstructorCard({ name, title, affiliation, expertise, bio, avatar }: InstructorCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4">
          {avatar ? (
            <img src={avatar} alt={name} className="h-20 w-20 rounded-full object-cover" />
          ) : (
            <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                {name.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
          )}
        </div>
        <CardTitle className="text-lg">{name}</CardTitle>
        <p className="text-slate-600 dark:text-slate-300">{title}</p>
        <Badge variant="outline" className="text-xs">
          {affiliation}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-slate-600 dark:text-slate-300">{bio}</p>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Expertise</h4>
          <div className="flex flex-wrap gap-1">
            {expertise.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <Button variant="outline" size="sm" className="w-full">
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
}
