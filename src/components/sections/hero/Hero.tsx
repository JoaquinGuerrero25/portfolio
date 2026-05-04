"use client";

import { HeroBadge } from "@/components/sections/hero/HeroBadge";
import { HeroTitle } from "@/components/sections/hero/HeroTitle";
import { HeroDescription } from "@/components/sections/hero/HeroDescription";
import { HeroActions } from "@/components/sections/hero/HeroActions";

export function Hero() {
    return (
        <section className="w-full max-w-6xl h-screen py-2 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center">
                <HeroBadge />
            </div>
            <HeroTitle />
            <HeroDescription />
            <HeroActions />
        </section>
    );
}