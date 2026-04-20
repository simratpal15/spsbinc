# Email setup (Hostinger SMTP)

Website forms (`/contact` and `/internships`) send mail through **Nodemailer**. Configure **Hostinger SMTP** so submissions arrive at **support@spsbconsultinginc.com** (or set `MAIL_TO` to another inbox).

## Hostinger SMTP (recommended)

Use the values from **hPanel → Email → your account → Configuration / Manual setup**. Typical Hostinger settings:

| Setting        | Value                    |
|----------------|--------------------------|
| SMTP server    | `smtp.hostinger.com`     |
| Port           | `587` (TLS / STARTTLS)   |
| Encryption     | TLS (not SSL on 587)     |
| Username       | Full email address (e.g. `support@spsbconsultinginc.com`) |
| Password       | Your email account password (set in `.env.local` / Vercel only — never commit it) |

Alternative: port **465** with SSL — set `SMTP_PORT=465` and `SMTP_SECURE=true`.

## Environment variables

Add these to **`.env.local`** (local) and **Vercel → Project → Settings → Environment Variables** (production).

```env
# --- Hostinger (required for new setups) ---
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=false

# Mailbox that authenticates to SMTP (usually support@your-domain)
SMTP_USER=support@spsbconsultinginc.com
SMTP_PASS=your-hostinger-email-password

# Where form notifications are delivered (admin inbox)
# Defaults to support@spsbconsultinginc.com if omitted
MAIL_TO=support@spsbconsultinginc.com

# Optional: explicit From header (defaults to SMTP_USER)
# MAIL_FROM=support@spsbconsultinginc.com
```

- **`MAIL_TO`**: inbox that receives **contact** and **internship** application emails. If unset, **`OWNER_EMAIL`** is used; if that is also unset, the app defaults to **`support@spsbconsultinginc.com`**.
- **`SMTP_USER` / `SMTP_PASS`**: must match the Hostinger email account you use to send (same credentials as in Outlook/Apple Mail for that mailbox).

## Legacy Gmail (optional)

If you still use Gmail app passwords instead of Hostinger, you can keep:

```env
GMAIL_USER=you@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

When **`SMTP_USER` and `SMTP_PASS` are set**, Hostinger SMTP is used and Gmail variables are ignored for the transport.

## How it works

1. User submits a form → `POST` `/api/contact` or `/api/internship`.
2. The route validates input and checks `isMailConfigured()`.
3. Nodemailer sends one email **`to`** `MAIL_TO` (or default **support@**), **`from`** `MAIL_FROM` or `SMTP_USER`.

## Troubleshooting

1. **“Email service not configured”** — Set `SMTP_USER` and `SMTP_PASS` (or legacy Gmail pair).
2. **Authentication failed** — Confirm password in hPanel; no spaces; use the email account’s password, not the Hostinger login unless they are the same.
3. **“Invalid login” on 465/587** — Match Hostinger’s doc for your port: for **587** use `SMTP_SECURE=false`; for **465** use `SMTP_SECURE=true`.
4. **Vercel** — Redeploy after changing env vars.

## Security

- Never commit `.env.local`.
- Prefer app-specific env on Vercel and restrict who can view production secrets.
