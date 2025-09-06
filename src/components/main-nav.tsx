import Link from "next/link";
import { cn } from "@/lib/utils";

export function MainNav() {
  return (
    <nav
      className={cn(
        "flex items-center justify-center p-4 md:px-6 z-50 sticky top-0 backdrop-blur-md bg-transparent"
      )}
    >
      <ul className="flex flex-row items-center gap-x-4 md:gap-x-8 text-sm font-medium">
        <li>
          <Link
            href="/"
            className="text-white/60 hover:text-white transition-colors"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-white/60 hover:text-white transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/Education"
            className="text-white/60 hover:text-white transition-colors"
          >
            Education
          </Link>
        </li>
        <li>
          <Link
            href="/Experience"
            className="text-white/60 hover:text-white transition-colors"
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-white/60 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}