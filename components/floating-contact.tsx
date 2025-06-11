"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOnline, setIsOnline] = useState(true)

  const whatsappNumber = "+2349057542748"
  const whatsappMessage = "Hi Bamisaye! I'm interested in discussing how you can help grow my business online."
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`

  // Simulate online status (you can connect this to a real API)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1) // 90% online time
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const contactOptions = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: whatsappUrl,
      color: "bg-green-500 hover:bg-green-600",
      external: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/emmytech0",
      color: "bg-blue-600 hover:bg-blue-700",
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:emmydigital.tech@gmail.com",
      color: "bg-slate-600 hover:bg-slate-700",
      external: false,
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Options */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2 duration-300">
          {contactOptions.map((option, index) => (
            <div
              key={option.label}
              className="flex items-center space-x-3 animate-in slide-in-from-right duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg border border-slate-200 dark:border-slate-700">
                {option.label}
              </span>
              <Button
                asChild
                size="sm"
                className={`${option.color} text-white p-3 rounded-full shadow-lg transition-all hover:scale-110`}
              >
                {option.external ? (
                  <Link href={option.href} target="_blank" rel="noopener noreferrer">
                    <option.icon className="w-5 h-5" />
                  </Link>
                ) : (
                  <Link href={option.href}>
                    <option.icon className="w-5 h-5" />
                  </Link>
                )}
              </Button>
            </div>
          ))}
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

      {/* Online Status Text */}
      {!isExpanded && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-1 rounded-lg text-xs shadow-lg border border-slate-200 dark:border-slate-700 animate-in slide-in-from-bottom duration-300">
          {isOnline ? "🟢 Online now" : "🔴 Offline"}
        </div>
      )}
    </div>
  )
}
