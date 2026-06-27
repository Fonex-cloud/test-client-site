'use client';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/atoms/Card';
import { Button } from '@/components/atoms/Button';

interface PricingCardProps {
  planName: string;
  price: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}

export function PricingCard({ planName, price, features, buttonText, highlighted = false }: PricingCardProps) {
  return (
    <Card className={highlighted ? 'border-2 border-[var(--color-primary-600)]' : ''}>
      <CardHeader className="text-center">
        <CardTitle className="text-[var(--typography-scale-h3)]">{planName}</CardTitle>
        <div className="text-[var(--typography-scale-display)] font-[var(--typography-fontWeight-bold)] text-[var(--color-neutral-900)] mt-[var(--spacing-sm)]">
          {price}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-[var(--spacing-xs)]">
          {features.map((feature, index) => (
            <li key={index} className="text-[var(--typography-scale-base)] text-[var(--color-neutral-700)] flex items-start gap-[var(--spacing-xs)]">
              <span className="text-[var(--color-primary-600)]">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant={highlighted ? 'primary' : 'outline'} className="w-full">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
