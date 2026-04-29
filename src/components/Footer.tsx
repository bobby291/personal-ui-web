import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return ( 
        <footer id="footer" className="px-6 md:px-16 font-bold lg:px-24 xl:px-32 pt-8 w-full bg-gray-300 text-gray-900">
    <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
        <div className='flex items-center gap-1 cursor-pointer'>
            <a href="#" className="flex items-center gap-3">
                      <Image
                        src="/logo.png"
                        alt="GeekVentures logo"
                        width={36}
                        height={36}
                        className="rounded-md"
                      />
                      <div>
                        <div className="text-sm font-semibold text-purple-700">Bobby</div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                          Developer
                        </div>
                      </div>
                    </a>
      </div>
            <p className="mt-6 text-sm">
                Software / AI / Developer
            </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
            <div>
                <h2 className="font-bold uppercase mb-5 text-1xl text-gray-800">Company</h2>
                <ul className="text-sm space-y-2">
                    <li><Link href='#about'>About</Link></li>
                    <li><Link href='#projects'>Project</Link></li>
                    <li><Link href='#FAQ'>FAQ</Link></li>
                </ul>
                <div className="lg:hidden  md:block mt-5">
                <h2 className="font-bold uppercase mb-5 mr-4 text-gray-800">Get in touch</h2>
                <div className="text-sm font-semibold space-y-2">
                    <p>+234 816 358 6476</p>
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
        Copyright 2025 © Bobby Developer. All Right Reserved.
    </p>
</footer>
     );
}
 
export default Footer;