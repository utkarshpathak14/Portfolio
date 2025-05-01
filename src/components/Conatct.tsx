"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import ContactCard from "./Contact-card";



 function Contact() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl font-semibold text-white">
              Let's<br />
              <span className="text-7xl md:text-[6rem] font-bold mt-1 leading-none">
                Connect!
              </span>
            </h1>
          </>
        }
      >
    
    <ContactCard/>
        
        
      </ContainerScroll>
    </div>
  );
}

export default Contact;