'use client'
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Our Menu", href: "/menu" },
    { label: "Our Story", href: "/about" },
    { label: "Reservations", href: "/reservation" },
];

export default function Footer() {
    const [year, setYear] = useState<number | null>(null);
    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="border-t border-neutral-800 bg-[#11100e] text-[#f5f0e8]">
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="font-serif text-3xl tracking-[0.2em]"
                        >
                            NOIR
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-7 text-neutral-400">
                            An intimate dining experience where exceptional flavors
                            meet timeless elegance.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-5 text-xs uppercase tracking-[0.25em] text-[#c6a66b]">
                            Explore
                        </h3>

                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-neutral-400 transition-colors hover:text-[#c6a66b]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="mb-5 text-xs uppercase tracking-[0.25em] text-[#c6a66b]">
                            Opening Hours
                        </h3>

                        <p className="text-sm leading-7 text-neutral-400">
                            Monday – Sunday
                            <br />
                            5:00 PM – 11:00 PM
                        </p>

                        <p className="mt-3 text-xs leading-6 text-neutral-500">
                            Hours may vary on special occasions.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-xs uppercase tracking-[0.25em] text-[#c6a66b]">
                            Get in Touch
                        </h3>

                        <p className="text-sm leading-7 text-neutral-400">
                            For reservations and inquiries,
                            <br />
                            please contact our team.
                        </p>

                        <Link
                            href="/reservation"
                            className="group mt-4 inline-flex items-center gap-2 text-sm text-[#c6a66b] transition-colors hover:text-[#e4c991]"
                        >
                            Make a Reservation
                            <ArrowUpRight
                                size={15}
                                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>

                        <div className="mt-5 flex gap-5 text-sm text-neutral-400">
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors hover:text-[#c6a66b]"
                            >
                                Instagram
                            </a>

                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors hover:text-[#c6a66b]"
                            >
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-14 flex flex-col gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                      © {year ?? "2026"} NOIR. All rights reserved.
                    </p>

                    <p className="tracking-wide">
                        Crafted for extraordinary moments.
                    </p>
                </div>
            </div>
        </footer>
    );
}

