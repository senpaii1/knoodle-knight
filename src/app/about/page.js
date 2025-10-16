import Image from "next/image";
export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center text-white min-h-[70vh]">
        {/* Rotated background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rotate-0"
          style={{ backgroundImage: "url('/AboutUs.png')" }}
        ></div>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extralight leading-tight">
            Empowering Ideas. Crafting Experiences. <br />
            Delivering Excellence.
          </h1>
        </div>
      </section>

      {/* MAIN ABOUT CONTENT */}
      <section
        className="max-w-[1800px] mx-auto px-6 py-24 text-gray-200 space-y-24 
          bg-cover bg-no-repeat bg-[url('/about-us-down.png')] bg-[position:center_0%]"
      >
        {/* 1️⃣ Row 1 — About Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extralight mb-4 text-white">
              About Us
            </h2>

            <p className="text-gray-400 leading-relaxed text-base sm:text-lg lg:text-xl max-w-3xl">
              At Knoodle Knight, we bring imagination and technology together to
              build extraordinary digital experiences. We’re a team of
              passionate developers, game designers, UI/UX designers, 2D & 3D
              artists, and animators — working collaboratively to turn creative
              ideas into engaging, high-quality products. From concept to
              completion, we focus on creating solutions that are visually
              stunning, technically sound, and user-focused. Whether it’s
              designing an intuitive game interface, crafting immersive
              environments, or developing full-scale interactive experiences —
              we deliver with precision, creativity, and care.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src="/AboutUs2.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg max-w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* 2️⃣ Row 2 — Our Approach & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
          {/* Left: Our Approach */}
          <div>
            <h2 className="text-3xl lg:text-7xl sm:text-4xl font-extralight mb-4 text-white">
              Our Approach
            </h2>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg lg:text-xl max-w-3xl">
              At Knoodle Knight, we believe in simplicity, transparency, and
              collaboration. We partner closely with clients to understand their
              goals, align on strategy, and ensure every stage — from design to
              delivery — meets the highest quality standards.
            </p>
          </div>

          {/* Right: Our Mission */}
          <div>
            <h2 className="text-3xl lg:text-7xl sm:text-4xl font-extralight mb-4 text-white">
              Our Mission
            </h2>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg lg:text-xl max-w-3xl">
              To empower creators and businesses by blending creativity with
              technology, helping them bring their vision to life through
              design, art, and innovation.
            </p>
          </div>
        </div>

        {/* 3️⃣ Row 3 — Our Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Our Vision Text */}
          <div>
            <h2 className="text-3xl lg:text-7xl sm:text-4xl font-extralight mb-4 text-white">
              Our Vision
            </h2>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg lg:text-xl max-w-3xl">
              To be a global creative-technology studio recognized for
              transforming ideas into powerful, interactive experiences.
            </p>
          </div>

          {/* Right: Image */}
          <div className="absolute right-0 bottom-0 my-[-50%] flex justify-end w-full pointer-events-none">
            <Image
              src="/design.svg"
              alt="Design"
              width={300}
              height={300}
              className="object-contain opacity-80 rotate-180"
            />
          </div>
        </div>
      </section>
    </>
  );
}
