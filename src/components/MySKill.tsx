'use client';

import { FC, JSX } from "react";
import { Monitor,  Smartphone, Server, Hash, Palette, CheckCircle, Icon } from "lucide-react";
import { title } from "process";

interface Skill {
    icon: JSX.Element;
    title: string;
    description: string;
}

const skills: Skill[] = [

    {
        icon: <Monitor className="w-8 h-8 text-purple-600" />,
        title: "Software Development",
        description: 'Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users using my Frontend/Backend skils.',
    },
    {
        icon: <Smartphone className="w-8 h-8 text-purple-600" />,
        title: "Mobile App Development",
        description: 'I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle few stage of the development process.',
    },
    {
        icon: <Server className="w-8 h-8 text-purple-600" />,
        title: "Technology Stack",
        description: 'I am well-versed in the industries most popular fullstack technologies, including HTML5, CSS3, JavaScript/TypeScript, Python with frameworks such as; React/Next.JS/Node.JS/Django/React Native and other AI tools and tech stack.',
    },
   
]



const MySKill = () => {
    return ( 
        <section id="about" className="bg-white py-16 px-4 md:px-12">
            <div className="max-w-7xl  mx-auto text-center">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                    My Skills
                </h3>
                <h2 className="text-md font-mono mt-2 text-gray-800">
                    What I do as Developer/AI Expert
                </h2>
                <div className="mt-2 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center text-center px-4">
                            <div className="mb-4 bg-green-100 p-4 rounded-full">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {skill.title}
                            </h3>
                            <p className="mt-2 text-sm font-mono text-gray-600">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

        </section>
     );
}
 
export default MySKill;