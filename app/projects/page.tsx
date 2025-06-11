"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, TrendingUp, DollarSign, Globe } from "lucide-react"
import Link from "next/link"

export default function AllProjects() {
  const allProjects = [
    {
      title: "E-commerce Platform",
      description: "Built a complete e-commerce solution that increased client's online sales by 250% in 6 months.",
      result: "+250% Sales Growth",
      tech: "React, Node.js, Stripe",
      icon: Globe,
      link: "/projects/ecommerce-platform",
    },
    {
      title: "SaaS Landing Page",
      description: "Designed and developed a high-converting landing page that improved conversion rates by 40%.",
      result: "+40% Conversions",
      tech: "Next.js, Tailwind",
      icon: TrendingUp,
      link: "/projects/saas-landing",
    },
    {
      title: "Affiliate Marketing System",
      description: "Created an automated affiliate marketing system generating $5K+ monthly recurring revenue.",
      result: "$5K+ Monthly",
      tech: "WordPress, PHP",
      icon: DollarSign,
      link: "/projects/affiliate-system",
    },
    {
      title: "Real Estate Platform",
      description:
        "Developed a property listing platform that connects buyers and sellers with advanced search features.",
      result: "+180% User Engagement",
      tech: "Vue.js, Laravel",
      icon: Globe,
      link: "/projects/real-estate",
    },
    {
      title: "Educational LMS",
      description: "Built a learning management system serving 10,000+ students with video streaming and assessments.",
      result: "10K+ Active Users",
      tech: "React, Django",
      icon: TrendingUp,
      link: "/projects/educational-lms",
    },
    {
      title: "Fintech Mobile App",
      description: "Created a mobile banking app with biometric authentication and real-time transaction processing.",
      result: "+95% User Satisfaction",
      tech: "React Native, Node.js",
      icon: DollarSign,
      link: "/projects/fintech-app",
    },
    {
      title: "Healthcare Portal",
      description:
        "Developed a patient management system that streamlined clinic operations and reduced wait times by 60%.",
      result: "-60% Wait Times",
      tech: "Angular, .NET",
      icon: Globe,
      link: "/projects/healthcare-portal",
    },
    {
      title: "Crypto Trading Bot",
      description: "Built an automated trading system that generated consistent profits using advanced algorithms.",
      result: "+35% ROI",
      tech: "Python, TensorFlow",
      icon: TrendingUp,
      link: "/projects/crypto-bot",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All <span className="text-yellow-500">Projects</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Explore my complete portfolio of successful projects and their results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProjects.map((project, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 overflow-hidden hover:border-yellow-500/50 transition-all hover:transform hover:scale-105 cursor-pointer group"
              >
                <Link href={project.link}>
                  <div className="h-32 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 flex items-center justify-center group-hover:from-yellow-500/30 group-hover:to-yellow-600/20 transition-all">
                    <project.icon className="w-12 h-12 text-yellow-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <div className="text-yellow-500 font-semibold text-sm">{project.result}</div>
                      <div className="text-slate-500 dark:text-slate-400 text-xs">{project.tech}</div>
                    </div>
                    <div className="mt-3 text-xs text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to view live project →
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
