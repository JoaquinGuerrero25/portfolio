"use client";

import { motion } from "framer-motion";

export function HeroDescription() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center text-center text-lg md:text-xl font-medium leading-relaxed"
        >
            <p className="font-sans text-lg md:text-xl font-medium leading-relaxed w-[70%] ">
                Enfocado en aplicaciones escalables y mantenibles.
            </p>
            <p className="font-sans text-lg md:text-xl text-gray-400 font-medium leading-relaxed w-[80%]">
                Diseño y desarrollo aplicaciones web con foco en rendimiento, optimización y soluciones técnicas de alto impacto.
            </p>
        </motion.div>
    );
}