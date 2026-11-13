'use client';
import { useState } from 'react';
import { titleLines, cleanHtml } from '@/lib/api';

export default function Faq({ title, items = [] }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <h2 className="h-xl">{titleLines(title).map((l, i) => <span key={i}>{l}</span>)}</h2>
        <ul className="faq-list">
          {items.map((it, idx) => {
            const isOpen = open === idx;
            return (
              <li key={idx} className={isOpen ? 'open' : ''}>
                <button id={`faq-q-${idx}`} aria-expanded={isOpen} aria-controls={`faq-a-${idx}`} onClick={() => setOpen(isOpen ? -1 : idx)}>
                  <span>{it.question}</span>
                  <i className="plus" aria-hidden />
                </button>
                <div className="faq-a" id={`faq-a-${idx}`} role="region" aria-labelledby={`faq-q-${idx}`}>
                  <div dangerouslySetInnerHTML={{ __html: cleanHtml(it.answer) }} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
