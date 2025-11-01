"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_zu20j3h", // replace with your EmailJS service ID
        "template_aupsjx4", // replace with your EmailJS template ID
        formRef.current,
        "4MmzMS69orpqEvMwt" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setLoading(false);
          e.target.reset(); // clear form
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Try again!");
          setLoading(false);
        }
      );
  };
  const services = [
    "Game Design",
    "Develop",
    "Animation",
    "2D Assets",
    "3D Assets",
    "UI/UX Design",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 70,
      },
    }),
  };

  return (
    <>
      <section
        className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center bg-black bg-cover bg-center bg-no-repeat overflow-hidden top-18"
        style={{ backgroundImage: `url('/ContactUs.jpg')` }}
      >
        {/* 🔥 Top gradient bar */}
        {/* <div className="absolute top-19 left-0 w-full h-[100px] [background:linear-gradient(115deg,rgba(220,38,38,0.85)_0%,rgba(239,68,68,0.45)_40%,transparent_90%)] blur-xs [mask-image:linear-gradient(to right,black,transparent)]" /> */}

        {/* 🌙 Bottom soft fade */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90" /> */}

        {/* 📝 Centered text */}
        <h6 className="relative z-10 text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-extralight leading-tight text-white max-w-5xl mx-auto px-4 mb-8">
          Let’s turn your <br />
          <span className="text-gray-300">‘what ifs’</span> into{" "}
          <span className="text-red-500">‘heck yes!’</span>
        </h6>

        {/* 🌟 Glass CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={() => {
            document
              .getElementById("contact-form")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative z-10 mt-6 flex items-center gap-3 px-10 py-3 rounded-full glass cursor-pointer 
 bg-[#111]/40 backdrop-blur-sm border border-pink-500/20 text-white 
 transition-all duration-300 
 hover:animate-inner-glow-pulse"
        >
          <span className="w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_8px_2px_rgba(236,72,153,0.8)]" />
          <span className="text-2xl">Get In Touch & Book a call</span>
        </motion.div>

        {/* Infinity logo */}
        <div className="absolute right-0 bottom-10 z-0 -my-[0%]">
          <Image
            src="/design.svg"
            alt="Design"
            width={200}
            height={200}
            className="object-contain opacity-80 rotate-180"
          />
        </div>
      </section>

      <section
        id="contact-form"
        className="mt-20 relative min-h-[80vh] w-full flex flex-col md:flex-row justify-between items-start bg-black text-white px-8 sm:px-16 md:px-24 overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/ContactUsDown.png')]"
      >
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 relative z-10 mt-8">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-5xl font-bold mb-6"
          >
            Let’s Bring Your Vision to Life
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            custom={0.5}
            initial="hidden"
            animate="visible"
            className="text-xl font-light mb-4  text-white/70 max-w-3xl leading-relaxed"
          >
            Got an idea you’re excited about?
            <br /> We’d love to hear it!
            <br /> Whether it’s a game concept, a new product, or a design
            challenge — our team at{" "}
            <span className="text-white font-bold"> Knoodle Knight</span> is
            here to help you turn imagination into reality. We work closely with
            brands, startups, and creators to design, develop, and deliver
            digital experiences that stand out.
          </motion.h2>
          <div className="relative mt-12 left-20 bottom-0 z-0">
            <Image
              src="/Infinity.svg"
              alt="Infinity"
              width={500}
              height={500}
              className="object-contain opacity-90"
            />
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full md:w-1/2 flex flex-col gap-5 p-8 rounded-2xl bg-transparent relative z-10 backdrop-blur-none border-none"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <input
            type="text"
            placeholder="Name*"
            name="name"
            required
            className="input-field bg-transparent border-b border-gray-600 focus:border-red-500 text-white placeholder-gray-400 outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number*"
            required
            className="input-field bg-transparent border-b border-gray-600 focus:border-red-500 text-white placeholder-gray-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address*"
            required
            className="input-field bg-transparent border-b border-gray-600 focus:border-red-500 text-white placeholder-gray-400 outline-none"
          />
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center mx-auto max-w-5xl">
            {services.map((service, i) => (
              <motion.span
                key={service}
                variants={fadeUp}
                custom={i * 0.2}
                initial="hidden"
                animate="visible"
                transition={{ type: "spring", stiffness: 200 }}
                className="border border-pink-100 px-10 py-2 rounded-full text-md cursor-pointer hover:border-red-500 backdrop-blur-sm w-full text-center text-transparent bg-clip-text"
                style={{
                  background:
                    "linear-gradient(94.32deg, #ABC9C9 6.17%, #DA639B 35.82%, #D8595F 67.63%, #391917 90.56%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {service}
              </motion.span>
            ))}
          </div>

          <textarea
            placeholder="Message*"
            rows="5"
            name="message"
            className="input-field bg-transparent border-b border-gray-600 focus:border-red-500 text-white placeholder-gray-400 outline-none resize-none"
            required
          ></textarea>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="border border-pink-500 hover:text-white transition-all duration-300 rounded-full px-6 py-1.5 mt-2 font-extralight w-max self-end"
          >
            SEND REQUEST
          </motion.button>
        </motion.form>
      </section>
    </>
  );
}
