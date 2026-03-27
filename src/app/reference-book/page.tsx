"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Section {
  id: string;
  title: string;
  description: string;
  subsections: Subsection[];
}

interface Subsection {
  id: string;
  title: string;
  content: string;
  level: number;
}

const referenceBookContent: Section[] = [
  {
    id: "foundations",
    title: "1. Conceptual Foundations of AI Governance",
    description: "Core concepts, historical development, and ethical principles that form the foundation of AI governance.",
    subsections: [
      {
        id: "three-layer-model",
        title: "1.1 Governance, Ethics, and Safety: A Three-Layer Model",
        content: `AI governance is analytically distinguished from AI ethics (normative principles) and AI safety (technical risk mitigation) while still being deeply informed by both.

**Key Distinctions:**
- **Governance**: Who sets rules and how are they enforced? (Legislatures, regulators, boards, courts)
- **Ethics**: What ought we do with AI capabilities? (Philosophers, ethicists, professional bodies)
- **Safety**: How do we technically prevent catastrophic or harmful behavior? (ML researchers, safety engineers)

This model prevents agenda conflation and clarifies what kinds of interventions belong at which level.`,
        level: 1
      },
      {
        id: "historical-trajectory",
        title: "1.2 Historical Trajectory of AI Governance",
        content: `**Key Phases:**

**Ethics Proliferation (2015–2019)**
- Multiple guidelines from industry, NGOs, and states
- Limited enforcement mechanisms
- Focus on principles and voluntary commitments

**Scandal and Incident Phase (2018–2022)**
- Cambridge Analytica, algorithmic discrimination cases
- Biometric privacy lawsuits, publicized AI failures
- Growing recognition of real-world harms

**Regulatory Design (2020–2023)**
- EU AI Act drafting, NIST AI RMF development
- IEEE and ISO standards emergence
- National AI strategies worldwide

**Enforcement and Institutionalization (2023–2026)**
- EU DSA enforcement, AI Executive Order implementation
- AI Safety Institutes establishment
- Landmark litigation and regulatory actions`,
        level: 2
      },
      {
        id: "ethical-principles",
        title: "1.3 Core Ethical Principles and Their Tensions",
        content: `**Seven Key Principles:**
1. **Beneficence** - Promoting well-being and benefits
2. **Non-maleficence** - Avoiding harm and preventing damage
3. **Autonomy** - Respecting human agency and decision-making
4. **Justice** - Ensuring fairness and equitable outcomes
5. **Privacy** - Protecting personal data and intimate information
6. **Transparency** - Making AI processes understandable and explainable
7. **Accountability** - Ensuring responsibility and redress mechanisms

**Real-World Tensions:**
- **Beneficence vs Privacy**: Health data sharing for AI diagnostics
- **Transparency vs Security**: Publishing model details that may enable misuse
- **Autonomy vs Beneficence**: Nudging user behavior through recommender systems

These tensions highlight that governance decisions are rarely costless and require careful balancing.`,
        level: 3
      }
    ]
  },
  {
    id: "recent-developments",
    title: "2. Recent Governance Developments as Theoretical Anchors",
    description: "Analysis of 2023-2024 case studies as empirical data for governance theory.",
    subsections: [
      {
        id: "frontier-labs",
        title: "2.1 Corporate Governance and Frontier Labs",
        content: `**OpenAI Board Crisis (November 2023)**
- Clash between safety-anchored nonprofit charter and commercial incentives
- Questions about board composition and expertise
- Information asymmetries between technical leadership and directors
- Legitimacy challenges when employees/investors can veto board decisions

**Comparative Governance Models:**
- **Microsoft**: Responsible AI Standard, AI Fairness Checklist, internal AI Council
- **Meta's LLaMA 2**: Open-source powerful models, decentralized deployment implications
- **Anthropic**: Constitutional AI with explicit normative rules
- **Adobe Firefly vs Stability AI**: Divergent approaches to copyright and training data

These cases serve as comparative studies in corporate governance and value encoding.`,
        level: 2
      },
      {
        id: "regulatory-regimes",
        title: "2.2 Regulatory Regimes and Models of State",
        content: `**Different Models of State Involvement:**

**EU Digital Services Act**
- Risk-based, fundamental-rights-oriented approach
- Systemic risk assessments for recommender systems
- Transparency obligations for large platforms

**China's AI Regulation**
- Central control model with mandatory algorithm registration
- Content labeling and strict generative AI rules
- Priority on social stability and political control

**California AB 3211**
- Subnational experiment in federal system
- Focus on watermarking, labeling, synthetic media harms

**AI Executive Order (US)**
- Presidential directive coordinating multiple agencies
- Safety testing requirements and reporting standards
- Standards adoption across federal government

These models illustrate varying approaches to AI governance and regulatory competition.`,
        level: 2
      }
    ]
  },
  {
    id: "normative-theories",
    title: "3. Normative Theories and Risk Prioritization",
    description: "Translation of ethical theories into governance priorities and concrete obligations.",
    subsections: [
      {
        id: "principles-to-requirements",
        title: "3.1 Principles to Requirements: From 'Ought' to 'Must'",
        content: `**Multi-Step Translation Process:**

1. **Articulation of Principles** (e.g., beneficence, justice)
2. **Interpretive Work** by IEEE, ISO, NIST, ethics councils
3. **Embedding into Standards and Regulations** (documentation, consent, redress)
4. **Operationalization** via checklists, templates, design reviews

**Warning: Ethics Washing**
- Skipping interpretive and operational phases leads to principles without enforcement
- Risk of "check-box compliance" without substantive change
- Need for measurable effects and accountability mechanisms

This translation process is essential for moving from abstract values to concrete obligations.`,
        level: 3
      },
      {
        id: "catastrophic-vs-mundane",
        title: "3.2 Catastrophic vs Mundane Harms: A Structured Debate",
        content: `**Tail Risk Arguments:**
- Existential risk discourse and irreversibility concerns
- Precautionary principle application to AI development
- Focus on preventing worst-case scenarios

**Mundane Harms Reality:**
- Current enforcement actions focus on everyday harms
- IP violations, biometric privacy breaches, hallucination-induced misrepresentations
- Discrimination and fraud as predominant issues

**Governance Priority Framework:**
- Score risks on severity, likelihood, reversibility, time horizon
- Weight dimensions according to organizational values
- Allocate governance resources based on ranked priorities

This framework operationalizes theoretical debates for practical decision-making.`,
        level: 3
      }
    ]
  },
  {
    id: "governance-architectures",
    title: "4. Governance Architectures: Policy, Technical, Organizational",
    description: "Effective AI governance depends on aligned architectures across multiple dimensions.",
    subsections: [
      {
        id: "policy-mechanisms",
        title: "4.1 Policy Control Mechanisms",
        content: `**Analytical Map of Policy Tools:**

**Laws and Regulations**
- EU AI Act bans and obligations
- State-level deepfake and biometric laws
- FTC guidance on deceptive AI marketing

**Standards and Guidelines**
- NIST AI RMF functions (Govern, Map, Measure, Manage)
- IEEE ethically aligned design principles
- ISO management system standards

**Supervisory Frameworks**
- Regulatory oversight bodies
- Industry self-regulation initiatives
- Multi-stakeholder governance mechanisms

**Sanctions and Enforcement**
- Fines and penalties
- Injunctions and compliance orders
- Professional sanctions and license revocations

Policy varies in binding force, scope, and institutional capacity.`,
        level: 2
      },
      {
        id: "technical-controls",
        title: "4.2 Technical Control Solutions and Alignment Methods",
        content: `**Technical Tools Catalog:**

**Safety Filters and Monitoring**
- Content moderation systems
- Anomaly detection and alerting
- Real-time behavior monitoring

**Evaluation Frameworks**
- Bias detection and fairness metrics
- Safety evaluation protocols
- Red teaming and adversarial testing

**Alignment Techniques:**
- Reinforcement Learning from Human Feedback (RLHF)
- Constitutional AI with explicit normative rules
- Model interpretability and explainability

**Access Controls**
- API rate limiting and usage restrictions
- Authentication and authorization systems
- Audit trails and logging

Technical controls must be embedded in governance context to be effective.`,
        level: 3
      }
    ]
  },
  {
    id: "frontier-lab-governance",
    title: "5. Frontier Lab Governance in Depth",
    description: "Distinctive governance challenges for organizations developing large-scale frontier models.",
    subsections: [
      {
        id: "governance-models",
        title: "5.1 Governance Models in Frontier Labs",
        content: `**Three Primary Models:**

**Mission-Anchored Capped-Profit (OpenAI)**
- Nonprofit parent with capped-profit subsidiary
- Designed to align commercial incentives with safety mission
- Board crisis revealed tensions between mission and growth

**Public Benefit and Constitutional (Anthropic)**
- Explicit emphasis on safety and value alignment
- Constitutional AI encoding principles in training
- Public benefit corporation structure

**Corporate Parent with Research Division (DeepMind/Google)**
- Safety functions nested in large conglomerate
- Complex oversight and commercial integration
- Resource access with corporate constraints

Each model faces different pressures and governance challenges.`,
        level: 2
      },
      {
        id: "board-composition",
        title: "5.2 Board Composition, Mandates, and Information Flows",
        content: `**Key Governance Dimensions:**

**Board Composition**
- Safety experts vs commercial operators
- External stakeholders and independent directors
- Investor and executive representation

**Board Mandates**
- Broad-benefit or safety objectives beyond shareholder value
- Fiduciary duties vs public interest responsibilities
- Decision-making authority for risky deployments

**Information Flows**
- Access to technical risk information
- Independent safety audits and evaluations
- Transparency vs confidentiality requirements

**Alternative Models:**
- Dual boards (commercial and safety boards)
- Safety-veto authorities
- Stakeholder councils and advisory boards

These design choices significantly impact governance effectiveness.`,
        level: 3
      }
    ]
  },
  {
    id: "risk-incident-frameworks",
    title: "7. Risk and Incident Frameworks",
    description: "Core lenses for AI governance: risk management and incident analysis.",
    subsections: [
      {
        id: "risk-fundamentals",
        title: "7.1 Risk Assessment Fundamentals and Categories",
        content: `**Risk Assessment Basics:**

**Probability-Impact Matrices**
- Likelihood vs severity scoring
- Risk categorization and prioritization
- Basic mitigation strategy development

**Risk Categories:**
- **Model Risks**: Technical limitations, failure modes
- **Data Risks**: Quality issues, privacy concerns, bias
- **Deployment Risks**: Integration challenges, user misuse
- **Societal Risks**: Systemic effects, concentration of power

**Complementary Tools:**
- Bias detection techniques and metrics
- Safety engineering fundamentals
- Evaluation reporting and documentation

This foundation enables systematic risk management across AI lifecycles.`,
        level: 2
      },
      {
        id: "incident-database",
        title: "7.2 AI Incident Database and Empirical Patterns",
        content: `**AI Incident Database Analysis:**

**Database Features:**
- 500+ incidents covering multiple harm categories
- Discrimination, safety failures, privacy breaches
- Systematic categorization and tagging

**Pattern Analysis:**
- Emerging risk categories and trends
- Common failure modes and root causes
- Effectiveness of different mitigation strategies

**Governance Failure Mapping:**
- Technical causes: model limitations, data issues
- Organizational causes: missing reviews, misaligned incentives
- Regulatory causes: absent rules, weak enforcement

**Practical Process:**
1. Describe incident facts, harms, stakeholders
2. Categorize risk domains (fairness, safety, privacy, etc.)
3. Identify technical and organizational causes
4. Map regulatory gaps and design controls
5. Implement prevention measures

This systematic approach turns incidents into learning opportunities.`,
        level: 3
      }
    ]
  },
  {
    id: "practitioner-toolkit",
    title: "9. Practitioner Toolkit: Checklists, Templates, and How‑Tos",
    description: "Concrete tools and templates for implementing AI governance in organizations.",
    subsections: [
      {
        id: "impact-assessment",
        title: "9.1 AI Impact Assessment Template",
        content: `**Comprehensive Assessment Framework:**

1. **System Description**
   - Purpose, capabilities, affected users
   - Deployment context and use cases

2. **Risk Identification**
   - Fairness and discrimination risks
   - Safety and reliability risks
   - Privacy and data protection risks
   - IP and content authenticity risks
   - Labor, economic, and societal risks

3. **Stakeholder Analysis**
   - Direct users and indirect stakeholders
   - Regulators and affected communities
   - Internal teams and civil society

4. **Mitigation Measures**
   - Technical controls (filters, monitoring, constraints)
   - Policy controls (usage policies, terms of service)
   - Organizational controls (training, review processes)

5. **Monitoring and Incident Response**
   - Logging and incident reporting channels
   - Post-incident reviews and learning

6. **Documentation and Transparency**
   - User-facing summaries and model cards
   - Compliance documentation and audit trails

This template should be embedded in product lifecycles and regulatory submissions.`,
        level: 1
      },
      {
        id: "compliance-checklist",
        title: "9.2 Regulatory Compliance Checklist",
        content: ` **Essential Compliance Steps:**

**Legal and Standards Mapping**
- Identify applicable laws by jurisdiction and sector
- Map system functions to risk categories
- Ensure documentation of data sources and training processes

**Technical Implementation**
- Implement safety tests and red teaming
- Conduct bias audits and fairness evaluations
- Establish monitoring and logging systems

**Organizational Processes**
- Create review and approval processes before deployment
- Establish incident response and escalation procedures
- Design user disclosures and consent mechanisms

**Continuous Monitoring**
- Set up regulatory query response channels
- Conduct periodic gap assessments
- Update compliance measures as regulations evolve

**Documentation Requirements**
- Maintain records of compliance activities
- Prepare for regulatory audits and inspections
- Document decision-making and risk assessments

This checklist aligns with NIST AI RMF Manage function.`,
        level: 1
      }
    ]
  }
];

