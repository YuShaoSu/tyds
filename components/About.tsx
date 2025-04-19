"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative flex flex-col items-center justify-center py-20 px-4 bg-white text-center">
            {/* Animated Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-6 max-w-4xl"
            >
                <h2 className="text-3xl md:text-4xl font-light tracking-widest">About Us</h2>
                <p className="text-sm md:text-base leading-relaxed text-gray-600">
                    At TYDS, we specialize in creating stunning architectural and interior designs that blend functionality with aesthetics. Our team of experts is dedicated to transforming spaces into works of art, tailored to your unique vision and needs.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-gray-600">
                    With a passion for innovation and attention to detail, we bring your dream spaces to life, ensuring every project reflects our commitment to excellence and creativity.
                </p>
            </motion.div>
        </section>
    );
}