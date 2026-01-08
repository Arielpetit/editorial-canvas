import { Link } from "react-router-dom";
import { Twitter, Github, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        {/* Decorative pattern */}
        <div className="mb-8 h-4 w-full dot-pattern opacity-30" />

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="YouTube"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2024{" "}
            <Link to="/" className="text-foreground hover:text-primary">
              My Blog
            </Link>
            . All Rights Reserved. Published with{" "}
            <span className="text-primary">Lovable</span>.
          </p>
        </div>

        {/* Decorative pattern */}
        <div className="mt-8 h-4 w-full dot-pattern opacity-30" />
      </div>
    </footer>
  );
};

export default Footer;
