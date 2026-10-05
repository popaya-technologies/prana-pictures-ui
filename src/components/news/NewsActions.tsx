"use client";

import { Check, Copy, Share2 } from "lucide-react";
import { useState } from "react";

export default function NewsActions() {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  async function shareStory() {
    if (navigator.share) {
      await navigator.share({ title: document.title, url: window.location.href });
      return;
    }

    await copyLink();
  }

  return (
    <div className="flex items-center gap-5 border-t border-neutral-200 pt-5 text-sm text-neutral-600">
      <button
        type="button"
        onClick={shareStory}
        className="inline-flex min-h-10 items-center gap-2 transition-colors hover:text-[#b66b0c]"
      >
        <Share2 size={16} />
        Share
      </button>
      <span aria-hidden="true" className="h-5 w-px bg-neutral-300" />
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex min-h-10 items-center gap-2 transition-colors hover:text-[#b66b0c]"
        aria-live="polite"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}