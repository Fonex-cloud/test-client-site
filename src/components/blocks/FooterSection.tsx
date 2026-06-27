'use client';
import * as React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionProps {
  logo?: React.ReactNode;
  copyrightText: string;
  links?: FooterLink[];
}

export function FooterSection({ logo, copyrightText, links = [] }: FooterSectionProps) {
  return (
    <footer className="bg-[var(--color-neutral-900)] text-[var(--color-neutral-white)] py-[var(--spacing-2xl)] px-[var(--container-padding-inline)]">
      <div className="mx-auto max-w-[var(--container-max-width)]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-[var(--spacing-lg)]">
          {logo && <div>{logo}</div>}
          {links.length > 0 && (
            <nav className="flex gap-[var(--spacing-md)]">
              {links.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href}
                  className="text-[var(--typography-scale-base)] hover:text-[var(--color-primary-400)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
          <p className="text-[var(--typography-scale-base)] text-[var(--color-neutral-400)]">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
}
