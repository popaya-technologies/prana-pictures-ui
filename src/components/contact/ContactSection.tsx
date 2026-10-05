import { Mail, Phone, Clock3 } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="border-t border-neutral-200 bg-[#f7f5f0] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        {/* HEADING */}
        <div className="mb-12 max-w-[720px]">
          <h2 className="font-[family-name:var(--font-cormorant)] text-[42px] leading-none font-medium md:text-[50px]">
            Contact Prana Pictures
          </h2>

          <div className="mt-4 h-[2px] w-8 bg-[#e69a2d]" />

          <p className="mt-6 text-[15px] leading-7 text-neutral-600 md:text-[16px]">
            Whether you&apos;re reaching out about a project, partnership, press,
            or something entirely new, we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[38%_62%] lg:gap-14">
          {/* LEFT INFO PANEL */}
          <div className="rounded-sm bg-[#1b1b1b] px-7 py-9 text-white md:px-9 md:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e69a2d]">
              Get in touch
            </p>

            <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-[34px] leading-tight font-medium md:text-[40px]">
              Let&apos;s talk about
              <br />
              what&apos;s next.
            </h3>

            <p className="mt-5 max-w-[330px] text-sm leading-7 text-white/70">
              Share a little about what you&apos;re working on and we&apos;ll make sure
              your message reaches the right person.
            </p>

            <div className="mt-9 space-y-7">
              {/* EMAIL */}
              <div className="flex gap-4 border-t border-white/10 pt-6">
                <Mail
                  size={22}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#e69a2d]"
                />

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                    Email
                  </p>

                  <a
                    href="mailto:inquiries@pranapictures.com"
                    className="mt-1 block text-sm text-white transition-colors hover:text-[#e69a2d]"
                  >
                    inquiries@pranapictures.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-4 border-t border-white/10 pt-6">
                <Phone
                  size={22}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#e69a2d]"
                />

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                    Phone
                  </p>

                  <a
                    href="tel:+919831281789"
                    className="mt-1 block text-sm text-white transition-colors hover:text-[#e69a2d]"
                  >
                    +91 98312 81789
                  </a>
                </div>
              </div>

              {/* RESPONSE NOTE */}
              <div className="flex gap-4 border-t border-white/10 pt-6">
                <Clock3
                  size={22}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#e69a2d]"
                />

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                    Response time
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/75">
                    We&apos;ll get back to you as soon as we can.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="border border-neutral-200 bg-white px-6 py-8 shadow-[0_12px_40px_rgba(0,0,0,0.05)] md:px-8 md:py-10">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e69a2d]">
                Send an inquiry
              </p>

              <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-[32px] leading-none font-medium md:text-[38px]">
                Tell us a little about your project.
              </h3>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}