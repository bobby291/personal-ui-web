'use client'
import { FC } from "react";
import Image from "next/image";

interface Project {
    image: string;
    title: string;
    description: string;
    liveUrl: string;
}

const project: Project[] = [
    {
        image: '/zylus-web.jpg',
        title: "Zylus Website",
        description: "Website develop to help the enterprise to run their day to day activities and to ehnance throught the internet, Tech stack: NextJS, TypeScript, Tailwindcss for UI development and Vercel for hosting.",
        liveUrl: 'https://zylusgroup.com',
    },
    {
        image: '/lighten-web.jpg',
        title: "Sydney Wedding Photographer",
        description: "A gallery shoting website base in Austrailia, assit in optimizing the website and testing the TypeScrit to ensure smooth running and and fast loading, Tech stack: NextJS, TypeScript, Framer motion.",
        liveUrl: 'https://inlighten.com.au',
    },
    {
        image: '/tricia-web.jpg',
        title: "Tricia Portofolio Web",
        description: "Portofolio Website for a writer and a book publisher, to document all their blog and project as well to optimize its runnin, Tech stack: HTML5, CSS3, JavaScript, API interagation.",
        liveUrl: 'https://triciaklapheke.com',
    },
    {
        image: '/zangi-app.jpg',
        title: "Zangi",
        description: "A Mobile App and Web App texting platform that runs on all devices, assist in writing server function with JavaScript and update their Authetication function JWT",
        liveUrl: 'https://zangi.com',
    },
];

const MyProject = () => {
    return ( 
        <section className="bg-gray-50 py-16 px-4 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800">
                    My Projects
                </h2>
                <p className="mt-4 text-gray-600 font-semibold max-w-2xl mx-auto">
                    Wether you have a mobile app idea or website that needs a facelift, I am here to turn your digitao dreams into reality.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg-grid-cols-4">
                    {project.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
                            <div className="relative w-full h-48">
                                <Image
                                 src={project.image}
                                 alt={project.title}
                                 fill
                                 className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="p-4 text-left">
                                <h3 className="text-lg font-semibold text-gray-800"> 
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1 font-semibold">
                                    {project.description}
                                </p>
                               <a href={project.liveUrl.startsWith('http') ? project .liveUrl : `https://${project.liveUrl}`}
                                 target="_blank"
                                 rel="noopener noreferre"
                                 className="inline-block mt-4 px-4 py-2 bg-gray-900 text-white text-xs font-medium rounded hover:bg-gray-700">
                                    Live Demo
                                 </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default MyProject;