"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ShoppingCart, Star, Users, TrendingUp, CreditCard, Package, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EcommercePlatform() {
  const products = [
    { id: 1, name: "Premium Headphones", price: "$299", rating: 4.8, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Smart Watch", price: "$199", rating: 4.9, image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Wireless Speaker", price: "$149", rating: 4.7, image: "/placeholder.svg?height=200&width=200" },
    { id: 4, name: "Gaming Mouse", price: "$79", rating: 4.6, image: "/placeholder.svg?height=200&width=200" },
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
            <div className="text-xl font-bold text-yellow-400">TechStore Pro</div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Shop
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Categories
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Deals
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Support
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="w-4 h-4" />
              <span className="ml-1 bg-yellow-500 text-slate-900 rounded-full px-2 py-1 text-xs">3</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Premium Tech at <span className="text-yellow-400">Unbeatable Prices</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Discover the latest gadgets and electronics with fast shipping, secure payments, and 24/7 customer
                support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Shop Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"
                >
                  View Deals
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur">
                <div className="grid grid-cols-2 gap-4">
                  {products.slice(0, 4).map((product) => (
                    <Card key={product.id} className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-4">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={100}
                          height={100}
                          className="w-full h-20 object-cover rounded mb-2"
                        />
                        <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                        <div className="flex justify-between items-center">
                          <span className="text-yellow-400 font-bold">{product.price}</span>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs ml-1">{product.rating}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TechStore Pro?</h2>
            <p className="text-xl text-slate-300">Built for performance, designed for conversion</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-8">
                <Package className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fast Shipping</h3>
                <p className="text-slate-300">Free 2-day shipping on orders over $50. Express delivery available.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-8">
                <CreditCard className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
                <p className="text-slate-300">
                  Multiple payment options with bank-level security and fraud protection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-slate-300">Round-the-clock customer service via chat, email, and phone.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-xl text-slate-300">Handpicked tech essentials for modern life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="bg-slate-800 border-slate-700 hover:border-yellow-500/50 transition-all hover:transform hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-6">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-500 fill-current" : "text-slate-400"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-400 ml-2">({product.rating})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-400">{product.price}</span>
                    <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
                      Add to Cart
                    </Button>
                  </div>
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
            <span className="text-yellow-400">Project Results</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-600/5 border-green-500/20">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-green-400 mb-2">250%</div>
                <div className="text-lg font-semibold mb-2">Sales Increase</div>
                <p className="text-slate-300">Online sales grew by 250% within 6 months of launch</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-600/5 border-blue-500/20">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-400 mb-2">15K+</div>
                <div className="text-lg font-semibold mb-2">Active Users</div>
                <p className="text-slate-300">Monthly active users increased dramatically</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-600/5 border-purple-500/20">
              <CardContent className="p-8">
                <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-purple-400 mb-2">4.9</div>
                <div className="text-lg font-semibold mb-2">Customer Rating</div>
                <p className="text-slate-300">Exceptional customer satisfaction scores</p>
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
          <p className="text-sm text-slate-500 mt-2">Built with React, Node.js, and Stripe integration</p>
        </div>
      </footer>
    </div>
  )
}
