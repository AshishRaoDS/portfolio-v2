"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'

const projects = [
    {
        title: "Snap Skoot",
        description: "A general chat room built using Next.js for front-end and a Node server using Socket.io",
        period: "04/2023 - Present",
        tech: ["Next.js", "Socket.io", "Node.js"],
        github: "https://github.com/AshishRaoDS/snap-skoot"
    },
    {
        title: "Our Journey",
        description: "A Next.js project to record a journey with authentication and MongoDB integration, deployed on Vercel",
        period: "06/2022 - Present",
        tech: ["Next.js", "Firebase", "MongoDB"],
        github: "https://github.com/AshishRaoDS/our-journey"
    },
    {
        title: "Dayone",
        description: "A job hire and search platform with features like dashboard, job listings, and messaging for companies and candidates",
        period: "03/2022 - 12/2023",
        tech: ["Gatsby", "Node.js", "PostgreSQL"],
        github: "https://github.com/AshishRaoDS/dayone"
    }
]

export function Projects() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="projects" className="py-20 bg-black/50">
            <div className="container px-4 mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    Projects
                </motion.h2>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-2 py-1 rounded-full bg-violet-600/20 text-violet-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <GithubIcon className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

