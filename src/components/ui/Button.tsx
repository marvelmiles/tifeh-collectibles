import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Variant = 'solid' | 'outline' | 'ghost';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
}

const styles: Record<Variant, string> = {
  solid:
    'bg-ink text-canvas hover:bg-gold-deep dark:hover:bg-gold dark:hover:text-ink',
  outline:
    'border border-ink/30 text-ink hover:border-gold hover:text-gold',
  ghost: 'text-ink hover:text-gold',
};

const base =
  'group inline-flex items-center justify-center gap-2 px-7 py-3.5 font-sans text-[0.8rem] uppercase tracking-wide transition-colors duration-400 ease-editorial focus-visible:outline-2';

function Inner({ children, withArrow }: { children: ReactNode; withArrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-400 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );
}

interface LinkButtonProps extends BaseProps {
  to: string;
}
export function LinkButton({
  to,
  children,
  variant = 'solid',
  withArrow = false,
  className = '',
}: LinkButtonProps) {
  return (
    <Link to={to} className={`${base} ${styles[variant]} ${className}`}>
      <Inner withArrow={withArrow}>{children}</Inner>
    </Link>
  );
}

interface AnchorButtonProps extends BaseProps {
  href: string;
}
export function AnchorButton({
  href,
  children,
  variant = 'solid',
  withArrow = false,
  className = '',
}: AnchorButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${className}`}
    >
      <Inner withArrow={withArrow}>{children}</Inner>
    </a>
  );
}

interface ActionButtonProps extends BaseProps {
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}
export function ActionButton({
  children,
  variant = 'solid',
  withArrow = false,
  className = '',
  type = 'button',
  onClick,
  disabled,
}: ActionButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles[variant]} ${className} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      <Inner withArrow={withArrow}>{children}</Inner>
    </button>
  );
}
