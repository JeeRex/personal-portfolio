import { cn } from "@/lib/utils";

type DotProps = Omit<React.ComponentPropsWithoutRef<"span">, "children">;

export const Dot = ({ className, ...props }: DotProps) => (
  <span
    {...props}
    className={cn("inline-block rounded-full size-4 bg-current", className)}
  />
);