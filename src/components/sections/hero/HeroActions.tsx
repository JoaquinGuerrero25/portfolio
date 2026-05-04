"use client";

import { motion } from "framer-motion";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export function HeroActions() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
        >
            <a
                href="https://github.com/joaquinguerrero25"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHubIcon className="size-8 text-gray-400" />
            </a>
            <a
                href="www.linkedin.com/in/joaquinguerrero256"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedInIcon className="size-8 text-gray-400" />
            </a>
        </motion.div>
    );
}