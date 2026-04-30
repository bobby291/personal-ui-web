"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#FAQ" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {

  // 👉 Replace with your real number (no spaces, no +)
  const whatsappNumber = "2348163586476";

  // Optional pre-filled message
  const message = encodeURIComponent(
    "Hello Bobby, I’d like to book a call to discuss a project."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-purple-700 px-4 py-3 backdrop-blur-xl md:px-6">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Bobby logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <div>
            <div className="text-sm font-semibold text-white">Bobby</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              Developer
            </div>
          </div>
        </a>

        {/* Nav Links */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-[1.05] hover:bg-gray-100"
        >
          Book a Call
        </a>

      </div>
    </motion.header>
  );
}