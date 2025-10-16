"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StickyButton() {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="fixed right-6 bottom-6 z-50 flex items-center justify-end"
    >
      <motion.button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ width: hovered ? 180 : 56 }} // 56px = h-14
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center overflow-hidden rounded-full bg-yellow-400 shadow-lg h-14"
        onClick={() => router.push("/contact")}
      >
        {/* Avatar */}
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
          <Image
            src="/contact.jpg"
            alt="Contact"
            width={56}
            height={56}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text */}
        <motion.div
          animate={{
            scaleX: hovered ? 1 : 0,
            opacity: hovered ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="origin-left flex items-center pl-3"
        >
          <span className="whitespace-nowrap font-semibold text-black cursor-pointer">
            Book a Call{"  "}
            <span className="rotate-12 text-xl"> ↗</span>
          </span>
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
