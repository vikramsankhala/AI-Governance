"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const modules = [
  {
    id: 0,
    title: "Orientation & Pre-work",
    hours: "1h",
    description: "Align learners on AI governance concepts and set expectations",
    objectives: [
      "Distinguish AI governance vs ethics vs safety",
      "Understand course structure and project tracks",
      "Complete required pre-work materials"
    ],
    topics: ["Course Overview", "Ethics Principles", "Pre-work Assignments"],
    activities: ["Turing Lecture Review", "Miro Board Activity", "Project Track Selection"]
  },
  {
    id: 1,
    title: "Why AI Governance, Why Now",
    hours: "3h",
    description: "Examine the shift from ethics to hard governance post-2024",
    objectives: [
      "Analyze 2025-26 as AI governance inflection point",
      "Understand EU AI Act phased obligations",
      "Evaluate litigation surge and regulatory responses"
    ],
    topics: ["EU AI Act", "US Federal Policy", "Litigation Trends", "Enforcement Actions"],
    activities: ["Debate: Catastrophic vs Day-to-day Risks", "Case Study Analysis", "Policy Brief Writing"]
  },
  {
    id: 2,
    title: "Core Concepts & Risk Taxonomies",
    hours: "3h",
    description: "Establish foundational principles and risk-based approaches",
    objectives: [
      "Apply ethical principles as governance requirements",
      "Compare risk-based approaches across jurisdictions",
      "Critique anthropocentric bias in risk frameworks"
    ],
    topics: ["Ethical Principles", "EU Risk Categories", "NIST Framework", "India's Techno-Legal Approach"],
    activities: ["Risk Classification Exercise", "Jurisdiction Comparison", "Discussion Room"]
  },
  {
    id: 3,
    title: "Global Regulatory Landscape",
    hours: "3h",
    description: "Navigate competing governance paradigms worldwide",
    objectives: [
      "Compare EU, US, India, and China approaches",
      "Analyze regulatory fragmentation effects",
      "Design global compliance strategies"
    ],
    topics: ["EU AI Act", "US State Rules", "India's Middle Path", "UN Global Dialogue"],
    activities: ["Regulatory Passport Design", "Fragmentation Debate", "Policy Lab"]
  },
  {
    id: 4,
    title: "Technical Governance",
    hours: "3h",
    description: "From engineering trust to auditable, monitored AI systems",
    objectives: [
      "Design governance metrics dashboards",
      "Create audit checklists for regulators",
      "Evaluate open-source requirements"
    ],
    topics: ["Safety-by-Design", "Algorithmic Auditing", "Monitoring Systems", "Explainability"],
    activities: ["Dashboard Design", "Audit Checklist Creation", "Open Source Debate"]
  },
  {
    id: 5,
    title: "Data, Privacy & Biometrics",
    hours: "3h",
    description: "Govern data lifecycle and biometric technologies",
    objectives: [
      "Apply data governance principles",
      "Analyze biometric privacy cases",
      "Evaluate data scraping legality"
    ],
    topics: ["Data Lifecycle", "DPDP Act", "Biometric Privacy", "FTC Actions", "Clearview Case"],
    activities: ["Data Lifecycle Diagram", "Regulatory Mapping", "Scraping Debate"]
  },
  {
    id: 6,
    title: "Accountability & Liability",
    hours: "3h",
    description: "Navigate professional responsibility in AI use",
    objectives: [
      "Understand liability layers across stakeholders",
      "Analyze hallucination litigation",
      "Define professional standards of care"
    ],
    topics: ["Developer Liability", "Professional Responsibility", "Hallucination Cases", "Bar Sanctions"],
    activities: ["Disciplinary Hearing Simulation", "Standard of Care Discussion", "Case Analysis"]
  },
  {
    id: 7,
    title: "Sectoral Case Studies",
    hours: "3h",
    description: "Examine AI governance across key sectors",
    objectives: [
      "Analyze sector-specific governance challenges",
      "Design governance stacks for different industries",
      "Compare public vs private sector regulation"
    ],
    topics: ["Finance", "Healthcare", "Platforms", "Public Sector", "Antitrust"],
    activities: ["Sector Pod Projects", "Governance Stack Design", "Public vs Private Debate"]
  },
  {
    id: 8,
    title: "Global South & India",
    hours: "3h",
    description: "Explore AI governance from Global South perspectives",
    objectives: [
      "Analyze India's middle path approach",
      "Evaluate geopolitical dimensions of AI",
      "Design governance for middle-income democracies"
    ],
    topics: ["India AI Summit", "Global South Perspectives", "Geopolitics", "Export Controls"],
    activities: ["Policy Blueprint Design", "Power Dynamics Discussion", "UN Dialogue Analysis"]
  },
  {
    id: 9,
    title: "Organizational Governance",
    hours: "3h",
    description: "Implement internal AI governance operating models",
    objectives: [
      "Design AI governance structures",
      "Create use-case registers and workflows",
      "Compare centralized vs federated models"
    ],
    topics: ["Risk Committees", "Model Registries", "RACI Matrices", "Procurement Governance"],
    activities: ["Use-Case Register Design", "Approval Workflow Creation", "Governance Model Debate"]
  },
  {
    id: 10,
    title: "Capstone Simulations",
    hours: "2h",
    description: "Synthesize learning through comprehensive projects",
    objectives: [
      "Apply governance concepts to real scenarios",
      "Create organizational AI charters",
      "Design national AI frameworks"
    ],
    topics: ["Regulatory Response", "Organizational Charters", "National Frameworks", "Presentations"],
    activities: ["Capstone Presentations", "Peer Review", "Course Synthesis"]
  }
];

export function CurriculumTimeline() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Complete Curriculum Overview
        </h3>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Click on any module to explore detailed objectives, topics, and activities. Each module combines theoretical knowledge with practical application.
        </p>
      </div>

      <div className="grid gap-4">
        {modules.map((module) => (
          <Card 
            key={module.id} 
            className={`cursor-pointer transition-all ${
              selectedModule === module.id ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
            }`}
            onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
          >
            <CardHeader className="pb-3">
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
                    {selectedModule === module.id ? "−" : "+"}
                  </Button>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300">{module.description}</p>
            </CardHeader>

            {selectedModule === module.id && (
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
        ))}
      </div>

      <div className="text-center mt-8">
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          Download Complete Syllabus
        </Button>
      </div>
    </div>
  );
}
