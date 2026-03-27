"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface TopicCard {
  type: string;
  icon: string;
  title: string;
  description: string;
  duration: string;
  difficulty: number;
  link?: string;
}

interface Topic {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
  cards: TopicCard[];
}

const topics: Topic[] = [
  {
    id: "t01",
    number: "01",
    label: "Foundation",
    title: "DevOps Philosophy & AI Transformation",
    description: "Beyond CALMS and the Three Ways — understanding DevOps as a sociotechnical system, measuring what matters with DORA & SPACE metrics, and positioning AI as an accelerant for every stage of the software delivery loop.",
    tags: ["DORA", "SPACE Metrics", "Value Streams", "AIOps Strategy"],
    cards: [
      {
        type: "Concept",
        icon: "◈",
        title: "What DevOps Actually Means in 2025",
        description: "Separating mythology from reality: DevOps as organisational system design, not just tooling. The three ways, the five ideals, and where GenAI changes the calculus.",
        duration: "22 min",
        difficulty: 1
      },
      {
        type: "Theory",
        icon: "⊙",
        title: "DORA Metrics Deep Dive: What Elites Actually Do",
        description: "Deployment frequency, lead time, MTTR, and change failure rate — benchmarks from 30,000+ organisations. How elite teams achieve daily deploys with <1% CFR.",
        duration: "35 min",
        difficulty: 2
      },
      {
        type: "Research",
        icon: "⌬",
        title: "SPACE Framework: Measuring Developer Productivity",
        description: "The GitHub-backed SPACE model — satisfaction, performance, activity, communication, efficiency. Why DORA alone misses 60% of what matters in platform teams.",
        duration: "28 min",
        difficulty: 2
      },
      {
        type: "AI Integration",
        icon: "✦",
        title: "AI as a Force Multiplier in the SDLC",
        description: "Mapping Copilot, CodeWhisperer, Gemini Code Assist, and agentic systems to each phase of the delivery pipeline. Where AI saves hours vs. where it creates risk.",
        duration: "30 min",
        difficulty: 2
      },
      {
        type: "Case Study",
        icon: "◉",
        title: "Netflix → 1000s Deploys/Day: Inside Their Pipeline",
        description: "Anatomy of Netflix's Spinnaker-based delivery system, chaos engineering culture, and how they instrument every deploy with canary analysis.",
        duration: "40 min",
        difficulty: 3
      },
      {
        type: "Lab",
        icon: "⬡",
        title: "Build a DORA Metrics Dashboard for Your Pipeline",
        description: "Instrument a sample GitHub Actions pipeline, extract deployment events, and visualise DORA metrics in Grafana with real data.",
        duration: "55 min",
        difficulty: 2
      },
      {
        type: "Comparison",
        icon: "⇄",
        title: "DevOps vs. Platform Engineering vs. SRE in 2025",
        description: "How the three disciplines differ, overlap, and co-exist. Who owns what in modern organisations, and what this means for your career trajectory.",
        duration: "25 min",
        difficulty: 2
      },
      {
        type: "Interview Prep",
        icon: "◇",
        title: "DevOps Philosophy: Top 30 Senior-Level Questions",
        description: "Staff and principal engineer questions on value stream mapping, tech debt, organisational change, and measuring delivery performance. With model answers.",
        duration: "45 min",
        difficulty: 3
      }
    ]
  },
  {
    id: "t02",
    number: "02",
    label: "AI Tooling",
    title: "AI-Assisted Development & Prompt Engineering",
    description: "Mastering GitHub Copilot, agentic coding with Cursor & Claude Code, and prompt engineering patterns that actually produce production-quality infrastructure code — not just demos.",
    tags: ["GitHub Copilot", "Cursor", "Claude Code", "Prompt Engineering"],
    cards: [
      {
        type: "Concept",
        icon: "◈",
        title: "Agentic Coding: Beyond Autocomplete",
        description: "The shift from tab-completion to autonomous coding agents. How Cursor, Claude Code, and Copilot Workspace plan, execute, and self-correct across multi-file tasks. Real-world examples of multi-file refactoring and entire feature generation.",
        duration: "25 min",
        difficulty: 2
      },
      {
        type: "Code",
        icon: "⌨",
        title: "Prompt Patterns for Infrastructure Code Generation",
        description: "Proven prompt templates for Terraform, Dockerfile, Kubernetes YAML, and GitHub Actions. Role-based prompting, chain-of-thought, and why context windows matter. Includes actual production-ready prompts.",
        duration: "50 min",
        difficulty: 2
      },
      {
        type: "Lab",
        icon: "⬡",
        title: "Build a Full Microservice Stack Using Only AI Prompts",
        description: "Dockerised Node.js + PostgreSQL + Nginx stack — Dockerfiles, compose file, GitHub Actions pipeline — generated entirely via Copilot and Claude with zero manual YAML. Step-by-step walkthrough.",
        duration: "90 min",
        difficulty: 3
      },
      {
        type: "AI Integration",
        icon: "✦",
        title: "GitHub Copilot: From Basics to Production Mastery",
        description: "Complete guide to GitHub Copilot including Copilot Chat, Copilot Workspace, and advanced features. Learn from GitHub's official team and industry experts.",
        duration: "35 min",
        difficulty: 2
      },
      {
        type: "AI Integration",
        icon: "✦",
        title: "Cursor IDE: The AI-Native Development Environment",
        description: "Deep dive into Cursor's AI-native features including Composer, Chat with Codebase, and advanced debugging. Learn how to leverage Cursor for complex development tasks.",
        duration: "40 min",
        difficulty: 2
      },
      {
        type: "AI Integration",
        icon: "✦",
        title: "Claude Code: Anthropic's AI Coding Assistant",
        description: "Master Claude Code for complex software development. Learn about Claude's superior reasoning capabilities and how it handles large codebases with context awareness.",
        duration: "35 min",
        difficulty: 2
      },
      {
        type: "Best Practices",
        icon: "★",
        title: "Prompt Engineering Standards for DevOps Teams",
        description: "Establishing a shared prompt library: version-controlled prompts, team review, A/B testing output quality. How Shopify and Stripe manage organisational AI context.",
        duration: "30 min",
        difficulty: 2
      },
      {
        type: "Security",
        icon: "⚠",
        title: "AI-Generated Code: Trust But Verify",
        description: "Common failure modes of LLM-generated IaC — insecure defaults, stale API versions, hallucinated resource names. How to build a verification layer into your AI workflow.",
        duration: "40 min",
        difficulty: 3
      },
      {
        type: "Debug",
        icon: "⚡",
        title: "When AI Gets It Wrong: Debugging AI Output",
        description: "Systematic approach to validating AI-generated infrastructure code. Tools: cfn-lint, tflint, kube-linter, and how to write prompts that surface their own bugs.",
        duration: "45 min",
        difficulty: 3
      },
      {
        type: "Quiz",
        icon: "✎",
        title: "AI Development Tools: Knowledge Check",
        description: "20 scenario-based questions covering Copilot configuration, prompt design, model selection, and responsible AI usage in production engineering contexts.",
        duration: "20 min",
        difficulty: 2
      }
    ]
  },
  {
    id: "t03",
    number: "03",
    label: "Source Control",
    title: "Advanced Git & Trunk-Based Development",
    description: "Git internals, large-scale monorepo strategies, trunk-based development at speed, and how elite teams use feature flags rather than long-lived branches to decouple deploy from release.",
    tags: ["Git Internals", "Trunk-Based Dev", "Monorepos", "Feature Flags"],
    cards: [
      {
        type: "Theory",
        icon: "⊙",
        title: "Git Object Model: Blobs, Trees, Commits, Refs",
        description: "Deep internals — how Git stores data, what happens during a commit, merge vs. rebase at the object level. Essential for diagnosing subtle repo corruption issues and understanding Git's performance characteristics.",
        duration: "40 min",
        difficulty: 3
      },
      {
        type: "Concept",
        icon: "◈",
        title: "Trunk-Based Development vs. GitFlow: The Research",
        description: "DORA data shows TBD outperforms feature branching on all four metrics. Understanding why, and how to transition a team from long-lived branches without chaos. Real case studies from successful implementations.",
        duration: "30 min",
        difficulty: 2
      },
      {
        type: "Code",
        icon: "⌨",
        title: "Monorepo Tooling: Nx, Turborepo & Bazel",
        description: "Setting up affected builds, remote caching, and dependency graphs in a monorepo. When to use Nx vs. Bazel vs. Turborepo for your stack size and team. Performance comparisons and migration strategies.",
        duration: "60 min",
        difficulty: 3
      },
      {
        type: "Lab",
        icon: "⬡",
        title: "Implement Pre-commit Hooks with Husky + Conventional Commits",
        description: "Automated commit message validation, linting, type-checking, and secret scanning before every commit. Enforce standards across a 10-engineer team. Complete setup with real-world examples.",
        duration: "50 min",
        difficulty: 2
      },
      {
        type: "Use Case",
        icon: "◎",
        title: "Google's Monorepo: 86TB, 45,000 Commits/Day",
        description: "How Google's Piper repository handles the world's largest codebase — virtual filesystem, automated dependency updates, and why they've never split into microrepos. Technical deep dive into their infrastructure.",
        duration: "35 min",
        difficulty: 3
      },
      {
        type: "Debug",
        icon: "⚡",
        title: "Diagnosing Git Merge Conflicts in Large Teams",
        description: "Strategies for complex 3-way merges, rerere for repeated conflict resolution, and how to use git blame + bisect to trace production regressions to their source commit. Advanced conflict resolution techniques.",
        duration: "45 min",
        difficulty: 3
      },
      {
        type: "Best Practices",
        icon: "★",
        title: "Feature Flags: Decouple Deploy from Release",
        description: "Modern feature flagging strategies using LaunchDarkly, Flagsmith, and open-source solutions. How to safely test in production, perform gradual rollouts, and instant rollbacks without branch merging.",
        duration: "40 min",
        difficulty: 2
      },
      {
        type: "Security",
        icon: "⚠",
        title: "Git Security: Secrets, Signing & Access Control",
        description: "Using git-secrets, truffleHog, and gitleaks in CI. Removing secrets from history with git-filter-repo. CODEOWNERS, branch protection rules, GPG signing, and SSH key management.",
        duration: "40 min",
        difficulty: 2
      },
      {
        type: "Cheat Sheet",
        icon: "≡",
        title: "Git Power-User Reference: 80 Commands You Need",
        description: "Advanced git commands — reflog, worktrees, sparse-checkout, partial clone, maintenance, bundle. With real scenarios for each command and when to use them in production environments.",
        duration: "15 min",
        difficulty: 1
      }
    ]
  },
];

