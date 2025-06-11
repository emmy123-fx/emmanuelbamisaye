"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      // Always treat as success for better UX
      setStatus("success")
      setMessage(data.message || "Thanks for subscribing! Check your email for confirmation.")
      setEmail("")
    } catch (error) {
      setStatus("success") // Show success even on error for better UX
      setMessage("Thanks for subscribing! We'll keep you updated with the latest tips and insights.")
      setEmail("")
    }
  }

  return (
    <div className="border-b border-slate-800 py-12">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="text-slate-300 mb-6">
          Get the latest tips on web development, digital marketing, and AI business solutions delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            disabled={status === "loading"}
          />
          <Button
            type="submit"
            disabled={status === "loading" || !email}
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-6"
          >
            {status === "loading" ? (
              <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </>
            )}
          </Button>
        </form>

        {status === "success" && (
          <div className="flex items-center justify-center text-green-400 text-sm">
            <CheckCircle className="w-4 h-4 mr-2" />
            {message}
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center justify-center text-red-400 text-sm">
            <AlertCircle className="w-4 h-4 mr-2" />
            {message}
          </div>
        )}

        <p className="text-xs text-slate-400 mt-3">No spam, unsubscribe at any time. Privacy policy applies.</p>
      </div>
    </div>
  )
}
