"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Cookie } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="bg-slate-800 border-slate-700 shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <Cookie className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-2">We use cookies</h3>
              <p className="text-sm text-slate-300 mb-4">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By
                clicking "Accept", you consent to our use of cookies.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  onClick={acceptCookies}
                  size="sm"
                  className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold"
                >
                  Accept All
                </Button>
                <Button
                  onClick={declineCookies}
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Decline
                </Button>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={declineCookies} className="text-slate-400 hover:text-white p-1">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
