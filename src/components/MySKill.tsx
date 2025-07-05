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
        icon: <Monitor className="w-8 h-8 text-green-600" />,
        title: "SoftWare Development",
        description: 'Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users using my FrontEnd skills and Little bit of Backend with NodeJS(optional).',
    },
    {
        icon: <Smartphone className="w-8 h-8 text-green-600" />,
        title: "Mobile App Development",
        description: 'I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle few stage of the development process(still growing).',
    },
    {
        icon: <Server className="w-8 h-8 text-green-600" />,
        title: "Technology Stack",
        description: 'I am well-versed in the industries most popular frontend technologies, including HTML5, CSS3, JavaScript/TypeScript and frameworks like React, Next.JS, Node.JS(optional), Python and React Native.',
    },
    {
        icon: <Hash className="w-8 h-8 text-green-600" />,
        title: "Web Optimization",
        description: 'Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.',
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-green-600" />,
        title: "Testing and Quality Assurance",
        description: 'I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.',
    },
    {
        icon: <Palette className="w-8 h-8 text-green-600" />,
        title: "User-Centric Design",
        description: 'My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.',
    },
]



const MySKill = () => {
    return ( 
        <section className="bg-white py-16 px-4 md:px-12">
            <div className="max-w-7xl  mx-auto text-center">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                    My Skills
                </h3>
                <h2 className="text-3xl font-bold mt-2 text-gray-800">
                    What I do
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    I am not Just a developer, I am a digital dreamweaver. Crafting immersive online experince is not just a Job but my calling.
                    Discover below how i can help you.
                </p>
                <div className="mt-2 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center text-center px-4">
                            <div className="mb-4 bg-green-100 p-4 rounded-full">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">
                                {skill.title}
                            </h3>
                            <p className="mt-2 text-sm font-semibold text-gray-600">
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