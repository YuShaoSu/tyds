// components/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen text-center px-4 bg-gradient-to-br from-gray-100 to-gray-300">
            {/* Animated Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-4"
            >
                <h1 className="text-4xl md:text-6xl font-light tracking-widest">TYDS</h1>
                <h2 className="text-xl md:text-2xl font-light tracking-widest">天羽設計</h2>
                <p className="text-sm md:text-base tracking-widest">- 在問與答之間，用設計聯繫起關係 -</p>

            </motion.div>
        </section>
    );
}
