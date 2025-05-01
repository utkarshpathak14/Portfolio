"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { div, h1 } from "motion/react-client";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
    
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-full relative bg-neutral-900 overflow-hidden w-12 h-12 sm:h-23 sm:w-23 transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.8]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover m-auto absolute inset-0"
        
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/60  flex items-end  px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className={poppins.className &&" font-bold m-auto   bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200"}>
          {card.title}
        </div>
       
       
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    
    <div className={poppins.className && "mt-10 grid  grid-cols-6 md:grid-cols-7 gap-4 max-w-3xl mx-auto w-full font-bold"}>
    {cards.map((card, index) => (
      <Card
      
        key={card.title}
        card={card}
        index={index}
        hovered={hovered}
        setHovered={setHovered}
      />
    ))}
  </div>
  );
}
