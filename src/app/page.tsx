import Image from "next/image";

import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import { Mask } from "@/components/Mask";
import Skills from "@/components/Skills";
import Contact from "@/components/Conatct";

export default function Home() {
  return (
   <div>
    <a id="about"><Hero/></a>
    
    <h1 className="text-7xl font-bold text-center mt-30">Work</h1>
    
    <Work/>

    <h1 className="text-6xl font-bold text-center mt-30">My Tech Stack</h1>
    <Skills/>
    <a id="contact"><Contact/></a>
    


    
   </div>
  );
}
