import { cn } from "@/lib/utils";

type TileProps = React.ComponentPropsWithoutRef<"div">;

export const Tile = ({ className, ...props }: TileProps) => (
  <div
    {...props}
    className={cn(
      "flex justify-center items-center shrink-0",
      "size-20 rounded-2xl border border-border-primary bg-surface-primary",
      className
    )}
  />
);