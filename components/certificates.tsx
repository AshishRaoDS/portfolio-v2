"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award } from 'lucide-react'

const certificates = [
    {
        title: "AWS - Solution Architect Associate",
        period: "12/2023 - Present",
        description: "Built a strong foundation in AWS cloud services, enabling the design of robust solutions tailored to meet diverse business needs."
    },
    {
        title: "Front End Development Libraries - FreeCodeCamp",
        period: "03/2024",
        description: "Demonstrating proficiency in building dynamic web interfaces using React, Redux, Bootstrap, and other modern libraries."
    },
    {
        title: "Complete NodeJS Developer",
        period: "08/2022 - 11/2022",
        description: "In depth learning of Node.js, MongoDB and GraphQL. This Certification bridged the knowledge gap of back-end development"
    },
    {
        title: "Responsive Web Design - FreeCodeCamp",
        period: "01/2023 - 02/2023",
        description: "Expertise in creating visually appealing and mobile-friendly websites that adapt seamlessly to all devices."
    },
    {
        title: "JavaScript Algorithms and Data Structures - freeCodeCamp",
        period: "05/2022 - 07/2022",
        description: "Developer certification representing approximately 300 hours of coursework"
    },
    {
        title: "CS50x - Harvard",
        period: "05/2022 - 12/2022",
        description: "Introduction to the intellectual enterprises of computer science and the art of programming. This course teaches how to think algorithmically and solve problems efficiently."
    }
]

export function Certificates() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="certificates" className="py-20 bg-black">
            <div className="container px-4 mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    Certificates
                </motion.h2>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                >
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            className="group relative bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute top-4 right-4 text-violet-400">
                                <Award className="w-6 h-6" />
                            </div>

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2 pr-8">{cert.title}</h3>
                                <div className="text-sm text-violet-400">{cert.period}</div>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {cert.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

