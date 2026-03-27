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

const syllabusCards: CardData[] = [
  // Module 0: Orientation & Pre-work (35 cards)
  {
    id: "m0-1",
    title: "AI Governance vs AI Ethics vs AI Safety",
    type: "display",
    module: 0,
    description: "Understanding the fundamental distinctions between AI governance, ethics, and safety frameworks. This foundational module helps learners navigate the complex landscape of AI oversight by clarifying terminology, scope, and practical applications. We explore how governance focuses on rules and compliance, ethics on moral principles, and safety on technical risk mitigation.",
    duration: "15 min",
    difficulty: "beginner",
    tags: ["terminology", "foundations", "frameworks"]
  },
  {
    id: "m0-2",
    title: "Ethical Principles Overview",
    type: "cheatsheet",
    module: 0,
    description: "Quick reference guide to the seven core ethical principles: beneficence, non-maleficence, autonomy, justice, privacy, transparency, and accountability. This cheatsheet provides concise definitions, real-world examples, and implementation guidelines for each principle in AI systems.",
    duration: "10 min",
    difficulty: "beginner",
    tags: ["ethics", "principles", "reference"]
  },
  {
    id: "m0-3",
    title: "Course Structure & Project Tracks",
    type: "display",
    module: 0,
    description: "Comprehensive overview of the 30-hour course structure, including module breakdown, assessment criteria, and three project tracks (policy, technical, organizational). Learn how to navigate the curriculum and choose the specialization path that aligns with your career goals and interests.",
    duration: "20 min",
    difficulty: "beginner",
    tags: ["course-guide", "projects", "assessment"]
  },
  {
    id: "m0-4",
    title: "Turing Lecture: Can We Trust AI?",
    type: "video",
    module: 0,
    description: "Analysis of the seminal Turing Lecture examining bias in AI systems, audit requirements, and political implications of automated decision-making. This video explores the technical and social challenges of building trustworthy AI systems in democratic societies.",
    duration: "45 min",
    difficulty: "intermediate",
    tags: ["video", "bias", "audits", "politics"]
  },
  {
    id: "m0-5",
    title: "Stewart Russell: Provably Beneficial AI",
    type: "video",
    module: 0,
    description: "Deep dive into Russell's groundbreaking work on the control problem and uncertainty over human objectives. This lecture presents mathematical frameworks for ensuring AI systems remain beneficial even when we cannot perfectly specify human preferences.",
    duration: "50 min",
    difficulty: "advanced",
    tags: ["video", "safety", "control-problem", "uncertainty"]
  },
  {
    id: "m0-6",
    title: "AI Governance Terminology Quiz",
    type: "quiz",
    module: 0,
    description: "Test your understanding of key terms and concepts in AI governance, including regulatory frameworks, ethical principles, and technical safety measures. This quiz covers 20 essential terms that form the foundation of the course.",
    duration: "15 min",
    difficulty: "beginner",
    tags: ["quiz", "terminology", "assessment"]
  },
  {
    id: "m0-7",
    title: "Miro Board: AI Gone Wrong Examples",
    type: "activity",
    module: 0,
    description: "Collaborative exercise where learners post and categorize real-world AI failures. Each example must be tagged with relevant domains: safety, fairness, privacy, IP, disinformation, or labor. This activity builds a collective understanding of AI risks.",
    duration: "30 min",
    difficulty: "beginner",
    tags: ["activity", "collaborative", "risk-analysis"]
  },
  {
    id: "m0-8",
    title: "Ethics Deck Study Guide",
    type: "reading",
    module: 0,
    description: "Structured study guide for the Ethics in AI presentation, focusing on the seven core principles and their practical applications. Includes reflection questions and real-world case examples to deepen understanding.",
    duration: "25 min",
    difficulty: "beginner",
    tags: ["reading", "ethics", "study-guide"]
  },
  {
    id: "m0-9",
    title: "Learning Path Assessment",
    type: "quiz",
    module: 0,
    description: "Personalized assessment to help determine your optimal learning path through the course. Evaluates your background in policy, technology, and organizational contexts to recommend the most suitable project track.",
    duration: "20 min",
    difficulty: "beginner",
    tags: ["quiz", "personalization", "planning"]
  },
  {
    id: "m0-10",
    title: "Course Navigation Tutorial",
    type: "video",
    module: 0,
    description: "Interactive tutorial on how to navigate the course platform, access materials, submit assignments, and participate in discussions. Includes tips for effective online learning and time management.",
    duration: "10 min",
    difficulty: "beginner",
    tags: ["video", "tutorial", "platform-guide"]
  },
  {
    id: "m0-11",
    title: "AI Governance Timeline",
    type: "display",
    module: 0,
    description: "Visual timeline of key developments in AI governance from 2015 to 2026, including major regulatory actions, technological breakthroughs, and policy shifts. Provides historical context for current governance challenges.",
    duration: "15 min",
    difficulty: "beginner",
    tags: ["visual", "timeline", "history"]
  },
  {
    id: "m0-12",
    title: "Stakeholder Mapping Exercise",
    type: "activity",
    module: 0,
    description: "Interactive exercise to identify and categorize AI governance stakeholders across different sectors. Learn to map influence, interests, and relationships among governments, companies, civil society, and technical communities.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["activity", "stakeholders", "mapping"]
  },
  {
    id: "m0-13",
    title: "Global Governance Frameworks Comparison",
    type: "cheatsheet",
    module: 0,
    description: "Side-by-side comparison of major AI governance frameworks from US, EU, China, India, and international organizations. Includes key principles, enforcement mechanisms, and scope differences.",
    duration: "20 min",
    difficulty: "intermediate",
    tags: ["comparison", "frameworks", "global"]
  },
  {
    id: "m0-14",
    title: "Risk Assessment Fundamentals",
    type: "display",
    module: 0,
    description: "Introduction to risk assessment methodologies used in AI governance, covering probability-impact matrices, risk categories, and mitigation strategies. Foundation for more advanced risk management topics.",
    duration: "30 min",
    difficulty: "beginner",
    tags: ["risk", "assessment", "methodology"]
  },
  {
    id: "m0-15",
    title: "Ethical Dilemma Scenarios",
    type: "case-study",
    module: 0,
    description: "Five realistic ethical dilemmas in AI development and deployment. Each scenario presents conflicting values and requires learners to apply ethical principles to reach reasoned decisions.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "ethics", "decision-making"]
  },
  {
    id: "m0-16",
    title: "Technical vs Policy Approaches",
    type: "debate",
    module: 0,
    description: "Structured debate on whether technical solutions or policy frameworks are more effective for AI governance. Learners argue different positions and explore the interplay between both approaches.",
    duration: "40 min",
    difficulty: "intermediate",
    tags: ["debate", "technical", "policy"]
  },
  {
    id: "m0-17",
    title: "AI Impact Assessment Template",
    type: "cheatsheet",
    module: 0,
    description: "Downloadable template for conducting AI impact assessments, including checklists, scoring rubrics, and reporting formats. Practical tool for evaluating AI systems across multiple dimensions.",
    duration: "15 min",
    difficulty: "intermediate",
    tags: ["template", "assessment", "practical"]
  },
  {
    id: "m0-18",
    title: "Professional Codes of Conduct",
    type: "reading",
    module: 0,
    description: "Overview of professional codes of conduct for AI practitioners from various organizations (ACM, IEEE, ISO). Compares different approaches to professional responsibility in AI development.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["reading", "professional", "codes"]
  },
  {
    id: "m0-19",
    title: "Bias Detection Techniques",
    type: "display",
    module: 0,
    description: "Technical overview of bias detection methods in AI systems, including statistical tests, fairness metrics, and audit procedures. Introduces tools and techniques for identifying and measuring bias.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["technical", "bias", "detection"]
  },
  {
    id: "m0-20",
    title: "Transparency Requirements",
    type: "cheatsheet",
    module: 0,
    description: "Comprehensive guide to transparency requirements in AI governance, including documentation standards, explainability expectations, and disclosure obligations across different jurisdictions.",
    duration: "20 min",
    difficulty: "intermediate",
    tags: ["transparency", "documentation", "requirements"]
  },
  {
    id: "m0-21",
    title: "Accountability Mechanisms",
    type: "display",
    module: 0,
    description: "Exploration of accountability mechanisms in AI governance, from internal oversight boards to external regulatory enforcement. Examines how responsibility is assigned and enforced in AI systems.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["accountability", "oversight", "enforcement"]
  },
  {
    id: "m0-22",
    title: "Privacy by Design Principles",
    type: "reading",
    module: 0,
    description: "Introduction to privacy by design principles and their application in AI systems. Covers data minimization, purpose limitation, and privacy-enhancing technologies.",
    duration: "20 min",
    difficulty: "beginner",
    tags: ["privacy", "design", "principles"]
  },
  {
    id: "m0-23",
    title: "Safety Engineering Basics",
    type: "display",
    module: 0,
    description: "Fundamental concepts in AI safety engineering, including redundancy, fail-safes, and validation procedures. Provides technical foundation for understanding AI system safety.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["safety", "engineering", "technical"]
  },
  {
    id: "m0-24",
    title: "Regulatory Compliance Checklist",
    type: "cheatsheet",
    module: 0,
    description: "Practical checklist for regulatory compliance in AI systems, covering documentation, testing, and reporting requirements across major jurisdictions.",
    duration: "15 min",
    difficulty: "intermediate",
    tags: ["compliance", "checklist", "regulatory"]
  },
  {
    id: "m0-25",
    title: "Cross-Cultural Considerations",
    type: "display",
    module: 0,
    description: "Analysis of how cultural differences impact AI governance approaches and ethical considerations. Explores varying values and priorities across different regions and societies.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["cultural", "global", "values"]
  },
  {
    id: "m0-26",
    title: "AI Governance Glossary",
    type: "cheatsheet",
    module: 0,
    description: "Comprehensive glossary of 100+ terms used in AI governance, with definitions, examples, and cross-references. Essential reference for navigating technical and policy discussions.",
    duration: "30 min",
    difficulty: "beginner",
    tags: ["glossary", "reference", "terminology"]
  },
  {
    id: "m0-27",
    title: "Stakeholder Engagement Strategies",
    type: "activity",
    module: 0,
    description: "Role-playing exercise to practice stakeholder engagement in AI governance scenarios. Learn to communicate with different audiences and build consensus around AI policies.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["activity", "communication", "engagement"]
  },
  {
    id: "m0-28",
    title: "Ethics Framework Selection",
    type: "quiz",
    module: 0,
    description: "Interactive quiz to help select appropriate ethics frameworks for different AI applications. Evaluates context, risk level, and stakeholder requirements.",
    duration: "20 min",
    difficulty: "intermediate",
    tags: ["quiz", "frameworks", "selection"]
  },
  {
    id: "m0-29",
    title: "Historical AI Incidents",
    type: "case-study",
    module: 0,
    description: "Analysis of 10 significant AI incidents from 2010-2025, examining causes, impacts, and lessons learned. Provides historical context for current governance challenges.",
    duration: "40 min",
    difficulty: "intermediate",
    tags: ["case-study", "history", "incidents"]
  },
  {
    id: "m0-30",
    title: "Governance Maturity Model",
    type: "display",
    module: 0,
    description: "Introduction to a five-level maturity model for AI governance in organizations. Helps assess current capabilities and plan improvement strategies.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["maturity", "assessment", "organizational"]
  },
  {
    id: "m0-31",
    title: "International Standards Overview",
    type: "reading",
    module: 0,
    description: "Survey of international standards for AI governance from ISO, IEEE, and other standardization bodies. Compares scope, requirements, and adoption status.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["standards", "international", "comparison"]
  },
  {
    id: "m0-32",
    title: "Risk Communication Strategies",
    type: "activity",
    module: 0,
    description: "Practice communicating AI risks to different audiences, from technical teams to executive leadership. Learn to tailor messages for maximum impact and understanding.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["activity", "communication", "risk"]
  },
  {
    id: "m0-33",
    title: "Governance Tool Selection",
    type: "quiz",
    module: 0,
    description: "Interactive tool selection guide for AI governance, helping choose appropriate frameworks, methodologies, and technologies based on specific needs and contexts.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["quiz", "tools", "selection"]
  },
  {
    id: "m0-34",
    title: "Course Success Strategies",
    type: "display",
    module: 0,
    description: "Evidence-based strategies for success in the AI Governance course, including study techniques, time management, and engagement best practices.",
    duration: "15 min",
    difficulty: "beginner",
    tags: ["success", "strategies", "study-tips"]
  },
  {
    id: "m0-35",
    title: "Orientation Knowledge Check",
    type: "quiz",
    module: 0,
    description: "Comprehensive assessment of orientation module learning objectives, covering terminology, frameworks, and foundational concepts. Required before proceeding to Module 1.",
    duration: "30 min",
    difficulty: "beginner",
    tags: ["quiz", "assessment", "knowledge-check"]
  },

  // Module 1: Why AI Governance, Why Now (40 cards)
  {
    id: "m1-1",
    title: "From Ethics to Governance: The 2024 Shift",
    type: "display",
    module: 1,
    description: "Analysis of the pivotal shift from voluntary ethics frameworks to mandatory governance structures following 2024's regulatory breakthroughs. This card examines how high-profile AI failures and technological advances forced governments worldwide to move from principles to enforcement.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["history", "regulation", "paradigm-shift"]
  },
  {
    id: "m1-2",
    title: "2025-2026: The AI Governance Inflection Point",
    type: "display",
    module: 1,
    description: "Comprehensive analysis of why 2025-2026 represents a critical juncture in AI governance, coinciding with widespread AI deployment, major regulatory implementations, and societal awareness reaching critical mass.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["timeline", "inflection", "critical-mass"]
  },
  {
    id: "m1-3",
    title: "EU AI Act Phased Implementation",
    type: "case-study",
    module: 1,
    description: "Detailed examination of the EU AI Act's rolling implementation schedule, focusing on unacceptable-risk bans taking effect in 2025, GPAI rules in 2026, and high-risk regime ramping through 2027. Includes compliance timelines and enforcement mechanisms.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["case-study", "EU-AI-Act", "implementation", "timeline"]
  },
  {
    id: "m1-4",
    title: "Unacceptable Risk Applications",
    type: "cheatsheet",
    module: 1,
    description: "Quick reference guide to the eight categories of unacceptable-risk AI applications banned under the EU AI Act, including social scoring, real-time biometric identification, and manipulative techniques.",
    duration: "15 min",
    difficulty: "intermediate",
    tags: ["cheatsheet", "EU-AI-Act", "risk-categories", "bans"]
  },
  {
    id: "m1-5",
    title: "GPAI Rules and Obligations",
    type: "display",
    module: 1,
    description: "In-depth exploration of General Purpose AI (GPAI) rules under the EU AI Act, covering transparency requirements, copyright compliance, model evaluation, and systemic risk mitigation for foundation models.",
    duration: "30 min",
    difficulty: "advanced",
    tags: ["GPAI", "foundation-models", "transparency", "obligations"]
  },
  {
    id: "m1-6",
    title: "AI Regulatory Sandboxes",
    type: "activity",
    module: 1,
    description: "Interactive simulation of participating in an AI regulatory sandbox. Learn to design, test, and validate innovative AI systems under regulatory supervision while managing risks and compliance requirements.",
    duration: "40 min",
    difficulty: "intermediate",
    tags: ["activity", "sandbox", "innovation", "testing"]
  },
  {
    id: "m1-7",
    title: "US Federal Deregulation Trends",
    type: "case-study",
    module: 1,
    description: "Analysis of US federal policy trends toward AI deregulation and market-driven governance under the 2024-2026 administration. Compares federal approach with assertive state-level regulations.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "US-policy", "deregulation", "federalism"]
  },
  {
    id: "m1-8",
    title: "State-Level AI Regulations",
    type: "display",
    module: 1,
    description: "Comprehensive overview of state-level AI regulations in the US, focusing on deepfake laws, non-consensual imagery bans, algorithmic discrimination rules, and emerging comprehensive AI bills.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["US-states", "regulations", "deepfakes", "discrimination"]
  },
  {
    id: "m1-9",
    title: "AI Litigation Surge 2025-2026",
    type: "case-study",
    module: 1,
    description: "Analysis of the dramatic increase in AI-related litigation from 2025-2026, covering hallucination cases, copyright infringement, privacy violations, and professional responsibility claims.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["litigation", "legal-cases", "enforcement", "trends"]
  },
  {
    id: "m1-10",
    title: "NYT v OpenAI: Copyright Landmark",
    type: "case-study",
    module: 1,
    description: "Detailed examination of the New York Times v. OpenAI case, analyzing fair use arguments, training data copyright issues, and implications for the entire AI industry's data practices.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["case-study", "copyright", "NYT-v-OpenAI", "training-data"]
  },
  {
    id: "m1-11",
    title: "Clearview AI Settlement Analysis",
    type: "case-study",
    module: 1,
    description: "In-depth analysis of the Clearview AI class action settlement under Illinois BIPA, examining biometric privacy violations, scraping practices, and implications for facial recognition regulation.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "Clearview", "biometrics", "privacy", "BIPA"]
  },
  {
    id: "m1-12",
    title: "FTC AI Marketing Enforcement",
    type: "case-study",
    module: 1,
    description: "Analysis of FTC actions against companies for deceptive AI marketing claims, including cases involving exaggerated capabilities, undisclosed limitations, and misleading performance representations.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["case-study", "FTC", "marketing", "deception", "enforcement"]
  },
  {
    id: "m1-13",
    title: "Hallucination Citation Sanctions",
    type: "case-study",
    module: 1,
    description: "Examination of court sanctions for lawyers submitting hallucinated legal citations, starting with Mata v Avianca and escalating to hundreds of cases by 2026, including disqualification and bar referrals.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "hallucinations", "legal-ethics", "sanctions", "AI-in-law"]
  },
  {
    id: "m1-14",
    title: "Biometric Lawsuit Trends",
    type: "display",
    module: 1,
    description: "Analysis of emerging biometric privacy lawsuits beyond Clearview, covering emotion recognition, voice biometrics, and gait analysis cases under various state privacy laws.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["biometrics", "privacy", "lawsuits", "emerging-trends"]
  },
  {
    id: "m1-15",
    title: "Catastrophic vs Daily Harms Debate",
    type: "debate",
    module: 1,
    description: "Structured debate on whether AI governance should prioritize catastrophic existential risks or address immediate daily harms like bias, discrimination, and privacy violations. Includes evidence-based arguments from both perspectives.",
    duration: "45 min",
    difficulty: "advanced",
    tags: ["debate", "risk-prioritization", "existential", "practical"]
  },
  {
    id: "m1-16",
    title: "Tail Risk Arguments",
    type: "display",
    module: 1,
    description: "Pro arguments for prioritizing catastrophic AI risks, including civilization-scale threats, irreversibility, and the precautionary principle. Examines expert opinions and risk modeling approaches.",
    duration: "30 min",
    difficulty: "advanced",
    tags: ["tail-risk", "existential", "precaution", "expert-opinions"]
  },
  {
    id: "m1-17",
    title: "Mundane Harms Reality",
    type: "display",
    module: 1,
    description: "Con arguments focusing on current enforcement reality dominated by fraud, discrimination, IP violations, defamation, and biometric misuse. Analyzes actual regulatory actions and their impact.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["mundane-harms", "enforcement", "reality", "current-issues"]
  },
  {
    id: "m1-18",
    title: "Enforcement Action Analysis",
    type: "activity",
    module: 1,
    description: "Hands-on analysis of a specific 2025-26 enforcement action or major ruling. Learners research the case, identify governance failures, and propose preventive controls across policy, technical, and organizational dimensions.",
    duration: "60 min",
    difficulty: "intermediate",
    tags: ["activity", "case-analysis", "enforcement", "prevention"]
  },
  {
    id: "m1-19",
    title: "Governance Failure Mapping",
    type: "cheatsheet",
    module: 1,
    description: "Systematic framework for mapping governance failures in AI incidents, identifying root causes across technical, organizational, and regulatory dimensions, and designing preventive controls.",
    duration: "20 min",
    difficulty: "intermediate",
    tags: ["cheatsheet", "failure-analysis", "root-cause", "prevention"]
  },
  {
    id: "m1-20",
    title: "Policy Control Mechanisms",
    type: "display",
    module: 1,
    description: "Comprehensive overview of policy-based controls for AI governance, including regulations, standards, guidelines, and enforcement mechanisms. Examines effectiveness and implementation challenges.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["policy", "controls", "regulation", "implementation"]
  },
  {
    id: "m1-21",
    title: "Technical Control Solutions",
    type: "display",
    module: 1,
    description: "Technical approaches to AI governance control, including safety mechanisms, monitoring systems, audit tools, and technical standards. Evaluates strengths and limitations of technical solutions.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["technical", "controls", "safety", "monitoring", "audits"]
  },
  {
    id: "m1-22",
    title: "Organizational Governance Structures",
    type: "display",
    module: 1,
    description: "Analysis of organizational structures for AI governance, including AI ethics boards, risk committees, review processes, and accountability frameworks. Compares different models and their effectiveness.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["organizational", "governance", "structures", "accountability"]
  },
  {
    id: "m1-23",
    title: "Regulatory Compliance Framework",
    type: "cheatsheet",
    module: 1,
    description: "Practical framework for ensuring regulatory compliance in AI systems, covering jurisdiction mapping, requirement analysis, gap assessment, and ongoing monitoring.",
    duration: "20 min",
    difficulty: "intermediate",
    tags: ["compliance", "framework", "regulatory", "monitoring"]
  },
  {
    id: "m1-24",
    title: "Innovation vs Regulation Balance",
    type: "debate",
    module: 1,
    description: "Debate on finding the optimal balance between AI innovation promotion and regulatory protection. Examines different approaches across jurisdictions and their outcomes.",
    duration: "40 min",
    difficulty: "intermediate",
    tags: ["debate", "innovation", "regulation", "balance", "policy"]
  },
  {
    id: "m1-25",
    title: "Global Regulatory Competition",
    type: "display",
    module: 1,
    description: "Analysis of regulatory competition among major jurisdictions, including race-to-the-top vs race-to-the-bottom dynamics, forum shopping, and regulatory arbitrage in AI governance.",
    duration: "30 min",
    difficulty: "advanced",
    tags: ["global", "competition", "forum-shopping", "arbitrage"]
  },
  {
    id: "m1-26",
    title: "Enforcement Agency Strategies",
    type: "case-study",
    module: 1,
    description: "Comparative analysis of enforcement strategies across different agencies (FTC, SEC, DOJ, state AGs), examining their approaches, resources, and effectiveness in AI-related cases.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "enforcement", "agencies", "strategies"]
  },
  {
    id: "m1-27",
    title: "Industry Self-Regulation",
    type: "display",
    module: 1,
    description: "Examination of industry self-regulation initiatives in AI, including company policies, consortium standards, and voluntary commitments. Assesses effectiveness and limitations.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["self-regulation", "industry", "voluntary", "standards"]
  },
  {
    id: "m1-28",
    title: "Public-Private Partnerships",
    type: "display",
    module: 1,
    description: "Analysis of public-private partnership models for AI governance, including information sharing, joint research, and collaborative enforcement mechanisms.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["public-private", "partnerships", "collaboration", "governance"]
  },
  {
    id: "m1-29",
    title: "Enforcement Effectiveness Metrics",
    type: "cheatsheet",
    module: 1,
    description: "Framework for measuring enforcement effectiveness in AI governance, including compliance rates, deterrence effects, remediation outcomes, and systemic impact metrics.",
    duration: "20 min",
    difficulty: "intermediate",
    tags: ["metrics", "effectiveness", "measurement", "enforcement"]
  },
  {
    id: "m1-30",
    title: "Cross-Border Enforcement Challenges",
    type: "display",
    module: 1,
    description: "Analysis of challenges in enforcing AI regulations across borders, including jurisdictional conflicts, data localization, and international cooperation mechanisms.",
    duration: "30 min",
    difficulty: "advanced",
    tags: ["cross-border", "enforcement", "jurisdiction", "cooperation"]
  },
  {
    id: "m1-31",
    title: "Regulatory Impact Assessment",
    type: "activity",
    module: 1,
    description: "Hands-on exercise conducting regulatory impact assessments for proposed AI regulations, analyzing economic, social, and technical impacts on different stakeholders.",
    duration: "45 min",
    difficulty: "intermediate",
    tags: ["activity", "impact-assessment", "regulation", "stakeholders"]
  },
  {
    id: "m1-32",
    title: "Compliance Cost Analysis",
    type: "display",
    module: 1,
    description: "Analysis of compliance costs for AI regulations across different company sizes and sectors. Examines cost-benefit analysis and potential competitive impacts.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["compliance", "costs", "economic-analysis", "competition"]
  },
  {
    id: "m1-33",
    title: "Enforcement Trends Prediction",
    type: "activity",
    module: 1,
    description: "Predictive analysis exercise where learners forecast future enforcement trends based on current patterns, technological developments, and regulatory priorities.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["activity", "prediction", "trends", "forecasting"]
  },
  {
    id: "m1-34",
    title: "Regulatory Capture Risks",
    type: "display",
    module: 1,
    description: "Analysis of regulatory capture risks in AI governance, including industry influence, revolving door effects, and strategies to maintain regulatory independence.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["regulatory-capture", "independence", "ethics", "oversight"]
  },
  {
    id: "m1-35",
    title: "Enforcement Resource Allocation",
    type: "case-study",
    module: 1,
    description: "Case study of how enforcement agencies allocate resources across different AI risks and violations, examining prioritization frameworks and resource constraints.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "resources", "prioritization", "constraints"]
  },
  {
    id: "m1-36",
    title: "Deterrence in AI Governance",
    type: "display",
    module: 1,
    description: "Analysis of deterrence mechanisms in AI governance, including penalties, sanctions, public enforcement actions, and their effectiveness in preventing violations.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["deterrence", "penalties", "sanctions", "prevention"]
  },
  {
    id: "m1-37",
    title: "Remediation and Restitution",
    type: "display",
    module: 1,
    description: "Examination of remediation and restitution mechanisms for AI-related harms, including compensation, corrective actions, and systemic remedies.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["remediation", "restitution", "harms", "compensation"]
  },
  {
    id: "m1-38",
    title: "Enforcement Communication Strategies",
    type: "activity",
    module: 1,
    description: "Practice developing communication strategies for enforcement actions, balancing transparency, deterrence, and fairness considerations.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["activity", "communication", "transparency", "enforcement"]
  },
  {
    id: "m1-39",
    title: "Module 1 Knowledge Assessment",
    type: "quiz",
    module: 1,
    description: "Comprehensive assessment covering Module 1 learning objectives, including regulatory frameworks, enforcement trends, litigation patterns, and governance mechanisms.",
    duration: "40 min",
    difficulty: "intermediate",
    tags: ["quiz", "assessment", "knowledge-check", "module-1"]
  },
  {
    id: "m1-40",
    title: "Governance Priority Framework",
    type: "cheatsheet",
    module: 1,
    description: "Decision framework for prioritizing governance efforts based on risk severity, likelihood, impact, and resource constraints. Helps organizations focus on most critical issues.",
    duration: "20 min",
    difficulty: "intermediate",
    tags: ["cheatsheet", "prioritization", "decision-framework", "risk"]
  }
];

export function SyllabusGrid() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const modules = Array.from({ length: 11 }, (_, i) => i);
  const types = ["display", "quiz", "cheatsheet", "activity", "case-study", "debate", "reading", "video", "project"];

  const filteredCards = syllabusCards.filter(card => {
    const moduleMatch = selectedModule === null || card.module === selectedModule;
    const typeMatch = selectedType === null || card.type === selectedType;
    return moduleMatch && typeMatch;
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          AI Governance Syllabus Explorer
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
