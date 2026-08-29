import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className,
  external,
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200';
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };
  const variants = {
    primary: 'gradient-teal-blue text-white hover:opacity-90 shadow-lg hover:shadow-[#1488AA]/25',
    outline: 'border border-[#1488AA] text-[#1488AA] hover:bg-[#1488AA]/10',
    ghost: 'text-[#CBD5E1] hover:text-white hover:bg-white/5',
  };

  const cls = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>{children}</Link>
    );
  }

  return (
    <button onClick={onClick} className={cls}>{children}</button>
  );
}
