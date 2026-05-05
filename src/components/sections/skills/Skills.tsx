"use client";

import { skills } from "@/data/skills";
import { SkillsGrid } from "@/components/sections/skills/SkillsGrid";
import { motion } from "framer-motion";

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
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" as const },
    },
};

export function Skills() {
    return (
        <motion.section
            className="w-full max-w-6xl pb-[70px]"
            initial="hidden"
            whileInView="show"
            viewport={sectionViewport}
            variants={container}
        >
            <motion.h2 className="font-sans text-4xl font-bold" variants={riseItem}>
                Tecnologías
            </motion.h2>
            <motion.p className="text-gray-400" variants={riseItem}>
                Tecnologías y herramientas que utilizo para diseñar y desarrollar aplicaciones web modernas, escalables y mantenibles.
            </motion.p>
            <motion.div variants={riseItem}>
                <SkillsGrid skills={skills} />
            </motion.div>
        </motion.section>
    );
}