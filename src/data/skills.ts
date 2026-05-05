import { Skill } from "@/types/skills";

export const skills: Skill[] = [
    {
        title: "Frontend",
        main: "Vue 3 & React",
        description:
            "Desarrollo de interfaces modernas con foco en rendimiento y experiencia de usuario.",
        tech: ["TypeScript", "Tailwind", "JavaScript"],
        backgroundTitle: "#fff",
        colorTitle: "#000",
    },
    {
        title: "Backend",
        main: "Node.js & .NET",
        description:
            "Desarrollo de APIs y lógica de negocio para aplicaciones web escalables.",
        tech: ["Node.js", "Express", ".NET", "C#", "REST APIs"],
        backgroundTitle: "#9370D8",
        colorTitle: "#fff",
    },
    {
        title: "Data",
        main: "PostgreSQL & IndexedDB",
        description:
            "Gestión de datos tanto en servidor como en cliente.",
        tech: ["PostgreSQL", "IndexedDB"],
        backgroundTitle: "#3CB371",
        colorTitle: "#fff",
    },
    {
        title: "Arquitectura",
        main: "Performance & Escalabilidad",
        description:
            "Diseño de aplicaciones mantenibles con foco en rendimiento.",
        tech: ["Service Workers", "Optimización"],
        backgroundTitle: "#4169E1",
        colorTitle: "#fff",
    },
];