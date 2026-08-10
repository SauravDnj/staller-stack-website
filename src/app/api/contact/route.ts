import { isMailerConfigured, sendContactSubmission } from "@/lib/mailer";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx", ".png", ".jpg", ".jpeg", ".webp"];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getExtension(filename: string) {
  const index = filename.lastIndexOf(".");
  return index === -1 ? "" : filename.slice(index).toLowerCase();
}

export async function POST(request: Request) {
  if (!isMailerConfigured()) {
    return Response.json(
      { error: "Contact form isn't configured yet. Please email us directly." },
      { status: 503 }
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const projectBrief = String(formData.get("projectBrief") ?? "").trim();
  const wantsNdaCopy = formData.get("wantsNdaCopy") === "on";

  if (!fullName || !email || !projectBrief || !EMAIL_PATTERN.test(email)) {
    return Response.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  let attachment: { filename: string; content: Buffer; contentType?: string } | undefined;
  const file = formData.get("file");

  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_FILE_SIZE) {
      return Response.json({ error: "File is too large. Max size is 10MB." }, { status: 400 });
    }
    if (!ALLOWED_EXTENSIONS.includes(getExtension(file.name))) {
      return Response.json({ error: "Unsupported file type." }, { status: 400 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    attachment = { filename: file.name, content: buffer, contentType: file.type || undefined };
  }

  try {
    await sendContactSubmission({
      fullName,
      email,
      phone: phone || undefined,
      budget: budget || undefined,
      projectBrief,
      wantsNdaCopy,
      attachment,
    });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return Response.json({ error: "Something went wrong sending your message." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
