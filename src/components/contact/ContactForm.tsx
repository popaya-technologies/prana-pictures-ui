"use client";

import { FormEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!captchaToken) {
      setMessage("Please complete the CAPTCHA before submitting.");
      return;
    }

    setMessage("Form is ready to be connected to your backend.");
  }

  const inputClass =
    "min-h-[52px] w-full border border-neutral-300 bg-white px-4 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-[#e69a2d]";

  return (
    <form onSubmit={handleSubmit}>
      {/* NAME + EMAIL */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Name <span className="text-[#e69a2d]">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Email <span className="text-[#e69a2d]">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* PHONE + SUBJECT */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium text-neutral-800"
          >
            Subject <span className="text-[#e69a2d]">*</span>
          </label>

          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Project, partnership, press..."
            className={inputClass}
          />
        </div>
      </div>

      {/* MESSAGE */}
      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-neutral-800"
        >
          Message <span className="text-[#e69a2d]">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about your idea, project, or inquiry..."
          className="w-full resize-none border border-neutral-300 bg-white px-4 py-4 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-[#e69a2d]"
        />
      </div>

      {/* CAPTCHA */}
      <div className="mt-6 overflow-x-auto">
        <ReCAPTCHA
          sitekey={
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
            "YOUR_RECAPTCHA_SITE_KEY"
          }
          onChange={(token) => {
            setCaptchaToken(token);
            setMessage("");
          }}
          onExpired={() => setCaptchaToken(null)}
        />
      </div>

      {/* STATUS */}
      {message && (
        <p className="mt-4 text-sm text-neutral-600">
          {message}
        </p>
      )}

      {/* SUBMIT */}
      <button
        type="submit"
        className="group mt-6 inline-flex min-h-[54px] w-full items-center justify-center gap-3 bg-[#e69a2d] px-8 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#d88b21] sm:w-auto"
      >
        Send message

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </form>
  );
}