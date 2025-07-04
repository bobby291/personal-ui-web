'use client';
import { useState } from "react";


const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = "2348163586476";
        const text = `Hello, my name is ${form.name}. My email is ${form.email}. Message: ${form.message}`;
        const encodeMessage = encodeURIComponent(text);
        const whatsappURL = `https://wa.me/${2348163586476}?text=${'Hello, am open for service'}`;

        window.open(whatsappURL,"_blank"); //Opens Whatsapp
    };

    return ( 
        <form onSubmit={handleSubmit} className="flex flex-col mb-2 items-center text-sm text-slate-800">
            <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">Contact Us</p> 
            <h1 className="text-4xl font-bold py-4 text-center">Let’s Get In Touch.</h1>
            
            
            <div className="max-w-96 w-full px-4">
                <label htmlFor="name" className="font-bold">Full Name</label>
                <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0" fill="#475569"/>
                    </svg>
                    <input type="text" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your full name" value={form.name} onChange={(e) =>setForm({...form, name: e.target.value})} required />
                </div>

                <label htmlFor="email-address" className="font-bold mt-4">Email Address</label>
                <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z" fill="#475569"/>
                    </svg>
                    <input type="email" className="h-full px-2 w-full outline-none bg-transparent" placeholder="Enter your email address" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
                </div>

                <label htmlFor="message" className="font-bold mt-4">Message</label>
                <textarea className="w-full mt-2 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-indigo-400 transition-all" placeholder="Enter your message" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} required></textarea>
                
                <button type="submit" className="flex items-center justify-center gap-1 font-bold mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition">
                    Submit Form
                    <svg className="mt-0.5" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33" fill="#fff"/>
                    </svg>
                </button>
            </div>
        </form>
     );
}
 
export default Contact;