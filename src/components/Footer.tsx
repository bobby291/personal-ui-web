import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="px-6 md:px-16 font-bold lg:px-24 xl:px-32 pt-8 w-full bg-gray-300 text-gray-900">
    <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
        <div className='flex items-center gap-1 cursor-pointer'>
        <div className='w-4 h-4 bg-blue-800 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
        <div className='w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
            <h3 className='font-bold'>Bob <span className='text-red-700'>Dev</span></h3>
      </div>
            <p className="mt-6 text-sm">
                Tech | Software Developer | Innovator
            </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
            <div>
                <h2 className="font-bold uppercase mb-5 text-1xl text-gray-800">Company</h2>
                <ul className="text-sm space-y-2">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/'>Privacy</Link></li>
                    <li><Link href='/'>Terms</Link></li>
                </ul>
                <div className="lg:hidden  md:block mt-5">
                <h2 className="font-bold uppercase mb-5 mr-4 text-gray-800">Get in touch</h2>
                <div className="text-sm font-semibold space-y-2">
                    <p>+234-906-483-3829</p>
                    <p>ogbonnachigozie270@gmail.com</p>
                </div>
                </div>
                
            </div>
            <div className="hidden lg:block">
                <h2 className="font-bold uppercase mb-5 mr-4 text-gray-800">Get in touch</h2>
                <div className="text-sm font-semibold space-y-2">
                    <p>+234-906-483-3829</p>
                    <p>ogbonnachigozie270@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
    <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2025 © Bob Devs. All Right Reserved.
    </p>
</footer>
     );
}
 
export default Footer;