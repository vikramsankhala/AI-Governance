import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { InstructorCard } from "@/components/InstructorCard";
import { CurriculumTimeline } from "@/components/CurriculumTimeline";
import { EnrollmentSection } from "@/components/EnrollmentSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Navigation */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">AI Governance</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#overview" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Overview</a>
              <a href="#modules" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Modules</a>
              <a href="#instructors" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Instructors</a>
              <Button>Enroll Now</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            30-Hour Advanced Course
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            AI Governance: 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Global Perspectives
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            State-of-the-art online course on AI governance with competing paradigms from US, EU, China, India, and the Global South. Featuring real-world case studies, debates, and policy simulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Learning
            </Button>
            <Button variant="outline" size="lg">
              Download Syllabus
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>10 Modules</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              <span>30 Hours Total</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
              <span>Advanced Level</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
              <span>Project-Based</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section id="overview" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Course Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  Competing Paradigms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  Compare US, EU, China, India, and Global South approaches to AI governance through real regulatory frameworks.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold">2</span>
                  </div>
                  Real-World Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  Analyze landmark litigation from 2023-2026 including EU AI Act enforcement, NYT v OpenAI, and biometric lawsuits.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  Policy Simulations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  Engage in hands-on capstone projects including regulatory response simulations and organizational AI charters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Module Structure */}
      <section id="modules" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <CurriculumTimeline />
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="container mx-auto px-4 py-16 bg-white/50 dark:bg-slate-800/50 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Featured Instructors & Experts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InstructorCard
              name="Dr. Stewart Russell"
              title="Professor of Computer Science"
              affiliation="UC Berkeley"
              expertise={["AI Safety", "Control Problem", "Beneficial AI"]}
              bio="Turing Award winner known for work on provably beneficial AI and the control problem in artificial intelligence systems."
            />
            <InstructorCard
              name="Dr. Ananya Kumar"
              title="AI Policy Fellow"
              affiliation="NITI Aayog"
              expertise={["India AI Strategy", "Global South", "Techno-Legal Frameworks"]}
              bio="Leading expert on India's middle path approach to AI governance and representing Global South perspectives in international forums."
            />
            <InstructorCard
              name="Prof. Maria Chen"
              title="Law & Technology Professor"
              affiliation="Stanford Law School"
              expertise={["AI Liability", "Professional Responsibility", "Litigation Trends"]}
              bio="Authority on AI litigation trends and professional responsibility, with extensive experience in AI-related court cases."
            />
            <InstructorCard
              name="Dr. James Wilson"
              title="Regulatory Affairs Director"
              affiliation="EU Commission"
              expertise={["EU AI Act", "Risk-Based Regulation", "Compliance Frameworks"]}
              bio="Key architect of the EU AI Act and expert on risk-based approaches to AI governance and compliance."
            />
            <InstructorCard
              name="Dr. Priya Sharma"
              title="Data Governance Expert"
              affiliation="Data Protection Authority"
              expertise={["Data Privacy", "Biometric Governance", "DPDP Act"]}
              bio="Specialist in data protection laws and biometric privacy, with focus on emerging AI data governance challenges."
            />
            <InstructorCard
              name="Prof. Michael Torres"
              title="AI Ethics Director"
              affiliation="UN AI Governance"
              expertise={["Global Dialogue", "Multilateral Governance", "Value Pluralism"]}
              bio="Leading the UN's Global Dialogue on AI Governance and expert on international AI policy coordination."
            />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            What Makes This Course Different
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">🌍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Global South Perspective</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Unique focus on India and Global South approaches to AI governance, not just Western paradigms.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 text-xl">⚖️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Legal & Policy Focus</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Real regulatory frameworks and litigation from 2023-2026, not just theoretical ethics.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Project-Based Learning</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Hands-on capstone projects including regulatory simulations and organizational AI charters.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 text-xl">🎓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Expert Voices</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Featuring Turing Award winners, UN speakers, and leading policy makers in AI governance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <EnrollmentSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p>© 2026 AI Governance Course. Advanced education for the AI era.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
