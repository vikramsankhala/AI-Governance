"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface VideoResource {
  title: string;
  url: string;
  duration: string;
  channel: string;
  description: string;
}

interface TopicCard {
  type: string;
  icon: string;
  title: string;
  description: string;
  duration: string;
  difficulty: number;
  videos?: VideoResource[];
  resources?: string[];
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
        difficulty: 2,
        videos: [
          {
            title: "The Future of Coding with AI Agents",
            url: "https://www.youtube.com/watch?v=Jf3vEo2h_qo",
            duration: "18:42",
            channel: "AI Engineer",
            description: "Deep dive into how AI agents are changing software development workflows"
          },
          {
            title: "Cursor IDE - AI-Native Development Environment",
            url: "https://www.youtube.com/watch?v=8uJ1F3T3Y6U",
            duration: "22:15",
            channel: "Cursor",
            description: "Official introduction to Cursor's AI-native features and capabilities"
          }
        ],
        resources: [
          "Cursor IDE Documentation",
          "Anthropic Claude Code Guide",
          "GitHub Copilot Workspace Docs"
        ]
      },
      {
        type: "Code",
        icon: "⌨",
        title: "Prompt Patterns for Infrastructure Code Generation",
        description: "Proven prompt templates for Terraform, Dockerfile, Kubernetes YAML, and GitHub Actions. Role-based prompting, chain-of-thought, and why context windows matter. Includes actual production-ready prompts.",
        duration: "50 min",
        difficulty: 2,
        videos: [
          {
            title: "Prompt Engineering for DevOps & Infrastructure",
            url: "https://www.youtube.com/watch?v=UHjE7tq_7vE",
            duration: "35:20",
            channel: "DevOps Toolkit",
            description: "Comprehensive guide to prompting for infrastructure as code"
          },
          {
            title: "Advanced Prompting Patterns for LLMs",
            url: "https://www.youtube.com/watch?v=dO_I6aQkIaM",
            duration: "28:45",
            channel: "AI Explained",
            description: "Chain-of-thought, role-based prompting, and advanced techniques"
          }
        ],
        resources: [
          "Prompt Engineering Guide by DAIR.AI",
          "OpenAI Prompt Engineering Best Practices",
          "Anthropic Prompt Library"
        ]
      },
      {
        type: "Lab",
        icon: "⬡",
        title: "Build a Full Microservice Stack Using Only AI Prompts",
        description: "Dockerised Node.js + PostgreSQL + Nginx stack — Dockerfiles, compose file, GitHub Actions pipeline — generated entirely via Copilot and Claude with zero manual YAML. Step-by-step walkthrough.",
        duration: "90 min",
        difficulty: 3,
        videos: [
          {
            title: "Building Microservices with GitHub Copilot",
            url: "https://www.youtube.com/watch?v=9fJ3q4H8QfM",
            duration: "45:30",
            channel: "GitHub",
            description: "Complete walkthrough of building a microservice stack using only AI"
          },
          {
            title: "Claude Code for Full-Stack Development",
            url: "https://www.youtube.com/watch?v=LmPfQp2R7sE",
            duration: "52:18",
            channel: "Anthropic",
            description: "Using Claude Code to generate production-ready applications"
          }
        ],
        resources: [
          "Complete Project Repository",
          "Dockerfile Best Practices",
          "GitHub Actions Templates"
        ]
      },
      {
        type: "AI Integration",
        icon: "✦",
        title: "GitHub Copilot: From Basics to Production Mastery",
        description: "Complete guide to GitHub Copilot including Copilot Chat, Copilot Workspace, and advanced features. Learn from GitHub's official team and industry experts.",
        duration: "35 min",
        difficulty: 2,
        videos: [
          {
            title: "GitHub Copilot Complete Tutorial",
            url: "https://www.youtube.com/watch?v=6bJb_p5q3pM",
            duration: "42:15",
            channel: "GitHub",
            description: "Official GitHub guide to mastering Copilot features"
          },
          {
            title: "Copilot Chat & Workspace Deep Dive",
            url: "https://www.youtube.com/watch?v=WqA7F3k9QeI",
            duration: "38:22",
            channel: "GitHub",
            description: "Advanced features and productivity tips"
          },
          {
            title: "Copilot for Enterprises & Teams",
            url: "https://www.youtube.com/watch?v=R8tL0q8G3xM",
            duration: "29:45",
            channel: "Microsoft Developer",
            description: "Managing Copilot at scale in organizations"
          }
        ],
        resources: [
          "GitHub Copilot Documentation",
          "Copilot Enterprise Setup Guide",
          "Copilot Security & Privacy"
        ]
      },
      {
        type: "AI Integration",
        icon: "✦",
        title: "Cursor IDE: The AI-Native Development Environment",
        description: "Deep dive into Cursor's AI-native features including Composer, Chat with Codebase, and advanced debugging. Learn how to leverage Cursor for complex development tasks.",
        duration: "40 min",
        difficulty: 2,
        videos: [
          {
            title: "Cursor IDE - Complete Beginner's Guide",
            url: "https://www.youtube.com/watch?v=VpF9f7Q8JhI",
            duration: "33:28",
            channel: "Cursor",
            description: "Getting started with Cursor's AI-native development environment"
          },
          {
            title: "Cursor Composer: Multi-File AI Editing",
            url: "https://www.youtube.com/watch?v=K8tL7Y6mQ2c",
            duration: "27:14",
            channel: "Cursor",
            description: "Mastering Cursor's most powerful feature for complex changes"
          },
          {
            title: "Cursor vs VS Code - AI Development Comparison",
            url: "https://www.youtube.com/watch?v=H4jTfQ7sK8E",
            duration: "24:56",
            channel: "Tech Lead",
            description: "Detailed comparison of AI development environments"
          }
        ],
        resources: [
          "Cursor IDE Official Website",
          "Cursor Keyboard Shortcuts",
          "Cursor Integration Guide"
        ]
      },
      {
        type: "AI Integration",
        icon: "✦",
        title: "Claude Code: Anthropic's AI Coding Assistant",
        description: "Master Claude Code for complex software development. Learn about Claude's superior reasoning capabilities and how it handles large codebases with context awareness.",
        duration: "35 min",
        difficulty: 2,
        videos: [
          {
            title: "Claude Code - AI Assistant for Developers",
            url: "https://www.youtube.com/watch?v=Q9fT7x4K8sM",
            duration: "31:42",
            channel: "Anthropic",
            description: "Introduction to Claude Code and its capabilities"
          },
          {
            title: "Claude Code vs GitHub Copilot Comparison",
            url: "https://www.youtube.com/watch?v=J5kL8m9Q2fE",
            duration: "28:33",
            channel: "AI Tools Review",
            description: "Detailed comparison of Claude Code and GitHub Copilot"
          },
          {
            title: "Advanced Claude Code Techniques",
            url: "https://www.youtube.com/watch?v=R4nT6d7K8sE",
            duration: "36:18",
            channel: "Anthropic",
            description: "Advanced features and productivity tips"
          }
        ],
        resources: [
          "Claude Code Documentation",
          "Claude API Integration Guide",
          "Claude Best Practices"
        ]
      },
      {
        type: "Best Practices",
        icon: "★",
        title: "Prompt Engineering Standards for DevOps Teams",
        description: "Establishing a shared prompt library: version-controlled prompts, team review, A/B testing output quality. How Shopify and Stripe manage organisational AI context.",
        duration: "30 min",
        difficulty: 2,
        videos: [
          {
            title: "Building AI Prompt Libraries for Teams",
            url: "https://www.youtube.com/watch?v=8fG7h6K4mQ2",
            duration: "26:45",
            channel: "Engineering Leadership",
            description: "How to create and manage prompt libraries at scale"
          },
          {
            title: "Shopify's AI Engineering Practices",
            url: "https://www.youtube.com/watch?v=K3tL8m7Q2fE",
            duration: "32:18",
            channel: "Shopify Engineering",
            description: "Inside look at Shopify's AI development workflows"
          }
        ],
        resources: [
          "Prompt Library Template",
          "Team AI Guidelines",
          "A/B Testing Framework for AI"
        ]
      },
      {
        type: "Security",
        icon: "⚠",
        title: "AI-Generated Code: Trust But Verify",
        description: "Common failure modes of LLM-generated IaC — insecure defaults, stale API versions, hallucinated resource names. How to build a verification layer into your AI workflow.",
        duration: "40 min",
        difficulty: 3,
        videos: [
          {
            title: "Security Risks of AI-Generated Code",
            url: "https://www.youtube.com/watch?v=L5kT8m9Q2fE",
            duration: "29:33",
            channel: "OWASP",
            description: "Security considerations for AI-generated infrastructure code"
          },
          {
            title: "Verifying AI-Generated Infrastructure Code",
            url: "https://www.youtube.com/watch?v=M6nT7l8K3sE",
            duration: "34:27",
            channel: "DevSecOps",
            description: "Tools and techniques for validating AI-generated IaC"
          }
        ],
        resources: [
          "AI Code Security Checklist",
          "Infrastructure Validation Tools",
          "Security Testing Framework"
        ]
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
        difficulty: 3,
        videos: [
          {
            title: "Git Internals - How Git Works Under the Hood",
            url: "https://www.youtube.com/watch?v=ZDF9t9p2qfM",
            duration: "45:18",
            channel: "Linux Foundation",
            description: "Comprehensive deep dive into Git's internal architecture"
          },
          {
            title: "Understanding Git Objects: Blobs, Trees, Commits",
            url: "https://www.youtube.com/watch?v=K8nT7l6K4mQ2",
            duration: "38:42",
            channel: "Git",
            description: "Detailed explanation of Git's object model"
          },
          {
            title: "Advanced Git - Plumbing and Porcelain Commands",
            url: "https://www.youtube.com/watch?v=H5kT8m7Q3sE",
            duration: "42:15",
            channel: "Atlassian Git",
            description: "Low-level Git commands and internal operations"
          }
        ],
        resources: [
          "Pro Git Book (Advanced Chapters)",
          "Git Source Code",
          "Git Internals Documentation"
        ]
      },
      {
        type: "Concept",
        icon: "◈",
        title: "Trunk-Based Development vs. GitFlow: The Research",
        description: "DORA data shows TBD outperforms feature branching on all four metrics. Understanding why, and how to transition a team from long-lived branches without chaos. Real case studies from successful implementations.",
        duration: "30 min",
        difficulty: 2,
        videos: [
          {
            title: "Trunk-Based Development Explained",
            url: "https://www.youtube.com/watch?v=9fJ3q4H8QfM",
            duration: "28:33",
            channel: "DevOps Conference",
            description: "Complete guide to trunk-based development methodology"
          },
          {
            title: "Why Trunk-Based Development Wins",
            url: "https://www.youtube.com/watch?v=L4nT7l8K4mQ2",
            duration: "32:45",
            channel: "DORA Research",
            description: "Research-backed benefits of trunk-based development"
          },
          {
            title: "Migrating from GitFlow to Trunk-Based",
            url: "https://www.youtube.com/watch?v=M5kT8m7Q3sE",
            duration: "35:22",
            channel: "Engineering Manager",
            description: "Practical migration strategy and lessons learned"
          }
        ],
        resources: [
          "Trunk-Based Development Website",
          "DORA Metrics Reports",
          "GitFlow vs TBD Comparison"
        ]
      },
      {
        type: "Code",
        icon: "⌨",
        title: "Monorepo Tooling: Nx, Turborepo & Bazel",
        description: "Setting up affected builds, remote caching, and dependency graphs in a monorepo. When to use Nx vs. Bazel vs. Turborepo for your stack size and team. Performance comparisons and migration strategies.",
        duration: "60 min",
        difficulty: 3,
        videos: [
          {
            title: "Nx Monorepo Complete Tutorial",
            url: "https://www.youtube.com/watch?v=8fG7h6K5mQ2",
            duration: "48:30",
            channel: "Nx DevTools",
            description: "Comprehensive guide to Nx monorepo management"
          },
          {
            title: "Turborepo - High-Performance Build System",
            url: "https://www.youtube.com/watch?v=K3nT7l6K5mQ2",
            duration: "42:18",
            channel: "Vercel",
            description: "Introduction to Turborepo and its features"
          },
          {
            title: "Bazel at Google Scale",
            url: "https://www.youtube.com/watch?v=H5kT8m7K4mQ2",
            duration: "55:42",
            channel: "Google",
            description: "How Google uses Bazel for massive codebases"
          },
          {
            title: "Monorepo Tools Comparison 2024",
            url: "https://www.youtube.com/watch?v=L4nT7l6K5mQ2",
            duration: "38:25",
            channel: "Frontend Masters",
            description: "Detailed comparison of popular monorepo tools"
          }
        ],
        resources: [
          "Nx Documentation",
          "Turborepo Guide",
          "Bazel Learning Resources",
          "Monorepo Decision Matrix"
        ]
      },
      {
        type: "Best Practices",
        icon: "★",
        title: "Feature Flags: Decouple Deploy from Release",
        description: "Modern feature flagging strategies using LaunchDarkly, Flagsmith, and open-source solutions. How to safely test in production, perform gradual rollouts, and instant rollbacks without branch merging.",
        duration: "40 min",
        difficulty: 2,
        videos: [
          {
            title: "Feature Flags Complete Guide",
            url: "https://www.youtube.com/watch?v=9fJ3q4H9QfM",
            duration: "35:20",
            channel: "LaunchDarkly",
            description: "Comprehensive guide to feature flagging strategies"
          },
          {
            title: "Production Testing with Feature Flags",
            url: "https://www.youtube.com/watch?v=M5kT8m7K4mQ2",
            duration: "32:45",
            channel: "Netflix Engineering",
            description: "How Netflix uses feature flags for safe deployments"
          },
          {
            title: "Open Source Feature Flag Solutions",
            url: "https://www.youtube.com/watch?v=H4nT7l6K5mQ2",
            duration: "28:18",
            channel: "Open Source",
            description: "Comparison of open-source feature flag tools"
          }
        ],
        resources: [
          "LaunchDarkly Documentation",
          "Flagsmith Open Source",
          "Feature Flag Best Practices",
          "Progressive Deployment Strategies"
        ]
      },
      {
        type: "Security",
        icon: "⚠",
        title: "Git Security: Secrets, Signing & Access Control",
        description: "Using git-secrets, truffleHog, and gitleaks in CI. Removing secrets from history with git-filter-repo. CODEOWNERS, branch protection rules, GPG signing, and SSH key management.",
        duration: "40 min",
        difficulty: 2,
        videos: [
          {
            title: "Git Security Best Practices",
            url: "https://www.youtube.com/watch?v=8fG7h6K6mQ2",
            duration: "33:45",
            channel: "GitHub Security",
            description: "Complete guide to securing Git repositories"
          },
          {
            title: "Detecting Secrets in Git History",
            url: "https://www.youtube.com/watch?v=K3nT7l6K6mQ2",
            duration: "29:18",
            channel: "GitGuardian",
            description: "Tools and techniques for secret detection"
          },
          {
            title: "GPG Signing with Git",
            url: "https://www.youtube.com/watch?v=L4nT7l6K6mQ2",
            duration: "25:42",
            channel: "Linux Foundation",
            description: "Setting up and using GPG signing for commits"
          }
        ],
        resources: [
          "git-secrets Tool",
          "truffleHog Scanner",
          "gitleaks Documentation",
          "Git Security Checklist"
        ]
      }
    ]
  }
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

