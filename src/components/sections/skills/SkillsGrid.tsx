import { Skill } from "@/types/skills";
import { SkillCard } from "@/components/sections/skills/SkillCard";

export function SkillsGrid({ skills }: { skills: Skill[] }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-8">
            {skills.map((skill) => (
                <SkillCard key={skill.title} skill={skill} />
            ))}
        </div>
    );
}