"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 glass backdrop-blur-lg border-b border-transparent/10 shadow-lg"
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-[1920px] mx-auto">
        {/* Brand */}
        <Link href="/" className="text-2xl tracking-wide ml-[0%]">
          <span className="font-[100] tracking-[0.1em]">Knoodle</span>{" "}
          <span className="text-#DFDFDF font-[900]">Knight</span>
        </Link>

        {/* Desktop Links */}
        <div className="rounded-full border border-[#DE6EB2]/60 px-10 py-2.5 hidden md:flex">
          <ul className="flex gap-15 text-sm">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative transition-colors ${
                      active ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 bottom-[-4px] w-full h-[1.5px] bg-white"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Mobile menu placeholder */}
        <div
          className="md:hidden text-gray-300 cursor-pointer text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-17 left-0 w-full z-40 backdrop-blur-lg bg-white/10 flex flex-col justify-center items-center px-6 py-4"
            style={{ height: "100px" }} // same as navbar
          >
            <ul className="flex flex-col gap-2 text-white text-sm">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.name} className="w-full text-center">
                    <Link
                      href={link.href}
                      className={`transition-colors ${
                        active ? "text-white" : "text-gray-300 hover:text-white"
                      }`}
                      onClick={() => setIsOpen(false)} // close menu on click
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
