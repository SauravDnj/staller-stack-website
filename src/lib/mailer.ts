import nodemailer from "nodemailer";

export type ContactAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

export type ContactSubmission = {
  fullName: string;
  email: string;
  phone?: string;
  budget?: string;
  projectBrief: string;
  wantsNdaCopy: boolean;
  attachment?: ContactAttachment;
};

function readSmtpConfig() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return null;
  return { host: SMTP_HOST, port: Number(SMTP_PORT), user: SMTP_USER, pass: SMTP_PASS };
}

function getTransporter() {
  const config = readSmtpConfig();
  if (!config) return null;

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: { user: config.user, pass: config.pass },
  });
}

export function isMailerConfigured() {
  return readSmtpConfig() !== null && !!process.env.CONTACT_TO_EMAIL;
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactSubmission(submission: ContactSubmission) {
  const transporter = getTransporter();
  const config = readSmtpConfig();
  const to = process.env.CONTACT_TO_EMAIL;

  if (!transporter || !config || !to) {
    throw new Error("Mailer is not configured");
  }

  const rows: [string, string][] = [
    ["Full Name", submission.fullName],
    ["Email", submission.email],
    ["Phone Number", submission.phone || "—"],
    ["Budget", submission.budget || "—"],
    ["Wants a copy of the NDA", submission.wantsNdaCopy ? "Yes" : "No"],
  ];

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0a121c; line-height: 1.5;">
      <h2 style="margin-bottom: 16px;">New project inquiry — Staller Stack</h2>
      <table cellpadding="6" style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight: 600; vertical-align: top; padding-right: 12px;">${label}</td><td>${escapeHtml(value)}</td></tr>`
          )
          .join("")}
      </table>
      <h3 style="margin-top: 24px; margin-bottom: 8px;">Project Brief</h3>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(submission.projectBrief)}</p>
      ${
        submission.attachment
          ? `<p style="margin-top: 16px; color: #555;">Attachment: ${escapeHtml(submission.attachment.filename)}</p>`
          : ""
      }
    </div>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_FROM || config.user,
    to,
    replyTo: submission.email,
    subject: `New project inquiry from ${submission.fullName}`,
    html,
    attachments: submission.attachment ? [submission.attachment] : undefined,
  });
}

export type AiGuideSubmission = {
  name: string;
  email: string;
  company: string;
  phone?: string;
  segment: string;
  goal: string;
  service: string;
  stage?: string;
  timeline?: string;
  budget?: string;
  teamSize?: string;
  leadTier: string;
  urgent: boolean;
  notes?: string;
};

export async function sendAiGuideSubmission(submission: AiGuideSubmission) {
  const transporter = getTransporter();
  const config = readSmtpConfig();
  const to = process.env.CONTACT_TO_EMAIL;

  if (!transporter || !config || !to) {
    throw new Error("Mailer is not configured");
  }

  const rows: [string, string][] = [
    ["Name", submission.name],
    ["Email", submission.email],
    ["Company", submission.company],
    ["Phone", submission.phone || "—"],
    ["Segment", submission.segment],
    ["Goal", submission.goal],
    ["Recommended Service", submission.service],
    ["Stage", submission.stage || "—"],
    ["Timeline", submission.timeline || "—"],
    ["Budget", submission.budget || "—"],
    ["Team Size", submission.teamSize || "—"],
    ["Lead Tier", submission.leadTier],
    ["Urgent", submission.urgent ? "Yes" : "No"],
  ];

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0a121c; line-height: 1.5;">
      <h2 style="margin-bottom: 16px;">New AI Guide submission — Staller Stack</h2>
      <table cellpadding="6" style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight: 600; vertical-align: top; padding-right: 12px;">${label}</td><td>${escapeHtml(value)}</td></tr>`
          )
          .join("")}
      </table>
      ${
        submission.notes
          ? `<h3 style="margin-top: 24px; margin-bottom: 8px;">Notes</h3><p style="white-space: pre-wrap; margin: 0;">${escapeHtml(submission.notes)}</p>`
          : ""
      }
    </div>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_FROM || config.user,
    to,
    replyTo: submission.email,
    subject: `New AI Guide lead (${submission.leadTier}) from ${submission.name}`,
    html,
  });
}
