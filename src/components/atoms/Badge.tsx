import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[var(--border-radius-full)] px-[var(--spacing-xs)] py-[var(--spacing-2xs)] text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-neutral-100)] text-[var(--color-neutral-900)]",
        primary: "bg-[var(--color-primary-100)] text-[var(--color-primary-700)]",
        success: "bg-[var(--color-feedback-success)] text-[var(--color-neutral-white)]",
        danger: "bg-[var(--color-feedback-danger)] text-[var(--color-neutral-white)]",
        warning: "bg-[var(--color-feedback-warning)] text-[var(--color-neutral-900)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