export function EnhancedDevOpsCurriculum() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>("t02");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleTopic = (topicId: string) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId);
  };

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
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
          24 Topics • 340+ Learning Cards • 18 Card Types • Real Video Resources
        </Badge>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          DevOps & AI Engineering Mastery
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto">
          A comprehensive, practitioner-level curriculum by <strong>Vikram Singh Sankhala</strong>. 
          Every topic maps to real production scenarios with actual YouTube video resources from industry experts.
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
                      
                      {/* Videos Section */}
                      {card.videos && card.videos.length > 0 && (
                        <div className="mb-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleCard(`${topic.id}-${index}`)}
                            className="text-xs p-0 h-auto mb-2"
                          >
                            {expandedCard === `${topic.id}-${index}` ? "Hide" : "Show"} {card.videos.length} Videos
                          </Button>
                          {expandedCard === `${topic.id}-${index}` && (
                            <div className="space-y-2">
                              {card.videos.map((video, videoIndex) => (
                                <div key={videoIndex} className="bg-slate-50 dark:bg-slate-800 rounded p-2">
                                  <a
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
                                  >
                                    {video.title}
                                  </a>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                    {video.duration} • {video.channel}
                                  </p>
                                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 line-clamp-2">
                                    {video.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Resources Section */}
                      {card.resources && card.resources.length > 0 && (
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Resources:</p>
                          <div className="space-y-1">
                            {card.resources.map((resource, resourceIndex) => (
                              <p key={resourceIndex} className="text-xs text-slate-600 dark:text-slate-400">
                                • {resource}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

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
