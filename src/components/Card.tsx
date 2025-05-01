"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

function Card({Img}: { Img: string }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1]bg-black  w-auto sm:w-[30rem] h-auto rounded-xl p-6 ">
        
        
        <CardItem translateZ="100" className="w-full ">
          
          <Image src={Img} alt="profile" width={600}  className="mx-auto h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" />
        </CardItem>
        
      </CardBody>
    </CardContainer>
  );

}

export default Card;