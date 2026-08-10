"use client";

import { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-ss-border bg-ss-surface/60 px-4 py-3 text-sm text-ss-text placeholder:text-ss-muted/70 outline-none transition-colors focus:border-ss-teal";

const BUDGET_OPTIONS = ["$10K - $25K", "$25K - $50K", "$50K - $75K", "Above $75K"];
const ACCEPTED_EXTENSIONS = ".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp";
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function selectFile(selected: File | null | undefined) {
    if (!selected) return;
    if (selected.size > MAX_FILE_SIZE) {
      setErrorMessage("File is too large. Max size is 10MB.");
      return;
    }
    setErrorMessage("");
    setFile(selected);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    if (file) formData.set("file", file);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (response.ok && result.ok) {
        setStatus("success");
        event.currentTarget.reset();
        setFile(null);
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
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
          <label htmlFor="fullName" className="text-sm text-ss-muted">
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Enter Your Full Name"
            className={`mt-2 ${inputClasses}`}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-ss-muted">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter Your Email Address"
            className={`mt-2 ${inputClasses}`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm text-ss-muted">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter Your Phone Number"
            className={`mt-2 ${inputClasses}`}
          />
        </div>
        <div>
          <label htmlFor="budget" className="text-sm text-ss-muted">
            Your Budget?
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className={`mt-2 ${inputClasses} appearance-none`}
          >
            <option value="" disabled>
              Select a range
            </option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="projectBrief" className="text-sm text-ss-muted">
          Project Brief *
        </label>
        <textarea
          id="projectBrief"
          name="projectBrief"
          required
          rows={compact ? 3 : 5}
          placeholder="Write it here..."
          className={`mt-2 resize-none ${inputClasses}`}
        />
      </div>

      <div>
        <p className="text-sm text-ss-muted">File Upload</p>
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setIsDragging(false);
            selectFile(event.dataTransfer.files?.[0]);
          }}
          className={`mt-2 flex cursor-pointer flex-col items-center gap-1.5 rounded-lg border border-dashed px-4 py-6 text-center transition-colors ${
            isDragging
              ? "border-ss-teal bg-ss-teal/5"
              : "border-ss-border bg-ss-surface/40 hover:border-ss-teal/60"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            hidden
            accept={ACCEPTED_EXTENSIONS}
            onChange={(event) => selectFile(event.target.files?.[0])}
          />
          {file ? (
            <>
              <p className="text-sm text-ss-text">{file.name}</p>
              <p className="text-xs text-ss-muted">{formatFileSize(file.size)}</p>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setFile(null);
                }}
                className="mt-1 text-xs text-ss-teal hover:text-ss-mint"
              >
                Remove file
              </button>
            </>
          ) : (
            <>
              <p className="text-sm text-ss-text">
                Drag &amp; Drop Files, or Choose Files to Upload
              </p>
              <p className="text-xs text-ss-muted">
                PDF, DOC, DOCX, or image — up to 10MB
              </p>
            </>
          )}
        </div>
        <p className="mt-2 text-xs text-ss-muted">
          Your ideas are fully protected under our Non-Disclosure Agreement.
        </p>
      </div>

      <label className="flex items-center gap-2 text-sm text-ss-muted">
        <input
          type="checkbox"
          name="wantsNdaCopy"
          className="h-4 w-4 rounded border-ss-border bg-ss-surface/60 accent-ss-teal"
        />
        Send me a copy of the NDA
      </label>

      {status === "error" && errorMessage && (
        <p className="text-sm text-red-400">{errorMessage}</p>
      )}

      <Button type="submit" className="mt-2 w-fit">
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && <span aria-hidden>→</span>}
      </Button>
    </form>
  );
}
