import { buildHoneycombGrid, cn } from "@/lib/utils";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { Dot } from "./ui/Dot";
import { Tile } from "./ui/Tile";
import { WordFlipper } from "./WordFlipper";
import { Express, Html5, Mysql } from "@devicons-pack/react/original";
import {
  _React as ReactIcon,
  Css,
  DjangoIcon,
  Javascript,
  Nestjs,
  NodejsIcon,
  Python,
  Postgresql,
  type Icon,
  CPlusplus,
  Rust,
  DockerIcon,
} from "@dev.icons/react";

const TechStack = () => {
  const teckStack = [
    { name: "HTML", Icon: Html5, accent: "#f16529" },
    { name: "CSS", Icon: Css, accent: "#639" },
    { name: "Javascript", Icon: Javascript, accent: "#F7DF1E" },
    { name: "React", Icon: ReactIcon, accent: "#00D8FF" },
    { name: "NodeJS", Icon: NodejsIcon, accent: "#539E43" },
    { name: "ExpressJS", Icon: Express, accent: "#FFF", className: "fill-foreground-primary" },
    { name: "NestJS", Icon: Nestjs, accent: "#E0234E" },
    { name: "Python", Icon: Python, accent: "#FFE052" },
    { name: "Django", Icon: DjangoIcon, accent: "#44B78B" },
    { name: "PostgreSQL", Icon: Postgresql, accent: "#336791" },
    { name: "MySQL", Icon: Mysql, accent: "#00618a" },
    { name: "C++", Icon: CPlusplus, accent: "#649AD2" },
    { name: "Rust", Icon: Rust, accent: "#ca3500", className: "[&_path]:fill-[#ca3500] stroke-6 stroke-neutral-900" },
    { name: "Docker", Icon: DockerIcon, accent: "#2396ED" },
  ] satisfies { name: string; Icon: Icon, accent: string; className?: string }[];

  const honeyComb = buildHoneycombGrid({
    innerGridCols: 4,
    paddingInline: 5,
    items: teckStack,
    offset: -1,
  });

  console.log(honeyComb);

  return (
    <div className="
      relative flex justify-center overflow-x-hidden mt-14 mx-auto
      after:absolute
      after:w-full
      after:h-full
      after:bg-fade-edge
      after:pointer-events-none
    ">
      <div className="relative flex flex-col gap-4.5 left-12">
        {honeyComb.map((row, i) => {
          const isOddRow = (i+1) % 2 !== 0;
          return (
            <div
              key={i}
              className={cn("relative flex gap-4", { "-left-12": isOddRow })}
            >
              {row.map((item, i) => (
                <Tile key={item?.name ?? i} className="size-20 flex-col gap-1.5">
                  {item && (
                    <>
                      <item.Icon
                        className={cn("size-8", item.className)}
                        style={{ filter: `drop-shadow(0 0 5px ${item.accent})` }}
                      />
                      <span
                        className="text-xs font-medium font-space-grotesk"
                        style={{ color: item.accent }}
                      >
                        {item.name}
                      </span>
                    </>
                  )}
                </Tile>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Hero = () => (
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
    <TechStack />
  </section>
);