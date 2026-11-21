import { cn } from "@/lib/utils";

interface DotProps extends Omit<React.ComponentPropsWithoutRef<"span">, "children"> {};

export const Dot = ({ className, ...props }: DotProps) => (
  <span
    {...props}
    className={cn("inline-block rounded-full size-4 bg-current", className)}
  />
);