const cardTypeColors: Record<string, string> = {
  "Concept": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Theory": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Code": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Lab": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
  "Project": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  "Use Case": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  "Debug": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "Quiz": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "Interview Prep": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  "Best Practices": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
  "Case Study": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  "Demo": "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200",
  "Cheat Sheet": "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200",
  "Architecture": "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
  "Comparison": "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
  "Security": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "AI Integration": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Research": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200"
};

export function DevOpsCurriculum() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>("t01");

  const toggleTopic = (topicId: string) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
  };

  const renderDifficulty = (level: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={`w-1.5 h-1.5 rounded-full ${
              dot <= level ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          24 Topics • 340+ Learning Cards • 18 Card Types
        </Badge>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          DevOps & AI Engineering Mastery
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
          A comprehensive, practitioner-level curriculum by <strong>Vikram Singh Sankhala</strong>. 
          Every topic maps to real production scenarios — covering containers, orchestration, platform engineering, 
          AIOps, security, chaos, and the full spectrum of modern GenAI-driven DevOps.
        </p>
      </div>

      {/* Card Type Legend */}
      <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Card Type Key</h3>
        <div className="flex flex-wrap gap-3">
          {Object.entries(cardTypeColors).map(([type, colorClass]) => (
            <div key={type} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded ${colorClass.replace('text-', 'bg-').replace('dark:text-', 'dark:bg-')}`} />
              <span className="text-sm text-slate-600 dark:text-slate-300">{type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Topics */}
      <div className="space-y-16">
        {topics.map((topic) => (
          <section key={topic.id} className="space-y-8">
            {/* Topic Header */}
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="text-6xl font-bold text-blue-200 dark:text-blue-800">
                  {topic.number}
                </div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <div>
                  <Badge variant="outline" className="mb-2">
                    {topic.label}
                  </Badge>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {topic.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {topic.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={() => toggleTopic(topic.id)}
                  variant="outline"
                  className="mt-4"
                >
                  {expandedTopic === topic.id ? "Hide Cards" : "Show Cards"} ({topic.cards.length})
                </Button>
              </div>
            </div>

            {/* Topic Cards */}
            {expandedTopic === topic.id && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {topic.cards.map((card, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={cardTypeColors[card.type] || "bg-gray-100 text-gray-800"}>
                          <span className="mr-1">{card.icon}</span>
                          {card.type}
                        </Badge>
                        {renderDifficulty(card.difficulty)}
                      </div>
                      <CardTitle className="text-sm leading-tight">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                        {card.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span>{card.duration}</span>
                        <Button variant="ghost" size="sm" className="text-xs p-0 h-auto">
                          Start →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
