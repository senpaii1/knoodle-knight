import React from "react";
import Image from "next/image";

const NextBig = () => {
  return (
    <section className="pb-20">
      <div className="grid md:grid-cols-[40%_55%] gap-8 items-center">
        <div className="justify-items-start items-center flex-col text-center pl-18">
          <h3 className="text-[40px] md:text-[60px] font-extralight">
            Your next big idea
          </h3>
          <h2 className="text-[40px] md:text-[80px] font-bold mt-[-20px]">
            starts here.
          </h2>
        </div>

        <div className="overflow-hidden">
          <img
            src="/building.jpg"
            alt="building"
            className="w-[1078px] h-[503px] object-cover"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-[40%_55%] gap-8 items-center">
        <div className="justify-center items-center flex-col relative">
          <Image
            src="/design.svg"
            alt="Design"
            width={200}
            height={200}
            className="absolute
               sm:block hidden 
               md:bottom-[-50px] 
               lg:bottom-[-90px] "
          />
        </div>

        <div className="overflow-hidden">
          <p className="mt-6 text-white/70 font-extralight text-xl">
            We are a professional game development and creative services company
            offering end-to-end solutions for studios, brands, and businesses.
            Our team of skilled developers, designers, and artists ensures every
            project is delivered with precision, creativity, and technical
            excellence. Whether you need full-scale development or specialized
            support, we provide the right talent for your vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NextBig;
