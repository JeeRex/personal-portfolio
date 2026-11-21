import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "radix-ui";

const buttonVariants = cva(
  [
    "flex",
    "justify-center",
    "items-center",
    "border",
    "border-transparent",
    "font-medium",
    "cursor-pointer",
    "transition-colors",
    "duration-200",
  ],
  {
    variants: {
      variant: {
        default: [
          "text-background",
          "bg-foreground-primary",
          "hover:bg-foreground-primary/90"
        ],
        outline: [
          "text-foreground-primary",
          "bg-surface-primary",
          "border-border-secondary",
          "hover:border-border-tertiary"
        ],
        ghost: [
          "text-foreground-muted",
          "hover:text-foreground-primary",
          "hover:bg-foreground-primary/10",
        ]
      },
      size: {
        sm: ["min-h-8", "gap-1", "rounded-sm", "text-sm", "px-2"],
        md: ["min-h-10", "gap-2", "rounded-md", "text-base", "px-4"],
        lg: ["min-h-12", "gap-3", "rounded-xl", "text-lg", "px-6"],
      },
      btnType: {
        "button": "",
        "icon": "p-0 min-h-0 shrink-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
    compoundVariants: [
      { btnType: "icon", size: "sm", className: ["size-7", "[&>svg]:size-5"] },
      { btnType: "icon", size: "md", className: ["size-9", "[&>svg]:size-6"] },
      { btnType: "icon", size: "lg", className: ["size-11", "[&>svg]:size-7"] },
    ],
  },
);

interface ButtonProps extends
  VariantProps<typeof buttonVariants>,
  React.ComponentPropsWithoutRef<"button"> {
    asChild?: boolean;
  }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild=false, className, variant, size, btnType, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button";
    const button = (
      <Comp
        ref={ref}
        {...props}
        className={cn(buttonVariants({ variant, size, btnType, className }))}
      />
    );

    return button;
  }
);