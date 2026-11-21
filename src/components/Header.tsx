import { TextAlignEnd } from "lucide-react";
import { Button } from "./ui/Button";

export const Header = () => {
  return (
    <header
      className="
        sticky top-0 flex justify-between items-center h-16 w-full px-6 backdrop-blur-md
        border-b border-border-primary bg-background/80 z-100
      "
    >
      <div className="flex gap-2.5 items-center font-bold font-space-grotesk text-lg">
        <div
          className="
            grid place-items-center size-7.5 text-xs rounded-lg
            border text-accent-info border-border-secondary bg-surface-secondary
          "
        >
          JR
        </div>
        Ghali Musa
      </div>
      <div className="hidden sm:flex flex-cols gap-6.5 items-center">
        <a href="#stack" className="transition-colors duration-200 text-foreground-muted hover:text-foreground-primary">
          Stack
        </a>
        <a href="#work" className="transition-colors duration-200 text-foreground-muted hover:text-foreground-primary">
          Work
        </a>
        <a href="#experience" className="transition-colors duration-200 text-foreground-muted hover:text-foreground-primary">
          Experience
        </a>
        <Button asChild className="h-9 rounded-full">
          <a href="#contact">
            Contact me
          </a>
        </Button>
      </div>
      <Button
        variant="ghost"
        btnType="icon"
        className="sm:hidden"
      >
        <TextAlignEnd />
      </Button>
    </header>
  );
};