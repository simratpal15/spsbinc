"use client"

import type React from "react"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function SiteFooter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    // Here you would typically send the email to your backend
    alert("Thank you for subscribing!")
    setEmail("")
  }

  return (
    <footer className="bg-[#0f1a2b] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Empowerment</h3>
            <p className="text-gray-300 mb-6 md:mb-8">
              Transforming businesses through digital solutions and training.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  <path d="M15 8h.01" />
                  <path d="M15 8a4 4 0 0 0 4 4V4h-4a4 4 0 0 0-4 4v8" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-4 md:mb-6">Innovation</h3>
            <p className="text-gray-300 mb-2">+1-236-862-6282</p>
            <p className="text-gray-300">support@spsbconsultinginc.com</p>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-4 md:mb-6">Growth</h3>
            <p className="text-gray-300 mb-4">Enter your email address</p>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Your email for contact"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white text-gray-900"
                />
                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors">
                  Submit your inquiry now
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400">© 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

