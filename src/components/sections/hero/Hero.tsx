"use client";

import { HeroBadge } from "@/components/sections/hero/HeroBadge";
import { HeroTitle } from "@/components/sections/hero/HeroTitle";
import { HeroDescription } from "@/components/sections/hero/HeroDescription";
import { HeroActions } from "@/components/sections/hero/HeroActions";
import { BlurCircleBackground } from "@/components/ui/BlurCircleBackground";

export function Hero() {
    return (
        <section className="relative isolate w-full max-w-6xl h-screen py-2 flex flex-col items-center justify-center gap-4 overflow-hidden">
            <BlurCircleBackground className="translate-y-[-40%]" sizePercent={65} xPercent={50} yPercent={50} visibility={0.1} />
            <div className="flex flex-col items-center justify-center">
                <HeroBadge />
            </div>
            <HeroTitle />
            <HeroDescription />
            <HeroActions />
        </section>
    );
}