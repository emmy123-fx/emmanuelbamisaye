"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Zap, Shield, BarChart3, Users, CheckCircle, Star, Play } from "lucide-react"
import Link from "next/link"

export default function SaasLanding() {
  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Optimized for speed and performance" },
    { icon: Shield, title: "Secure & Reliable", description: "Bank-level security with 99.9% uptime" },
    { icon: BarChart3, title: "Advanced Analytics", description: "Real-time insights and reporting" },
    { icon: Users, title: "Team Collaboration", description: "Work together seamlessly" },
    { icon: Users, title: "Team Collaboration", description: "Work together seamlessly" },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      content: "This platform increased our team productivity by 40%. The analytics are incredible!",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      role: "CTO, StartupX",
      content: "Best investment we've made. The ROI was visible within the first month.",
      rating: 5,
    },
    {
      name: "Lisa Park",
      role: "Product Manager, InnovateCorp",
      content: "Seamless integration and outstanding support. Highly recommended!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
            <div className="text-xl font-bold text-yellow-400">ProductivityPro</div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#features" className="hover:text-yellow-400 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-yellow-400 transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="hover:text-yellow-400 transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="hover:text-yellow-400 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/20 mb-6">
              🚀 Trusted by 10,000+ teams worldwide
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Boost Your Team's <span className="text-yellow-400">Productivity</span> by 40%
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The all-in-one platform that helps teams collaborate, track progress, and achieve goals faster than ever
            before. Join thousands of successful companies already using ProductivityPro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold text-lg px-8 py-4"
            >
              Start Free 14-Day Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 text-lg px-8 py-4"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          <p className="text-sm text-slate-400">No credit card required • Cancel anytime • 24/7 support</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="text-yellow-400">Succeed</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Powerful features designed to streamline your workflow and maximize team efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105 text-center"
              >
                <CardContent className="p-8">
                  <feature.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Trusted by <span className="text-yellow-400">Industry Leaders</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/5 border-green-500/20">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-lg font-semibold mb-2">Productivity Increase</div>
                <p className="text-slate-300">Average productivity boost reported by our users</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-600/5 border-blue-500/20">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-blue-400 mb-2">10K+</div>
                <div className="text-lg font-semibold mb-2">Active Teams</div>
                <p className="text-slate-300">Companies worldwide trust our platform</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-600/5 border-purple-500/20">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-lg font-semibold mb-2">Uptime</div>
                <p className="text-slate-300">Reliable service you can count on</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-yellow-400">Customers Say</span>
            </h2>
            <p className="text-xl text-slate-300">Real feedback from real users</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-slate-700 pt-4">
                    <div className="font-semibold text-yellow-400">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, <span className="text-yellow-400">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-slate-300">Choose the plan that fits your team size</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-2">$9</div>
                <div className="text-slate-400 mb-6">per user/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Up to 5 team members
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Basic analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Email support
                  </li>
                </ul>
                <Button className="w-full bg-slate-700 hover:bg-slate-600">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-500/50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Professional</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-2">$19</div>
                <div className="text-slate-400 mb-6">per user/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Unlimited team members
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Custom integrations
                  </li>
                </ul>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-yellow-400 mb-2">$39</div>
                <div className="text-slate-400 mb-6">per user/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Everything in Professional
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    Custom onboarding
                  </li>
                </ul>
                <Button className="w-full bg-slate-700 hover:bg-slate-600">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-yellow-400">Transform</span> Your Team's Productivity?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of teams already using ProductivityPro to achieve their goals faster.
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold text-xl px-12 py-4"
          >
            Start Your Free Trial Today
          </Button>
          <p className="text-sm text-slate-400 mt-4">14-day free trial • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            This is a demo project created by <span className="text-yellow-400 font-semibold">Bamisaye Emmanuel</span>
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Built with Next.js and Tailwind CSS • Conversion rate improved by 40%
          </p>
        </div>
      </footer>
    </div>
  )
}
