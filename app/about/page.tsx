import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#0f1a2b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto">
            Learn about our mission, values, and the team behind SPSB Consulting Inc.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-8">
                At SPSB Consulting Inc, we are dedicated to empowering Canadian businesses through their digital
                transformation journey. We believe in providing innovative solutions that drive growth and success in
                the digital landscape.
              </p>
              <p className="text-gray-700 mb-8">
                Our mission is to deliver exceptional website development, IT resourcing, and learning programs that
                help businesses thrive in today's competitive market. We are committed to excellence, innovation, and
                client satisfaction in everything we do.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full">Contact Us</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyNHx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTcyNjU4NTUyMXww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1360"
                alt="Team working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-700">
                We constantly seek new and better ways to solve problems and deliver value to our clients. Innovation is
                at the heart of everything we do.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in all our services, from website development to IT resourcing and learning
                programs. Quality is never compromised.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-700">
                We operate with honesty, transparency, and ethical standards. Our clients trust us because we always do
                what's right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                <Image
                  src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxNHx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTcyNjU4NTUyMXww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1367"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">John Smith</h3>
              <p className="text-gray-600 mb-4">Founder & CEO</p>
              <p className="text-gray-700">
                With over 15 years of experience in digital transformation, John leads our team with vision and
                expertise.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                <Image
                  src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxNnx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTcyNjU4NTUyMXww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1060"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-4">Head of Development</p>
              <p className="text-gray-700">
                Sarah brings technical excellence and creativity to our website development projects.
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                <Image
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw5fHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzI2NTg1NTIxfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1367"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Michael Brown</h3>
              <p className="text-gray-600 mb-4">IT Resourcing Manager</p>
              <p className="text-gray-700">
                Michael's expertise in IT talent acquisition ensures we connect businesses with the right professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our services can help your business thrive in the digital landscape.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-2 rounded-full">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

