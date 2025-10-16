"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();
  return (
    <>
      <section className="w-full h-screen flex flex-col justify-center text-left text-white px-8 sm:px-16 md:px-24 bg-[radial-gradient(ellipse_at_right,_#b68a3a_0%,_#2a1d0a_45%,_#000_60%)]">
        <h1 className="text-8xl font-extralight">Dream it. Play it.</h1>
        <h1 className="text-7xl font-extralight mt-4">We’ll build it.</h1>
        {/* small glass CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => router.push("/contact")}
          className="mt-18 flex w-max items-center gap-3 px-4 py-2 rounded-full glass justify-center cursor-pointer 
             bg-[#111]/40 backdrop-blur-sm border border-pink-500/20 text-white 
             transition-all duration-300 
              hover:animate-inner-glow-pulse"
        >
          <span className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_8px_2px_rgba(236,72,153,0.8)]" />
          <span className="text-sm">Get In Touch & Book a call</span>
        </motion.div>
      </section>

      {/* ---------------- SOLUTIONS SECTION ---------------- */}
      <section className="pb-20 px-26 bg-black text-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Solutions tailored to your needs
          </h2>
          <p className="text-gray-400 mb-12 max-w-3xl">
            We are a full-service creative and development studio dedicated to
            helping brands, studios, and innovators build extraordinary games
            and digital products. Our team blends technology and creativity —
            coding, designing, and animating every detail — to bring your vision
            to life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0">
            {[
              {
                title: "Game Design",
                desc: "Creating gameplay mechanics, storylines, and interactive systems that engage players.",
                src: "/pen.svg",
              },
              {
                title: "Develop",
                desc: "Full-cycle development for mobile, PC, console, and web-based games.",
                src: "/development.svg",
              },
              {
                title: "Animation",
                desc: "Character and object animation to smooth lifelike user experiences.",
                src: "/animation.svg",
              },
              {
                title: "2D Assets",
                desc: "Character design, UI/UX assets, and high-quality concept art.",
                src: "/2D.svg",
              },
              {
                title: "3D Assets",
                desc: "Realistic or stylized models, textures, and interactive environments.",
                src: "/3D.svg",
              },
              {
                title: "UI/UX Design",
                desc: "Intuitive interfaces that optimize user experiences for games and digital products.",
                src: "/pen.svg",
              },
            ].map(({ title, desc, src }) => (
              <div
                key={title}
                className="border-l border-l-white border-t border-t-transparent border-b border-b-transparent border-r-0 
             p-15 bg-[#0A0A0A] backdrop-blur-sm transition duration-300 
             hover:border-t-pink-500 hover:border-b-pink-500 hover:bg-white/10 "
              >
                <Image
                  src={src}
                  width={20}
                  height={20}
                  className="mb-0.5"
                  alt="icons"
                />
                <h3 className="text-md font-extralight mb-2 text-white">
                  {title}
                </h3>
                <p className="text-xs text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- NEWSLETTER SECTION ---------------- */}
      <section className="py-20 text-white px-6 bg-[url('/newsletter.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* LEFT SIDE */}
          <div className="text-center md:text-left flex-row">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Signup for the <br />
              newsletter
            </h2>
            <p className="text-sm text-white/80">Stay connected</p>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <form className="grid sm:grid-rows-2 gap-4 max-w-lg ml-auto relative">
              <input
                type="text"
                placeholder="First name"
                className="bg-transparent border-b border-white/40 focus:border-white outline-none py-2 text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-b border-white/40 focus:border-white outline-none py-2 text-sm w-full pr-10"
              />
              <img
                src="/arrow-right.svg"
                alt="arrow"
                onClick={() => router.push("/contact")}
                className="absolute right-0 top-1/2 transform -translate-y-1/3 mr-2 w-5 h-5 cursor-pointer mt-4"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
