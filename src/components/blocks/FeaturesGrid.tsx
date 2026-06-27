'use client';
import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/atoms/Card';

interface Feature {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  heading?: string;
  features: Feature[];
}

export function FeaturesGrid({ heading, features }: FeaturesGridProps) {
  return (
    <section className="py-[var(--spacing-4xl)] px-[var(--container-padding-inline)] bg-[var(--color-neutral-white)]">
      <div className="mx-auto max-w-[var(--container-max-width)]">
        {heading && (
          <h2 className="text-[var(--typography-scale-h2)] font-[var(--typography-fontWeight-bold)] text-[var(--color-neutral-900)] mb-[var(--spacing-2xl)] text-center">
            {heading}
          </h2>
        )}
        <div className="grid gap-[var(--spacing-2xl)] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                {feature.icon && <div className="mb-[var(--spacing-sm)]">{feature.icon}</div>}
                <CardTitle className="text-[var(--typography-scale-h4)]">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-[var(--typography-scale-base)]">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
