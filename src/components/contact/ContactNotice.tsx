import { ShieldCheck } from "lucide-react";

export default function ContactNotice() {
  return (
    <section className="border-t border-neutral-200 bg-white py-10">
      <div className="mx-auto max-w-[1100px] px-5 md:px-8">
        <div className="flex items-start gap-4">
          <ShieldCheck
            size={24}
            strokeWidth={1.6}
            className="mt-1 shrink-0 text-[#e69a2d]"
          />

          <p className="text-sm leading-6 text-neutral-600">
            Prana Pictures does not conduct casting or recruitment through
            unsolicited messages. Please do not share personal or financial
            information in response to such requests.
          </p>
        </div>
      </div>
    </section>
  );
}