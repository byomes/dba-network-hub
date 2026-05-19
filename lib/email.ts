import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'pastorbill@catalyst302.com'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dba-network-hub.vercel.app'
// Update FROM address once your domain is verified in Resend
const FROM = process.env.RESEND_FROM || 'DBA Network Hub <onboarding@resend.dev>'

export async function sendAdminNotification(user: {
  id: string
  name: string
  church: string
  role: string
  email: string
}) {
  await resend.emails.send({
    from: FROM,
    to: ADMIN_EMAIL,
    subject: `New DBA Network signup request — ${user.name} from ${user.church}`,
    html: `
      <p>A new user has requested access to the DBA Network Hub.</p>
      <ul>
        <li><strong>Name:</strong> ${user.name}</li>
        <li><strong>Church:</strong> ${user.church}</li>
        <li><strong>Role:</strong> ${user.role}</li>
        <li><strong>Email:</strong> ${user.email}</li>
      </ul>
      <p>
        <a href="${SITE_URL}/admin/approve/${user.id}" style="background:#C6AC8F;color:#22333B;padding:8px 16px;text-decoration:none;border-radius:4px;margin-right:8px">Approve</a>
        <a href="${SITE_URL}/admin/reject/${user.id}" style="background:#5E503F;color:#EAE0D5;padding:8px 16px;text-decoration:none;border-radius:4px">Reject</a>
      </p>
      <p style="color:#888;font-size:12px">You must be logged in to the Network Hub for these links to work.</p>
    `,
  })
}

export async function sendSignupConfirmation(user: { name: string; email: string }) {
  await resend.emails.send({
    from: FROM,
    to: user.email,
    subject: 'Your DBA Network Hub request has been received',
    html: `
      <p>Hi ${user.name},</p>
      <p>Thank you for requesting access to the DBA Network Hub. Your account is currently <strong>pending approval</strong>.</p>
      <p>You'll receive another email once your account has been reviewed and approved by the DBA administrator.</p>
      <p>— The DBA Team</p>
    `,
  })
}

export async function sendApprovalEmail(user: { name: string; email: string }) {
  await resend.emails.send({
    from: FROM,
    to: user.email,
    subject: "You're approved — welcome to the DBA Network Hub",
    html: `
      <p>Hi ${user.name},</p>
      <p>Great news — your DBA Network Hub account has been approved. Your account is now active and you can sign in.</p>
      <p>
        <a href="${SITE_URL}/login" style="background:#C6AC8F;color:#22333B;padding:10px 20px;text-decoration:none;border-radius:4px">
          Sign in to the Network Hub →
        </a>
      </p>
      <p>— The DBA Team</p>
    `,
  })
}
