
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-background text-foreground"
    >
      {/* Full-area background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/restaurant_hero.jpeg"
          alt="Luxury fine dining experience"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/50 to-black/15" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-12 bg-primary" />
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary sm:text-sm">
              The Art of Fine Dining
            </p>
          </div>

          <h1 className="font-heading text-5xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            An Extraordinary
            <br />
            <span className="font-serif italic text-primary">
              Taste of Life.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            Where exceptional ingredients meet inspired craftsmanship.
            Discover a dining experience designed to awaken your senses
            and turn every moment into a memory.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#menu"
              className="group inline-flex min-h-12 items-center gap-3 bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore Our Menu
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#about"
              className="inline-flex min-h-12 items-center border border-white/40 px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-primary hover:text-primary"
            >
              Discover Our Story
            </Link>
          </div>

          {/* Bottom detail */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/20 pt-6 sm:mt-20">
            <div>
              <p className="font-serif text-2xl text-primary">15+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/65">
                Years of Excellence
              </p>
            </div>

            <div className="h-10 w-px bg-white/25" />

            <div>
              <p className="font-serif text-2xl text-white">Exceptional</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/65">
                In Every Detail
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        aria-label="Scroll to discover more"
        className="absolute bottom-6 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-primary sm:flex md:bottom-10 md:right-10"
      >
        Scroll to discover
        <ChevronDown className="size-4 animate-bounce" />
      </Link>
    </section>
  );
}

