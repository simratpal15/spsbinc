import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function InternshipsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-[#0f1a2b] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Internship Opportunities</h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto">
            Join our team and gain valuable experience in the digital industry. We offer internships in various fields
            to help you grow your skills and advance your career.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Intern With Us?</h2>
              <p className="text-gray-700 mb-6">
                At SPSB Consulting, we believe in providing meaningful internship experiences that go beyond coffee runs
                and paperwork. Our interns work on real projects, collaborate with experienced professionals, and
                develop skills that are valuable in today's job market.
              </p>
              <p className="text-gray-700 mb-6">
                We're committed to helping you grow professionally and personally, providing mentorship, feedback, and
                opportunities to showcase your talents.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1 mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Hands-on experience with real projects</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1 mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Mentorship from industry professionals</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1 mr-3">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-gray-700">Networking opportunities with industry leaders</p>
                </div>
              </div>
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

      {/* Available Internships Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Available Internship Positions</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Web Development Intern</CardTitle>
                <CardDescription>Full-time, 4 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 h-48 overflow-hidden rounded-md">
                  <Image
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxN3x8dGVjaG5vbG9neSUyMGludGVybnNoaXBzfGVufDB8fHx8MTcyNjYxMjI3Mnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=790"
                    alt="Web Development"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-gray-700">
                  Learn modern web development practices while working on real client projects. Gain experience with
                  React, Next.js, and other cutting-edge technologies.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Digital Marketing Intern</CardTitle>
                <CardDescription>Full-time, 4 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 h-48 overflow-hidden rounded-md">
                  <Image
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxMnx8dGVjaG5vbG9neSUyMGludGVybnNoaXBzfGVufDB8fHx8MTcyNjYxMjI3Mnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=790"
                    alt="Digital Marketing"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-gray-700">
                  Develop skills in SEO, content marketing, social media management, and digital advertising while
                  working with our marketing team on client campaigns.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>IT Support Intern</CardTitle>
                <CardDescription>Part-time, 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 h-48 overflow-hidden rounded-md">
                  <Image
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5JTIwaW50ZXJuc2hpcHN8ZW58MHx8fHwxNzI2NjEyMjcyfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=790"
                    alt="IT Support"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-gray-700">
                  Gain hands-on experience in IT support, troubleshooting, and system administration. Learn to manage
                  and maintain IT infrastructure for businesses.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Application Process</h2>
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Submit Your Application</h3>
                  <p className="text-gray-700">
                    Fill out our online application form with your resume, cover letter, and portfolio (if applicable).
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Screening</h3>
                  <p className="text-gray-700">
                    Our team will review your application and reach out to qualified candidates for a phone interview.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interview</h3>
                  <p className="text-gray-700">
                    Selected candidates will be invited for an in-person or virtual interview with our team.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Offer and Onboarding</h3>
                  <p className="text-gray-700">
                    Successful candidates will receive an offer and begin the onboarding process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Career Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Apply for one of our internship positions today and take the first step towards a successful career in the
            digital industry.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full">
            View All Positions
          </Button>
        </div>
      </section>
    </div>
  )
}

