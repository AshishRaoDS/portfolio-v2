"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const experiences = [
    {
        title: "Software Engineer",
        company: "Carparts.com",
        period: "06/2023 - Present",
        location: "Bangalore",
        achievements: [
            "Worked on Elastic Search to make the search, auto-suggest and browse functionalities better",
            "Built a new service for search migration to consume Constructor.io",
            "Setup new APIs using Fastify for the search migration",
            "Worked on Micro-frontends setup using Next.js",
            "Contributed in setting up the recommendation feature"
        ]
    },
    {
        title: "Software Engineer",
        company: "Upskillist",
        period: "10/2021 - 06/2023",
        location: "Bangalore",
        achievements: [
            "Technologies: React, Gatsby, REST, Node, Amplify, TypeScript, GraphQL",
            "Integrating Amplify signup and cognito user creation",
            "UI for various features including signup, payment, browse view",
            "Payment integration implementation",
            "Writing lambda functions and creating DynamoDB models"
        ]
    }
]

export function Experience() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="experience" className="py-20 bg-black">
            <div className="container px-4 mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    Experience
                </motion.h2>

                <div ref={ref} className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="relative pl-8 pb-12 border-l border-gray-800"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-violet-600" />
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                                <div className="text-gray-400 mb-2">{exp.company}</div>
                                <div className="text-gray-500 text-sm">{exp.period} • {exp.location}</div>
                            </div>
                            <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="text-gray-400">
                                        • {achievement}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

