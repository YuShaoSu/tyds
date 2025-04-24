'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (inView) setHasAnimated(true)
    }, [inView])

    return (
        <section ref={ref} className="py-32 px-6 md:px-20 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed"
                >
                    天羽設計專注於創造簡約、溫潤且具生命力的空間，融合自然材質與當代美學，打造真正屬於您的生活場景。
                </motion.p>
            </div>
        </section>
    )
}
