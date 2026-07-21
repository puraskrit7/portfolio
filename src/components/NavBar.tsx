import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import SpiralMark from "./SpiralMark";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm text-ink"
        >
          <SpiralMark size={20} className="text-signal" />
          <span className="tracking-tight">Puraskrit</span>
        </a>

        <span className="hidden font-mono text-[11px] uppercase tracking-[0.25em] text-faint md:block">
          Front-End Systems Engineer
        </span>

        <div className="flex items-center gap-2">
          <a
            href={`${import.meta.env.BASE_URL}Puraskrit_Resume.pdf`}
            download
            className="flex items-center gap-1.5 rounded-full border border-border2 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-signal hover:text-signal sm:px-4"
          >
            <Download size={13} />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <a
            href="#contact"
            className="rounded-full bg-signal px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-bg transition-transform hover:-translate-y-0.5 sm:px-4"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
