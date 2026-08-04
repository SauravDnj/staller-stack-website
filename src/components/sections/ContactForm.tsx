"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const inputClasses =
  "w-full rounded-lg border border-ss-border bg-ss-surface/60 px-4 py-3 text-sm text-ss-text placeholder:text-ss-muted/70 outline-none transition-colors focus:border-ss-teal";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-ss-teal/40 bg-ss-teal/10 p-8">
        <p className="font-display text-lg font-semibold text-ss-text">
          Message sent.
        </p>
        <p className="mt-2 text-sm text-ss-muted">
          Thanks for reaching out — a member of our team will get back to you
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-ss-muted">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Doe"
            className={`mt-2 ${inputClasses}`}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-ss-muted">
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={`mt-2 ${inputClasses}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="text-sm text-ss-muted">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Company name"
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-ss-muted">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className={`mt-2 resize-none ${inputClasses}`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          {WEB3FORMS_ACCESS_KEY
            ? "Something went wrong sending your message. Please try again or email us directly."
            : "Contact form isn't configured yet — add a Web3Forms access key to enable it."}
        </p>
      )}

      <Button type="submit" className="mt-2 w-fit">
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && <span aria-hidden>→</span>}
      </Button>
    </form>
  );
}
