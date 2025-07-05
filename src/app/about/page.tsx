import Image from "next/image";

const AboutPage = () => {
    return ( 
        <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="w-full md:w-1/2">
                    <span className="text-blue-500 font-bold text-2xl"
                    >
                    ABOUT ME  
                    </span>
                    <h2 className="text-1xl font-bold ">
                        Software Developer | Tech Specialist | Innovator                    
                    </h2>
                    <p className="font-semibold text-gray-400">
                        My Name is Ogbonna Chigozie Paschal known as Bob Paschal, I am a Software Developer and a Tech Specialist
                        my journey in Tech has been a story of struggling and trying but in all I put my best in everything and being
                        very passionate about it. I start Tech during my Senior Secondary School II, I was formerly a graphics designer
                        in my JSS III, but dive into tech and get hands on experience in SSS III, then I started learning HTML, CSS and 
                        Vanila JavaScript form an online content creator (Dave Gray) in the year 2022, I  later travel to Uyo, Akwa Ibom State
                        which I get expose to many tech hubs in Uyo and Tech Professionals this is how my I get to learn deeply and putting focus
                        in the year 2023. I enrolled in Start Innovation Hub Uyo, in Web Development (FrontEnd) learnt more on HTML, CSS and JavaScript and React
                        after few months I left Uyo, when I got admission in University of Abuja in 2024, I still didn't gave up, I push to learn more
                        there I dive into Learning Software Development in Full Stack in Mozila Developers Network MDN., there I get a brief idea of 
                        how to write server function code using JavaScript backend framework NodeJs/ExpressJS. same year i join the Freecodecamp team 
                        online and in site and Youtube to learn NextJS as Fullstack FrontEnd FrameWorks and Typescript. Till then am still coding
                        and building cool stiffs that slove problems, i have work as a Freelancer and Internship in Lisk Abuja and Participated in
                        Hackacthon (NextJS Hackacthons and Base Buildathons).
                    </p>
                    
                </div>

                {/* Right Side Content */}
            <div 
                className='w-full md:w-1/2 relative'
            >
                <div className='p-4'
                >
                    <Image
                        src="/bob2.jpg"
                        alt="About Me Pic"
                        width={300}
                        height={300}
                        className='w-full h-auto rounded-lg'
                    />
                </div>
            </div>

            </div>

        </section>
     );
}
 
export default AboutPage;