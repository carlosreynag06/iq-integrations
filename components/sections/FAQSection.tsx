"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqs } from "@/lib/site-data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <SectionHeader
          eyebrow="// KNOWLEDGE BASE"
          title="System Queries"
          body="Direct answers for the questions that usually surface before a service business installs automation into its daily operation."
          align="split"
        />
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <article className={`faq-item ${open ? "is-open" : ""}`} key={faq.question}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown aria-hidden="true" size={20} />
                </button>
                <div className="faq-answer" hidden={!open}>
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
