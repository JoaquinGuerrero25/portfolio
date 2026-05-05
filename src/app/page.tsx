import { Hero } from "@/components/sections/hero/Hero";
import { Experience } from "@/components/sections/experience/Experience";
import { Skills } from "@/components/sections/skills/Skills";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black px-4">
            <Hero />
            {/* ACA VAN LOS PROYECTOS. */}
            <Experience />
            <Skills />
        </div>
    );
}
