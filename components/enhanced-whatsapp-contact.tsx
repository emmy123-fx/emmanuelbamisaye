"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, X } from "lucide-react"

export function EnhancedWhatsAppContact() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOnline, setIsOnline] = useState(true)

  const whatsappNumber = "+2349057542748"

  // Simulate online status
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1) // 90% online time
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const contactOptions = [
    {
      title: "General Inquiry",
      description: "Discuss your project ideas",
      message: "Hi Bamisaye! I'd like to discuss my project ideas and see how you can help.",
      icon: MessageCircle,
    },
    {
      title: "Get a Quote",
      description: "Ready to start your project",
      message: "Hi Bamisaye! I'm ready to start my project and would like to get a quote.",
      icon: MessageCircle,
    },
    {
      title: "Urgent Request",
      description: "Need immediate assistance",
      message: "Hi Bamisaye! I have an urgent request and need immediate assistance.",
      urgent: true,
    },
  ]

  const handleOptionClick = (message: string) => {
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setIsExpanded(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Widget */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 mb-4 animate-in slide-in-from-bottom-2 duration-300">
          <Card className="w-80 bg-slate-800 border-slate-700 shadow-2xl">
            <CardContent className="p-0">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Let's Chat!</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-green-400">Online now</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(false)}
                  className="text-slate-400 hover:text-white p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-slate-300 text-sm mb-4">Choose how you'd like to start our conversation:</p>

                <div className="space-y-3">
                  {contactOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option.message)}
                      className={`w-full p-3 rounded-lg text-left transition-all hover:scale-105 ${
                        option.urgent
                          ? "bg-yellow-500/20 border border-yellow-500/50 hover:bg-yellow-500/30"
                          : "bg-slate-700 hover:bg-slate-600"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <MessageCircle className={`w-5 h-5 ${option.urgent ? "text-yellow-400" : "text-green-400"}`} />
                        <div>
                          <div className={`font-medium ${option.urgent ? "text-yellow-400" : "text-white"}`}>
                            {option.title}
                          </div>
                          <div className="text-xs text-slate-400">{option.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <p className="text-xs text-slate-400 text-center mt-4">
                  I typically respond within minutes during business hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 relative"
      >
        {isExpanded ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}

        {/* Online Status Indicator */}
        {isOnline && !isExpanded && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></div>
        )}
      </Button>
    </div>
  )
}
