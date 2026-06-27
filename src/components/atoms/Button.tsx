import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--border-radius-md)] text-[var(--typography-fontWeight-semibold)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[var(--color-primary-600)] text-[var(--color-neutral-white)] hover:bg-[var(--color-primary-700)]",
        secondary: "bg-[var(--color-neutral-100)] text-[var(--color-neutral-900)] hover:bg-[var(--color-neutral-200)]",
        ghost: "hover:bg-[var(--color-neutral-100)] text-[var(--color-neutral-900)]",
        outline: "border border-[var(--color-neutral-300)] bg-transparent hover:bg-[var(--color-neutral-100)] text-[var(--color-neutral-900)]",
      },
      size: {
        sm: "h-9 px-[var(--spacing-sm)] text-sm",
        md: "h-10 px-[var(--spacing-md)] text-base",
        lg: "h-11 px-[var(--spacing-lg)] text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
