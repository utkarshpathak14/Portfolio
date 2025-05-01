"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

 function Slider() {
  const images = [
  "https://media.licdn.com/dms/image/v2/D5622AQFITmbQaoFeYg/feedshare-shrink_800/B56ZZzVqCjGkAk-/0/1745691779853?e=1749081600&v=beta&t=ZLMaPh6HDXqQtNxlh2ALcw_z3cieInbg7JqsR383X10"
  
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}

export default Slider;
