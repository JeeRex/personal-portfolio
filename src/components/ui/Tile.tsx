import { cn } from "@/lib/utils";

interface TileProps extends React.ComponentPropsWithoutRef<"div"> {};

export const Tile = ({ className, ...props }: TileProps) => (
  <div
    {...props}
    className={cn("size-20 shrink-0 rounded-2xl border border-border-primary bg-surface-primary", className)}
  />
);