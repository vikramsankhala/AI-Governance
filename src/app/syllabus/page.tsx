import { SyllabusGrid } from "@/components/SyllabusGrid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SyllabusPage() {
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
              <a href="/" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                Home
              </a>
              <a href="/syllabus" className="text-blue-600 font-medium">
                Syllabus
              </a>
              <Button>Enroll Now</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            350+ Interactive Learning Cards
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Comprehensive AI Governance 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Syllabus
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Explore our detailed curriculum with interactive cards covering every aspect of AI governance. 
            Filter by modules, topics, and learning styles to customize your learning journey.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              <span>11 Modules</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
              <span>9 Card Types</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>Interactive Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
              <span>Self-Paced</span>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Grid */}
      <section className="container mx-auto px-4 py-8 pb-16">
        <SyllabusGrid />
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p>© 2026 AI Governance Course. Advanced education for the AI era.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
