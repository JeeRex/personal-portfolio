import { buildHoneycombGrid, cn } from "@/lib/utils";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Dot } from "./ui/Dot";
import { Tile } from "./ui/Tile";
import { WordFlipper } from "./WordFlipper";

export const Hero = () => {
  buildHoneycombGrid({
    innerGridCols: 5,
    paddingInline: 2,
  });

  return (
    <section className="text-center pt-22" id="stack">
      <Badge className="mx-auto rounded-full">
        <Dot className="size-2 bg-accent-success ring-4 ring-accent-success/20" />
        Available for new projects
      </Badge>
      <h1 className="mx-auto mt-6 max-w-250 heading-1 text-[clamp(40px,7.6vw,78px)]">
        Full-stack developer building <WordFlipper words={["secure", "fast", "reliable", "modern"]} /> software.
      </h1>
      <p className="mx-auto mt-5 max-w-170 text-[clamp(18px,2.2vw,20px)] text-foreground-muted">
        Two years of shipping web products for startups and growing teams. Clean code, solid tests, and tools that make other people faster.
      </p>
      <div className="flex mt-8 gap-2 justify-center items-center">
        <Button size="lg" className="transition-all hover:-translate-y-1">
          View projects
        </Button>
        <Button asChild size="lg" className="transition-all hover:-translate-y-1" variant="outline">
          <a href="#contact">
            Let's talk
          </a>
        </Button>
      </div>
      <div className="
        relative flex justify-center overflow-x-hidden mt-14 mx-auto
        after:absolute
        after:w-full
        after:h-full
        after:bg-fade-edge
      ">
        <div className="flex flex-col gap-4.5">
          {Array.from({ length: 5 }).map((_, i) => {
            const isOddRow = (i+1) % 2 !== 0;
            return (
              <div
                key={i}
                className={cn("relative flex gap-4", { "-left-12": isOddRow })}
              >
                {Array.from({ length: 15 }).map((_, i) => <Tile key={i} className="size-20" />)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};