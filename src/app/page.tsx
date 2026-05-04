import { Hero } from "@/components/sections/hero/Hero";
import { Experience } from "@/components/sections/experience/Experience";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black px-4">
            <Hero />
            <Experience />
        </div>
    );
}
