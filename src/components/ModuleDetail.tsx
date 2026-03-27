"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ModuleDetailProps {
  module: {
    id: number;
    title: string;
    hours: string;
    description: string;
    objectives: string[];
    topics: string[];
    activities: string[];
  };
  isOpen: boolean;
  onToggle: () => void;
}

export function ModuleDetail({ module, isOpen, onToggle }: ModuleDetailProps) {
  return (
    <Card className="w-full">
      <CardHeader className="cursor-pointer" onClick={onToggle}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-blue-600 border-blue-200">
              Module {module.id}
            </Badge>
            <span className="text-sm text-slate-500">{module.hours}</span>
          </div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg">{module.title}</CardTitle>
            <Button variant="ghost" size="sm">
              {isOpen ? "−" : "+"}
            </Button>
          </div>
        </div>
        <CardDescription className="mt-2">{module.description}</CardDescription>
      </CardHeader>
      
      {isOpen && (
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Learning Objectives</h4>
            <ul className="space-y-2">
              {module.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-600 dark:text-slate-300">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Key Topics</h4>
            <div className="flex flex-wrap gap-2">
              {module.topics.map((topic, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">Activities</h4>
            <ul className="space-y-2">
              {module.activities.map((activity, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-600 dark:text-slate-300">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
