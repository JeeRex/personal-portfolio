import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react"

const badgeVariants = cva(
  [
    "flex",
    "justify-center",
    "items-center",
    "border",
    "border-transparent",
    "w-fit",
  ],
  {
    variants: {
      variant: {
        outline: ["text-foreground-muted", "bg-surface-primary", "border-border-secondary"]
      },
      size: {
        md: ["py-1.5", "px-3.5", "gap-2", "rounded-md"]
      }
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  },
);

interface BadgeProps extends
  VariantProps<typeof badgeVariants>,
  React.ComponentPropsWithoutRef<"span"> {};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span
      ref={ref}
      {...props}
      className={cn(badgeVariants({ className, variant }))}
    />
  )
);