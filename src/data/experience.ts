import { Experience } from "@/types/experience";

export const experience: Experience[] = [
    {
        role: 'Full Stack Developer',
        company: "Líder Gestión - Wynges",
        period: "Oct 2024 — ACTUALIDAD",
        description: "Desarrollo de sistema de gestión para retail con foco en rendimiento, escalabilidad y continuidad operativa.",
        achievements: [
            "Implementé un sistema POS que opera en entornos con baja conectividad",
            "Diseñé una arquitectura de acceso a datos con estrategias dinámicas",
            "Desarrollé sincronización en background para garantizar consistencia de datos",
            "Mejoré la resiliencia del sistema ante fallas de red",
        ],
        tech: ["Vue 3", "TypeScript", "IndexedDB", "Service Workers"],
    },
    {
        role: "Full Stack Developer",
        company: "Freelance",
        period: "Feb 2024 — May 2024",
        description: "Desarrollo de plataforma e-learning para gestión y venta de cursos online.",
        achievements: [
            "Implementé sistema de compra y acceso a contenido",
            "Desarrollé aula virtual con reproducción de video",
            "Creé panel de administración para instructores",
            "Diseñé backend para gestión de usuarios y progreso",
        ],
        tech: ["React", "JavaScript", "Node.js", "PostgreSQL"],
    },
];