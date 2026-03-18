import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="max-w-container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} Juan. Built with Next.js &amp; Three.js
        </p>
        <div className="flex items-center gap-6">
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
