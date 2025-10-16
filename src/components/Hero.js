"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden bg-[url('/Hero.png')] bg-cover bg-center bg-no-repeat pb-10">
      {/* subtle gradient blobs */}
      {/* <div className="absolute left-[8%] top-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-pink-500/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-indigo-500/10 to-transparent blur-2xl pointer-events-none" /> */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/100 via-transparent to-transparent" />
      {/* dark overlay for strong contrast */}
      <div className="absolute inset-0 bg-black/30" />
      {/* dark overlay for strong contrast */}
      <div className="absolute inset-0 bg-gradient-to-b to-black/90" />

      <div className="relative z-10 w-full flex flex-col items-center text-center py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-10xl md:text-8xl font-light tracking-tight"
        >
          <span className="tracking-wide">Knoodle</span>{" "}
          <span className="font-extrabold">Knight</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-2xl text-gray-300 max-w-2xl font-extralight"
        >
          Complete Game Development & Creative Services
          <br />
          Under One Roof
        </motion.p>

        {/* Infinity logo */}
        <div className="absolute right-10 bottom-10 z-0 -my-[18%]">
          <Image
            src="/infinity.svg"
            alt="Infinity"
            width={500}
            height={500}
            className="object-contain opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
