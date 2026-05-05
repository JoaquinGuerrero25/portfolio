import { Skill } from "@/types/skills";
import { Card, CardContent, CardFooter, CardHeader, /* CardTitle */ } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillCard({ skill }: { skill: Skill }) {
    return (
        <Card className="rounded-[24px] border border-border/70 bg-[#18181b] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
                <Badge
                    style={{
                        backgroundColor: skill.backgroundTitle,
                        color: skill.colorTitle,
                        boxShadow: `0 4px 4px ${skill.backgroundTitle}33`,
                    }}
                    className="font-sans text-sm font-semibold rounded-[12px] p-3"
                >
                    {skill.title}
                </Badge>
            </CardHeader>
            <CardContent className="h-[80px]">
                <h3 className="font-sans text-xl font-bold">
                    {skill.main}
                </h3>
                <p className="text-sm text-gray-500">
                    {skill.description}
                </p>
            </CardContent>
            <CardFooter className="bg-[#18181b]">
                <div className="flex flex-wrap gap-2">
                    {skill.tech.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-md border border-gray-600 bg-gray-900/50 px-2 py-1 font-mono text-xs text-gray-300 hover:border-primary/60 hover:bg-primary/15 hover:text-primary"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
}