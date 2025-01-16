"use client"

import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-violet-600/20 to-black z-0" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container px-4 mx-auto relative z-10"
            >
                <div className="max-w-3xl mx-auto text-center">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Ashish Rao
                    </motion.h1>
                    <motion.h2
                        className="text-2xl md:text-3xl mb-8 text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Software Engineer
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl mb-12 text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Here to learn, build, learn and build some more.
                    </motion.p>

                    <motion.div
                        className="flex justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <a
                            href="https://linkedin.com/in/ashish-rao-36b466212"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <LinkedinIcon className="w-6 h-6" />
                        </a>
                        <a
                            href="https://github.com/AshishRaoDS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <GithubIcon className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:ashraods@gmail.com"
                            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <MailIcon className="w-6 h-6" />
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-gray-400"
                >
                    ↓ Scroll to explore
                </motion.div>
            </div>
        </section>
    )
}

