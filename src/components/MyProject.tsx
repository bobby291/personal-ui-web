'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
    image: string;
    title: string;
    description: string;
    liveUrl: string;
    githubUrl?: string;
}

const projects: Project[] = [
    {
        image: '/zylus-web.jpg',
        title: "Zylus Website",
        description: "Enterprise platform built with Next.js, TypeScript & Tailwind. Optimized for performance and scalability.",
        liveUrl: 'https://zylusgroup.com',
        githubUrl: '#'
    },
    {
        image: '/lighten-web.jpg',
        title: "Sydney Wedding Photographer",
        description: "High-performance gallery website with smooth animations and optimized loading experience.",
        liveUrl: 'https://inlighten.com.au',
        githubUrl: '#'
    },
    {
        image: '/tricia-web.jpg',
        title: "Tricia Portfolio",
        description: "Content-driven portfolio for a writer with blog integration and performance optimization.",
        liveUrl: 'https://triciaklapheke.com',
        githubUrl: '#'
    },
    {
        image: '/zangi-app.jpg',
        title: "Zangi Landing Page",
        description: "User-friendly landing page for a mobile communication platform.",
        liveUrl: 'https://zangi.com',
        githubUrl: '#'
    },
    {
        image: '/swift.png',
        title: "Swift-Via Logistics Website",
        description: "Fullstack logistics platform built to solve delivery problems in Africa.",
        liveUrl: 'https://zangi.com',
        githubUrl: '#'
    },
    {
        image: '/eco-ai.png',
        title: "Echo AI Chat System",
        description: "AI chatbot build with clean UI and API key to automate and to assist in delievry work for VA.",
        liveUrl: 'https://echo-ai-companion-bice.vercel.app/',
        githubUrl: '#'
    },
];

const MyProject = () => {
    return ( 
        <section className="bg-gray-50 py-20 px-6 md:px-12" id="projects">
            <div className="max-w-7xl mx-auto text-center">
                
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-gray-900"
                >
                    My Projects
                </motion.h2>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    I build scalable, high-performance products that solve real-world problems.
                </p>

                {/* GRID */}
                <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                        >

                            {/* IMAGE */}
                            <div className="relative w-full h-56 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6">
                                    
                                    {/* Live */}
                                    <a 
                                        href={project.liveUrl}
                                        target="_blank"
                                        className="text-white text-2xl hover:scale-110 transition"
                                    >
                                        <FiExternalLink />
                                    </a>

                                    {/* GitHub */}
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-white text-2xl hover:scale-110 transition"
                                    >
                                        <FiGithub />
                                    </a>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-5 text-left">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-600 mt-2">
                                    {project.description}
                                </p>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default MyProject;