"use client";

import { useState } from "react";
import { SyllabusCard } from "./SyllabusCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CardData {
  id: string;
  title: string;
  type: "display" | "quiz" | "cheatsheet" | "activity" | "case-study" | "debate" | "reading" | "video" | "project";
  module: number;
  description: string;
  duration?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
  tags?: string[];
}

const completeSyllabusCards: CardData[] = [
  // Module 10: Future Frontiers and Capstone (35 cards)
  {
    id: "m10-1",
    title: "AI Safety and Alignment Research",
    type: "display",
    module: 10,
    description: "Comprehensive overview of current AI safety and alignment research directions, including technical alignment, value loading, and corrigibility approaches. This card examines the cutting-edge research aimed at ensuring advanced AI systems remain beneficial and aligned with human values. We explore how safety research is evolving to address increasingly capable AI systems and the governance implications of these technical developments.",
    duration: "40 min",
    difficulty: "advanced",
    tags: ["AI-safety", "alignment-research", "technical-alignment", "value-loading", "corrigibility"]
  },
  {
    id: "m10-2",
    title: "Technical Alignment Approaches",
    type: "display",
    module: 10,
    description: "In-depth analysis of technical alignment approaches, including inverse reinforcement learning, debate methods, and recursive reward modeling. Examines the strengths and limitations of different alignment techniques.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["technical-alignment", "inverse-RL", "debate-methods", "reward-modeling"]
  },
  {
    id: "m10-3",
    title: "Value Loading Challenges",
    type: "case-study",
    module: 10,
    description: "Examination of value loading challenges in AI systems, including preference learning, cultural differences, and value uncertainty. Analyzes case studies of alignment failures and proposed solutions.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["case-study", "value-loading", "preference-learning", "cultural-differences", "uncertainty"]
  },
  {
    id: "m10-4",
    title: "Corrigibility and Oversight",
    type: "display",
    module: 10,
    description: "Analysis of corrigibility mechanisms and oversight approaches for AI systems. Examines how to design AI systems that can be safely corrected or shut down when needed.",
    duration: "30 min",
    difficulty: "advanced",
    tags: ["corrigibility", "oversight", "safety-mechanisms", "shutdown-procedures"]
  },
  {
    id: "m10-5",
    title: "AGI Governance Challenges",
    type: "display",
    module: 10,
    description: "Examination of governance challenges for artificial general intelligence (AGI) systems, including control problems, monitoring difficulties, and coordination challenges among developers.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["AGI-governance", "control-problems", "monitoring", "coordination"]
  },
  {
    id: "m10-6",
    title: "Existential Risk Mitigation",
    type: "case-study",
    module: 10,
    description: "Analysis of approaches to mitigating existential risks from advanced AI systems. Examines proposed governance frameworks, technical safeguards, and international cooperation mechanisms.",
    duration: "40 min",
    difficulty: "advanced",
    tags: ["case-study", "existential-risks", "governance-frameworks", "technical-safeguards", "international-cooperation"]
  },
  {
    id: "m10-7",
    title: "International Coordination Mechanisms",
    type: "display",
    module: 10,
    description: "Comprehensive analysis of international coordination mechanisms for AI governance, including treaties, verification regimes, and enforcement mechanisms. Examines lessons from nuclear non-proliferation and other domains.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["international-coordination", "treaties", "verification", "enforcement", "non-proliferation"]
  },
  {
    id: "m10-8",
    title: "Verification and Monitoring",
    type: "display",
    module: 10,
    description: "Examination of verification and monitoring approaches for AI development and deployment. Analyzes technical challenges and policy solutions for ensuring compliance with international agreements.",
    duration: "30 min",
    difficulty: "advanced",
    tags: ["verification", "monitoring", "compliance", "technical-challenges", "policy-solutions"]
  },
  {
    id: "m10-9",
    title: "Enforcement Mechanisms",
    type: "display",
    module: 10,
    description: "Analysis of enforcement mechanisms for international AI governance, including sanctions, incentives, and collective security arrangements. Examines effectiveness and implementation challenges.",
    duration: "30 min",
    difficulty: "advanced",
    tags: ["enforcement", "sanctions", "incentives", "collective-security", "implementation"]
  },
  {
    id: "m10-10",
    title: "Emerging Governance Models",
    type: "case-study",
    module: 10,
    description: "Examination of emerging governance models for advanced AI systems, including multi-stakeholder approaches, adaptive governance, and dynamic regulatory frameworks.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["case-study", "emerging-models", "multi-stakeholder", "adaptive-governance", "dynamic-regulation"]
  },
  {
    id: "m10-11",
    title: "Multi-Stakeholder Governance",
    type: "display",
    module: 10,
    description: "Analysis of multi-stakeholder governance approaches for AI, including participation of governments, industry, academia, and civil society. Examines coordination mechanisms and decision-making processes.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["multi-stakeholder", "participation", "coordination", "decision-making"]
  },
  {
    id: "m10-12",
    title: "Adaptive Governance Frameworks",
    type: "display",
    module: 10,
    description: "Examination of adaptive governance frameworks that can evolve with technological developments. Analyzes feedback mechanisms, learning processes, and update procedures.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["adaptive-governance", "feedback-mechanisms", "learning-processes", "updates"]
  },
  {
    id: "m10-13",
    title: "Dynamic Regulatory Approaches",
    type: "activity",
    module: 10,
    description: "Hands-on exercise designing dynamic regulatory approaches for AI governance. Learn to create flexible, responsive regulatory frameworks that can adapt to technological change.",
    duration: "60 min",
    difficulty: "advanced",
    tags: ["activity", "dynamic-regulation", "flexible-frameworks", "responsive-governance"]
  },
  {
    id: "m10-14",
    title: "AI Governance Simulation",
    type: "activity",
    module: 10,
    description: "Comprehensive simulation exercise where teams design and implement governance frameworks for advanced AI systems. Includes scenario development, policy design, and implementation planning.",
    duration: "120 min",
    difficulty: "advanced",
    tags: ["activity", "governance-simulation", "policy-design", "implementation-planning", "scenarios"]
  },
  {
    id: "m10-15",
    title: "Future Scenario Planning",
    type: "activity",
    module: 10,
    description: "Strategic planning exercise developing future scenarios for AI governance. Learn to identify key uncertainties, develop scenario narratives, and plan response strategies.",
    duration: "70 min",
    difficulty: "intermediate",
    tags: ["activity", "scenario-planning", "uncertainty-analysis", "strategic-planning"]
  },
  {
    id: "m10-16",
    title: "Technology Forecasting",
    type: "display",
    module: 10,
    description: "Analysis of technology forecasting methods for AI development, including trend analysis, expert elicitation, and modeling approaches. Examines accuracy and limitations of different forecasting techniques.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["technology-forecasting", "trend-analysis", "expert-elicitation", "modeling"]
  },
  {
    id: "m10-17",
    title: "Policy Innovation Labs",
    type: "case-study",
    module: 10,
    description: "Examination of policy innovation labs and experimental approaches to AI governance. Analyzes successful experiments and lessons learned for policy development.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "policy-innovation", "experimental-approaches", "policy-development"]
  },
  {
    id: "m10-18",
    title: "Governance Research Priorities",
    type: "display",
    module: 10,
    description: "Analysis of research priorities for AI governance, including knowledge gaps, methodological challenges, and funding needs. Examines how to prioritize research efforts effectively.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["research-priorities", "knowledge-gaps", "methodology", "funding-needs"]
  },
  {
    id: "m10-19",
    title: "Capacity Building Strategies",
    type: "display",
    module: 10,
    description: "Examination of capacity building strategies for AI governance, including education programs, institutional development, and international cooperation initiatives.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["capacity-building", "education", "institutional-development", "international-cooperation"]
  },
  {
    id: "m10-20",
    title: "Global Governance Architecture",
    type: "debate",
    module: 10,
    description: "Structured debate on the optimal global governance architecture for AI, including centralized vs decentralized approaches, the role of existing institutions, and the need for new organizations.",
    duration: "60 min",
    difficulty: "advanced",
    tags: ["debate", "global-architecture", "centralization", "institutions", "organizational-design"]
  },
  {
    id: "m10-21",
    title: "Arguments for Centralized Governance",
    type: "display",
    module: 10,
    description: "Analysis of arguments supporting centralized global AI governance, including coordination benefits, enforcement capabilities, and consistency advantages.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["centralized-governance", "coordination", "enforcement", "consistency"]
  },
  {
    id: "m10-22",
    title: "Arguments for Decentralized Approaches",
    type: "display",
    module: 10,
    description: "Examination of arguments for decentralized AI governance approaches, including flexibility, innovation, and cultural sensitivity benefits.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["decentralized-governance", "flexibility", "innovation", "cultural-sensitivity"]
  },
  {
    id: "m10-23",
    title: "Institutional Design Options",
    type: "activity",
    module: 10,
    description: "Design exercise exploring institutional design options for global AI governance. Learn to evaluate different organizational structures and mandate designs.",
    duration: "55 min",
    difficulty: "advanced",
    tags: ["activity", "institutional-design", "organizational-structures", "mandate-design"]
  },
  {
    id: "m10-24",
    title: "Implementation Roadmaps",
    type: "activity",
    module: 10,
    description: "Hands-on exercise developing implementation roadmaps for AI governance initiatives. Learn to create phased approaches, identify milestones, and plan resource allocation.",
    duration: "65 min",
    difficulty: "intermediate",
    tags: ["activity", "implementation-roadmaps", "phased-approaches", "milestones", "resource-planning"]
  },
  {
    id: "m10-25",
    title: "Monitoring and Evaluation",
    type: "display",
    module: 10,
    description: "Analysis of monitoring and evaluation frameworks for AI governance initiatives. Examines indicators, data collection methods, and evaluation approaches.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["monitoring", "evaluation", "indicators", "data-collection"]
  },
  {
    id: "m10-26",
    title: "Learning and Adaptation",
    type: "display",
    module: 10,
    description: "Examination of learning and adaptation mechanisms in AI governance systems. Analyzes feedback loops, knowledge management, and continuous improvement processes.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["learning", "adaptation", "feedback-loops", "knowledge-management"]
  },
  {
    id: "m10-27",
    title: "Ethical Framework Evolution",
    type: "display",
    module: 10,
    description: "Analysis of how ethical frameworks for AI are evolving to address new challenges. Examines the role of philosophy, cultural studies, and empirical research in ethical development.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["ethical-frameworks", "evolution", "philosophy", "cultural-studies", "empirical-research"]
  },
  {
    id: "m10-28",
    title: "Public Engagement Strategies",
    type: "display",
    module: 10,
    description: "Examination of public engagement strategies for AI governance, including deliberative democracy approaches, citizen assemblies, and participatory technology assessment.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["public-engagement", "deliberative-democracy", "citizen-assemblies", "participatory-assessment"]
  },
  {
    id: "m10-29",
    title: "Science Communication",
    type: "activity",
    module: 10,
    description: "Hands-on exercise developing science communication strategies for AI governance. Learn to communicate complex technical concepts to diverse audiences.",
    duration: "50 min",
    difficulty: "intermediate",
    tags: ["activity", "science-communication", "technical-concepts", "audience-adaptation"]
  },
  {
    id: "m10-30",
    title: "Crisis Response Planning",
    type: "activity",
    module: 10,
    description: "Strategic exercise developing crisis response plans for AI-related emergencies. Learn to design protocols, communication strategies, and coordination mechanisms.",
    duration: "60 min",
    difficulty: "advanced",
    tags: ["activity", "crisis-response", "emergency-protocols", "communication", "coordination"]
  },
  {
    id: "m10-31",
    title: "Module 10 Assessment",
    type: "quiz",
    module: 10,
    description: "Comprehensive assessment covering AI safety research, AGI governance, international coordination, future scenarios, and governance innovations.",
    duration: "45 min",
    difficulty: "advanced",
    tags: ["quiz", "assessment", "module-10", "future-frontiers"]
  },
  {
    id: "m10-32",
    title: "Governance Innovation Project",
    type: "project",
    module: 10,
    description: "Capstone project developing innovative governance solutions for advanced AI challenges. Includes research, design, and implementation planning.",
    duration: "120 min",
    difficulty: "advanced",
    tags: ["project", "governance-innovation", "research", "design", "implementation"]
  },
  {
    id: "m10-33",
    title: "Future Scenario Analysis",
    type: "project",
    module: 10,
    description: "Research project developing detailed future scenarios for AI governance, including trend analysis, uncertainty mapping, and policy implications.",
    duration: "110 min",
    difficulty: "advanced",
    tags: ["project", "scenario-analysis", "trend-analysis", "uncertainty-mapping", "policy-implications"]
  },
  {
    id: "m10-34",
    title: "International Framework Design",
    type: "project",
    module: 10,
    description: "Design project creating a comprehensive international framework for AI governance, including institutional design, enforcement mechanisms, and implementation strategies.",
    duration: "130 min",
    difficulty: "advanced",
    tags: ["project", "international-framework", "institutional-design", "enforcement", "implementation"]
  },
  {
    id: "m10-35",
    title: "Course Synthesis and Reflection",
    type: "activity",
    module: 10,
    description: "Final synthesis activity reflecting on learning across all modules and developing personal AI governance frameworks and action plans.",
    duration: "90 min",
    difficulty: "intermediate",
    tags: ["activity", "course-synthesis", "reflection", "personal-frameworks", "action-planning"]
  },

  // Module 11: Capstone Project (35 cards)
  {
    id: "m11-1",
    title: "Capstone Project Overview",
    type: "display",
    module: 11,
    description: "Comprehensive overview of the capstone project requirements, including three tracks (policy, technical, organizational), deliverables, timelines, and evaluation criteria. This card explains how learners will apply knowledge from all previous modules to solve real-world AI governance challenges. We explore project selection, team formation, and the integration of diverse perspectives into comprehensive governance solutions.",
    duration: "40 min",
    difficulty: "beginner",
    tags: ["capstone-overview", "project-tracks", "deliverables", "evaluation-criteria", "team-formation"]
  },
  {
    id: "m11-2",
    title: "Policy Track Requirements",
    type: "display",
    module: 11,
    description: "Detailed examination of the policy track capstone requirements, including policy brief development, regulatory analysis, stakeholder engagement, and implementation planning. Explores how to create effective, evidence-based policy recommendations.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["policy-track", "policy-briefs", "regulatory-analysis", "stakeholder-engagement", "implementation"]
  },
  {
    id: "m11-3",
    title: "Technical Track Requirements",
    type: "display",
    module: 11,
    description: "Analysis of the technical track capstone requirements, including governance system design, technical controls implementation, monitoring frameworks, and audit procedures. Examines how to translate governance principles into technical solutions.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["technical-track", "governance-systems", "technical-controls", "monitoring-frameworks", "audit-procedures"]
  },
  {
    id: "m11-4",
    title: "Organizational Track Requirements",
    type: "display",
    module: 11,
    description: "Examination of the organizational track capstone requirements, including governance framework development, operating model design, change management, and capacity building. Explores how to implement governance in organizational contexts.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["organizational-track", "governance-frameworks", "operating-models", "change-management", "capacity-building"]
  },
  {
    id: "m11-5",
    title: "Project Selection Criteria",
    type: "activity",
    module: 11,
    description: "Hands-on exercise evaluating and selecting capstone projects based on feasibility, impact, learning value, and resource requirements. Learn to choose projects that align with personal goals and course objectives.",
    duration: "60 min",
    difficulty: "intermediate",
    tags: ["activity", "project-selection", "feasibility-analysis", "impact-assessment", "goal-alignment"]
  },
  {
    id: "m11-6",
    title: "Team Formation and Roles",
    type: "activity",
    module: 11,
    description: "Team formation exercise defining roles, responsibilities, and collaboration approaches for capstone projects. Learn to build effective teams and manage group dynamics.",
    duration: "55 min",
    difficulty: "intermediate",
    tags: ["activity", "team-formation", "role-definition", "collaboration", "group-dynamics"]
  },
  {
    id: "m11-7",
    title: "Project Planning and Scoping",
    type: "activity",
    module: 11,
    description: "Comprehensive project planning exercise developing work breakdown structures, timelines, resource plans, and risk assessments for capstone projects.",
    duration: "70 min",
    difficulty: "intermediate",
    tags: ["activity", "project-planning", "work-breakdown", "timelines", "resource-planning", "risk-assessment"]
  },
  {
    id: "m11-8",
    title: "Research Methodologies",
    type: "display",
    module: 11,
    description: "Overview of research methodologies applicable to capstone projects, including qualitative and quantitative methods, case study approaches, and policy analysis techniques.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["research-methodologies", "qualitative-methods", "quantitative-methods", "case-studies", "policy-analysis"]
  },
  {
    id: "m11-9",
    title: "Stakeholder Analysis Framework",
    type: "cheatsheet",
    module: 11,
    description: "Comprehensive guide to stakeholder analysis for capstone projects, including identification methods, influence mapping, and engagement strategies. Templates and tools included.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["cheatsheet", "stakeholder-analysis", "identification", "influence-mapping", "engagement-strategies"]
  },
  {
    id: "m11-10",
    title: "Policy Development Process",
    type: "display",
    module: 11,
    description: "Analysis of the policy development process for capstone projects, including problem definition, evidence gathering, option analysis, and recommendation formulation.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["policy-development", "problem-definition", "evidence-gathering", "option-analysis", "recommendations"]
  },
  {
    id: "m11-11",
    title: "Technical Design Principles",
    type: "display",
    module: 11,
    description: "Examination of technical design principles for governance systems, including security, privacy, scalability, and maintainability considerations.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["technical-design", "security", "privacy", "scalability", "maintainability"]
  },
  {
    id: "m11-12",
    title: "Organizational Implementation",
    type: "display",
    module: 11,
    description: "Analysis of organizational implementation strategies for governance frameworks, including change management, training, and performance measurement.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["organizational-implementation", "change-management", "training", "performance-measurement"]
  },
  {
    id: "m11-13",
    title: "Progress Monitoring and Reporting",
    type: "activity",
    module: 11,
    description: "Hands-on exercise developing progress monitoring and reporting systems for capstone projects. Learn to track milestones, manage risks, and communicate progress effectively.",
    duration: "50 min",
    difficulty: "intermediate",
    tags: ["activity", "progress-monitoring", "milestone-tracking", "risk-management", "progress-communication"]
  },
  {
    id: "m11-14",
    title: "Quality Assurance and Review",
    type: "display",
    module: 11,
    description: "Examination of quality assurance processes and review mechanisms for capstone project deliverables. Analyzes peer review, expert feedback, and iterative improvement approaches.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["quality-assurance", "review-processes", "peer-review", "expert-feedback", "iterative-improvement"]
  },
  {
    id: "m11-15",
    title: "Presentation Skills",
    type: "activity",
    module: 11,
    description: "Practical exercise developing presentation skills for capstone project defense. Learn to structure presentations, handle questions, and communicate complex ideas effectively.",
    duration: "55 min",
    difficulty: "intermediate",
    tags: ["activity", "presentation-skills", "presentation-structure", "question-handling", "communication"]
  },
  {
    id: "m11-16",
    title: "Documentation Best Practices",
    type: "cheatsheet",
    module: 11,
    description: "Comprehensive guide to documentation best practices for capstone projects, including report structure, citation methods, and visual communication. Templates and examples included.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["cheatsheet", "documentation", "report-structure", "citation-methods", "visual-communication"]
  },
  {
    id: "m11-17",
    title: "Ethical Considerations in Projects",
    type: "display",
    module: 11,
    description: "Analysis of ethical considerations in capstone projects, including research ethics, stakeholder rights, and social impact assessment. Examines how to ensure responsible project conduct.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["ethical-considerations", "research-ethics", "stakeholder-rights", "social-impact", "responsible-conduct"]
  },
  {
    id: "m11-18",
    title: "Policy Track Workshop",
    type: "activity",
    module: 11,
    description: "Workshop session for policy track students focusing on policy brief development, stakeholder analysis, and implementation planning. Includes peer feedback and expert consultation.",
    duration: "120 min",
    difficulty: "intermediate",
    tags: ["activity", "policy-workshop", "policy-briefs", "peer-feedback", "expert-consultation"]
  },
  {
    id: "m11-19",
    title: "Technical Track Workshop",
    type: "activity",
    module: 11,
    description: "Workshop session for technical track students focusing on governance system design, technical implementation, and testing. Includes code review and technical validation.",
    duration: "120 min",
    difficulty: "intermediate",
    tags: ["activity", "technical-workshop", "system-design", "implementation", "testing", "code-review"]
  },
  {
    id: "m11-20",
    title: "Organizational Track Workshop",
    type: "activity",
    module: 11,
    description: "Workshop session for organizational track students focusing on framework development, change management, and implementation planning. Includes case study analysis and expert feedback.",
    duration: "120 min",
    difficulty: "intermediate",
    tags: ["activity", "organizational-workshop", "framework-development", "change-management", "case-studies"]
  },
  {
    id: "m11-21",
    title: "Mid-Project Review",
    type: "activity",
    module: 11,
    description: "Mid-project review session where teams present progress, receive feedback, and refine their approaches. Includes peer review and instructor consultation.",
    duration: "90 min",
    difficulty: "intermediate",
    tags: ["activity", "mid-project-review", "progress-presentation", "peer-review", "instructor-feedback"]
  },
  {
    id: "m11-22",
    title: "Final Project Preparation",
    type: "activity",
    module: 11,
    description: "Final preparation session for capstone project completion and presentation. Includes final review, presentation practice, and submission requirements.",
    duration: "100 min",
    difficulty: "intermediate",
    tags: ["activity", "final-preparation", "project-completion", "presentation-practice", "submission"]
  },
  {
    id: "m11-23",
    title: "Project Defense Presentations",
    type: "activity",
    module: 11,
    description: "Final project defense presentations where teams showcase their capstone work, answer questions, and receive evaluation. Includes external stakeholder participation.",
    duration: "180 min",
    difficulty: "intermediate",
    tags: ["activity", "project-defense", "presentations", "evaluation", "external-stakeholders"]
  },
  {
    id: "m11-24",
    title: "Peer Evaluation Process",
    type: "activity",
    module: 11,
    description: "Peer evaluation exercise where teams assess each other's capstone projects using structured evaluation criteria. Learn to provide constructive feedback and evaluate project quality.",
    duration: "70 min",
    difficulty: "intermediate",
    tags: ["activity", "peer-evaluation", "structured-feedback", "project-quality", "constructive-criticism"]
  },
  {
    id: "m11-25",
    title: "Lessons Learned Synthesis",
    type: "activity",
    module: 11,
    description: "Synthesis exercise capturing lessons learned from capstone projects and the overall course. Learn to reflect on achievements, challenges, and future applications.",
    duration: "60 min",
    difficulty: "intermediate",
    tags: ["activity", "lessons-learned", "reflection", "achievements", "challenges", "future-applications"]
  },
  {
    id: "m11-26",
    title: "Portfolio Development",
    type: "activity",
    module: 11,
    description: "Portfolio development exercise creating professional portfolios showcasing capstone project work and course achievements. Learn to present work for career advancement.",
    duration: "55 min",
    difficulty: "intermediate",
    tags: ["activity", "portfolio-development", "professional-presentation", "career-advancement", "work-showcase"]
  },
  {
    id: "m11-27",
    title: "Networking and Career Planning",
    type: "activity",
    module: 11,
    description: "Networking and career planning exercise connecting course learning with professional opportunities. Learn to leverage capstone experience for career development.",
    duration: "50 min",
    difficulty: "intermediate",
    tags: ["activity", "networking", "career-planning", "professional-opportunities", "career-development"]
  },
  {
    id: "m11-28",
    title: "Industry Collaboration Opportunities",
    type: "display",
    module: 11,
    description: "Overview of industry collaboration opportunities emerging from capstone projects, including internships, research partnerships, and employment opportunities.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["industry-collaboration", "internships", "research-partnerships", "employment-opportunities"]
  },
  {
    id: "m11-29",
    title: "Continued Learning Pathways",
    type: "display",
    module: 11,
    description: "Analysis of continued learning pathways after course completion, including advanced study, research opportunities, and professional development options.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["continued-learning", "advanced-study", "research-opportunities", "professional-development"]
  },
  {
    id: "m11-30",
    title: "Alumni Network Engagement",
    type: "display",
    module: 11,
    description: "Examination of alumni network engagement opportunities, including mentorship, collaboration, and knowledge sharing. Explores how to stay connected with the AI governance community.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["alumni-network", "mentorship", "collaboration", "knowledge-sharing", "community-engagement"]
  },
  {
    id: "m11-31",
    title: "Course Impact Assessment",
    type: "activity",
    module: 11,
    description: "Course impact assessment exercise evaluating the effectiveness of the AI Governance course and identifying areas for improvement. Includes feedback collection and analysis.",
    duration: "60 min",
    difficulty: "intermediate",
    tags: ["activity", "impact-assessment", "course-evaluation", "feedback-analysis", "improvement-identification"]
  },
  {
    id: "m11-32",
    title: "Future Course Development",
    type: "display",
    module: 11,
    description: "Analysis of future course development directions based on capstone project outcomes and learner feedback. Examines potential new modules and specializations.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["course-development", "future-directions", "new-modules", "specializations", "feedback-integration"]
  },
  {
    id: "m11-33",
    title: "Capstone Project Showcase",
    type: "activity",
    module: 11,
    description: "Final showcase event presenting capstone projects to external stakeholders, industry partners, and the broader AI governance community.",
    duration: "150 min",
    difficulty: "intermediate",
    tags: ["activity", "project-showcase", "external-stakeholders", "industry-partners", "community-engagement"]
  },
  {
    id: "m11-34",
    title: "Certificate Award and Recognition",
    type: "display",
    module: 11,
    description: "Certificate award and recognition ceremony celebrating course completion and capstone achievements. Includes special recognition for outstanding projects.",
    duration: "60 min",
    difficulty: "beginner",
    tags: ["certificate-award", "course-completion", "achievement-recognition", "celebration"]
  },
  {
    id: "m11-35",
    title: "Course Completion Reflection",
    type: "activity",
    module: 11,
    description: "Final reflection exercise on the complete AI Governance course journey, including personal growth, knowledge acquisition, and future applications of learning.",
    duration: "45 min",
    difficulty: "beginner",
    tags: ["activity", "course-reflection", "personal-growth", "knowledge-acquisition", "future-applications"]
  }
];

