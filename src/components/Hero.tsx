"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Image from "next/image";
import img from "../app/profile.jpg"
import Card from "./Card";



function Hero() {
  return (
    <HeroHighlight>
      <Card Img={img}/>
     
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-100  max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Hello my name is{" "} 
       
            <span className="  bg-clip-text bg-no-repeat text-transparent  sm:text-5xl bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">Utkarsh Pathak</span>
            {" "}
         and I'm a {" "}
        
        <Highlight className="text-black text-xl md:text-3xl">
          Full Stack Developer
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}

export default Hero;