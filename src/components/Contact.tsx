import { Button } from "./ui/Button";

const EMAIL = "ghalimusa53@gmail.com";
const LINKS = [
  {
    url: "https://github.com/JeeRex",
    name: "GitHub",
  },
  {
    url: "https://www.linkedin.com/in/ghali-musa-24a201350",
    name: "LinkedIn"
  },
  {
    url: "#",
    name: "Résumé"
  }
] as const;

export const Contact = () => (
  <section id="contact" className="pt-16">
    <div
      className="
        py-[clamp(36px,7vw,72px)] px-6 text-center rounded-3xl
        border border-border-secondary bg-surface-glow
      "
    >
      <h2 className="mx-auto heading-2 text-[clamp(30px,6vw,54px)]">Have a project in mind?</h2>
      <p className="mx-auto mt-3.5 max-w-lg text-foreground-muted">
        I'm open to full-time roles and freelance work. Tell me what you're building and I'll reply within a day.
      </p>
      <Button asChild size="lg" className="mx-auto mt-6.5 w-fit transition-all hover:-translate-y-1">
        <a href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </Button>
      <div className="mt-6 flex gap-3 justify-center">
        {LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent-info hover:underline"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </section>
);