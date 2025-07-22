# Email Setup Guide for Contact Form

This guide will help you set up the email functionality for the contact form using Gmail SMTP.

## Prerequisites

1. **Install Dependencies**
   ```bash
   pnpm add nodemailer @types/nodemailer
   ```

2. **Gmail Account Setup**
   - You need a Gmail account
   - Enable 2-Step Verification on your Google account
   - Generate an App Password (not your regular password)

## Gmail App Password Setup

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to **Security** > **2-Step Verification**
3. Scroll down and click on **App passwords**
4. Select **Mail** as the app and **Other** as the device
5. Click **Generate**
6. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Your Gmail address
GMAIL_USER=your-email@gmail.com

# Your Gmail App Password (the 16-character password from step above)
GMAIL_APP_PASSWORD=your-16-character-app-password

# Owner's email address (where contact form submissions will be sent)
# If not set, will default to GMAIL_USER
OWNER_EMAIL=owner@yourcompany.com

# Environment
NODE_ENV=development
```

## Example Configuration

```env
GMAIL_USER=contact@spsbconsultinginc.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
OWNER_EMAIL=owner@spsbconsultinginc.com
NODE_ENV=development
```

## How It Works

1. **User submits form** → Data is sent to `/api/contact`
2. **API validates data** → Checks for required fields (name, email, message)
3. **Email is sent** → Using Nodemailer with Gmail SMTP
4. **Response returned** → Success/error message to the user

## Email Content

The email includes:
- **HTML version**: Beautifully formatted with styling
- **Text version**: Plain text fallback
- **Contact details**: Name, email, phone (if provided), message
- **Timestamp**: When the form was submitted
- **Links**: Clickable email and phone links

## Troubleshooting

### Common Issues

1. **"Invalid login" error**
   - Make sure you're using an App Password, not your regular Gmail password
   - Ensure 2-Step Verification is enabled

2. **"Less secure app" error**
   - Google disabled this feature. You must use App Passwords or OAuth2

3. **"Network error"**
   - Check your internet connection
   - Verify the API route is working (`/api/contact`)

### Testing

1. Start your development server: `pnpm dev`
2. Go to `/contact` page
3. Fill out the form and submit
4. Check your email (the one specified in `OWNER_EMAIL`)

### Production Considerations

For production, consider:
- Using a dedicated email service (SendGrid, Postmark, etc.)
- Setting up proper error monitoring
- Adding rate limiting to prevent spam
- Using environment-specific configurations

## Security Notes

- Never commit your `.env.local` file to version control
- App Passwords are more secure than regular passwords
- The API validates all input data
- Error messages don't expose sensitive information in production 