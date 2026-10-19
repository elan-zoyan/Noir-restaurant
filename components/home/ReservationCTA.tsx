
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ReservationCTA() {
  return (
    <section className="px-5 py-20 sm:px-8 md:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#171512] px-6 py-16 text-center sm:px-12 md:py-24">
        {/* Decorative accents */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-[#c6a66b]/10" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full border border-[#c6a66b]/10" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#c6a66b]">
            Your Table Awaits
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#f5f0e8] sm:text-5xl md:text-6xl">
            An Evening
            <br />
            Worth Remembering
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#b8b0a3] sm:text-base">
            Discover exceptional flavors, thoughtful hospitality, and
            unforgettable moments at NOIR.
          </p>

          <Link
            href="/reservation"
            className="group mt-9 inline-flex items-center gap-3 border border-[#c6a66b] px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#e4c991] transition-all duration-300 hover:bg-[#c6a66b] hover:text-[#171512]"
          >
            Reserve a Table
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <p className="mt-6 text-xs tracking-wide text-[#82796c]">
            An exceptional dining experience awaits.
          </p>
        </div>
      </div>
    </section>
  );
}

