'use client';
import { Button } from '@/components/atoms/Button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  imageUrl?: string;
}

export function HeroSection({ 
  title, 
  subtitle, 
  primaryButtonText, 
  secondaryButtonText,
  imageUrl 
}: HeroSectionProps) {
  return (
    <section className="bg-[var(--color-neutral-50)] py-[var(--spacing-4xl)] px-[var(--container-padding-inline)]">
      <div className="mx-auto max-w-[var(--container-max-width)]">
        <div className="grid gap-[var(--spacing-2xl)] md:grid-cols-2 items-center">
          <div className="space-y-[var(--spacing-lg)]">
            <h1 className="text-[var(--typography-scale-h1)] font-[var(--typography-fontWeight-bold)] text-[var(--color-neutral-900)]">
              {title}
            </h1>
            <p className="text-[var(--typography-scale-base)] text-[var(--color-neutral-600)]">
              {subtitle}
            </p>
            <div className="flex gap-[var(--spacing-sm)]">
              {primaryButtonText && <Button variant="primary">{primaryButtonText}</Button>}
              {secondaryButtonText && <Button variant="outline">{secondaryButtonText}</Button>}
            </div>
          </div>
          {imageUrl && (
            <div className="aspect-video rounded-[var(--border-radius-lg)] overflow-hidden bg-[var(--color-neutral-200)]">
              <img src={imageUrl} alt="" className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
