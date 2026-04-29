import Image from "next/image";

const Hero = () => {
    return ( 
        <div className="mx-auto px-6 md:px-16 lg:px-24 xl:px-32 
        flex items-center min-h-screen pt-24 md:pt-32">

            <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-12 w-full">
                
                {/* Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="flex justify-center md:justify-start font-bold items-center gap-1 text-gray-500 text-xs mb-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3 0a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 0 1-2 0V4H1a1 1 0 0 1 0-2h1V1a1 1 0 0 1 1-1m0 10a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 1 1-2 0v-1H1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 1-1m7-10a1 1 0 0 1 .967.744L12.146 5.2 15.5 7.134a1 1 0 0 1 0 1.732l-3.354 1.935-1.18 4.455a1 1 0 0 1-1.933 0L7.854 10.8 4.5 8.866a1 1 0 0 1 0-1.732l3.354-1.935L9.034.744A1 1 0 0 1 10 0" fill="#6B7280" />
                        </svg>
                        AN AGENCY FOR HIGH GROWTH STARTUPS
                    </p>

                    <h1 className="font-extrabold text-3xl md:text-6xl mt-2 text-gray-900 mb-4 leading-tight">
                        Hey, I'm a 
                        <br /> 
                        <span className="inline-block bg-purple-700 text-white px-3 py-1 border-b-2 border-indigo-700">
                            Developer & AI Expert
                        </span>
                    </h1>

                    <p className="text-black font-mono text-md mb-6">
                        Passionate Software Engineer specializing in full-stack web and mobile development, 
                        AI automation, and cloud-based enterprise solutions. Experienced in building scalable 
                        applications with React, Next.js, Node.js, and Python. Driven to create impactful tech 
                        products that empower businesses, industries, and financial systems across Africa.
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 justify-center md:justify-start">
                        <a 
                            className="bg-purple-600 text-white text-xl font-semibold px-5 py-2.5 rounded shadow hover:bg-blue-700 transition" 
                            href="#"
                        >
                            Hire me
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden">
                    <Image 
                        src='/bob2.jpg'
                        alt="SideImage"
                        fill
                        quality={100}
                        priority
                        className="object-cover"
                    />
                </div>

            </div>
        </div>
     );
}
 
export default Hero;