import { Dot } from "./ui/Dot";

export const Experience = () => {
  const experiences = [
    {
      time: "2026 – Present",
      title: "Junior Developer, 3Deez Global Investments Limited, Minna",
      description: "Shipped client websites and web apps, and learned to love automated testing.",
    },
  ] satisfies { time: string; title: string; description: string }[];
  
  return (
    <section id="experience" className="pt-24">
      <h2 className="mb-9 heading-2">Experience</h2>
      <div className="ml-1.5 border-l border-border-secondary">
        {experiences.map((experience) => (
          <article className="relative pl-7.5 pb-9">
            <Dot className="absolute size-2.5 top-2.5 left-0 -translate-x-1/2 ring-5 ring-accent-info/20 bg-accent-info" />
            <time className="text-sm text-foreground-muted">{experience.time}</time>
            <h3 className="mt-1 heading-3">{experience.title}</h3>
            <p className="mt-2 text-lg text-foreground-muted max-w-170">{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}