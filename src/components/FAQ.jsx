import React, { useState } from 'react';

const FAQ = ({ items, limit }) => {
  const list = limit ? items.slice(0, limit) : items;
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-white/10 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden">
      {list.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-white/5 transition-colors"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-slate-100 pr-4">{item.question}</span>
              <span
                className={`shrink-0 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-brand-primary font-bold transition-transform ${
                  isOpen ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 -mt-2">
                <p className="text-slate-400 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
