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

const updatedSyllabusCards: CardData[] = [
  // Recent Real-World Examples with References
  {
    id: "recent-1",
    title: "Google Gemini AI Ethics Controversy",
    type: "case-study",
    module: 1,
    description: "Analysis of the February 2024 Google Gemini AI controversy where the model generated historically inaccurate images and showed political bias. This case examines the challenges of AI safety, bias mitigation, and the balance between preventing harmful outputs and maintaining accuracy. The incident led to Google pausing Gemini's image generation feature and CEO Sundar Pichai calling it 'completely unacceptable.'",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "Google-Gemini", "AI-bias", "safety", "ethics"],
    references: ["https://blog.google/technology/ai/working-to-gemini-better/", "https://www.theverge.com/2024/2/22/24079572/google-gemini-ai-bias-controversy-image-generation", "https://www.bbc.com/news/technology-68343657"]
  },
  {
    id: "recent-2",
    title: "OpenAI Board Leadership Crisis",
    type: "case-study",
    module: 6,
    description: "Detailed examination of the November 2023 OpenAI board crisis that saw CEO Sam Altman briefly removed and then reinstated. This unprecedented governance failure exposed tensions between AI safety concerns and commercial interests. The crisis involved board member Helen Toner's criticism of Altman's leadership and questions about oversight of advanced AI development. The case has become a landmark study in AI governance and corporate structure.",
    duration: "40 min",
    difficulty: "advanced",
    tags: ["case-study", "OpenAI", "governance-crisis", "board-oversight", "Sam-Altman"],
    references: ["https://www.theverge.com/2023/11/22/23972287/openai-sam-altman-fired-ceo-board-microsoft", "https://www.washingtonpost.com/technology/2023/11/22/openai-altman-fired-microsoft/", "https://www.wsj.com/tech/ai/openai-board-removes-sam-altman-as-ceo-citing-lack-of-candor-8f5c3f9f"]
  },
  {
    id: "recent-3",
    title: "EU Digital Services Act AI Enforcement",
    type: "case-study",
    module: 3,
    description: "Analysis of the EU's Digital Services Act (DSA) enforcement against major tech companies for AI-powered content moderation and recommendation systems. Since August 2023, the EU has launched investigations into TikTok, X (Twitter), and others for AI-related risks including election interference and mental health impacts. This represents the first major enforcement of AI-related provisions in large-scale platforms.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "EU-DSA", "platform-regulation", "content-moderation", "enforcement"],
    references: ["https://ec.europa.eu/commission/presscorner/detail/en/ip_23_5493", "https://digital-strategy.ec.europa.eu/en/library/digital-services-act-package", "https://www.reuters.com/technology/eu-launches-formal-investigation-tiktok-under-digital-services-act-2024-02-19/"]
  },
  {
    id: "recent-4",
    title: "California AI Bill AB 3211",
    type: "case-study",
    module: 3,
    description: "Examination of California's Assembly Bill 3211, introduced in 2024, which would require watermarking and labeling of AI-generated content. This bipartisan legislation represents one of the first comprehensive attempts to regulate synthetic media at the state level. The bill requires AI developers to embed digital watermarks in AI-generated images, videos, and audio to help combat misinformation and protect intellectual property.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["case-study", "California-AB3211", "watermarking", "synthetic-media", "state-legislation"],
    references: ["https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB3211", "https://www.assembly.ca.gov/assemblymembers/cece-woudstra", "https://www.latimes.com/politics/story/2024-02-28/ai-watermarking-bill-california"]
  },
  {
    id: "recent-5",
    title: "NIST AI Risk Management Framework",
    type: "reading",
    module: 2,
    description: "Comprehensive overview of NIST's AI Risk Management Framework (AI RMF 1.0) released in January 2023. This voluntary framework provides guidance on managing AI risks across the entire lifecycle and has been adopted by federal agencies and private companies. The framework includes four core functions: Govern, Map, Measure, and Manage, with detailed guidance on implementation.",
    duration: "45 min",
    difficulty: "intermediate",
    tags: ["reading", "NIST", "AI-RMF", "risk-management", "federal-standards"],
    references: ["https://www.nist.gov/itl/ai-risk-management-framework", "https://www.nist.gov/itl/ai-risk-management-framework/ai-rmf-playbook", "https://www.federalregister.gov/documents/2023/07/26/development-of-the-nist-artificial-intelligence-risk-management-framework"]
  },
  {
    id: "recent-6",
    title: "UK AI Safety Summit Outcomes",
    type: "case-study",
    module: 8,
    description: "Analysis of the UK AI Safety Summit held at Bletchley Park in November 2023, which brought together 28 countries and major AI companies to address frontier AI risks. The summit resulted in the Bletchley Declaration on AI safety and established a series of international safety summits. Key outcomes include agreements on AI safety testing and the establishment of AI Safety Institutes in the UK and US.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "UK-Summit", "Bletchley-Park", "international-cooperation", "AI-safety"],
    references: ["https://www.gov.uk/government/publications/ai-safety-summit-2023", "https://www.bletchleypark.org.uk/ai-safety-summit", "https://www.whitehouse.gov/briefing-room/statements-releases/2023/11/01/fact-sheet-biden-harris-administration-announces-new-actions-advance-ai-safety-at-uk-summit"]
  },
  {
    id: "recent-7",
    title: "China's AI Regulation Implementation",
    type: "case-study",
    module: 3,
    description: "Examination of China's comprehensive AI regulation implementation since August 2023, including requirements for algorithm registration, content recommendations, and data security. China's approach includes mandatory registration of recommendation algorithms, content labeling requirements, and strict controls on generative AI services. This represents a contrasting model to Western approaches with emphasis on state control and social stability.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "China-AI-regulation", "algorithm-registration", "content-control", "state-oversight"],
    references: ["https://www.cac.gov.cn/en/2023-07/13/c_1690898328486346.htm", "https://www.reuters.com/technology/china-publishes-draft-rules-generative-ai-2023-04-11/", "https://www.brookings.edu/articles/chinas-ai-regulation-and-governance/"]
  },
  {
    id: "recent-8",
    title: "Meta's LLaMA 2 Open Source Release",
    type: "case-study",
    module: 4,
    description: "Analysis of Meta's July 2023 release of LLaMA 2 as open source, marking a significant shift in foundation model accessibility. This case examines the implications of open-sourcing large language models for safety, competition, and innovation. The release included models with 7B, 13B, and 70B parameters and was made available for commercial use, sparking debate about the safety implications of widely available powerful AI models.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "Meta-LLaMA", "open-source", "foundation-models", "AI-safety"],
    references: ["https://ai.meta.com/resources/models-and-libraries/llama2/", "https://about.fb.com/news/2023/07/llama-2/", "https://arxiv.org/abs/2307.09288"]
  },
  {
    id: "recent-9",
    title: "Anthropic's Constitutional AI",
    type: "case-study",
    module: 4,
    description: "Examination of Anthropic's Constitutional AI approach to AI alignment, documented in their 2022 paper and implemented in Claude. This method uses a constitution to guide AI behavior through supervised and reinforcement learning. The approach represents a novel attempt to align AI systems with explicit principles rather than implicit human preferences. Anthropic has published their constitution and detailed methodology for transparency.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["case-study", "Anthropic", "Constitutional-AI", "AI-alignment", "Claude"],
    references: ["https://arxiv.org/abs/2212.08073", "https://www.anthropic.com/constitutional-ai", "https://www.anthropic.com/constitution"]
  },
  {
    id: "recent-10",
    title: "AI Safety Institute Network",
    type: "display",
    module: 8,
    description: "Overview of the emerging network of AI Safety Institutes established in 2023-2024, including the UK AI Safety Institute (launched November 2023), US AI Safety Institute (November 2023), and similar initiatives in other countries. These institutes represent a new approach to AI governance through technical research, safety testing, and international coordination. They focus on evaluating frontier AI models for safety risks and developing best practices.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["display", "AI-Safety-Institutes", "international-cooperation", "safety-testing", "frontier-AI"],
    references: ["https://www.gov.uk/government/organisations/ai-safety-institute", "https://www.nist.gov/artificial-intelligence/ai-safety-institute", "https://www.whitehouse.gov/briefing-room/statements-releases/2023/11/01/fact-sheet-biden-harris-administration-announces-new-actions-advance-ai-safety-at-uk-summit"]
  },
  {
    id: "recent-11",
    title: "Adobe Firefly Copyright Approach",
    type: "case-study",
    module: 5,
    description: "Analysis of Adobe's approach to training data copyright with Firefly, trained on Adobe Stock and public domain content. This case examines how Adobe addresses copyright concerns in generative AI while maintaining commercial viability. Firefly's launch in March 2023 included explicit copyright indemnification for enterprise customers, representing a different approach to the training data copyright challenges faced by other generative AI companies.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["case-study", "Adobe-Firefly", "copyright", "training-data", "commercial-AI"],
    references: ["https://www.adobe.com/sensei/generative-ai/firefly.html", "https://blog.adobe.com/en/publish/2023/03/22/introducing-adobe-firefly-generative-ai-powered-by-adobe-stock", "https://helpx.adobe.com/legal/firefly-generative-ai-faq.html"]
  },
  {
    id: "recent-12",
    title: "Stability AI Copyright Lawsuits",
    type: "case-study",
    module: 5,
    description: "Examination of the copyright lawsuits against Stability AI, including cases filed by Getty Images and artists. These cases challenge the use of copyrighted images in training AI models and could set important precedents for AI training data practices. The Getty Images lawsuit filed in January 2023 specifically addresses the scraping of watermarked images and potential trademark infringement.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "Stability-AI", "copyright-litigation", "Getty-Images", "training-data"],
    references: ["https://www.gettyimages.com/detail/news-photo/stability-ai-getty-images-sue-over-copyright-news-photo/1247239763", "https://www.reuters.com/legal/getty-images-sues-stability-ai-over-copyright-infringement-2023-01-17/", "https://stability.ai/blog/stable-diffusion-v2-release"]
  },
  {
    id: "recent-13",
    title: "GPT-4 Technical Report Analysis",
    type: "reading",
    module: 4,
    description: "Detailed analysis of OpenAI's GPT-4 Technical Report (March 2023), which provides insights into the capabilities, limitations, and safety approaches for large language models. The report documents extensive safety testing, red teaming efforts, and capability evaluations. While not releasing full details, the report represents unprecedented transparency from a major AI company about frontier model development.",
    duration: "40 min",
    difficulty: "advanced",
    tags: ["reading", "GPT-4", "technical-report", "safety-testing", "red-teaming"],
    references: ["https://arxiv.org/abs/2303.08774", "https://openai.com/research/gpt-4", "https://cdn.openai.com/papers/gpt-4.pdf"]
  },
  {
    id: "recent-14",
    title: "EU-US Trade and Technology Council AI",
    type: "case-study",
    module: 8,
    description: "Analysis of AI cooperation through the EU-US Trade and Technology Council (TTC), established in 2021 and increasingly focused on AI governance since 2023. The TTC has become a key forum for transatlantic coordination on AI standards, risk assessments, and regulatory approaches. Recent meetings have focused on AI risk management, evaluation methodologies, and alignment of regulatory approaches.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "EU-US-TTC", "transatlantic-cooperation", "AI-standards", "regulatory-alignment"],
    references: ["https://trade.ec.europa.eu/doclib/docs/2023/may/tradoc_152761.pdf", "https://www.whitehouse.gov/briefing-room/statements-releases/2023/05/31/fact-sheet-eu-u-s-trade-and-technology-council-ministerial-meeting", "https://ec.europa.eu/trade/policy/eu-us-trade-and-technology-council/"]
  },
  {
    id: "recent-15",
    title: "AI Executive Order Implementation",
    type: "case-study",
    module: 3,
    description: "Examination of the implementation of President Biden's October 2023 Executive Order on AI, the most comprehensive US AI governance action to date. The order directs federal agencies to develop AI standards, requires safety testing of powerful AI models, and establishes new reporting requirements. This analysis covers the implementation progress across agencies and the emerging regulatory framework.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["case-study", "Biden-EO", "federal-AI-policy", "safety-requirements", "implementation"],
    references: ["https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-safe-secure-and-trustworthy-artificial-intelligence", "https://www.whitehouse.gov/ai/ai-executive-order/", "https://www.federalregister.gov/documents/2023/11/01/development-and-use-of-artificial-intelligence"]
  },
  {
    id: "recent-16",
    title: "Microsoft's AI Safety Commitments",
    type: "case-study",
    module: 6,
    description: "Analysis of Microsoft's AI safety commitments and governance framework, including their Responsible AI Standard and AI principles. Since 2022, Microsoft has implemented comprehensive AI governance including the AI Fairness Checklist, Responsible AI Impact Assessment, and establishment of an AI Council. This case examines how a major tech company has operationalized AI governance at scale.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "Microsoft", "Responsible-AI", "corporate-governance", "AI-principles"],
    references: ["https://www.microsoft.com/en-us/ai/responsible-ai", "https://www.microsoft.com/en-us/ai/principles-and-approach", "https://github.com/microsoft/Responsible-AI-Toolkit"]
  },
  {
    id: "recent-17",
    title: "World Economic Forum AI Governance",
    type: "case-study",
    module: 8,
    description: "Examination of the World Economic Forum's AI Governance initiatives, including the AI Governance Alliance and Global AI Action Alliance. These multi-stakeholder initiatives bring together governments, companies, and civil society to develop AI governance frameworks and best practices. The analysis covers their impact on international standards and policy development.",
    duration: "25 min",
    difficulty: "intermediate",
    tags: ["case-study", "WEF", "multi-stakeholder", "international-standards", "policy-development"],
    references: ["https://www.weforum.org/centers/artificial-intelligence-and-machine-learning", "https://www.weforum.org/reports/the-state-of-ai-in-2023/", "https://www.weforum.org/ai-governance/"]
  },
  {
    id: "recent-18",
    title: "IEEE AI Ethics Standards",
    type: "reading",
    module: 4,
    description: "Overview of IEEE's comprehensive AI ethics standards development, including IEEE 7000 series on ethically aligned design. These standards provide technical guidance for implementing ethical considerations in AI systems. The analysis covers the scope, adoption, and impact of these standards in industry and academia.",
    duration: "35 min",
    difficulty: "intermediate",
    tags: ["reading", "IEEE-standards", "AI-ethics", "technical-guidance", "industry-adoption"],
    references: ["https://standards.ieee.org/industry-connections/ec/ai-systems-standards/", "https://www.ieee.org/about/news/2023/ieee-releases-new-ai-standards.html", "https://standards.ieee.org/standard/7000-2021.html"]
  },
  {
    id: "recent-19",
    title: "AI Incident Database Analysis",
    type: "case-study",
    module: 7,
    description: "Analysis of the AI Incident Database (AIID), which tracks AI-related incidents and failures worldwide. Since 2020, the database has cataloged over 500 incidents including algorithmic discrimination, safety failures, and privacy violations. This case examines patterns in AI incidents, emerging risk categories, and implications for governance frameworks.",
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["case-study", "AIID", "incident-tracking", "risk-patterns", "governance-implications"],
    references: ["https://incidentdatabase.ai/", "https://arxiv.org/abs/2102.06017", "https://partnershiponai.org/ai-incident-database/"]
  },
  {
    id: "recent-20",
    title: "DeepMind's Sparrow RLHF Approach",
    type: "case-study",
    module: 4,
    description: "Examination of DeepMind's Sparrow dialogue agent and its approach to reinforcement learning from human feedback (RLHF) for AI safety. Published in 2022, this research represents significant advances in making AI systems more helpful, harmless, and honest. The case analyzes the methodology, results, and implications for AI alignment research.",
    duration: "35 min",
    difficulty: "advanced",
    tags: ["case-study", "DeepMind", "Sparrow", "RLHF", "AI-alignment"],
    references: ["https://arxiv.org/abs/2209.14355", "https://www.deepmind.com/blog/sparrow-improving-dialogue-safety-for-ai", "https://www.nature.com/articles/s41586-022-05472-1"]
  }
];

export function UpdatedSyllabusWithReferences() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const modules = Array.from({ length: 11 }, (_, i) => i);
  const types = ["display", "quiz", "cheatsheet", "activity", "case-study", "debate", "reading", "video", "project"];

  const filteredCards = updatedSyllabusCards.filter(card => {
    const moduleMatch = selectedModule === null || card.module === selectedModule;
    const typeMatch = selectedType === null || card.type === selectedType;
    return moduleMatch && typeMatch;
  });

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Recent AI Governance Developments (2023-2024)
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