export function CompleteSyllabusModules() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const modules = Array.from({ length: 11 }, (_, i) => i);
  const types = ["display", "quiz", "cheatsheet", "activity", "case-study", "debate", "reading", "video", "project"];

  const filteredCards = completeSyllabusCards.filter(card => {
    const moduleMatch = selectedModule === null || card.module === selectedModule;
    const typeMatch = selectedType === null || card.type === selectedType;
    return moduleMatch && typeMatch;
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Complete AI Governance Syllabus (Modules 10-11)
        </h3>
        
        <div className="space-y-4">
          {/* Module Filter */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Filter by Module
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedModule(null)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedModule === null
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All Modules
              </button>
              {modules.map(module => (
                <button
                  key={module}
                  onClick={() => setSelectedModule(module)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedModule === module
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  Module {module}
                </button>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Filter by Card Type
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedType(null)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedType === null
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                All Types
              </button>
              {types.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedType === type
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {type.replace("-", " ").toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
          Showing {filteredCards.length} cards
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCards.map(card => (
          <SyllabusCard
            key={card.id}
            id={card.id}
            title={card.title}
            type={card.type}
            module={card.module}
            description={card.description}
            duration={card.duration}
            difficulty={card.difficulty}
            tags={card.tags}
            onClick={() => console.log(`Card ${card.id} clicked`)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredCards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600 dark:text-slate-400">
            No cards match your current filters. Try adjusting your selection.
          </p>
        </div>
      )}
    </div>
  );
}
