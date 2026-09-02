'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((faq, i) => (
        <div
          key={faq.q}
          className={`rounded-xl bg-[#111827] border overflow-hidden transition-colors duration-200 ${
            open === i ? 'border-[#1488AA]/30' : 'border-white/8 hover:border-[#1488AA]/20'
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
          >
            <h3 className="text-white font-semibold text-base flex items-start gap-3 pr-4">
              <Star size={16} className="text-[#1488AA] shrink-0 mt-0.5" />
              {faq.q}
            </h3>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="flex-shrink-0 text-[#1488AA] text-xl leading-none font-light"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <p className="text-[#CBD5E1]/80 text-sm leading-relaxed px-6 pb-5 pl-[52px]">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
