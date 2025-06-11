"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, DollarSign, TrendingUp, Users, Target, BarChart3, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function AffiliateSystem() {
  const stats = [
    { icon: DollarSign, value: "$5,247", label: "Monthly Revenue", color: "text-green-400" },
    { icon: Users, value: "1,234", label: "Active Affiliates", color: "text-blue-400" },
    { icon: Target, value: "89%", label: "Conversion Rate", color: "text-purple-400" },
    { icon: TrendingUp, value: "+156%", label: "Growth This Month", color: "text-yellow-400" },
  ]

  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track clicks, conversions, and commissions in real-time with detailed reporting.",
    },
    {
      icon: Zap,
      title: "Automated Payouts",
      description: "Set up automatic commission payments with customizable payout schedules.",
    },
    {
      icon: Shield,
      title: "Fraud Protection",
      description: "Advanced fraud detection to protect against invalid clicks and conversions.",
    },
    {
      icon: Users,
      title: "Affiliate Management",
      description: "Comprehensive tools to recruit, manage, and optimize your affiliate network.",
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
            <div className="text-xl font-bold text-yellow-400">AffiliateMax Pro</div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#dashboard" className="hover:text-yellow-400 transition-colors">
              Dashboard
            </Link>
            <Link href="#affiliates" className="hover:text-yellow-400 transition-colors">
              Affiliates
            </Link>
            <Link href="#campaigns" className="hover:text-yellow-400 transition-colors">
              Campaigns
            </Link>
            <Link href="#reports" className="hover:text-yellow-400 transition-colors">
              Reports
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Scale Your Business with <span className="text-yellow-400">Affiliate Marketing</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                The complete affiliate marketing platform that helps you recruit, manage, and optimize your affiliate
                network for maximum revenue growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Start Earning Today
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"
                >
                  View Demo
                </Button>
              </div>
              <p className="text-sm text-slate-400">
                💰 Average users earn $5K+ monthly • 🚀 Setup in under 10 minutes
              </p>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-green-500/20 to-blue-600/20 border-green-500/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Live Dashboard</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                        <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                        <div className="text-sm text-slate-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-yellow-400">Succeed</span>
            </h2>
            <p className="text-xl text-slate-300">Powerful tools to build and scale your affiliate program</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-yellow-400">Proven Results</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/5 border-green-500/20">
              <CardContent className="p-8">
                <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-green-400 mb-2">$5K+</div>
                <div className="text-lg font-semibold mb-2">Monthly Revenue</div>
                <p className="text-slate-300">Consistent monthly recurring revenue generated</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-600/5 border-blue-500/20">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-400 mb-2">1,200+</div>
                <div className="text-lg font-semibold mb-2">Active Affiliates</div>
                <p className="text-slate-300">Growing network of high-performing affiliates</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-600/5 border-purple-500/20">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-purple-400 mb-2">300%</div>
                <div className="text-lg font-semibold mb-2">ROI Increase</div>
                <p className="text-slate-300">Return on investment within first 6 months</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            This is a demo project created by <span className="text-yellow-400 font-semibold">Bamisaye Emmanuel</span>
          </p>
          <p className="text-sm text-slate-500 mt-2">Built with WordPress and PHP • Generating $5K+ monthly revenue</p>
        </div>
      </footer>
    </div>
  )
}
