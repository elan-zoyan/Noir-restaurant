
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Menu,
  UtensilsCrossed,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme/ThemeToggle";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navLinks } from "../data/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 text-foreground backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="NOIR home"
          className="flex items-center gap-2 text-2xl font-semibold tracking-[0.2em]"
        >
          <UtensilsCrossed className="size-5 text-primary" />
          NOIR<span className="-ml-2 text-primary">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <Button
            className="h-11 rounded-none bg-primary px-5 text-xs font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/#menu">
              Explore Menu
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger
              aria-label="Open navigation menu"
              className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-transparent text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85%] border-border bg-background text-foreground sm:max-w-sm"
            >
              {/* Mobile menu header */}
              <SheetHeader className="border-b border-border pb-6 text-left">
                <SheetTitle className="flex items-center gap-2 text-xl tracking-[0.2em]">
                  <UtensilsCrossed className="size-5 text-primary" />
                  NOIR<span className="-ml-2 text-primary">.</span>
                </SheetTitle>

                <SheetDescription className="text-muted-foreground">
                  An experience beyond dining.
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-2 pt-6">
                {/* Appearance settings */}
                <div className="mb-3 flex items-center justify-between rounded-md border border-border p-4">
                  <div>
                    <p className="text-sm font-medium">
                      Appearance
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Light or dark mode
                    </p>
                  </div>

                  <ThemeToggle />
                </div>

                {/* Mobile navigation links */}
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between rounded-md px-4 py-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-xs text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {link.label}
                    </span>

                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                ))}

                {/* Mobile CTA */}
                <Button
        
                  className="mt-4 h-12 w-full rounded-none bg-primary font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/#menu">
                    Explore Menu
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>

              {/* Footer */}
              <div className="absolute bottom-8 left-6 text-xs tracking-[0.2em] text-muted-foreground">
                FINE DINING · EST. 2026
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

