"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface InternshipApplicationDialogProps {
  position: string
  children: React.ReactNode
}

export function InternshipApplicationDialog({ position, children }: InternshipApplicationDialogProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    courseStartDate: null as Date | null,
    courseEndDate: null as Date | null,
    whyJoin: "",
    skills: "",
    goals: "",
    previousExperience: "",
    workPreference: "",
    comments: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })
  const [validationErrors, setValidationErrors] = useState<{
    fullName?: string
    email?: string
    phone?: string
  }>({})
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const errors: { fullName?: string; email?: string; phone?: string } = {}

    // Validate full name
    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required"
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters"
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())) {
      errors.fullName = "Full name can only contain letters and spaces"
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = "Email address is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address"
    }

    // Validate phone (now mandatory)
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required"
    } else {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '')
      if (!phoneRegex.test(cleanPhone)) {
        errors.phone = "Please enter a valid phone number"
      }
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const clearValidationError = (field: string) => {
    setValidationErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[field as keyof typeof newErrors]
      return newErrors
    })
  }

  const validateField = (field: string, value: string) => {
    const errors = { ...validationErrors }
    
    switch (field) {
      case 'fullName':
        if (!value.trim()) {
          errors.fullName = "Full name is required"
        } else if (value.trim().length < 2) {
          errors.fullName = "Full name must be at least 2 characters"
        } else if (!/^[a-zA-Z\s]+$/.test(value.trim())) {
          errors.fullName = "Full name can only contain letters and spaces"
        } else {
          delete errors.fullName
        }
        break
        
      case 'email':
        if (!value.trim()) {
          errors.email = "Email address is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          errors.email = "Please enter a valid email address"
        } else {
          delete errors.email
        }
        break
        
      case 'phone':
        if (!value.trim()) {
          errors.phone = "Phone number is required"
        } else {
          const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
          const cleanPhone = value.replace(/[\s\-\(\)]/g, '')
          if (!phoneRegex.test(cleanPhone)) {
            errors.phone = "Please enter a valid phone number"
          } else {
            delete errors.phone
          }
        }
        break
    }
    
    setValidationErrors(errors)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form before submission
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/internship', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          courseStartDate: formData.courseStartDate ? format(formData.courseStartDate, 'yyyy-MM-dd') : null,
          courseEndDate: formData.courseEndDate ? format(formData.courseEndDate, 'yyyy-MM-dd') : null,
          position
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          college: "",
          course: "",
          courseStartDate: null,
          courseEndDate: null,
          whyJoin: "",
          skills: "",
          goals: "",
          previousExperience: "",
          workPreference: "",
          comments: "",
        })
        setValidationErrors({})
        // Close form dialog and show confirmation
        setOpen(false)
        setShowConfirmation(true)
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      college: "",
      course: "",
      courseStartDate: null,
      courseEndDate: null,
      whyJoin: "",
      skills: "",
      goals: "",
      previousExperience: "",
      workPreference: "",
      comments: "",
    })
    setSubmitStatus({ type: null, message: '' })
    setValidationErrors({})
  }

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      setOpen(newOpen)
      if (!newOpen) {
        resetForm()
      }
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply for {position}</DialogTitle>
          <DialogDescription>
            Please fill out the application form below. All fields marked with * are required.
          </DialogDescription>
        </DialogHeader>

        {/* Status Messages */}
        {submitStatus.type && (
          <div className={`p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            <div className="flex items-center">
              {submitStatus.type === 'success' ? (
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
              <span className="text-sm font-medium">{submitStatus.message}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => {
                  handleChange(e)
                  validateField('fullName', e.target.value)
                }}
                className={validationErrors.fullName ? "border-red-500" : ""}
                disabled={isSubmitting}
              />
              {validationErrors.fullName && (
                <p className="text-sm text-red-500">{validationErrors.fullName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => {
                  handleChange(e)
                  validateField('email', e.target.value)
                }}
                className={validationErrors.email ? "border-red-500" : ""}
                disabled={isSubmitting}
              />
              {validationErrors.email && (
                <p className="text-sm text-red-500">{validationErrors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => {
                handleChange(e)
                validateField('phone', e.target.value)
              }}
              className={validationErrors.phone ? "border-red-500" : ""}
              disabled={isSubmitting}
            />
            {validationErrors.phone && (
              <p className="text-sm text-red-500">{validationErrors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="college">College/University Name *</Label>
            <Input
              id="college"
              name="college"
              placeholder="Enter your college or university name"
              value={formData.college}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Course Name *</Label>
            <Input
              id="course"
              name="course"
              placeholder="e.g., Computer Science"
              value={formData.course}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Course Start Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.courseStartDate && "text-muted-foreground"
                    )}
                    disabled={isSubmitting}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.courseStartDate ? format(formData.courseStartDate, "PPP") : "Select start date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.courseStartDate}
                    onSelect={(date) => setFormData(prev => ({ ...prev, courseStartDate: date }))}
                    initialFocus
                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Course End Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !formData.courseEndDate && "text-muted-foreground"
                    )}
                    disabled={isSubmitting}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.courseEndDate ? format(formData.courseEndDate, "PPP") : "Select end date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.courseEndDate}
                    onSelect={(date) => setFormData(prev => ({ ...prev, courseEndDate: date }))}
                    initialFocus
                    disabled={(date) => 
                      date < new Date("1900-01-01") || 
                      (formData.courseStartDate && date <= formData.courseStartDate)
                    }
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="whyJoin">Why do you want to join this internship? *</Label>
            <Textarea
              id="whyJoin"
              name="whyJoin"
              placeholder="Tell us about your motivation and interest in this position"
              value={formData.whyJoin}
              onChange={handleChange}
              rows={4}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills">What skills or experiences do you bring to this internship? *</Label>
            <Textarea
              id="skills"
              name="skills"
              placeholder="Describe your relevant skills, technical abilities, and experiences"
              value={formData.skills}
              onChange={handleChange}
              rows={4}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="goals">What do you hope to learn or achieve during this internship? *</Label>
            <Textarea
              id="goals"
              name="goals"
              placeholder="Share your learning objectives and career goals"
              value={formData.goals}
              onChange={handleChange}
              rows={4}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="previousExperience">Have you done any previous internships or projects? If yes, please describe.</Label>
            <Textarea
              id="previousExperience"
              name="previousExperience"
              placeholder="Describe any relevant internships, projects, or work experience"
              value={formData.previousExperience}
              onChange={handleChange}
              rows={3}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="workPreference">Are you comfortable working remotely or onsite (or both)?</Label>
            <Select
              value={formData.workPreference}
              onValueChange={(value) => handleSelectChange('workPreference', value)}
              disabled={isSubmitting}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Remote only">Remote only</SelectItem>
                <SelectItem value="Onsite only">Onsite only</SelectItem>
                <SelectItem value="Hybrid (both remote and onsite)">Hybrid (both remote and onsite)</SelectItem>
                <SelectItem value="Flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comments">Any other comments or information you'd like to share?</Label>
            <Textarea
              id="comments"
              name="comments"
              placeholder="Additional information, questions, or comments"
              value={formData.comments}
              onChange={handleChange}
              rows={3}
              disabled={isSubmitting}
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </div>
              ) : (
                'Submit Application'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Application Submitted Successfully!
            </DialogTitle>
            <DialogDescription>
              Thank you for your interest in the {position} position at SPSB Consulting.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm">
                Your application has been received and is currently under review. Our team will carefully evaluate your qualifications and experience.
              </p>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">What happens next?</h4>
              <ul className="text-blue-800 text-sm space-y-1">
                <li>• We'll review your application within 3-5 business days</li>
                <li>• Qualified candidates will be contacted for an interview</li>
                <li>• You'll receive updates via email</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-end pt-4">
            <Button 
              onClick={() => setShowConfirmation(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  )
} 