"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MailIcon, PhoneIcon, LinkedinIcon } from 'lucide-react'

export function Contact() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="contact" className="py-20 bg-black">
            <div className="container px-4 mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    Get in Touch
                </motion.h2>

                <div
                    ref={ref}
                    className="max-w-2xl mx-auto"
                >
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <a
                            href="mailto:ashraods@gmail.com"
                            className="flex items-center gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <MailIcon className="w-6 h-6 text-violet-400" />
                            <div>
                                <div className="text-sm text-gray-400">Email</div>
                                <div className="text-white">ashraods@gmail.com</div>
                            </div>
                        </a>

                        <a
                            href="tel:+919353125324"
                            className="flex items-center gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <PhoneIcon className="w-6 h-6 text-violet-400" />
                            <div>
                                <div className="text-sm text-gray-400">Phone</div>
                                <div className="text-white">+91 935 312 5324</div>
                            </div>
                        </a>

                        <a
                            href="https://linkedin.com/in/ashish-rao-36b466212"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors md:col-span-2"
                        >
                            <LinkedinIcon className="w-6 h-6 text-violet-400" />
                            <div>
                                <div className="text-sm text-gray-400">LinkedIn</div>
                                <div className="text-white">linkedin.com/in/ashish-rao-36b466212</div>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

