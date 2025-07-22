"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [heroScrolled, setHeroScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Determine if we've scrolled past the hero section
      if (scrollPosition > window.innerHeight * 0.8) {
        setHeroScrolled(true)
      } else {
        setHeroScrolled(false)
      }

      // Add animation classes to elements when they come into view
      const animatedElements = document.querySelectorAll(".animate-on-scroll")
      animatedElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("visible")
        }
      })
    }

    // Run once on load
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center text-white overflow-hidden">
        {/* Background Image - Fixed until scrolled past hero */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1678690832310-cf614292671d?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw2fHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzI2NTg1NTIxfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=3840"
            alt="Website development workspace"
            fill
            className={cn(
              "object-cover brightness-50 transition-opacity duration-500",
              heroScrolled ? "opacity-80" : "opacity-100",
            )}
            style={{
              objectPosition: "center center",
            }}
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-0 flex flex-col h-screen">
          {/* Main Heading - Top Section */}
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight animate-on-scroll text-center">
                Empowering Canadian
                <br />
                Business Digital
                <br />
                Transformation Journey
              </h1>

              {/* Subtitle and Button - Below Heading */}
              <p className="text-base sm:text-lg max-w-2xl mx-auto mt-6 mb-8 animate-on-scroll">
                Expert website development and digital marketing solutions tailored for your business success.
              </p>
              <div className="animate-on-scroll mb-16">
                <a
                  href="#contact"
                  className="inline-block bg-transparent hover:bg-white/10 text-white font-medium text-base px-8 py-2 rounded-full transition-colors border border-white"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Services Overview - Bottom Section with more space from button */}
          <div className="bg-black/30 backdrop-blur-sm animate-on-scroll py-6 mb-0 mt-auto">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">Website Development</h3>
                  <p className="text-sm text-white/80">
                    Custom websites that enhance your online presence effectively.
                  </p>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">IT Resourcing</h3>
                  <p className="text-sm text-white/80">Tailored IT resourcing for your business needs.</p>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">Learning Programs</h3>
                  <p className="text-sm text-white/80">Innovative learning programs to elevate your skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&w=1080&h=738"
                alt="Team working together"
                fill
                className="object-cover"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">About SPSB Consulting</h2>
              <p className="text-gray-700 mb-6">
                At SPSB Consulting Inc, we are dedicated to empowering Canadian businesses through their digital
                transformation journey. We believe in providing innovative solutions that drive growth and success in
                the digital landscape.
              </p>
              <p className="text-gray-700 mb-8">
                Our team of experts brings years of experience in website development, IT resourcing, and specialized
                training programs to help your business thrive in today's competitive market.
              </p>
              <Link href="/about">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-700">
              We offer a comprehensive range of services to help your business succeed in the digital world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 mb-6 overflow-hidden rounded-md">
                <Image
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1080&h=738"
                  alt="Website Development"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Development</h3>
              <p className="text-gray-700 mb-6">
                Custom websites designed to enhance your online presence and drive business growth.
              </p>
              <Link href="/services" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 mb-6 overflow-hidden rounded-md">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMnx8dGVjaG5vbG9neSUyMGludGVybnNoaXBzfGVufDB8fHx8MTcyNjYxMjI3Mnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=790"
                  alt="IT Resourcing"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">IT Resourcing</h3>
              <p className="text-gray-700 mb-6">
                Find qualified IT professionals for your project requirements and business needs.
              </p>
              <Link href="/services" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-48 mb-6 overflow-hidden rounded-md">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5JTIwaW50ZXJuc2hpcHN8ZW58MHx8fHwxNzI2NjEyMjcyfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=790"
                  alt="Learning Programs"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Learning Programs</h3>
              <p className="text-gray-700 mb-6">
                Innovative learning programs to elevate your skills and enhance your team's capabilities.
              </p>
              <Link href="/services" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left side - Whiteboard image */}
          <div className="relative h-80 md:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxN3x8dGVjaG5vbG9neSUyMGludGVybnNoaXBzfGVufDB8fHx8MTcyNjYxMjI3Mnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=790"
              alt="Team working on whiteboard"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side - Testimonial */}
          <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-blue-600 text-white text-center">
            <div className="flex mb-4 md:mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 md:w-6 md:h-6 text-white fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            <p className="mb-6 md:mb-8 text-base md:text-lg lg:text-xl max-w-lg">
              Exceptional service! Their expertise in project management and agile training transformed our team's
              productivity significantly.
            </p>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 mb-2 overflow-hidden rounded-full">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5JTIwaW50ZXJuc2hpcHN8ZW58MHx8fHwxNzI2NjEyMjcyfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=790"
                  alt="John Doe"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <span className="text-sm md:text-base">John Doe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Internship Opportunities</h2>
              <p className="text-gray-700 mb-6">
                Join our team and gain valuable experience in the digital industry. We offer internships in various
                fields to help you grow your skills and advance your career.
              </p>
              <p className="text-gray-700 mb-8">
                Our internship programs provide hands-on experience, mentorship from industry professionals, and
                opportunities to work on real projects that make a difference.
              </p>
              <Link href="/internships">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full">
                  Explore Internships
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMHx8dGVjaG5vbG9neSUyMGludGVybnNoaXBzfGVufDB8fHx8MTcyNjYxMjI3Mnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=3840"
                alt="Interns working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-[#0f1a2b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our services can help your business thrive in the digital landscape.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </>
  )
}

