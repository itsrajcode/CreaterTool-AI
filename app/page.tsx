import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Code,
  Edit,
  Type,
  Youtube,
  Instagram,
  Hash,
  CheckCircle2,
  Bug,
  Globe,
  ScrollText,
  Lightbulb,
  MessageSquare,
  Menu
} from "lucide-react";

// Logo Component
const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center">
      <Sparkles className="w-5 h-5 text-white" />
    </div>
    <span className="text-xl font-bold">Creator<span className="text-purple-600">Tool</span></span>
  </div>
);

// Header Component
const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
    <div className="mx-auto max-w-screen-xl px-4 py-4">
      <div className="flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          <a href="#tools" className="text-gray-600 hover:text-purple-600 transition-colors">Tools</a>
          <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="/dashboard"
            className="hidden md:inline-flex items-center rounded bg-purple-600 px-4 py-2 text-sm text-white hover:bg-purple-700 transition-colors"
          >
            Get Started Free
          </a>
          <button className="md:hidden text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </header>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="rounded-lg border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all hover:scale-105">
    <div className="mb-4 text-purple-600">
      <Icon size={24} />
    </div>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="mt-2 text-gray-600 text-sm">{description}</p>
  </div>
);

export default function Home() {
  const tools = [
    { icon: ScrollText, name: "Blog Content", type: "Writing" },
    { icon: Type, name: "Blog Title", type: "Writing" },
    { icon: Lightbulb, name: "Blog Topic Ideas", type: "Ideation" },
    { icon: Youtube, name: "YouTube SEO", type: "Video" },
    { icon: MessageSquare, name: "YouTube Description", type: "Video" },
    { icon: Hash, name: "YouTube Tags", type: "Video" },
    { icon: Edit, name: "Rewrite & Improve", type: "Writing" },
    { icon: Instagram, name: "Instagram Tools", type: "Social" },
    { icon: Code, name: "Code Generation", type: "Development" },
    { icon: Bug, name: "Bug Detection", type: "Development" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white pt-4">
        <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-purple-100 px-4 py-1">
              <span className="text-sm font-medium text-purple-800">✨ All-in-One Content Creation Suite</span>
            </div>
            
            <h1 className="text-4xl font-extrabold sm:text-6xl">
              Create Better Content
              <strong className="mt-2 block font-extrabold bg-gradient-to-r from-purple-600 to-purple-900 bg-clip-text text-transparent">
                10x Faster with AI
              </strong>
            </h1>

            <p className="mt-6 text-lg text-gray-600 sm:text-xl/relaxed">
              One tool for all your content needs. Blog posts, social media, YouTube, code, and more - all powered by advanced AI.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/dashboard"
                className="inline-flex items-center rounded bg-purple-600 px-8 py-3 text-white shadow-lg hover:bg-purple-700 hover:scale-105 transition-all font-semibold focus:outline-none focus:ring sm:w-auto"
              >
                Start Creating Free <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="mr-2 h-4 w-4" /> No Credit Card Required
              </div>
              <div className="flex items-center">
                <Zap className="mr-2 h-4 w-4" /> 15+ AI Tools Included
              </div>
              <div className="flex items-center">
                <Globe className="mr-2 h-4 w-4" /> Multiple Languages
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-20 bg-white" id="tools">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Everything You Need In One Place</h2>
            <p className="mt-4 text-gray-600">
              15+ AI-powered tools to supercharge your content creation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="p-4 text-center rounded-lg border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all cursor-pointer"
              >
                <tool.icon className="mx-auto h-6 w-6 text-purple-600 mb-2" />
                <h3 className="font-medium text-sm">{tool.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{tool.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20" id="features">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why Creators Love Our Tools</h2>
            <p className="mt-4 text-gray-600">
              Designed to make content creation effortless and effective
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={Zap}
              title="Lightning Fast Creation"
              description="Generate high-quality content in seconds, not hours. Save time and focus on what matters most."
            />
            <FeatureCard
              icon={Globe}
              title="Multi-Language Support"
              description="Create content in multiple languages to reach a global audience effectively."
            />
            <FeatureCard
              icon={Shield}
              title="Plagiarism Free"
              description="All generated content is unique and passes AI detection tools with flying colors."
            />
            <FeatureCard
              icon={CheckCircle2}
              title="SEO Optimized"
              description="Built-in SEO tools ensure your content ranks well on Google and YouTube."
            />
            <FeatureCard
              icon={Code}
              title="Code Generation"
              description="Generate, explain, and debug code in any programming language with ease."
            />
            <FeatureCard
              icon={Instagram}
              title="Social Media Ready"
              description="Create engaging social media content with built-in post generators and hashtag tools."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-900 text-white py-20">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-3xl font-bold">
            Start Creating Amazing Content Today
          </h2>
          <p className="mt-4 text-purple-100 max-w-2xl mx-auto">
            Join thousands of content creators, marketers, and developers who are already using CreatorTool AI to streamline their workflow
          </p>
          <a
            href="/dashboard"
            className="mt-8 inline-flex items-center rounded bg-white px-8 py-3 text-purple-900 font-semibold hover:bg-purple-50 transition-colors"
          >
            Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="mt-4 text-sm text-purple-200">
             15+ tools included
          </p>
        </div>
      </section>
    </div>
  );
}