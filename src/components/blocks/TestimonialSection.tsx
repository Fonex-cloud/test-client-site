'use client';
import { Badge } from '@/components/atoms/Badge';

interface TestimonialSectionProps {
  quote: string;
  authorName: string;
  authorRole: string;
  authorImage?: string;
}

export function TestimonialSection({ quote, authorName, authorRole, authorImage }: TestimonialSectionProps) {
  return (
    <section className="py-[var(--spacing-3xl)] px-[var(--container-padding-inline)] bg-[var(--color-primary-100)]">
      <div className="mx-auto max-w-3xl text-center">
        <blockquote className="text-[var(--typography-scale-h3)] italic text-[var(--color-neutral-900)] mb-[var(--spacing-lg)]">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-[var(--spacing-sm)]">
          {authorImage && (
            <img src={authorImage} alt={authorName} className="w-12 h-12 rounded-[var(--border-radius-full)]" />
          )}
          <div>
            <p className="font-[var(--typography-fontWeight-semibold)] text-[var(--color-neutral-900)]">{authorName}</p>
            <Badge variant="primary">{authorRole}</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
