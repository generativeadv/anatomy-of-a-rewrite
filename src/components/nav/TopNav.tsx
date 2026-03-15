"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Scorecard" },
  { href: "/methodology", label: "Methodology" },
  { href: "/rewrites", label: "Rewrites" },
  { href: "/about", label: "About" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg font-semibold text-accent tracking-tight"
        >
          Anatomy of a Rewrite
        </Link>
        <div className="flex items-center gap-8">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
