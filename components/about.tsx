"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = [
    "AWS", "Node.js", "Next.js", "Express", "React.js",
    "JavaScript", "Fastify", "Elastic", "REST", "GraphQL",
    "Amplify", "Socket.io", "WebSockets", "PostgreSQL",
    "Vue.js", "MongoDB", "DynamoDB", "Networking",
    "Bloomreach CMS"
]

const languages = [
    { name: "English", level: "Full Professional Proficiency" },
    { name: "Kannada", level: "Full Professional Proficiency" },
    { name: "Hindi", level: "Full Professional Proficiency" },
    { name: "Tulu", level: "Full Professional Proficiency" }
]

const achievements = [
    "Annual Grit Award for 2023",
    "Best performing team award 2024",
    "Leadership Skills",
    "Corporal rank in NCC",
    "Senior branch rep for Civil dept for final year fest",
    "Assistant school pupil leader in 10th std"
]

export function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="about" className="py-20 bg-black/50">
            <div className="container px-4 mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    About Me
                </motion.h2>

                <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-violet-400">Technical Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold mb-6 mt-12 text-violet-400">Languages</h3>
                        <div className="space-y-4">
                            {languages.map((language, index) => (
                                <motion.div
                                    key={language.name}
                                    className="bg-white/5 p-4 rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="font-medium text-white">{language.name}</div>
                                    <div className="text-sm text-gray-400">{language.level}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-violet-400">Education</h3>
                        <div className="space-y-6">
                            <div className="bg-white/5 p-6 rounded-lg">
                                <h4 className="font-bold text-white">Bachelor of Engineering</h4>
                                <div className="text-gray-400">NMAMIT, Nitte</div>
                                <div className="text-sm text-gray-500">06/2015 - 06/2019</div>
                                <div className="mt-2 text-violet-400">CGPA: 8.84</div>
                            </div>

                            <div className="bg-white/5 p-6 rounded-lg">
                                <h4 className="font-bold text-white">Pre-University</h4>
                                <div className="text-gray-400">Canara PU college, Mangaluru</div>
                                <div className="text-sm text-gray-500">04/2013 - 05/2015</div>
                                <div className="mt-2 text-violet-400">Percentage: 91%</div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-6 mt-12 text-violet-400">Achievements</h3>
                        <ul className="space-y-3">
                            {achievements.map((achievement, index) => (
                                <motion.li
                                    key={achievement}
                                    className="flex items-center gap-2 text-gray-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                                    {achievement}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

