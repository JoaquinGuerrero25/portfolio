"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { ExperienceItem } from "./ExperienceItem";

const sectionViewport = { once: true, amount: 0.2 } as const;

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

const riseItem = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" as const },
    },
};

export function Experience() {
    return (
        <motion.section
            className="w-full max-w-6xl pb-[70px]"
            initial="hidden"
            whileInView="show"
            viewport={sectionViewport}
            variants={container}
        >
            <motion.div
                className="mb-4 flex w-full flex-col gap-2"
                variants={riseItem}
            >
                <h2 className="font-sans text-4xl font-bold">Experiencia profesional</h2>
                <p className="text-gray-400">
                    Experiencia desarrollando aplicaciones web reales con foco en rendimiento,
                    escalabilidad y buenas prácticas de arquitectura.
                </p>
            </motion.div>

            {experience.map((exp, index) => (
                <motion.div key={`${exp.role}-${exp.company}`} variants={riseItem}>
                    <ExperienceItem
                        experience={exp}
                        highlightPeriod={index === 0}
                    />
                </motion.div>
            ))}
        </motion.section>
    );
}
