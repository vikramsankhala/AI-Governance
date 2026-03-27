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

const finalSyllabusCards: CardData[] = [
  // Module 8: Global South, India, and AI Geopolitics (35 cards)
  {
    id: "m8-1",
    title: "India's AI Middle Path Strategy",
    type: "display",
    module: 8,
    description: "Comprehensive analysis of India's 'middle path' approach to AI governance, positioning digital infrastructure and compute as public goods while promoting open innovation and regulatory sandboxes. This card examines how India is navigating between Western regulatory models and Chinese state-controlled approaches, developing a unique governance framework that balances innovation promotion with risk management. We explore the implications of this approach for other developing countries and the global AI governance landscape.",
    duration: "40 min",
    difficulty: "intermediate",
    tags: ["India", "middle-path", "public-goods", "open-innovation", "regulatory-sandboxes"]
  },
  {
    id: "m8-2",
    title: "Digital Infrastructure as Public Good",
    type: "display",
    module: 8,
    description: "In-depth examination of India's approach to treating digital infrastructure and compute as public goods, including government data centers, AI research clusters, and open data initiatives. Analyzes how this approach democratizes AI access and reduces barriers to entry for Indian researchers and startups.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["digital-infrastructure", "public-goods", "compute-access", "data-centers", "democratization"]
  },
  {
    id: "m8-3",
    title: "Open Innovation and Sandboxes",
    type: "case-study",
    module: 8,
    description: "Analysis of India's open innovation initiatives and regulatory sandbox programs for AI development. Examines how these programs are designed to foster innovation while managing risks, with case studies of successful sandbox implementations.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "open-innovation", "regulatory-sandboxes", "risk-management", "case-examples"]
  },
  {
    id: "m8-4",
    title: "India AI Governance Guidelines",
    type: "display",
    module: 8,
    description: "Detailed examination of India's AI Governance Guidelines, analyzing the principles-based framework, implementation mechanisms, and alignment with international best practices. Explores how the guidelines are being operationalized across different sectors.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["AI-guidelines", "principles-framework", "implementation", "international-alignment"]
  },
  {
    id: "m8-5",
    title: "Techno-Legal Framework Development",
    type: "display",
    module: 8,
    description: "Analysis of India's techno-legal approach to AI governance, examining how technical standards are being integrated with legal requirements to create comprehensive governance frameworks. Explores the challenges and benefits of this integrated approach.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["techno-legal", "technical-standards", "legal-integration", "framework-development"]
  },
  {
    id: "m8-6",
    title: "UN Global Dialogue on AI Governance",
    type: "case-study",
    module: 8,
    description: "Examination of the UN's Global Dialogue on AI Governance initiative, analyzing efforts to create unified international frameworks and the challenges of reaching consensus across diverse cultural and political contexts. Explores the problem of value pluralism in global AI governance.",
    duration: "40 min",
    difficulty: "advanced",
    tags: ["UN", "global-dialogue", "international-frameworks", "value-pluralism", "consensus-building"]
  },
  {
    id: "m8-7",
    title: "Value Pluralism in AI Governance",
    type: "display",
    module: 8,
    description: "Analysis of how different cultural values and ethical frameworks impact AI governance approaches across nations. Examines the challenges of creating universal AI standards while respecting cultural diversity and national sovereignty.",
    duration: "30 min",
    difficulty: "advanced",
    tags: ["value-pluralism", "cultural-diversity", "ethical-frameworks", "universal-standards"]
  },
  {
    id: "m8-8",
    title: "AI Geopolitics and Export Controls",
    type: "display",
    module: 8,
    description: "Comprehensive analysis of how AI is becoming a tool of geopolitical leverage, including export controls on chips, models, and talent. Examines the impact of these controls on global AI development and technology transfer.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["geopolitics", "export-controls", "technology-transfer", "global-competition"]
  },
  {
    id: "m8-9",
    title: "Chip Export Control Regimes",
    type: "case-study",
    module: 8,
    description: "Detailed examination of chip export control regimes and their impact on AI development globally. Analyzes how restrictions on advanced semiconductor exports are shaping AI capabilities and innovation patterns.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "export-controls", "semiconductors", "AI-capabilities", "innovation-impact"]
  },
  {
    id: "m8-10",
    title: "Model and Talent Restrictions",
    type: "display",
    module: 8,
    description: "Analysis of emerging restrictions on AI model exports and talent mobility. Examines how these controls affect global AI research, collaboration, and development patterns.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["model-restrictions", "talent-mobility", "research-collaboration", "global-development"]
  },
  {
    id: "m8-11",
    title: "AI Governance Blueprint Design",
    type: "activity",
    module: 8,
    description: "Policy lab exercise where teams design a 2-page AI governance blueprint for a mid-income democracy. Must balance innovation promotion, safety assurance, autonomy from great-power blocs, and capacity constraints. Includes principles, institutional architecture, and relationship to major blocs.",
    duration: "90 min",
    difficulty: "advanced",
    tags: ["activity", "policy-lab", "governance-blueprint", "democracy", "capacity-constraints"]
  },
  {
    id: "m8-12",
    title: "Innovation-Safety Balance Framework",
    type: "activity",
    module: 8,
    description: "Hands-on exercise developing frameworks to balance AI innovation with safety assurance in resource-constrained environments. Learn to prioritize governance efforts and design proportional controls.",
    duration: "60 min",
    difficulty: "intermediate",
    tags: ["activity", "innovation-safety", "resource-constraints", "proportional-controls"]
  },
  {
    id: "m8-13",
    title: "Institutional Architecture Design",
    type: "activity",
    module: 8,
    description: "Design exercise for AI governance institutional architecture in developing countries. Learn to create effective governance structures with limited resources and capacity.",
    duration: "55 min",
    difficulty: "intermediate",
    tags: ["activity", "institutional-design", "governance-structures", "capacity-building"]
  },
  {
    id: "m8-14",
    title: "Great Power Bloc Navigation",
    type: "activity",
    module: 8,
    description: "Strategic exercise analyzing how mid-income countries can navigate relationships between US, EU, China, and India AI governance blocs. Learn to maintain autonomy while benefiting from global cooperation.",
    duration: "50 min",
    difficulty: "advanced",
    tags: ["activity", "bloc-navigation", "strategic-autonomy", "global-cooperation"]
  },
  {
    id: "m8-15",
    title: "Global South Rules-Taker Status",
    type: "debate",
    module: 8,
    description: "Structured debate on whether the Global South is being structurally locked into 'rules-taker' status for AI, or whether forums like the India-AI summit and UN dialogue can rebalance power. Examines structural barriers and opportunities for influence.",
    duration: "50 min",
    difficulty: "advanced",
    tags: ["debate", "Global-South", "rules-taker", "power-rebalancing", "structural-barriers"]
  },
  {
    id: "m8-16",
    title: "Arguments for Rules-Taker Lock-In",
    type: "display",
    module: 8,
    description: "Analysis of arguments that the Global South is being structurally locked into rules-taker status, including resource disparities, technological dependence, and limited representation in standard-setting bodies.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["rules-taker", "resource-disparities", "technological-dependence", "representation"]
  },
  {
    id: "m8-17",
    title: "Arguments for Power Rebalancing",
    type: "display",
    module: 8,
    description: "Examination of arguments that Global South influence in AI governance is growing, including India-AI summit leadership, UN dialogue participation, and regional cooperation initiatives.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["power-rebalancing", "India-summit", "UN-dialogue", "regional-cooperation"]
  },
  {
    id: "m8-18",
    title: "Regional AI Cooperation Initiatives",
    type: "case-study",
    module: 8,
    description: "Analysis of regional AI cooperation initiatives in the Global South, including African Union AI strategy, ASEAN AI framework, and Latin American AI collaborations. Examines successes and challenges.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "regional-cooperation", "African-Union", "ASEAN", "Latin-America"]
  },
  {
    id: "m8-19",
    title: "Technology Transfer and Capacity Building",
    type: "display",
    module: 8,
    description: "Examination of technology transfer and capacity building initiatives for AI development in the Global South. Analyzes effectiveness of international cooperation programs and knowledge sharing mechanisms.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["technology-transfer", "capacity-building", "international-cooperation", "knowledge-sharing"]
  },
  {
    id: "m8-20",
    title: "Data Sovereignty in Global South",
    type: "display",
    module: 8,
    description: "Analysis of data sovereignty concerns and approaches in Global South countries, including data localization requirements, national data strategies, and cross-border data flow regulations.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["data-sovereignty", "localization", "national-strategies", "cross-border-flows"]
  },
  {
    id: "m8-21",
    title: "Inclusive AI Development",
    type: "display",
    module: 8,
    description: "Examination of inclusive AI development approaches that address Global South needs and contexts. Analyzes how local knowledge and perspectives can shape more equitable AI systems.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["inclusive-development", "local-knowledge", "equitable-AI", "contextualization"]
  },
  {
    id: "m8-22",
    title: "AI for Development Goals",
    type: "case-study",
    module: 8,
    description: "Case studies of AI applications supporting sustainable development goals in Global South contexts, including agriculture, healthcare, education, and climate adaptation.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "development-goals", "agriculture", "healthcare", "climate-adaptation"]
  },
  {
    id: "m8-23",
    title: "Funding and Investment Patterns",
    type: "display",
    module: 8,
    description: "Analysis of AI funding and investment patterns in the Global South, examining venture capital, government investment, and international aid for AI development.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["funding-patterns", "venture-capital", "government-investment", "international-aid"]
  },
  {
    id: "m8-24",
    title: "Brain Drain and Talent Retention",
    type: "display",
    module: 8,
    description: "Examination of brain drain challenges and talent retention strategies for AI expertise in Global South countries. Analyzes successful approaches to building local AI talent pools.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["brain-drain", "talent-retention", "local-expertise", "capacity-building"]
  },
  {
    id: "m8-25",
    title: "Infrastructure and Access Challenges",
    type: "display",
    module: 8,
    description: "Analysis of infrastructure and access challenges for AI development in the Global South, including compute availability, internet connectivity, and energy constraints.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["infrastructure", "compute-access", "connectivity", "energy-constraints"]
  },
  {
    id: "m8-26",
    title: "Cultural Context in AI Design",
    type: "activity",
    module: 8,
    description: "Hands-on exercise incorporating cultural context into AI system design. Learn to adapt AI technologies for local languages, cultural practices, and social norms.",
    duration: "45 min",
    difficulty: "intermediate",
    tags: ["activity", "cultural-context", "localization", "adaptation"]
  },
  {
    id: "m8-27",
    title: "Ethical Frameworks Adaptation",
    type: "display",
    module: 8,
    description: "Analysis of how ethical frameworks need to be adapted for different cultural contexts in the Global South. Examines universal principles vs culturally-specific values.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["ethical-frameworks", "cultural-adaptation", "universal-principles", "cultural-values"]
  },
  {
    id: "m8-28",
    title: "South-South Cooperation",
    type: "case-study",
    module: 8,
    description: "Examination of South-South cooperation initiatives in AI governance and development. Analyzes how developing countries are collaborating to share knowledge and resources.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "South-South", "cooperation", "knowledge-sharing", "resource-sharing"]
  },
  {
    id: "m8-29",
    title: "Multistakeholder Governance Models",
    type: "display",
    module: 8,
    description: "Analysis of multistakeholder governance models being developed in Global South contexts, including civil society participation, industry collaboration, and government coordination.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["multistakeholder", "civil-society", "industry-collaboration", "government-coordination"]
  },
  {
    id: "m8-30",
    title: "Regulatory Capacity Building",
    type: "display",
    module: 8,
    description: "Examination of regulatory capacity building initiatives in Global South countries, including training programs, technical assistance, and institutional development.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["capacity-building", "regulatory-training", "technical-assistance", "institutional-development"]
  },
  {
    id: "m8-31",
    title: "Impact Assessment Frameworks",
    type: "activity",
    module: 8,
    description: "Hands-on exercise developing impact assessment frameworks appropriate for Global South contexts. Learn to measure AI impacts on development goals and social outcomes.",
    duration: "50 min",
    difficulty: "intermediate",
    tags: ["activity", "impact-assessment", "development-goals", "social-outcomes"]
  },
  {
    id: "m8-32",
    title: "Module 8 Assessment",
    type: "quiz",
    module: 8,
    description: "Comprehensive assessment covering India's middle path, UN global dialogue, AI geopolitics, Global South challenges, and policy lab exercises.",
    duration: "45 min",
    difficulty: "intermediate",
    tags: ["quiz", "assessment", "module-8", "global-governance"]
  },
  {
    id: "m8-33",
    title: "AI Governance Strategy Development",
    type: "project",
    module: 8,
    description: "Capstone project developing a comprehensive AI governance strategy for a Global South country, including policy frameworks, institutional arrangements, and implementation plans.",
    duration: "90 min",
    difficulty: "advanced",
    tags: ["project", "governance-strategy", "policy-frameworks", "implementation-planning"]
  },
  {
    id: "m8-34",
    title: "Regional Cooperation Analysis",
    type: "project",
    module: 8,
    description: "Research project analyzing regional AI cooperation initiatives and developing recommendations for enhanced collaboration among Global South countries.",
    duration: "85 min",
    difficulty: "advanced",
    tags: ["project", "regional-analysis", "cooperation-initiatives", "recommendations"]
  },
  {
    id: "m8-35",
    title: "Inclusive AI Design Project",
    type: "project",
    module: 8,
    description: "Design project developing AI systems specifically for Global South contexts, incorporating local knowledge, cultural considerations, and development needs.",
    duration: "90 min",
    difficulty: "advanced",
    tags: ["project", "inclusive-design", "local-context", "development-needs"]
  },

  // Module 9: Organizational Governance & Operating Models (35 cards)
  {
    id: "m9-1",
    title: "AI Governance as Operating Reality",
    type: "display",
    module: 9,
    description: "Comprehensive analysis of how AI governance is transitioning from voluntary principles to enforced processes in organizations. This card examines the operational reality of AI governance, including risk registers, model inventories, approval workflows, and accountability mechanisms. We explore how organizations are building governance into their daily operations and decision-making processes, moving beyond theoretical frameworks to practical implementation.",
    duration: "40 min",
    difficulty: "intermediate",
    tags: ["operational-reality", "risk-registers", "model-inventories", "approval-workflows", "accountability"]
  },
  {
    id: "m9-2",
    title: "Voluntary Principles to Enforced Processes",
    type: "case-study",
    module: 9,
    description: "Analysis of the evolution from voluntary AI ethics principles to enforced governance processes in organizations. Examines case studies of companies that have successfully operationalized AI governance and the challenges they faced.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "voluntary-principles", "enforced-processes", "operationalization", "implementation-challenges"]
  },
  {
    id: "m9-3",
    title: "Risk Register Development",
    type: "activity",
    module: 9,
    description: "Hands-on exercise developing comprehensive AI risk registers for organizations. Learn to identify, categorize, prioritize, and monitor AI risks across different applications and contexts.",
    duration: "70 min",
    difficulty: "intermediate",
    tags: ["activity", "risk-register", "risk-identification", "prioritization", "monitoring"]
  },
  {
    id: "m9-4",
    title: "Model Inventory Systems",
    type: "display",
    module: 9,
    description: "Analysis of model inventory systems for tracking AI applications across organizations. Examines metadata requirements, version control, and integration with governance processes.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["model-inventory", "metadata", "version-control", "governance-integration"]
  },
  {
    id: "m9-5",
    title: "Approval Workflow Design",
    type: "activity",
    module: 9,
    description: "Design exercise creating AI system approval workflows for organizations. Learn to design efficient, effective approval processes that balance innovation with risk management.",
    duration: "60 min",
    difficulty: "intermediate",
    tags: ["activity", "approval-workflows", "process-design", "risk-management", "efficiency"]
  },
  {
    id: "m9-6",
    title: "Procurement-Driven Governance",
    type: "display",
    module: 9,
    description: "Examination of how governments are embedding AI standards into procurement requirements rather than statutes. Analyzes the effectiveness of this approach and its implications for vendors.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["procurement", "government-standards", "vendor-requirements", "regulatory-approach"]
  },
  {
    id: "m9-7",
    title: "AI Risk Committee Structures",
    type: "case-study",
    module: 9,
    description: "Analysis of AI risk committee structures in different organizations, examining composition, responsibilities, reporting lines, and effectiveness. Compares centralized vs decentralized approaches.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "risk-committees", "organizational-structure", "centralization", "effectiveness"]
  },
  {
    id: "m9-8",
    title: "Centralized vs Federated Governance",
    type: "debate",
    module: 9,
    description: "Structured debate on centralized AI governance councils vs federated, team-integrated governance models. Examines arguments for efficiency and consistency vs flexibility and innovation.",
    duration: "50 min",
    difficulty: "advanced",
    tags: ["debate", "centralized-governance", "federated-models", "efficiency", "innovation"]
  },
  {
    id: "m9-9",
    title: "Arguments for Centralized Governance",
    type: "display",
    module: 9,
    description: "Analysis of arguments supporting centralized AI governance councils, including consistency, efficiency, expertise concentration, and coordinated decision-making.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["centralized-governance", "consistency", "efficiency", "expertise", "coordination"]
  },
  {
    id: "m9-10",
    title: "Arguments for Federated Governance",
    type: "display",
    module: 9,
    description: "Examination of arguments for federated, team-integrated governance models, including flexibility, innovation, contextual understanding, and rapid decision-making.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["federated-governance", "flexibility", "innovation", "contextual-understanding", "rapid-decisions"]
  },
  {
    id: "m9-11",
    title: "AI Use-Case Register Schema",
    type: "activity",
    module: 9,
    description: "Hands-on exercise designing AI use-case register schemas for fictional mid-size companies. Learn to create comprehensive, practical schemas that capture essential governance information.",
    duration: "55 min",
    difficulty: "intermediate",
    tags: ["activity", "use-case-register", "schema-design", "governance-information", "practical-implementation"]
  },
  {
    id: "m9-12",
    title: "Internal Approval Workflow Design",
    type: "activity",
    module: 9,
    description: "Design exercise creating internal approval workflows for AI use cases. Learn to determine appropriate approval levels, required documentation, and escalation triggers.",
    duration: "65 min",
    difficulty: "intermediate",
    tags: ["activity", "approval-workflow", "approval-levels", "documentation", "escalation-triggers"]
  },
  {
    id: "m9-13",
    title: "RACI Matrix Development",
    type: "activity",
    module: 9,
    description: "Hands-on exercise developing RACI (Responsible, Accountable, Consulted, Informed) matrices for AI governance processes. Learn to clarify roles and responsibilities across stakeholders.",
    duration: "45 min",
    difficulty: "intermediate",
    tags: ["activity", "RACI-matrix", "roles", "responsibilities", "stakeholder-management"]
  },
  {
    id: "m9-14",
    title: "Standard Operating Procedures",
    type: "cheatsheet",
    module: 9,
    description: "Comprehensive guide to developing standard operating procedures for AI governance, including template structures, approval processes, and documentation requirements.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["cheatsheet", "SOPs", "templates", "documentation", "process-standards"]
  },
  {
    id: "m9-15",
    title: "Governance Process Automation",
    type: "display",
    module: 9,
    description: "Analysis of automation opportunities in AI governance processes, including automated risk assessment, compliance checking, and reporting systems.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["automation", "risk-assessment", "compliance-checking", "reporting-systems"]
  },
  {
    id: "m9-16",
    title: "Governance Metrics and KPIs",
    type: "display",
    module: 9,
    description: "Examination of governance metrics and KPIs for measuring AI governance effectiveness, including compliance rates, risk reduction, and process efficiency measures.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["governance-metrics", "KPIs", "compliance-rates", "risk-reduction", "process-efficiency"]
  },
  {
    id: "m9-17",
    title: "Governance Maturity Assessment",
    type: "activity",
    module: 9,
    description: "Hands-on exercise conducting governance maturity assessments for organizations. Learn to evaluate current capabilities and identify improvement priorities.",
    duration: "50 min",
    difficulty: "intermediate",
    tags: ["activity", "maturity-assessment", "capability-evaluation", "improvement-planning"]
  },
  {
    id: "m9-18",
    title: "Incident Response Procedures",
    type: "display",
    module: 9,
    description: "Analysis of incident response procedures for AI systems, including detection, containment, investigation, and remediation processes. Examines communication strategies and regulatory reporting.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["incident-response", "detection", "containment", "investigation", "remediation"]
  },
  {
    id: "m9-19",
    title: "Change Management for AI Governance",
    type: "display",
    module: 9,
    description: "Examination of change management strategies for implementing AI governance in organizations. Analyzes stakeholder engagement, training programs, and cultural transformation approaches.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["change-management", "stakeholder-engagement", "training", "cultural-transformation"]
  },
  {
    id: "m9-20",
    title: "Governance Training Programs",
    type: "activity",
    module: 9,
    description: "Design exercise developing comprehensive AI governance training programs for different organizational roles. Learn to create role-specific curricula and delivery methods.",
    duration: "55 min",
    difficulty: "intermediate",
    tags: ["activity", "training-programs", "role-specific", "curriculum-design", "delivery-methods"]
  },
  {
    id: "m9-21",
    title: "Vendor Management for AI",
    type: "display",
    module: 9,
    description: "Analysis of vendor management approaches for AI systems, including due diligence, contract requirements, and ongoing monitoring. Examines third-party risk management strategies.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["vendor-management", "due-diligence", "contract-requirements", "third-party-risk"]
  },
  {
    id: "m9-22",
    title: "Cross-Functional Collaboration",
    type: "display",
    module: 9,
    description: "Examination of cross-functional collaboration models for AI governance, including legal, technical, business, and ethics team coordination. Analyzes communication and decision-making processes.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["cross-functional", "collaboration", "team-coordination", "communication", "decision-making"]
  },
  {
    id: "m9-23",
    title: "Governance Technology Stack",
    type: "display",
    module: 9,
    description: "Analysis of technology stacks for supporting AI governance, including governance platforms, monitoring tools, and reporting systems. Examines integration with existing enterprise systems.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["governance-technology", "platforms", "monitoring-tools", "reporting-systems", "integration"]
  },
  {
    id: "m9-24",
    title: "Budget and Resource Planning",
    type: "display",
    module: 9,
    description: "Examination of budget and resource planning for AI governance programs. Analyzes cost structures, ROI justification, and resource allocation strategies.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["budget-planning", "resource-allocation", "cost-structures", "ROI-justification"]
  },
  {
    id: "m9-25",
    title: "Governance Reporting Frameworks",
    type: "cheatsheet",
    module: 9,
    description: "Comprehensive guide to governance reporting frameworks, including internal reporting to leadership, external reporting to regulators, and public transparency reporting.",
    duration: "20 min",
    difficulty: "intermediate",
    tags: ["cheatsheet", "reporting-frameworks", "internal-reporting", "regulatory-reporting", "transparency"]
  },
  {
    id: "m9-26",
    title: "Board-Level AI Governance",
    type: "case-study",
    module: 9,
    description: "Analysis of board-level AI governance approaches, including board education, risk oversight, and strategic decision-making. Examines how boards are becoming AI-savvy.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "board-governance", "risk-oversight", "strategic-decision-making", "board-education"]
  },
  {
    id: "m9-27",
    title: "Governance Audits and Assessments",
    type: "display",
    module: 9,
    description: "Examination of governance audit methodologies and assessment frameworks. Analyzes internal audits, external assessments, and continuous improvement processes.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["governance-audits", "assessment-frameworks", "internal-audits", "external-assessments"]
  },
  {
    id: "m9-28",
    title: "Industry Collaboration Models",
    type: "case-study",
    module: 9,
    description: "Analysis of industry collaboration models for AI governance, including information sharing, best practice development, and collective problem-solving approaches.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "industry-collaboration", "information-sharing", "best-practices", "collective-action"]
  },
  {
    id: "m9-29",
    title: "Governance Innovation Labs",
    type: "display",
    module: 9,
    description: "Examination of governance innovation labs and experimental approaches to AI governance. Analyzes how organizations are testing new governance models and approaches.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["innovation-labs", "experimental-approaches", "governance-models", "testing"]
  },
  {
    id: "m9-30",
    title: "Crisis Management Planning",
    type: "activity",
    module: 9,
    description: "Hands-on exercise developing crisis management plans for AI-related incidents. Learn to design response protocols, communication strategies, and remediation procedures.",
    duration: "60 min",
    difficulty: "intermediate",
    tags: ["activity", "crisis-management", "response-protocols", "communication", "remediation"]
  },
  {
    id: "m9-31",
    title: "Governance Culture Development",
    type: "display",
    module: 9,
    description: "Analysis of strategies for developing strong AI governance cultures in organizations. Examines leadership commitment, employee engagement, and incentive alignment.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["governance-culture", "leadership-commitment", "employee-engagement", "incentive-alignment"]
  },
  {
    id: "m9-32",
    title: "Module 9 Assessment",
    type: "quiz",
    module: 9,
    description: "Comprehensive assessment covering organizational governance structures, operating models, risk registers, approval workflows, and implementation strategies.",
    duration: "45 min",
    difficulty: "intermediate",
    tags: ["quiz", "assessment", "module-9", "organizational-governance"]
  },
  {
    id: "m9-33",
    title: "Governance Framework Implementation",
    type: "project",
    module: 9,
    description: "Capstone project implementing a comprehensive AI governance framework for an organization, including policies, procedures, tools, and training programs.",
    duration: "90 min",
    difficulty: "advanced",
    tags: ["project", "governance-framework", "implementation", "policies", "procedures"]
  },
  {
    id: "m9-34",
    title: "Operating Model Design",
    type: "project",
    module: 9,
    description: "Design project creating a complete AI governance operating model for a specific organizational context, including structures, processes, and metrics.",
    duration: "85 min",
    difficulty: "advanced",
    tags: ["project", "operating-model", "organizational-design", "process-optimization"]
  },
  {
    id: "m9-35",
    title: "Governance Transformation Plan",
    type: "project",
    module: 9,
    description: "Strategic project developing a transformation plan for implementing AI governance in an organization, including change management, resource planning, and success metrics.",
    duration: "90 min",
    difficulty: "advanced",
    tags: ["project", "transformation-plan", "change-management", "resource-planning", "success-metrics"]
  }
];

export function FinalSyllabusGrid() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const modules = Array.from({ length: 11 }, (_, i) => i);
  const types = ["display", "quiz", "cheatsheet", "activity", "case-study", "debate", "reading", "video", "project"];

  const filteredCards = finalSyllabusCards.filter(card => {
    const moduleMatch = selectedModule === null || card.module === selectedModule;
    const typeMatch = selectedType === null || card.type === selectedType;
    return moduleMatch && typeMatch;
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Complete AI Governance Syllabus (Modules 8-9)
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
