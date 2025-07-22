"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header
        className={`w-full transition-all duration-300 
          ${scrolled ? "bg-white py-3 shadow-sm" : "bg-white py-4"}`}
      >
        <div className="container flex items-center justify-between px-4 mx-auto">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/spsb.png"
              alt="SPSB Consulting Inc Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xl font-bold text-black">SPSB Consulting Inc</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className={`text-black hover:text-gray-600 transition-colors pb-1 ${
                    isActive("/") ? "border-b-2 border-black" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`text-black hover:text-gray-600 transition-colors pb-1 ${
                    isActive("/services") ? "border-b-2 border-black" : ""
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`text-black hover:text-gray-600 transition-colors pb-1 ${
                    isActive("/about") ? "border-b-2 border-black" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-black hover:text-gray-600 transition-colors pb-1 ${
                    isActive("/contact") ? "border-b-2 border-black" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/internships"
                  className={`text-black hover:text-gray-600 transition-colors pb-1 ${
                    isActive("/internships") ? "border-b-2 border-black" : ""
                  }`}
                >
                  Internships
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-black">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col mt-8">
                <ul className="flex flex-col space-y-4">
                  <li>
                    <Link
                      href="/"
                      className={`text-lg transition-colors hover:text-gray-600 ${isActive("/") ? "font-bold" : ""}`}
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className={`text-lg transition-colors hover:text-gray-600 ${
                        isActive("/services") ? "font-bold" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={`text-lg transition-colors hover:text-gray-600 ${
                        isActive("/about") ? "font-bold" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className={`text-lg transition-colors hover:text-gray-600 ${
                        isActive("/contact") ? "font-bold" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/internships"
                      className={`text-lg transition-colors hover:text-gray-600 ${
                        isActive("/internships") ? "font-bold" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      Internships
                    </Link>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      {/* Gray border that appears when scrolled */}
      <div
        className={`h-[1px] bg-gray-200 w-full transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  )
}

