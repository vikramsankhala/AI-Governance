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
  references?: string[];
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
    description: "Analysis of the seminal Turing Lecture examining bias in AI systems, audit requirements, and political implications of automated decision-making. This video explores the technical and social challenges of building trustworthy AI systems in democratic societies. Features insights from leading AI researchers on fairness, accountability, and transparency in algorithmic systems.",
    duration: "45 min",
    difficulty: "intermediate",
    tags: ["video", "bias", "audits", "politics"]
  },
  {
    id: "m0-5",
    title: "Stuart Russell: Provably Beneficial AI",
    type: "video",
    module: 0,
    description: "Deep dive into Russell's groundbreaking work on the control problem and uncertainty over human objectives. This lecture presents mathematical frameworks for ensuring AI systems remain beneficial even when we cannot perfectly specify human preferences. Based on Russell's book 'Human Compatible' and his TED Talk with over 3.5 million views.",
    duration: "50 min",
    difficulty: "advanced",
    tags: ["video", "safety", "control-problem", "uncertainty"],
    references: ["https://www.ted.com/talks/stuart_russell_3_principles_for_creating_safer_ai", "https://www.youtube.com/watch?v=4S2g7b0acvU"]
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
    description: "Detailed examination of the EU AI Act's rolling implementation schedule, focusing on unacceptable-risk bans taking effect in 2025, GPAI rules in 2026, and high-risk regime ramping through 2027. Includes analysis of the official EU implementation timeline and guidance documents from the European Commission. The Act represents the world's first comprehensive AI law, setting global precedents for AI regulation.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["case-study", "EU-AI-Act", "implementation", "timeline"],
    references: ["https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021R0206", "https://digital-strategy.ec.europa.eu/en/library/ai-act-timeline"]
  },
  {
    id: "m1-4",
    title: "Unacceptable Risk Applications",
    type: "cheatsheet",
    module: 1,
    description: "Quick reference guide to the eight categories of unacceptable-risk AI applications banned under the EU AI Act, including social scoring, real-time biometric identification, and manipulative techniques. Based on the official EU classification and includes real-world examples of prohibited systems.",
    duration: "15 min",
    difficulty: "intermediate",
    tags: ["cheatsheet", "EU-AI-Act", "risk-categories", "bans"],
    references: ["https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021R0206#d1e32-33-1", "https://www.europarl.europa.eu/RegData/docs_autres_institutions/commission_europeenne/com/2021/0421/COM_COM(2021)0206_EN.pdf"]
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
    description: "Detailed examination of the New York Times v. OpenAI case, analyzing fair use arguments, training data copyright issues, and implications for the entire AI industry's data practices. This landmark lawsuit filed in December 2023 challenges the use of copyrighted news content in AI training. The case could set precedents for fair use in the AI era and impact how all AI companies access training data.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["case-study", "copyright", "NYT-v-OpenAI", "training-data"],
    references: ["https://github.com/nytimes/ai-lawsuit", "https://www.courtlistener.com/docket/68193645/new-york-times-co-v-openai-inc/", "https://www.nytimes.com/2023/12/27/business/media/new-york-times-openai-microsoft-lawsuit.html"]
  },
  {
    id: "m1-11",
    title: "Clearview AI Settlement Analysis",
    type: "case-study",
    module: 1,
    description: "In-depth analysis of the Clearview AI class action settlement under Illinois BIPA, examining biometric privacy violations, scraping practices, and implications for the industry. In May 2022, Clearview agreed to a $1.2 million settlement and agreed to stop selling facial recognition to private companies. This case established important precedents for biometric privacy enforcement.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "Clearview", "biometrics", "privacy", "BIPA"],
    references: ["https://www.aclu.org/cases/american-civil-liberties-union-v-clearview-ai", "https://www.reuters.com/legal/clearview-ai-settles-illinois-privacy-lawsuit-over-facial-recognition-2022-05-09/", "https://ag.ky.gov/press-releases/2022/05/09/attorney-general-cameron-announces-12-million-settlement-with-clearview-ai-over-biometric-privacy-violations"]
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
  },

  // Module 2: Core Concepts & Risk Taxonomies (35 cards)
  {
    id: "m2-1",
    title: "Ethical Principles as Governance Requirements",
    type: "display",
    module: 2,
    description: "Deep exploration of how ethical principles transform into binding governance requirements in AI systems. This card examines the journey from abstract values like beneficence and non-maleficence to concrete regulatory obligations and compliance frameworks. We analyze how principles are operationalized through standards, procedures, and enforcement mechanisms.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["ethics", "principles", "governance", "requirements"]
  },
  {
    id: "m2-2",
    title: "Beneficence in AI Systems",
    type: "display",
    module: 2,
    description: "Comprehensive analysis of beneficence as applied to AI systems, covering positive contributions to human wellbeing, societal benefits, and the obligation to actively promote good outcomes. Examines practical implementations in healthcare, education, and social services.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["beneficence", "wellbeing", "positive-impact", "applications"]
  },
  {
    id: "m2-3",
    title: "Non-Maleficence Implementation",
    type: "case-study",
    module: 2,
    description: "Case studies of non-maleficence in AI, analyzing how systems avoid causing harm through safety mechanisms, risk assessments, and harm mitigation strategies. Examples from autonomous vehicles, medical AI, and criminal justice systems.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "non-maleficence", "harm-prevention", "safety"]
  },
  {
    id: "m2-4",
    title: "Autonomy and Human Agency",
    type: "display",
    module: 2,
    description: "Examination of autonomy in AI governance, focusing on preserving human decision-making, consent mechanisms, and preventing undue influence. Explores the balance between AI assistance and human control.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["autonomy", "human-agency", "consent", "control"]
  },
  {
    id: "m2-5",
    title: "Justice and Fairness Frameworks",
    type: "display",
    module: 2,
    description: "In-depth analysis of justice principles in AI, covering distributive justice, procedural fairness, and anti-discrimination measures. Compares different fairness frameworks and their mathematical foundations.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["justice", "fairness", "anti-discrimination", "mathematical-frameworks"]
  },
  {
    id: "m2-6",
    title: "Privacy Principles in AI",
    type: "cheatsheet",
    module: 2,
    description: "Comprehensive guide to privacy principles in AI governance, including data minimization, purpose limitation, confidentiality, and privacy by design. Practical implementation guidelines and compliance requirements.",
    duration: "20 min",
    difficulty: "intermediate",
    tags: ["cheatsheet", "privacy", "data-protection", "implementation"]
  },
  {
    id: "m2-7",
    title: "Transparency and Explainability",
    type: "display",
    module: 2,
    description: "Analysis of transparency requirements in AI systems, covering algorithmic transparency, decision explainability, and communication of AI capabilities and limitations. Examines technical and policy approaches.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["transparency", "explainability", "communication", "technical-approaches"]
  },
  {
    id: "m2-8",
    title: "Accountability Mechanisms",
    type: "display",
    module: 2,
    description: "Exploration of accountability in AI governance, including responsibility assignment, audit trails, and answerability mechanisms. Analyzes how accountability is enforced across different stakeholders.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["accountability", "responsibility", "audits", "enforcement"]
  },
  {
    id: "m2-9",
    title: "EU AI Act Risk Categories",
    type: "cheatsheet",
    module: 2,
    description: "Detailed breakdown of the EU AI Act's four risk categories: unacceptable, high, limited, and minimal risk. Includes specific examples, compliance requirements, and enforcement consequences for each category.",
    duration: "20 min",
    difficulty: "intermediate",
    tags: ["cheatsheet", "EU-AI-Act", "risk-categories", "compliance"]
  },
  {
    id: "m2-10",
    title: "Unacceptable Risk Applications",
    type: "display",
    module: 2,
    description: "Comprehensive analysis of applications banned under the unacceptable risk category, including social scoring, real-time biometric identification, and manipulative techniques. Examines societal impact and ethical concerns.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["unacceptable-risk", "bans", "social-scoring", "biometrics"]
  },
  {
    id: "m2-11",
    title: "High-Risk AI Systems",
    type: "case-study",
    module: 2,
    description: "Detailed examination of high-risk AI systems under the EU framework, covering critical infrastructure, education, employment, essential services, and law enforcement applications. Includes compliance requirements and case studies.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "high-risk", "compliance", "critical-infrastructure"]
  },
  {
    id: "m2-12",
    title: "Limited Risk Obligations",
    type: "display",
    module: 2,
    description: "Analysis of limited risk AI systems and their transparency obligations, including chatbots, deepfake detection, and emotion recognition systems. Examines disclosure requirements and user rights.",
    duration: "25 min",
    difficulty: "beginner",
    tags: ["limited-risk", "transparency", "disclosure", "user-rights"]
  },
  {
    id: "m2-13",
    title: "Minimal Risk Guidelines",
    type: "display",
    module: 2,
    description: "Overview of minimal risk AI applications and voluntary guidelines, including AI-enabled video games, spam filters, and inventory management systems. Discusses best practices and industry standards.",
    duration: "20 min",
    difficulty: "beginner",
    tags: ["minimal-risk", "voluntary-guidelines", "best-practices"]
  },
  {
    id: "m2-14",
    title: "NIST AI Risk Management Framework",
    type: "display",
    module: 2,
    description: "Comprehensive overview of the NIST AI Risk Management Framework, including govern, map, measure, manage, and communicate functions. Analyzes implementation guidance and sector-specific adaptations.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["NIST", "risk-management", "framework", "implementation"]
  },
  {
    id: "m2-15",
    title: "NIST Governance Function",
    type: "cheatsheet",
    module: 2,
    description: "Detailed guide to the NIST governance function, covering risk management culture, policies, procedures, and accountability structures. Practical implementation steps and organizational considerations.",
    duration: "20 min",
    difficulty: "intermediate",
    tags: ["cheatsheet", "NIST", "governance", "implementation"]
  },
  {
    id: "m2-16",
    title: "Risk Mapping and Assessment",
    type: "activity",
    module: 2,
    description: "Hands-on exercise in risk mapping and assessment using NIST methodologies. Learn to identify AI risks, assess likelihood and impact, and prioritize mitigation efforts across different contexts.",
    duration: "45 min",
    difficulty: "intermediate",
    tags: ["activity", "risk-mapping", "assessment", "NIST-methods"]
  },
  {
    id: "m2-17",
    title: "Risk Measurement Techniques",
    type: "display",
    module: 2,
    description: "Technical overview of risk measurement techniques in AI systems, including quantitative metrics, qualitative assessments, and hybrid approaches. Covers bias, performance, safety, and security metrics.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["measurement", "metrics", "quantitative", "qualitative"]
  },
  {
    id: "m2-18",
    title: "Risk Management Strategies",
    type: "display",
    module: 2,
    description: "Analysis of risk management strategies for AI systems, including risk acceptance, mitigation, transfer, and avoidance approaches. Examines technical, organizational, and policy controls.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["risk-management", "strategies", "controls", "mitigation"]
  },
  {
    id: "m2-19",
    title: "Risk Communication Protocols",
    type: "activity",
    module: 2,
    description: "Interactive exercise in developing risk communication protocols for different stakeholders. Practice communicating AI risks to technical teams, executives, regulators, and the public.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["activity", "communication", "stakeholders", "protocols"]
  },
  {
    id: "m2-20",
    title: "US Fairness Language Evolution",
    type: "case-study",
    module: 2,
    description: "Analysis of how fairness language in US federal standards has evolved from 2021-2026, examining political influences, industry pressure, and the narrowing of bias and discrimination definitions.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "US-standards", "fairness", "political-influence"]
  },
  {
    id: "m2-21",
    title: "India's Techno-Legal Approach",
    type: "display",
    module: 2,
    description: "Examination of India's emerging techno-legal AI governance approach, balancing innovation promotion with risk management. Analyzes the AI Governance Guidelines and regulatory framework development.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["India", "techno-legal", "innovation", "risk-management"]
  },
  {
    id: "m2-22",
    title: "Techno-Legal Framework Design",
    type: "activity",
    module: 2,
    description: "Design exercise for creating techno-legal AI governance frameworks. Learn to balance technical requirements with legal obligations and develop integrated compliance approaches.",
    duration: "40 min",
    difficulty: "advanced",
    tags: ["activity", "framework-design", "techno-legal", "integration"]
  },
  {
    id: "m2-23",
    title: "AI Use-Case Classification",
    type: "activity",
    module: 2,
    description: "Hands-on classification exercise for three AI use cases: loan underwriting, recruitment screening, and police facial recognition. Learn to categorize by risk tier across EU, US, and Indian jurisdictions.",
    duration: "50 min",
    difficulty: "intermediate",
    tags: ["activity", "classification", "risk-tiers", "jurisdictions"]
  },
  {
    id: "m2-24",
    title: "Loan Underwriting Risk Analysis",
    type: "case-study",
    module: 2,
    description: "Detailed risk analysis of AI-powered loan underwriting systems, covering fairness, transparency, explainability, and regulatory compliance across different jurisdictions.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "loan-underwriting", "fairness", "compliance"]
  },
  {
    id: "m2-25",
    title: "Recruitment Screening Assessment",
    type: "case-study",
    module: 2,
    description: "Comprehensive assessment of AI recruitment screening systems, analyzing bias risks, privacy concerns, and employment law compliance. Examines mitigation strategies and best practices.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "recruitment", "bias", "employment-law"]
  },
  {
    id: "m2-26",
    title: "Facial Recognition Governance",
    type: "case-study",
    module: 2,
    description: "In-depth analysis of police facial recognition systems, covering accuracy, bias, privacy, and civil liberties concerns. Examines regulatory approaches and oversight mechanisms.",
    duration: "40 min",
    difficulty: "advanced",
    tags: ["case-study", "facial-recognition", "privacy", "civil-liberties"]
  },
  {
    id: "m2-27",
    title: "Cross-Jurisdictional Compliance",
    type: "cheatsheet",
    module: 2,
    description: "Practical guide to ensuring AI compliance across multiple jurisdictions, including conflict resolution, highest-standard approaches, and regulatory mapping strategies.",
    duration: "20 min",
    difficulty: "advanced",
    tags: ["cheatsheet", "compliance", "cross-jurisdictional", "conflict-resolution"]
  },
  {
    id: "m2-28",
    title: "Control Implementation Framework",
    type: "display",
    module: 2,
    description: "Framework for implementing AI controls based on risk classification, including registration requirements, DPIA obligations, audit procedures, human-in-the-loop mechanisms, and documentation standards.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["controls", "implementation", "risk-based", "compliance"]
  },
  {
    id: "m2-29",
    title: "Registration and Notification Systems",
    type: "display",
    module: 2,
    description: "Analysis of AI registration and notification systems across jurisdictions, including requirements, processes, and compliance timelines. Examines database systems and public registries.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["registration", "notification", "databases", "compliance"]
  },
  {
    id: "m2-30",
    title: "Data Protection Impact Assessments",
    type: "cheatsheet",
    module: 2,
    description: "Comprehensive guide to conducting DPIAs for AI systems, including methodology, templates, and best practices. Covers privacy impact assessment and risk mitigation strategies.",
    duration: "20 min",
    difficulty: "intermediate",
    tags: ["cheatsheet", "DPIA", "privacy", "assessment"]
  },
  {
    id: "m2-31",
    title: "AI Audit Procedures",
    type: "display",
    module: 2,
    description: "Overview of AI audit procedures, including internal audits, external assessments, and regulatory inspections. Covers audit scope, methodologies, and reporting requirements.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["audits", "procedures", "assessment", "compliance"]
  },
  {
    id: "m2-32",
    title: "Human-in-the-Loop Implementation",
    type: "activity",
    module: 2,
    description: "Practical exercise in designing human-in-the-loop mechanisms for AI systems. Learn to determine appropriate intervention points, oversight levels, and human decision requirements.",
    duration: "40 min",
    difficulty: "intermediate",
    tags: ["activity", "human-in-loop", "oversight", "intervention"]
  },
  {
    id: "m2-33",
    title: "Documentation Standards",
    type: "cheatsheet",
    module: 2,
    description: "Guide to AI documentation standards across jurisdictions, including technical documentation, user instructions, and regulatory reporting requirements. Templates and best practices included.",
    duration: "20 min",
    difficulty: "intermediate",
    tags: ["cheatsheet", "documentation", "standards", "reporting"]
  },
  {
    id: "m2-34",
    title: "Risk-Based Approach Critique",
    type: "debate",
    module: 2,
    description: "Critical debate on whether risk-based approaches are inherently anthropocentric and growth-biased. Examines whether these frameworks structurally favor deployment over precaution and alternative approaches.",
    duration: "45 min",
    difficulty: "advanced",
    tags: ["debate", "risk-based", "critique", "anthropocentric"]
  },
  {
    id: "m2-35",
    title: "Module 2 Assessment",
    type: "quiz",
    module: 2,
    description: "Comprehensive assessment covering ethical principles, risk taxonomies, EU AI Act categories, NIST framework, and cross-jurisdictional compliance. Tests understanding of core concepts and practical applications.",
    duration: "40 min",
    difficulty: "intermediate",
    tags: ["quiz", "assessment", "module-2", "comprehensive"]
  },

  // Module 3: Global Regulatory Landscape (35 cards)
  {
    id: "m3-1",
    title: "EU AI Act Comprehensive Overview",
    type: "display",
    module: 3,
    description: "Comprehensive examination of the EU AI Act as the world's most comprehensive AI regulation. This card analyzes the Act's scope, structure, enforcement mechanisms, and global influence on AI governance. We explore how the regulation balances innovation promotion with fundamental rights protection and its extraterritorial impact.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["EU-AI-Act", "comprehensive", "global-influence", "enforcement"]
  },
  {
    id: "m3-2",
    title: "EU AI Act Bans and Prohibitions",
    type: "case-study",
    module: 3,
    description: "Detailed analysis of prohibited AI practices under the EU AI Act, including social scoring, real-time biometric identification in public spaces, and manipulative techniques. Examines legal rationale, implementation challenges, and enforcement procedures.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "EU-bans", "prohibitions", "enforcement"]
  },
  {
    id: "m3-3",
    title: "GPAI Rules and Foundation Models",
    type: "display",
    module: 3,
    description: "In-depth exploration of General Purpose AI (GPAI) regulations under the EU AI Act, covering transparency obligations, copyright compliance, model evaluation requirements, and systemic risk mitigation for foundation models.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["GPAI", "foundation-models", "transparency", "systemic-risk"]
  },
  {
    id: "m3-4",
    title: "High-Risk AI Implementation Timeline",
    type: "display",
    module: 3,
    description: "Analysis of the high-risk AI regime implementation schedule from 2026-2027, including conformity assessment procedures, CE marking requirements, and post-market surveillance obligations.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["high-risk", "implementation", "timeline", "conformity"]
  },
  {
    id: "m3-5",
    title: "US Federal Deregulation Strategy",
    type: "case-study",
    module: 3,
    description: "Examination of US federal approach to AI deregulation under the 2024-2026 administration, focusing on market-driven governance, voluntary standards, and reduced regulatory burden. Compares with previous administrations and international approaches.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "US-federal", "deregulation", "market-driven"]
  },
  {
    id: "m3-6",
    title: "State-Level AI Regulation Surge",
    type: "display",
    module: 3,
    description: "Analysis of the proliferation of state-level AI regulations in the US, including comprehensive AI bills in California, New York, and Illinois, along with specific laws targeting deepfakes, algorithmic discrimination, and biometric privacy.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["US-states", "regulation-surge", "deepfakes", "algorithmic-discrimination"]
  },
  {
    id: "m3-7",
    title: "California AI Regulation Landscape",
    type: "case-study",
    module: 3,
    description: "Detailed examination of California's comprehensive AI regulation efforts, including the California AI Accountability Act, algorithmic discrimination laws, and privacy commissioner initiatives. Analyzes enforcement mechanisms and industry impact.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "California", "comprehensive", "accountability"]
  },
  {
    id: "m3-8",
    title: "New York AI Employment Laws",
    type: "case-study",
    module: 3,
    description: "Analysis of New York's AI employment regulations, including bias audit requirements for automated employment decision tools and transparency obligations. Examines compliance costs and effectiveness.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["case-study", "New-York", "employment", "bias-audits"]
  },
  {
    id: "m3-9",
    title: "India AI Governance Guidelines",
    type: "display",
    module: 3,
    description: "Comprehensive overview of India's AI Governance Guidelines, analyzing the approach to balancing innovation promotion with risk management. Examines the principles-based framework and implementation strategies.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["India", "governance-guidelines", "innovation", "risk-management"]
  },
  {
    id: "m3-10",
    title: "India AI Impact Summit 2026",
    type: "case-study",
    module: 3,
    description: "Analysis of the India AI Impact Summit 2026 outcomes, including policy announcements, international partnerships, and the launch of new governance initiatives. Examines India's positioning in global AI governance.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["case-study", "India-summit", "policy", "international"]
  },
  {
    id: "m3-11",
    title: "India's Middle Path Strategy",
    type: "display",
    module: 3,
    description: "Examination of India's 'middle path' approach to AI governance, positioning AI as a public good while promoting open infrastructure and innovation. Analyzes Budget 2026-27 incentives and regulatory framework.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["India", "middle-path", "public-good", "innovation"]
  },
  {
    id: "m3-12",
    title: "Digital Infrastructure as Public Good",
    type: "display",
    module: 3,
    description: "Analysis of India's approach to treating digital infrastructure and compute as public goods, including government data centers, AI research clusters, and open data initiatives.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["India", "digital-infrastructure", "public-good", "compute"]
  },
  {
    id: "m3-13",
    title: "UN Global Dialogue on AI Governance",
    type: "case-study",
    module: 3,
    description: "Examination of the UN's Global Dialogue on AI Governance initiative, analyzing efforts to create unified international frameworks, challenges in reaching consensus, and the problem of value pluralism across nations.",
    duration: "30 min",
    difficulty: "advanced",
    tags: ["UN", "global-dialogue", "international-frameworks", "value-pluralism"]
  },
  {
    id: "m3-14",
    title: "International AI Governance Fragmentation",
    type: "debate",
    module: 3,
    description: "Structured debate on whether fragmentation in AI regulation is a feature or bug. Pro arguments focus on regulatory competition and local values, while con arguments address compliance burdens and forum shopping.",
    duration: "45 min",
    difficulty: "advanced",
    tags: ["debate", "fragmentation", "regulatory-competition", "forum-shopping"]
  },
  {
    id: "m3-15",
    title: "Benefits of Regulatory Competition",
    type: "display",
    module: 3,
    description: "Analysis of benefits from regulatory competition in AI governance, including innovation promotion, policy experimentation, local value accommodation, and discovery of optimal regulatory approaches.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["regulatory-competition", "innovation", "experimentation", "local-values"]
  },
  {
    id: "m3-16",
    title: "Costs of Regulatory Fragmentation",
    type: "display",
    module: 3,
    description: "Examination of costs associated with AI regulatory fragmentation, including compliance burdens, market inefficiencies, forum shopping, and weakest-link problems in global governance.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["fragmentation", "compliance-costs", "forum-shopping", "inefficiency"]
  },
  {
    id: "m3-17",
    title: "Regulatory Passport Design",
    type: "activity",
    module: 3,
    description: "Hands-on design exercise for creating a one-page regulatory passport for a hypothetical foundation model API startup. Learn to map obligations and red lines across EU, US, and Indian jurisdictions.",
    duration: "60 min",
    difficulty: "advanced",
    tags: ["activity", "regulatory-passport", "cross-jurisdictional", "compliance"]
  },
  {
    id: "m3-18",
    title: "Foundation Model Compliance Challenges",
    type: "case-study",
    module: 3,
    description: "Analysis of compliance challenges for foundation model providers across different jurisdictions, including copyright issues, transparency requirements, and systemic risk assessments.",
    duration: "30 min",
    difficulty: "advanced",
    tags: ["case-study", "foundation-models", "compliance", "copyright"]
  },
  {
    id: "m3-19",
    title: "US State Regulatory Compliance",
    type: "cheatsheet",
    module: 3,
    description: "Practical guide to complying with US state-level AI regulations, including registration requirements, audit obligations, and reporting standards across different states.",
    duration: "20 min",
    difficulty: "intermediate",
    tags: ["cheatsheet", "US-states", "compliance", "practical-guide"]
  },
  {
    id: "m3-20",
    title: "EU Conformity Assessment Procedures",
    type: "display",
    module: 3,
    description: "Detailed overview of EU conformity assessment procedures for high-risk AI systems, including self-assessment, third-party assessment, and notified body involvement.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["EU", "conformity-assessment", "high-risk", "procedures"]
  },
  {
    id: "m3-21",
    title: "Cross-Border Data Transfer Rules",
    type: "display",
    module: 3,
    description: "Analysis of cross-border data transfer rules affecting AI systems, including GDPR restrictions, US state privacy laws, and India's data localization requirements.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["data-transfers", "cross-border", "privacy", "localization"]
  },
  {
    id: "m3-22",
    title: "International Standards Harmonization",
    type: "display",
    module: 3,
    description: "Examination of efforts to harmonize AI standards internationally, including ISO/IEC standards, IEEE guidelines, and OECD AI principles. Analyzes challenges and progress.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["harmonization", "international-standards", "ISO", "OECD"]
  },
  {
    id: "m3-23",
    title: "Regulatory Cooperation Mechanisms",
    type: "display",
    module: 3,
    description: "Analysis of international regulatory cooperation mechanisms, including mutual recognition agreements, information sharing protocols, and joint enforcement actions.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["cooperation", "mutual-recognition", "information-sharing", "joint-enforcement"]
  },
  {
    id: "m3-24",
    title: "Trade Policy and AI Governance",
    type: "display",
    module: 3,
    description: "Examination of how trade policy affects AI governance, including WTO considerations, regional trade agreements, and export controls on AI technologies.",
    duration: "30 min",
    difficulty: "advanced",
    tags: ["trade-policy", "WTO", "export-controls", "regional-agreements"]
  },
  {
    id: "m3-25",
    title: "Emerging Jurisdiction Approaches",
    type: "display",
    module: 3,
    description: "Analysis of AI governance approaches in emerging jurisdictions, including Brazil, South Africa, Singapore, and Kenya. Examines innovation-friendly regulation and capacity building.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["emerging-jurisdictions", "innovation", "capacity-building", "regulation"]
  },
  {
    id: "m3-26",
    title: "Sector-Specific Regulation Comparison",
    type: "case-study",
    module: 3,
    description: "Comparative analysis of sector-specific AI regulation across healthcare, finance, and transportation in different jurisdictions. Examines regulatory approaches and effectiveness.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "sector-specific", "healthcare", "finance", "transportation"]
  },
  {
    id: "m3-27",
    title: "Enforcement Agency Cooperation",
    type: "case-study",
    module: 3,
    description: "Analysis of cooperation between enforcement agencies across jurisdictions, including joint investigations, information sharing, and coordinated enforcement actions.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "enforcement", "cooperation", "joint-investigations"]
  },
  {
    id: "m3-28",
    title: "Regulatory Impact Analysis",
    type: "activity",
    module: 3,
    description: "Hands-on exercise conducting regulatory impact analysis for proposed AI regulations, analyzing economic, social, and technical impacts across different stakeholders.",
    duration: "45 min",
    difficulty: "intermediate",
    tags: ["activity", "impact-analysis", "stakeholders", "economic-analysis"]
  },
  {
    id: "m3-29",
    title: "Compliance Cost Modeling",
    type: "activity",
    module: 3,
    description: "Practical exercise in modeling compliance costs for AI systems across different jurisdictions, including direct costs, opportunity costs, and competitive impacts.",
    duration: "40 min",
    difficulty: "intermediate",
    tags: ["activity", "cost-modeling", "compliance", "competitive-impact"]
  },
  {
    id: "m3-30",
    title: "Regulatory Forecasting Exercise",
    type: "activity",
    module: 3,
    description: "Predictive analysis exercise forecasting future regulatory developments in AI governance based on current trends, technological developments, and political factors.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["activity", "forecasting", "trends", "prediction"]
  },
  {
    id: "m3-31",
    title: "Global Governance Best Practices",
    type: "display",
    module: 3,
    description: "Analysis of best practices in global AI governance, including effective regulatory designs, implementation strategies, and enforcement mechanisms from various jurisdictions.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["best-practices", "regulatory-design", "implementation", "enforcement"]
  },
  {
    id: "m3-32",
    title: "Regulatory Innovation Sandboxes",
    type: "case-study",
    module: 3,
    description: "Examination of regulatory sandboxes for AI innovation across different jurisdictions, comparing approaches, outcomes, and lessons learned for balancing innovation and protection.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "sandboxes", "innovation", "regulatory-experimentation"]
  },
  {
    id: "m3-33",
    title: "Multi-Stakeholder Governance Models",
    type: "display",
    module: 3,
    description: "Analysis of multi-stakeholder governance models in AI regulation, including public consultation processes, industry partnerships, and civil society engagement mechanisms.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["multi-stakeholder", "governance", "consultation", "partnerships"]
  },
  {
    id: "m3-34",
    title: "Module 3 Knowledge Assessment",
    type: "quiz",
    module: 3,
    description: "Comprehensive assessment covering global regulatory landscape, EU AI Act, US federal and state approaches, India's strategy, and international cooperation mechanisms.",
    duration: "40 min",
    difficulty: "intermediate",
    tags: ["quiz", "assessment", "module-3", "global-regulation"]
  },
  {
    id: "m3-35",
    title: "Regulatory Strategy Development",
    type: "project",
    module: 3,
    description: "Capstone project developing a comprehensive regulatory strategy for an AI company operating globally, including compliance frameworks, risk assessments, and stakeholder engagement plans.",
    duration: "90 min",
    difficulty: "advanced",
    tags: ["project", "regulatory-strategy", "global-compliance", "stakeholder-engagement"]
  }
];

export function CompleteSyllabusGrid() {
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
          Complete AI Governance Syllabus (350+ Cards)
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
