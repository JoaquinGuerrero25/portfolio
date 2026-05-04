"use client";

import { useState } from "react";
import { navLinks } from "@/data/nav";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Link from "next/link";

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/60 border-b border-white/10">
            <Container>
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold">
                        JG
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-gray-300 hover:text-white transition"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex flex-col gap-1"
                    >
                        <span className="w-5 h-[2px] bg-white" />
                        <span className="w-5 h-[2px] bg-white" />
                        <span className="w-5 h-[2px] bg-white" />
                    </button>
                </div>
            </Container>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-black/95 border-b border-white/10"
                    >
                        <Container>
                            <div className="flex flex-col py-4 gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="text-gray-300 hover:text-white transition"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}