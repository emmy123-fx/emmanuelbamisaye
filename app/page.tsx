"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  TrendingUp,
  DollarSign,
  Globe,
  ChevronLeft,
  ChevronRight,
  Mail,
  Linkedin,
  Bot,
  Video,
  Zap,
  Menu,
  ChevronDown,
  Smartphone,
  Wifi,
  Database,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { ForexTicker } from "@/components/forex-ticker"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { InteractiveAIModel } from "@/components/interactive-ai-model"
import { CookieConsent } from "@/components/cookie-consent"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { MobileNav } from "@/components/mobile-nav"
import { EnhancedWhatsAppContact } from "@/components/enhanced-whatsapp-contact"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const whatsappNumber = "+2349057542748"
  const whatsappMessage = "Hi! I need cheap data/airtime. What are your current rates?"
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`

  const reviewsRef = useRef<HTMLDivElement>(null)

  const scrollReviews = (direction: "left" | "right") => {
    if (reviewsRef.current) {
      const scrollAmount = 280
      reviewsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  // Auto-scroll reviews
  useEffect(() => {
    const interval = setInterval(() => {
      if (reviewsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = reviewsRef.current
        if (scrollLeft + clientWidth >= scrollWidth) {
          reviewsRef.current.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          reviewsRef.current.scrollBy({ left: 280, behavior: "smooth" })
        }
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const companyLogos = [
    { name: "Microsoft", logo: "https://img.icons8.com/color/48/microsoft.png" },
    { name: "Google", logo: "https://img.icons8.com/color/48/google-logo.png" },
    { name: "Apple", logo: "https://img.icons8.com/ios-filled/50/mac-os.png" },
    { name: "Amazon", logo: "https://img.icons8.com/color/48/amazon.png" },
    { name: "Meta", logo: "https://img.icons8.com/color/48/meta.png" },
    { name: "Netflix", logo: "https://img.icons8.com/color/48/netflix.png" },
    { name: "Spotify", logo: "https://img.icons8.com/color/48/spotify.png" },
    { name: "Adobe", logo: "https://img.icons8.com/color/48/adobe-creative-cloud.png" },
  ]

  const featuredProjects = [
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
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      {/* Sticky Forex Ticker */}
      <div className="sticky top-0 z-40">
        <ForexTicker />
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 sticky top-[52px] z-30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/emmy-logo.png"
              alt="Emmy Digital Tech Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <nav className="hidden lg:flex space-x-6">
            <Link href="#about" className="hover:text-yellow-500 transition-colors">
              About
            </Link>
            <Link href="#services" className="hover:text-yellow-500 transition-colors">
              Services
            </Link>
            <Link href="#ai-services" className="hover:text-yellow-500 transition-colors">
              AI Services
            </Link>
            <Link href="#data-services" className="hover:text-yellow-500 transition-colors">
              Data Services
            </Link>
            <Link href="#projects" className="hover:text-yellow-500 transition-colors">
              Projects
            </Link>
            <Link href="#reviews" className="hover:text-yellow-500 transition-colors">
              Reviews
            </Link>
            <Link href="#collabs" className="hover:text-yellow-500 transition-colors">
              Collabs
            </Link>
            <Link href="#contact" className="hover:text-yellow-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold hidden sm:flex">
              <Link href={whatsappUrl} target="_blank">
                Get CHEAP Data
              </Link>
            </Button>
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMobileNavOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />

      {/* Hero Section with Professional Photo */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          {/* Professional Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-yellow-500 shadow-2xl profile-photo">
                <Image
                  src="/images/bamisaye-profile.jpeg"
                  alt="Bamisaye Emmanuel Oladimeji - Professional Headshot"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover object-center"
                  priority
                  quality={100}
                />
              </div>
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-yellow-500/30 animate-ping"></div>
              {/* Online Status */}
              <div className="absolute bottom-3 right-3 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-slate-900 animate-pulse flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-yellow-500/10 text-yellow-500 rounded-full text-sm font-medium border border-yellow-500/20">
              Full-Stack Developer & AI-Powered Business Solutions Expert
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-yellow-500">Web Developer</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Creating digital experiences that combine beautiful design with powerful functionality, enhanced by
            cutting-edge AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold text-lg px-8 py-3"
            >
              <Link href="https://linkedin.com/in/emmytech0" target="_blank">
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 text-lg px-8 py-3"
              asChild
            >
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive AI Model Section - No Headline */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <InteractiveAIModel />
        </div>
      </section>

      {/* Data Services Section */}
      <section id="data-services" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-yellow-500">Affordable Data</span> & Airtime Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Get the cheapest data and airtime for all networks in Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Smartphone className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cheap Airtime</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Get airtime for all networks at discounted rates. Save money on every recharge.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li>• MTN, Airtel, Glo, 9mobile</li>
                  <li>• Instant delivery</li>
                  <li>• Up to 5% discount</li>
                  <li>• 24/7 availability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Wifi className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data Bundles</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Affordable data plans for all your internet needs. Stay connected for less.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li>• All network data plans</li>
                  <li>• SME & Direct data</li>
                  <li>• Bulk discounts available</li>
                  <li>• Auto-renewal options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <Database className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Bulk Services</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Special rates for businesses and bulk purchases. Perfect for organizations.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li>• Corporate packages</li>
                  <li>• Volume discounts</li>
                  <li>• Dedicated support</li>
                  <li>• Custom solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Replace the existing Ad Spaces section with actual promotional images */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-orange-900/20 dark:to-yellow-800/20 border-orange-200 dark:border-orange-700 overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/images/emmytelecom-data-plans.jpeg"
                  alt="EmmyTelecom Data Plans - MTN, Glo, 9mobile, Airtel pricing"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-900/20 dark:to-purple-800/20 border-blue-200 dark:border-blue-700 overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/images/cheapest-data-nigeria.png"
                  alt="Cheapest Data Plans in Nigeria - All Networks"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Cheap Data Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-500">Bamisaye Emmanuel Oladimeji</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              A full-stack developer and affiliate marketing coach who helps individuals and businesses build websites
              that convert and master digital strategies that earn. I leverage AI to supercharge business growth and
              efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I build and optimize websites that don't just look good — they convert visitors into customers. Every
                  line of code is written with your business goals in mind.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Digital Strategy</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  From affiliate marketing to digital growth strategies, I teach proven methods that help people earn
                  their first $1,000 online and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <Bot className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI Solutions</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I integrate cutting-edge AI tools to automate processes, create compelling content, and drive business
                  growth through intelligent automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven <span className="text-yellow-500">Results</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Over the years, I've helped businesses and individuals achieve remarkable growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-500/20 text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-yellow-500 mb-2">40%</div>
                <div className="text-lg font-semibold mb-2">Conversion Rate Improvement</div>
                <p className="text-slate-600 dark:text-slate-300">
                  Built and optimized websites that improved conversion rates by up to 40%
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-500/20 text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-yellow-500 mb-2">200+</div>
                <div className="text-lg font-semibold mb-2">People Mentored</div>
                <p className="text-slate-600 dark:text-slate-300">
                  Mentored over 200 people to earn their first $1,000 online using affiliate marketing
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-500/20 text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-yellow-500 mb-2">30%</div>
                <div className="text-lg font-semibold mb-2">Revenue Growth</div>
                <p className="text-slate-600 dark:text-slate-300">
                  Worked with businesses that recorded over 30% growth in revenue through digital solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-yellow-500">Services</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Comprehensive solutions to accelerate your digital growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105">
              <CardContent className="p-6">
                <Globe className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Website Development</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Custom websites built to convert visitors into customers with modern design and optimal performance.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li>• Responsive Design</li>
                  <li>• SEO Optimized</li>
                  <li>• Fast Loading Speed</li>
                  <li>• Conversion Focused</li>
                  <li>• E-commerce Integration</li>
                </ul>
                <div className="mt-4 text-yellow-500 font-semibold">Contact for Quote</div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Affiliate Marketing Coaching</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Learn proven strategies to earn your first $1,000 online and build sustainable income streams.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li>• 1-on-1 Mentoring Sessions</li>
                  <li>• Proven Strategies & Frameworks</li>
                  <li>• Step-by-step Action Plans</li>
                  <li>• Ongoing Support & Accountability</li>
                  <li>• Resource Library Access</li>
                </ul>
                <div className="mt-4 text-yellow-500 font-semibold">Contact for Quote</div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105">
              <CardContent className="p-6">
                <DollarSign className="w-10 h-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Digital Growth Strategy</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Comprehensive digital strategies to increase your online visibility and revenue.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li>• Complete Market Analysis</li>
                  <li>• Custom Growth Planning</li>
                  <li>• Implementation Roadmap</li>
                  <li>• Performance Tracking Setup</li>
                  <li>• Monthly Strategy Reviews</li>
                </ul>
                <div className="mt-4 text-yellow-500 font-semibold">Contact for Quote</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section id="ai-services" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-yellow-500">AI-Powered</span> Business Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Leverage cutting-edge AI to automate, optimize, and accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-500/10 to-blue-600/5 border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
              <CardContent className="p-6">
                <Video className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI Video Creation</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Create stunning promotional videos, product demos, and marketing content using AI-powered tools.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li>• Promotional Video Generation</li>
                  <li>• Product Demo Videos</li>
                  <li>• Social Media Content</li>
                  <li>• Animated Explainers</li>
                  <li>• Voice-over Integration</li>
                </ul>
                <div className="mt-4 text-purple-500 font-semibold">Custom Pricing Available</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/5 border-green-500/20 hover:border-green-500/50 transition-all hover:transform hover:scale-105">
              <CardContent className="p-6">
                <Bot className="w-10 h-10 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI Chatbots & Automation</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Implement intelligent chatbots and automation systems to handle customer service and lead generation.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li>• 24/7 Customer Support Bots</li>
                  <li>• Lead Qualification Systems</li>
                  <li>• Appointment Scheduling</li>
                  <li>• FAQ Automation</li>
                  <li>• Multi-platform Integration</li>
                </ul>
                <div className="mt-4 text-green-500 font-semibold">Get Free Consultation</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/5 border-orange-500/20 hover:border-orange-500/50 transition-all hover:transform hover:scale-105">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">AI Content Generation</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Generate high-quality content for your business including copy, images, and marketing materials.
                </p>
                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li>• Website Copy & Blog Posts</li>
                  <li>• Social Media Content</li>
                  <li>• Product Descriptions</li>
                  <li>• Email Campaigns</li>
                  <li>• AI-Generated Images</li>
                </ul>
                <div className="mt-4 text-orange-500 font-semibold">Flexible Packages</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-purple-500 hover:bg-purple-600 text-white font-semibold">
              <Link href="https://linkedin.com/in/emmytech0" target="_blank">
                <Bot className="w-5 h-5 mr-2" />
                Explore AI Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section with Dropdown */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-yellow-500">Projects</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Real results from real clients - click to explore live projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project, index) => (
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

          {/* View More Projects Button */}
          <div className="text-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold group">
              <Link href="/projects">
                View All Projects
                <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Reviews Section - Infinite Scroll */}
      <section id="reviews" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client <span className="text-yellow-500">Reviews</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Don't just take my word for it - hear from satisfied clients
            </p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollReviews("left")}
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollReviews("right")}
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Auto-scrolling reviews</div>
            </div>

            <div
              ref={reviewsRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechStart Solutions",
                  rating: 5,
                  review:
                    "Bamisaye transformed our online presence completely. Our website now converts 3x better than before!",
                  avatar: "SJ",
                },
                {
                  name: "Michael Chen",
                  role: "Digital Entrepreneur",
                  rating: 5,
                  review: "His affiliate marketing coaching is gold! I went from $0 to $2,500/month in just 3 months.",
                  avatar: "MC",
                },
                {
                  name: "Amanda Rodriguez",
                  role: "Founder, GrowthCo",
                  rating: 5,
                  review:
                    "Professional, reliable, and results-driven. Bamisaye doesn't just build websites - he builds businesses.",
                  avatar: "AR",
                },
                {
                  name: "David Thompson",
                  role: "E-commerce Owner",
                  rating: 5,
                  review: "The AI video solutions boosted our sales by 180%! Incredible promotional content creation.",
                  avatar: "DT",
                },
                {
                  name: "Lisa Park",
                  role: "Marketing Director",
                  rating: 5,
                  review: "Working with Bamisaye was a game-changer. Our conversion rates doubled within weeks!",
                  avatar: "LP",
                },
                {
                  name: "James Wilson",
                  role: "Startup Founder",
                  rating: 5,
                  review:
                    "From concept to launch, Bamisaye guided us every step. Our platform now serves thousands daily!",
                  avatar: "JW",
                },
                // Duplicate for infinite scroll effect
                {
                  name: "Sarah Johnson",
                  role: "CEO, TechStart Solutions",
                  rating: 5,
                  review:
                    "Bamisaye transformed our online presence completely. Our website now converts 3x better than before!",
                  avatar: "SJ",
                },
                {
                  name: "Michael Chen",
                  role: "Digital Entrepreneur",
                  rating: 5,
                  review: "His affiliate marketing coaching is gold! I went from $0 to $2,500/month in just 3 months.",
                  avatar: "MC",
                },
              ].map((review, index) => (
                <Card
                  key={index}
                  className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 min-w-[260px] flex-shrink-0"
                >
                  <CardContent className="p-5">
                    <div className="flex mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 italic text-sm">"{review.review}"</p>
                    <div className="border-t border-slate-200 dark:border-slate-700 pt-3 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-slate-900 font-semibold text-sm">
                        {review.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-yellow-500 text-sm">{review.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{review.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collabs Section with Company Logos */}
      <section id="collabs" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="text-yellow-500">Collaborate</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              I'm always open to exciting partnerships and collaboration opportunities
            </p>
          </div>

          {/* Company Logos */}
          <div className="mb-16">
            <h3 className="text-center text-lg font-semibold mb-8 text-slate-500 dark:text-slate-400">
              Trusted by companies worldwide
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {companyLogos.map((company, index) => (
                <div
                  key={index}
                  className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer"
                >
                  <img src={company.logo || "/placeholder.svg"} alt={company.name} className="h-12 w-auto" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-500">Partnership Opportunities</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-2">Agency Partnerships</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      White-label development services for marketing agencies looking to expand their offerings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-2">Joint Ventures</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Collaborate on digital products, courses, or software solutions that serve our combined audiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-2">Content Collaboration</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Guest posting, podcast appearances, webinars, and co-created educational content.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-2">Referral Programs</h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      Earn commissions by referring clients who need web development or digital marketing services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-500/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-center">Ready to Collaborate?</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 text-center">
                  Whether you're an agency, entrepreneur, or fellow developer, let's explore how we can create value
                  together.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                    <Link href="https://linkedin.com/in/emmytech0" target="_blank">
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </Link>
                  </Button>
                  <div className="text-center">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Or email me directly:</p>
                    <a
                      href="mailto:emmydigital.tech@gmail.com"
                      className="text-yellow-500 hover:text-yellow-600 transition-colors"
                    >
                      emmydigital.tech@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">What I Bring to Collaborations:</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-2">5+</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-2">200+</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-2">40%</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Avg. Conversion Boost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500 mb-2">24/7</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your <span className="text-yellow-500">Digital Presence?</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Don't let another day pass wondering "what if." Let's turn your digital dreams into measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-slate-900" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-slate-600 dark:text-slate-400">{whatsappNumber}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-slate-900" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-600 dark:text-slate-400">emmydigital.tech@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-slate-900" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-slate-600 dark:text-slate-400">linkedin.com/in/emmytech0</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-slate-900 text-sm">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <button
                      onClick={() => window.open("https://maps.google.com/?q=Abuja,Nigeria", "_blank")}
                      className="text-slate-600 dark:text-slate-400 hover:text-yellow-500 transition-colors cursor-pointer text-left"
                    >
                      Abuja, Nigeria (Click for map)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <NewsletterSignup />

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {/* About Column */}
              <div>
                <div className="text-xl font-bold text-yellow-500 mb-4">Bamisaye Emmanuel</div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  Full-stack developer and AI-powered business solutions expert helping businesses create powerful
                  online experiences that drive results.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="https://linkedin.com/in/emmytech0"
                    target="_blank"
                    className="text-slate-500 dark:text-slate-400 hover:text-yellow-500 transition-colors"
                    rel="noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Services Column */}
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>
                    <a href="#services" className="hover:text-yellow-500 transition-colors">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-yellow-500 transition-colors">
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#ai-services" className="hover:text-yellow-500 transition-colors">
                      AI Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-yellow-500 transition-colors">
                      Affiliate Coaching
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      className="hover:text-yellow-500 transition-colors"
                      rel="noreferrer"
                    >
                      Cheap Data/Airtime
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>
                    <a href="#projects" className="hover:text-yellow-500 transition-colors">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#reviews" className="hover:text-yellow-500 transition-colors">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500 transition-colors">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500 transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-500 transition-colors">
                      Free Tools
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <h4 className="font-semibold mb-4">Get In Touch</h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      className="hover:text-yellow-500 transition-colors"
                      rel="noreferrer"
                    >
                      WhatsApp: {whatsappNumber}
                    </a>
                  </li>
                  <li>
                    <a href="mailto:emmydigital.tech@gmail.com" className="hover:text-yellow-500 transition-colors">
                      emmydigital.tech@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/emmytech0"
                      target="_blank"
                      className="hover:text-yellow-500 transition-colors"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() => window.open("https://maps.google.com/?q=Abuja,Nigeria", "_blank")}
                      className="hover:text-yellow-500 transition-colors cursor-pointer text-left"
                    >
                      📍 Abuja, Nigeria (Click for map)
                    </button>
                  </li>
                  <li>Available 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-200 dark:border-slate-800 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
              <div>© {new Date().getFullYear()} Bamisaye Emmanuel Oladimeji. All rights reserved.</div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-yellow-500 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced WhatsApp Contact */}
      <EnhancedWhatsAppContact />

      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  )
}
