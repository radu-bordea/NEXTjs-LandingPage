"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/theme/theme-toggle";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Web Services" },
  { href: "#technologies", label: "Technologies" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* LEFT: toggle + logo + name */}
        <div className="flex items-center gap-3">
          {/* Logo
          <Image
            src="/assets/designer.png"
            alt="Nordisk Damp & Gass logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover shadow-lg"
          /> */}

          <Link
            href="#home"
            className="text-lg font-semibold tracking-tight leading-none"
            onClick={() => setOpen(false)}
          >
            Romstream{" "}
            <span className="font-normal text-muted-foreground">Company</span>
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground focus:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            className="inline-flex items-center justify-center rounded-md border px-2.5 py-2 text-sm"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl flex-col px-4 py-2 space-y-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-xl font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
