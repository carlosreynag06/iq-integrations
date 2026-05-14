"use client";

import { MessageSquareText, X } from "lucide-react";
import { useState } from "react";

const options = [
  "Recover missed calls",
  "Automate follow-up",
  "Process documents",
  "Book ROI audit",
];

export function ChatPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`chat-preview ${open ? "is-open" : ""}`}>
      {open ? (
        <section aria-label="IQ Assistant preview" className="chat-panel">
          <header>
            <div>
              <b>IQ Assistant</b>
              <span>Preview / ROI Audit Mode</span>
            </div>
            <button type="button" aria-label="Close assistant preview" onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </header>
          <div className="chat-body">
            <p>
              I can help identify missed revenue paths. Choose the bottleneck
              you want to inspect first.
            </p>
            <div className="chat-options">
              {options.map((option) => (
                <button type="button" key={option}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <button
          type="button"
          className="chat-launcher"
          aria-label="Open IQ Assistant preview"
          onClick={() => setOpen(true)}
        >
          <MessageSquareText aria-hidden="true" size={22} />
          <span>IQ Assistant</span>
        </button>
      )}
    </div>
  );
}
