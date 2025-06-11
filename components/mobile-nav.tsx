"use client"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-slate-900 shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <span className="text-lg font-semibold text-slate-900 dark:text-white">Menu</span>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="p-4">
          <div className="space-y-4">
            <Link
              href="#about"
              className="block py-2 text-slate-700 dark:text-slate-300 hover:text-yellow-500 transition-colors"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              href="#services"
              className="block py-2 text-slate-700 dark:text-slate-300 hover:text-yellow-500 transition-colors"
              onClick={onClose}
            >
              Services
            </Link>
            <Link
              href="#ai-services"
              className="block py-2 text-slate-700 dark:text-slate-300 hover:text-yellow-500 transition-colors"
              onClick={onClose}
            >
              AI Services
            </Link>
            <Link
              href="#data-services"
              className="block py-2 text-slate-700 dark:text-slate-300 hover:text-yellow-500 transition-colors"
              onClick={onClose}
            >
              Data Services
            </Link>
            <Link
              href="#projects"
              className="block py-2 text-slate-700 dark:text-slate-300 hover:text-yellow-500 transition-colors"
              onClick={onClose}
            >
              Projects
            </Link>
            <Link
              href="#reviews"
              className="block py-2 text-slate-700 dark:text-slate-300 hover:text-yellow-500 transition-colors"
              onClick={onClose}
            >
              Reviews
            </Link>
            <Link
              href="#collabs"
              className="block py-2 text-slate-700 dark:text-slate-300 hover:text-yellow-500 transition-colors"
              onClick={onClose}
            >
              Collabs
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-slate-700 dark:text-slate-300 hover:text-yellow-500 transition-colors"
              onClick={onClose}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
