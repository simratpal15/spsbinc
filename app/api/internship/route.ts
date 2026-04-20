import { NextRequest, NextResponse } from 'next/server'
import {
  createMailTransporter,
  getFormRecipientEmail,
  getMailFromAddress,
  isMailConfigured,
} from '@/lib/mail'

export async function POST(request: NextRequest) {
  try {
    const { 
      fullName, 
      email, 
      phone, 
      college, 
      course, 
      courseStartDate,
      courseEndDate,
      whyJoin, 
      skills, 
      goals, 
      previousExperience, 
      workPreference, 
      comments,
      position 
    } = await request.json()

    // Validate required fields
    if (!fullName || !email || !phone || !college || !course || !courseStartDate || !courseEndDate || !whyJoin || !skills || !goals) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      )
    }

    if (!isMailConfigured()) {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact administrator.' },
        { status: 500 }
      )
    }

    const transporter = createMailTransporter()
    const fromAddr = getMailFromAddress()
    const toAddr = getFormRecipientEmail()

    // Email content
    const mailOptions = {
      from: fromAddr,
      to: toAddr,
      subject: `New Internship Application - ${position} from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Internship Application
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Position Applied For:</h3>
            <p style="color: #6b7280; font-weight: bold; margin-bottom: 20px;">${position}</p>
            
            <h3 style="color: #1e293b; margin-top: 0;">Applicant Details:</h3>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Full Name:</strong>
              <span style="color: #6b7280; margin-left: 10px;">${fullName}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Email:</strong>
              <span style="color: #6b7280; margin-left: 10px;">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </span>
            </div>
            
            ${phone ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Phone Number:</strong>
              <span style="color: #6b7280; margin-left: 10px;">
                <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
              </span>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">College/University:</strong>
              <span style="color: #6b7280; margin-left: 10px;">${college}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Course:</strong>
              <span style="color: #6b7280; margin-left: 10px;">${course}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Course Start Date:</strong>
              <span style="color: #6b7280; margin-left: 10px;">${courseStartDate}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Course End Date:</strong>
              <span style="color: #6b7280; margin-left: 10px;">${courseEndDate}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Why do you want to join this internship?</strong>
              <div style="color: #6b7280; margin-top: 10px; line-height: 1.6; white-space: pre-wrap;">
                ${whyJoin}
              </div>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Skills and experiences:</strong>
              <div style="color: #6b7280; margin-top: 10px; line-height: 1.6; white-space: pre-wrap;">
                ${skills}
              </div>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">What do you hope to learn or achieve?</strong>
              <div style="color: #6b7280; margin-top: 10px; line-height: 1.6; white-space: pre-wrap;">
                ${goals}
              </div>
            </div>
            
            ${previousExperience ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Previous internships or projects:</strong>
              <div style="color: #6b7280; margin-top: 10px; line-height: 1.6; white-space: pre-wrap;">
                ${previousExperience}
              </div>
            </div>
            ` : ''}
            
            ${workPreference ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Work preference:</strong>
              <span style="color: #6b7280; margin-left: 10px;">${workPreference}</span>
            </div>
            ` : ''}
            
            ${comments ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Additional comments:</strong>
              <div style="color: #6b7280; margin-top: 10px; line-height: 1.6; white-space: pre-wrap;">
                ${comments}
              </div>
            </div>
            ` : ''}
          </div>
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Application Submitted:</strong> ${new Date().toLocaleString('en-US', {
                timeZone: 'America/Vancouver',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              This application was submitted through the SPSB Consulting internship portal.
            </p>
          </div>
        </div>
      `,
      text: `
New Internship Application

Position: ${position}

Applicant Details:
Full Name: ${fullName}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
College/University: ${college}
Course: ${course}
Course Start Date: ${courseStartDate}
Course End Date: ${courseEndDate}

Why do you want to join this internship?
${whyJoin}

Skills and experiences:
${skills}

What do you hope to learn or achieve?
${goals}

${previousExperience ? `Previous internships or projects:\n${previousExperience}\n` : ''}
${workPreference ? `Work preference: ${workPreference}\n` : ''}
${comments ? `Additional comments:\n${comments}\n` : ''}

Application submitted on: ${new Date().toLocaleString('en-US', {
        timeZone: 'America/Vancouver',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })}
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { 
        success: true, 
        messageId: info.messageId,
        message: 'Application submitted successfully' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending internship application:', error)
    
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again later.' },
      { status: 500 }
    )
  }
} 