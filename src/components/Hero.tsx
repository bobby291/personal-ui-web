import Image from "next/image";

const Hero = () => {
    return ( 
        <div className="mx-auto px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col-reverse md:flex-row items-center md:justify-between gap-12 pb-16 min-h-[600px]">
    {/* Text Content */}
    <div className="w-full md:w-1/2 max-md:mb-8 text-center md:text-left">
        <p className="flex justify-center md:justify-start font-bold items-center gap-1 text-gray-500 text-xs mb-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 0a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 0 1-2 0V4H1a1 1 0 0 1 0-2h1V1a1 1 0 0 1 1-1m0 10a1 1 0 0 1 1 1v1h1a1 1 0 0 1 0 2H4v1a1 1 0 1 1-2 0v-1H1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 1-1m7-10a1 1 0 0 1 .967.744L12.146 5.2 15.5 7.134a1 1 0 0 1 0 1.732l-3.354 1.935-1.18 4.455a1 1 0 0 1-1.933 0L7.854 10.8 4.5 8.866a1 1 0 0 1 0-1.732l3.354-1.935L9.034.744A1 1 0 0 1 10 0" fill="#6B7280" />
            </svg>
            AN AGENCY FOR HIGH GROWTH STARTUPS
        </p>
        <h1 className="font-extrabold text-4xl md:text-6xl text-gray-900 mb-4 leading-tight">
            Welcome to my 
            <br /> Web 
            <span className="inline-block bg-orange-400 text-white font-extrabold px-3 -mb-1 border-b-2 border-indigo-700">
                Portfolio
            </span>
        </h1>
        <p className="text-gray-600 font-bold text-xl mb-6">
         I'm Ogbonna Chigozie Paschal, a passionate Software developer based in Nigeria. Here, you'll get 
         a glimpse of my journey in the world of web development, where creativity 
            <br />
            meets functionality.
        </p>
        <div
            className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 justify-center md:justify-start">
            <a className="bg-blue-600 text-white text-xl font-semibold px-5 py-2.5 rounded shadow hover:bg-blue-700 transition" href="#">
                Lear More
            </a>
        </div>
    </div>

   {/* Right Image */}
    <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden">
    <Image 
     src='/bob2.jpg'
     alt="SideImage"
     fill
     quality={100}
     priority
     className="object-cover"/>
    </div>
</div>
     );
}
 
export default Hero;