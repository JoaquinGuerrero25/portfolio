"use client";

import { motion } from "framer-motion";
import { CodeXml } from "@/components/icons/CodeXml";

export function HeroBadge() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono flex items-center gap-2 rounded-full border border-primary/50 bg-primary/17 px-4 py-1 text-sm text-primary"
        >
            <CodeXml className="fill-primary h-6 w-6" />
            FULL STACK DEVELOPER
        </motion.div>
    );
}