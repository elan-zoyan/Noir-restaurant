
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Starters", "Main Course", "Desserts"];

const menuItems = [
  {
    id: 1,
    name: "Burrata E Pomodoro",
    category: "Starters",
    description:
      "Creamy burrata, heirloom tomatoes, fresh basil, and aged balsamic.",
    price: 18,
    image: "/BurrataEPomodoro.jpeg",
    tag: "Chef's Pick",
  },
  {
    id: 2,
    name: "Wagyu Beef Tenderloin",
    category: "Main Course",
    description:
      "Premium wagyu beef, silky potato purée, seasonal vegetables, and red wine jus.",
    price: 68,
    image: "/WagyuBeefTenderloin.jpeg",
    tag: "Signature",
  },
  {
    id: 3,
    name: "Pan-Seared Sea Bass",
    category: "Main Course",
    description:
      "Delicate sea bass, lemon beurre blanc, asparagus, and herb oil.",
    price: 42,
    image: "/Pan_Seared.jpeg",
    tag: "",
  },
  {
    id: 4,
    name: "Dark Chocolate Fondant",
    category: "Desserts",
    description:
      "Warm chocolate fondant, vanilla bean ice cream, and seasonal berries.",
    price: 16,
    image: "/darkChocolate.jpeg",
    tag: "Popular",
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-background py-24 text-foreground sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              A Taste of Excellence
            </p>
            <span className="h-px w-10 bg-primary" />
          </div>

          <h2 className="font-heading text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Our Signature{" "}
            <span className="font-serif italic text-primary">Menu</span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
            Thoughtfully sourced ingredients, exceptional craftsmanship, and
            flavors designed to make every moment unforgettable.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`border px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-transparent text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Menu grid */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group flex h-full flex-col overflow-hidden border border-border/70 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
            >
              {/* Food image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {item.tag && (
                  <span className="absolute left-4 top-4 border border-white/30 bg-black/55 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                    {item.tag}
                  </span>
                )}

                <span className="absolute bottom-4 right-4 bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">
                  ${item.price}
                </span>
              </div>

              {/* Food details */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
                  {item.category}
                </p>

                <h3 className="mt-3 font-heading text-xl font-medium leading-snug">
                  {item.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">
                    Crafted with care
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex size-9 items-center justify-center border border-border transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Plus className="size-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View full menu */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/menu"
            className="group inline-flex min-h-12 items-center gap-3 border border-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Explore Full Menu
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