export default function ReferenceBookPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>("foundations");
  const [expandedSubsection, setExpandedSubsection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const toggleSubsection = (subsectionId: string) => {
    setExpandedSubsection(expandedSubsection === subsectionId ? null : subsectionId);
  };

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1: return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case 2: return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case 3: return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getLevelLabel = (level: number) => {
    switch (level) {
      case 1: return "Beginner";
      case 2: return "Intermediate";
      case 3: return "Advanced";
      default: return "Unknown";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">AI Governance</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Home</a>
              <a href="/reference-book" className="text-blue-600 font-medium">Reference Book</a>
              <a href="#instructors" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Instructors</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Extended Edition
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            AI Governance: 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Theory, Institutions, and Practice
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            Extended reference book with deeper coverage of frontier lab governance and standards frameworks (NIST, IEEE, ISO), 
            while retaining the blend of theory and practice.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>11 Sections</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              <span>30+ Subsections</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
              <span>Practical Toolkit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
              <span>Real-World Cases</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {referenceBookContent.map((section) => (
            <div key={section.id} className="space-y-6">
              {/* Section Header */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                    <Button
                      onClick={() => toggleSection(section.id)}
                      variant="outline"
                      size="sm"
                    >
                      {expandedSection === section.id ? "Collapse" : "Expand"}
                    </Button>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mt-2">
                    {section.description}
                  </p>
                </CardHeader>
              </Card>

              {/* Subsections */}
              {expandedSection === section.id && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.subsections.map((subsection) => (
                    <Card key={subsection.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={getLevelColor(subsection.level)}>
                            {getLevelLabel(subsection.level)}
                          </Badge>
                          <Button
                            onClick={() => toggleSubsection(subsection.id)}
                            variant="ghost"
                            size="sm"
                            className="text-xs p-0 h-auto"
                          >
                            {expandedSubsection === subsection.id ? "Hide" : "Show"}
                          </Button>
                        </div>
                        <CardTitle className="text-lg leading-tight">
                          {subsection.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        {expandedSubsection === subsection.id ? (
                          <div className="prose prose-sm dark:prose-invert max-w-none">
                            {subsection.content.split('\n').map((paragraph, index) => {
                              if (paragraph.startsWith('**')) {
                                return <strong key={index} className="block mt-3 mb-2">{paragraph.replace(/\*\*/g, '')}</strong>;
                              } else if (paragraph.startsWith('-')) {
                                return <ul key={index} className="ml-4 list-disc"><li>{paragraph.substring(1).trim()}</li></ul>;
                              } else if (paragraph.match(/^\d+\./)) {
                                return <ol key={index} className="ml-4 list-decimal"><li className="font-semibold">{paragraph}</li></ol>;
                              } else if (paragraph.trim() === '') {
                                return <br key={index} />;
                              } else {
                                return <p key={index} className="mb-2">{paragraph}</p>;
                              }
                            })}
                          </div>
                        ) : (
                          <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                            {subsection.content}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p>© 2026 AI Governance Course. Extended reference book for practitioners and researchers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
