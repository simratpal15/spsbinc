import { NextRequest, NextResponse } from 'next/server'
import { createTransport } from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, email, phone, and message are required' },
        { status: 400 }
      )
    }

    // Check if environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact administrator.' },
        { status: 500 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER, // Sender email
      to: process.env.OWNER_EMAIL || process.env.GMAIL_USER, // Owner's email address
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Details:</h3>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Name:</strong>
              <span style="color: #6b7280; margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Email:</strong>
              <span style="color: #6b7280; margin-left: 10px;">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </span>
            </div>
            
            ${phone ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Phone:</strong>
              <span style="color: #6b7280; margin-left: 10px;">
                <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
              </span>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Message:</strong>
              <div style="color: #6b7280; margin-top: 10px; line-height: 1.6; white-space: pre-wrap;">
                ${message}
              </div>
            </div>
          </div>
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Submission Time:</strong> ${new Date().toLocaleString('en-US', {
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
              This email was sent from the SPSB Consulting contact form.
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}

Submitted on: ${new Date().toLocaleString('en-US', {
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
        message: 'Email sent successfully' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
} 