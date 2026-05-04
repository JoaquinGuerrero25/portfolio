"use client";

import { motion } from "framer-motion";

export function HeroTitle() {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center font-sans text-5xl font-black leading-tight md:text-8xl"
        >
            CÓDIGO QUE ESCALA <br />
            <span className="bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text">
                Y RESUELVE <br />
                PROBLEMAS REALES.
            </span>
        </motion.h1>
    );
}