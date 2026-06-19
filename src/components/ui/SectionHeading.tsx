import { Reveal } from './Reveal';
import { TextReveal } from './TextReveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={`flex max-w-prose flex-col gap-5 ${alignment} ${className}`}>
      <Reveal className="flex items-center gap-3">
        <span className="h-px w-8 bg-gold" aria-hidden="true" />
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <TextReveal
        as="h2"
        text={title}
        className="text-display-md font-medium text-ink"
      />
      {lead && (
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
