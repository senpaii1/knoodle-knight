"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const HowItWorks = () => {
  const router = useRouter();
  const texts = ["Dream it.", "Design it.", "Experience it."];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // which phrase
  const [charIndex, setCharIndex] = useState(0); // which character
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = 100; // typing speed in ms
    let timeout;

    if (!deleting && charIndex < texts[index].length) {
      // typing
      timeout = setTimeout(() => {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (!deleting && charIndex === texts[index].length) {
      // finished typing, wait before deleting
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && charIndex > 0) {
      // deleting
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else if (deleting && charIndex === 0) {
      // move to next text
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index, texts]);

  const steps = [
    {
      step: 1,
      title: "Book a call",
      desc: "Share your project ideas and goals with our team.",
      image: "/step1.png",
    },
    {
      step: 2,
      title: "Define Your Project",
      desc: "We define the project scope and strategy that fits your needs.",
      image: "/step2.png",
    },
    {
      step: 3,
      title: "Build & Collaborate",
      desc: "Our developers, designers, and artists work closely with you, sharing regular updates.",
      image: "/step3.png",
    },
    {
      step: 4,
      title: "Deliver & Launch",
      desc: "We finalize, test, and deliver your project — ready to go live.",
      image: "/step4.png",
    },
  ];

  return (
    <section className="pb-24 px-6 max-w-[1400px] mx-auto text-white">
      <div className="mb-16 md:grid md:grid-cols-2 md:items-center gap-8 text-center md:text-left">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extralight">
            How it <br />
            works
          </h2>
        </div>
        <div>
          <p className="mt-2 text-white/90 text-xs max-w-xl ">
            <span className="text-4xl font-extralight border-r-2 border-black pr-1">
              {text}
            </span>
          </p>
          <p className="mt-3 text-white/70 font-extralight text-xl">
            Our process is simple and transparent.
            <br />
            From the first call to final delivery, we guide you at every step.
            <br />
            Clear communication, expert execution, and on-time results — always.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        {steps.map(({ step, title, desc, image }) => (
          <div
            key={step}
            className="md:grid md:grid-cols-2 md:items-center gap-8"
          >
            {/* Left Side */}
            <div className="flex flex-col text-left md:text-left md:justify-center">
              <span className="text-xs text-gray-400 mb-1">Step {step}</span>
              <h3 className="text-2xl md:text-3xl font-medium">{title}</h3>
              <p className="mt-2 text-gray-400 max-w-md text-sm">{desc}</p>
            </div>

            {/* Right Side */}
            <div className="relative">
              <div className="overflow-hidden rounded-full shadow-lg">
                <Image
                  src={image}
                  alt={title}
                  width={600}
                  height={300}
                  className="w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* small glass CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-18 flex w-max items-center gap-3 px-10 py-2 rounded-full glass justify-center mx-auto hover:animate-inner-glow-pulse cursor-pointer"
        onClick={() => router.push("/contact")}
      >
        <span className="w-2 h-2 bg-pink-400 rounded-full" />
        <span className="text-2xl">Get In Touch & Book a call</span>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
