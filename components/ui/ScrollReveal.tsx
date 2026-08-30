'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

type ScrollRevealProps = {
  children: string;
  className?: string;
  /** Color of words not yet "read" */
  dimClass?: string;
  /** Color of words already "read" */
  brightClass?: string;
};

function Word({
  children,
  progress,
  range,
  dimClass,
  brightClass,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  dimClass: string;
  brightClass: string;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);

  return (
    <span className="relative inline-block mr-[0.25em]">
      {/* Dim base layer stays in flow so layout never shifts */}
      <span className={dimClass}>{children}</span>
      <motion.span
        style={{ opacity }}
        className={`absolute left-0 top-0 ${brightClass}`}
        aria-hidden="true"
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Word-by-word scroll reveal (Rocket City Automations style).
 * Words brighten as the block scrolls through the viewport.
 */
export default function ScrollReveal({
  children,
  className = '',
  dimClass = 'text-[#CBD5E1]/25',
  brightClass = 'text-white',
}: ScrollRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.4'],
  });

  const words = children.split(' ');

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        return (
          <Word
            key={`${word}-${i}`}
            progress={scrollYProgress}
            range={[start, end]}
            dimClass={dimClass}
            brightClass={brightClass}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}
