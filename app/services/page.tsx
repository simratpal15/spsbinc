import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-[#0f1a2b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Expert Services Offered</h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto">
            Website development, IT resourcing, and specialized training by certified professionals in project
            management.
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services Overview</h2>
            <p className="text-base md:text-lg text-gray-700">
              Explore our comprehensive services in website development, IT resourcing, and agile training solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1080&h=869"
                alt="Team meeting with whiteboard"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="space-y-8 md:space-y-12">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Project Management Expertise</h3>
                <p className="text-base text-gray-700">
                  PMP certified professionals to guide your projects from initiation to completion.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Technical Program Management</h3>
                <p className="text-base text-gray-700">
                  Expert management for your technical projects ensuring timely and successful delivery.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Agile Training Solutions</h3>
                <p className="text-base text-gray-700">
                  Certified training programs to enhance your team's agile methodologies and practices.
                </p>
              </div>
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
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMnx8dGVjaG5vbG9neSUyMGludGVybnNoaXBzfGVufDB8fHx8MTcyNjYxMjI3Mnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=790"
              alt="Team working on whiteboard"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side - Testimonial */}
          <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-blue-600 text-white text-center">
            <div className="flex mb-4 md:mb-6">
              <Star className="w-5 h-5 md:w-6 md:h-6 fill-white" />
              <Star className="w-5 h-5 md:w-6 md:h-6 fill-white" />
              <Star className="w-5 h-5 md:w-6 md:h-6 fill-white" />
              <Star className="w-5 h-5 md:w-6 md:h-6 fill-white" />
              <Star className="w-5 h-5 md:w-6 md:h-6 fill-white" />
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

      {/* Detailed Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-base md:text-lg text-gray-700">
              Explore our comprehensive services for all your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1678690832324-67961a27ca92?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwyfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzI2NTg1NTIxfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1054"
                alt="Laptop showing website design"
                width={600}
                height={400}
                className="object-cover w-full h-64 md:h-80"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxN3x8dGVjaG5vbG9neSUyMGludGVybnNoaXBzfGVufDB8fHx8MTcyNjYxMjI3Mnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=790"
                alt="Laptop on wooden table"
                width={600}
                height={400}
                className="object-cover w-full h-64 md:h-80"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">Website Development</h3>
              <p className="text-base text-gray-700 mb-6">
                Custom websites designed to enhance your online presence and drive business growth.
              </p>
              <div className="overflow-hidden rounded-lg shadow-md mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1224&h=880"
                  alt="Laptop showing website building"
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 md:h-64"
                />
              </div>
              <div className="text-right">
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 border-gray-900 text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">IT Resourcing</h3>
              <p className="text-base text-gray-700 mb-6">
                Find qualified IT professionals for your project requirements and business needs.
              </p>
              <div className="overflow-hidden rounded-lg shadow-md mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5JTIwaW50ZXJuc2hpcHN8ZW58MHx8fHwxNzI2NjEyMjcyfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=790"
                  alt="Team working together"
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 md:h-64"
                />
              </div>
              <div className="text-right">
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 border-gray-900 text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help transform your business.
          </p>
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">Contact Us Now</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

