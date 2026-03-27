"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function EnrollmentSection() {
  const [selectedPlan, setSelectedPlan] = useState("individual");

  const plans = [
    {
      id: "individual",
      name: "Individual Enrollment",
      price: "$2,999",
      duration: "One-time payment",
      features: [
        "Full access to all 11 modules",
        "30 hours of expert instruction",
        "Downloadable course materials",
        "Capstone project feedback",
        "Certificate of completion",
        "1-year access to course updates",
        "Community forum access"
      ],
      badge: "Most Popular",
      highlighted: true
    },
    {
      id: "group",
      name: "Group Enrollment",
      price: "$2,499",
      duration: "Per person (3+ people)",
      features: [
        "Everything in Individual",
        "Dedicated group coordinator",
        "Custom scheduling options",
        "Private group discussion forum",
        "Team capstone projects",
        "Volume discounts available",
        "Priority support"
      ],
      badge: "Best Value",
      highlighted: false
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      duration: "Contact for pricing",
      features: [
        "Unlimited team access",
        "Custom module integration",
        "On-premise deployment options",
        "Dedicated account manager",
        "Custom capstone projects",
        "API access for LMS integration",
        "SLA guarantees"
      ],
      badge: "Enterprise",
      highlighted: false
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Choose Your Learning Path
        </h3>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Select the enrollment option that best fits your needs and start your AI governance journey today.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <Card 
            key={plan.id}
            className={`relative cursor-pointer transition-all ${
              selectedPlan === plan.id 
                ? 'ring-2 ring-blue-500 shadow-xl scale-105' 
                : plan.highlighted 
                  ? 'shadow-lg border-blue-200' 
                  : 'shadow-md hover:shadow-lg'
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-3 py-1">
                  {plan.badge}
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl">{plan.name}</CardTitle>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  {plan.price}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  {plan.duration}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <Button 
                className="w-full" 
                variant={selectedPlan === plan.id ? "default" : "outline"}
                size="lg"
              >
                {plan.id === "enterprise" ? "Contact Sales" : "Enroll Now"}
              </Button>

              <Separator />

              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-xs">✓</span>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span>14-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
            <span>Payment plans available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
            <span>Corporate invoicing</span>
          </div>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Next cohort starts:</strong> March 15, 2026. Limited spots available to ensure personalized attention and quality interaction.
          </p>
        </div>
      </div>
    </div>
  );
}
