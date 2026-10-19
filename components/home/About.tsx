
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-background py-24 text-foreground sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/about.jpeg"
              alt="An elegant fine dining restaurant interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Decorative frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-4 -right-4 -z-0 h-2/3 w-2/3 border-b border-r border-primary/60"
          />

          {/* Image label */}
          <div className="absolute bottom-5 left-5 bg-background/90 px-5 py-4 backdrop-blur-md">
            <p className="font-serif text-2xl text-primary">NOIR</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              An art of living
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Our Story
            </p>
          </div>

          <h2 className="font-heading text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            More Than Dining.
            <br />
            <span className="font-serif italic text-primary">
              An Art Form.
            </span>
          </h2>

          <p className="mt-7 text-sm leading-8 text-muted-foreground sm:text-base">
            At NOIR, we believe that extraordinary dining is about more
            than what is on the plate. It is about the atmosphere, the
            details, and the moments that stay with you long after
            the last bite.
          </p>

          <p className="mt-5 text-sm leading-8 text-muted-foreground sm:text-base">
            Inspired by seasonal ingredients and thoughtful craftsmanship,
            our approach brings together refined flavors and warm
            hospitality to create an experience worth returning to.
          </p>

          {/* Highlights */}
          <div className="mt-9 grid grid-cols-2 gap-6 border-y border-border py-7">
            <div>
              <p className="font-serif text-3xl text-primary sm:text-4xl">
                15+
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                Years of Excellence
              </p>
            </div>

            <div>
              <p className="font-serif text-3xl text-primary sm:text-4xl">
                100%
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                Passion on Every Plate
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/about"
              className="group inline-flex min-h-12 items-center gap-3 bg-primary px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Discover Our Story
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/menu"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:text-primary"
            >
              Explore Menu
              <MoveRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

