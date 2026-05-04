import { cn } from "@/lib/utils";
import { Experience } from "@/types/experience";

export function ExperienceItem({
    experience,
    highlightPeriod,
}: {
    experience: Experience;
    highlightPeriod?: boolean;
}) {
    return (
        <div className="group rounded-lg py-1 transition-colors">
            <div className="flex items-center gap-4">
                <div
                    className={cn(
                        "h-3 w-3 shrink-0 rounded-full transition-colors duration-200",
                        highlightPeriod ? "bg-primary" : "bg-muted-foreground",
                        "group-hover:bg-primary",
                    )}
                />
                <p
                    className={cn(
                        "font-mono text-xs font-black tracking-wider transition-colors duration-200",
                        highlightPeriod ? "text-primary" : "text-muted-foreground",
                        "group-hover:text-primary",
                    )}
                >
                    {experience.period}
                </p>
            </div>
            <div className="flex items-stretch gap-4">
                <div className="w-3 self-stretch flex items-center justify-center">
                    <div className="h-full w-[2px] rounded-full bg-gray-600" />
                </div>
                <div className="font-sans py-2 pb-6 flex flex-col gap-2">
                    <h3 className="text-xl md:text-2xl font-semibold">
                        {experience.role} — {" "}
                        <span className="text-blue-400 font-mono">{experience.company}</span>
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        {experience.description}
                    </p>
                    <ul className="space-y-4 pt-1 pb-3">
                        {experience.achievements.map((item, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-2 text-sm leading-relaxed text-gray-300"
                            >
                                <span
                                    aria-hidden
                                    className={cn(
                                        "mt-[2px] inline-block shrink-0 select-none font-mono text-[0.65rem] leading-none",
                                        highlightPeriod
                                            ? "text-primary"
                                            : "text-muted-foreground",
                                    )}
                                >
                                    ▶
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                        {experience.tech.map((t, i) => (
                            <span
                                key={i}
                                className="rounded-md border border-gray-600 bg-gray-900/50 px-2 py-1 font-mono text-xs text-gray-300 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/15 hover:text-primary"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}