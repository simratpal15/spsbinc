import { createTransport, type Transporter } from "nodemailer"

/** Inbox where contact and internship form notifications are delivered. */
const DEFAULT_FORM_RECIPIENT = "support@spsbconsultinginc.com"

/**
 * Returns true when either Hostinger/generic SMTP or legacy Gmail env is set.
 */
export function isMailConfigured(): boolean {
  const smtpOk = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS)
  const gmailOk = Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD)
  return smtpOk || gmailOk
}

/**
 * Address that receives all website form submissions (admin inbox).
 * Override with MAIL_TO or OWNER_EMAIL in production if needed.
 */
export function getFormRecipientEmail(): string {
  return (
    process.env.MAIL_TO?.trim() ||
    process.env.OWNER_EMAIL?.trim() ||
    DEFAULT_FORM_RECIPIENT
  )
}

/**
 * From address for outbound mail. Must usually match the SMTP-authenticated mailbox.
 */
export function getMailFromAddress(): string {
  return (
    process.env.MAIL_FROM?.trim() ||
    process.env.SMTP_USER?.trim() ||
    process.env.GMAIL_USER?.trim() ||
    DEFAULT_FORM_RECIPIENT
  )
}

/**
 * Nodemailer transporter: Hostinger SMTP when SMTP_USER/SMTP_PASS are set,
 * otherwise legacy Gmail when GMAIL_USER/GMAIL_APP_PASSWORD are set.
 *
 * Hostinger (typical): SMTP_HOST=smtp.hostinger.com, SMTP_PORT=587, SMTP_SECURE=false
 * Alternative: port 465 with SMTP_SECURE=true
 */
export function createMailTransporter(): Transporter {
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS

  if (smtpUser && smtpPass) {
    const port = parseInt(process.env.SMTP_PORT || "587", 10)
    const secureEnv = process.env.SMTP_SECURE?.toLowerCase()
    const secure =
      secureEnv === "true" ? true : secureEnv === "false" ? false : port === 465

    return createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port,
      secure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })
  }

  const gmailUser = process.env.GMAIL_USER
  const gmailPass = process.env.GMAIL_APP_PASSWORD

  if (gmailUser && gmailPass) {
    return createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    })
  }

  throw new Error("Mail transport: missing SMTP_USER/SMTP_PASS or GMAIL_USER/GMAIL_APP_PASSWORD")
}
