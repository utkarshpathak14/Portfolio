"use client";
import React from "react";
import Img from "./upclicks.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import Chat from "./ChatApp.png"
// Import Swiper styles
import 'swiper/css';
import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import Slider from "./Slider";
import { ImagesSlider } from "./ui/images-slider";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

function Work() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative ">
        
        {dummyContent.map((item, index) => (
          <a href={item.link} key={`item-${index}`} target="_blank" rel="noopener noreferrer" className={poppins.className}>
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white font-bold rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
          </a>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Upclicks — URL Shortener and QR Code Generator",
    description: (
      <>
        <p>
          • Developed a dynamic link shortener application with custom QR codegeneration using React and Supabase <br />
          • Integrated Supabase Authentication and Database for secure URL storage and user management<br />
          • Built a real-time analytics dashboard using Recharts to track clicksby device and location<br />
          •  Implemented QR code customization features including colors, styles, and eye radius using React and react-qrcode-logo<br />
        </p>
       
      </>
    ),
    link:"https://upclicks.netlify.app/",
    
    image:
    "https://media.licdn.com/dms/image/v2/D5622AQEjIyvL2qoLHQ/feedshare-shrink_800/B56ZZzVqDNGQAg-/0/1745691780248?e=1749081600&v=beta&t=5W1Zpws8XAa17pUq0-67cf07FjUzA156SJ1JvS0U3p4"
  },
  {
    title: " Real Time Chat App",
    description: (
      <>
        <p>
        • Developed a fully functional real-time chat application using Socket.io for bidirectional communication <br />
 •  Implemented user authentication using JWT & bcrypt to ensure secure login and registration<br />
 • Ensured scalability by following modular code structure and RESTful API principles<br />
 •  Designed an interactive and responsive user interface using React and Daisy UI for a seamless experience<br />
        </p>
        
      </>
    ),
    link:"https://chat-whru.onrender.com/",
    
    image:
    "https://i.ibb.co/Txt3d0XC/Screenshot-2025-04-30-210333.png"
  },
  {
    title: " Boat LifeStyles UI ",
    description: (
      <>
        <p>
        • Developed a Boat user interface using HTML, Tailwind CSS and animate it using Gsap. <br />
 • Utilized flexbox/grid layout techniques to achieve responsive design, ensuring optimal viewing across devices.<br />
 • Maintained code quality by following best practices such as semantic HTML, modularization, and clean CSS<br />
        </p>
      </>
    ),
    link:"https://spontaneous-bombolone-b5a4a1.netlify.app/",
   
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQH3l0r_yA45Cw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1731237226970?e=1749081600&v=beta&t=xjg91KFmuZgSAIipkpvrVRdbWZvBP-SsalQXOYzWH38",
  },
  {
    title: " Global Countries Explorer ",
    description: (
      <>
        <p>
        • Built using the REST Countries API, this web app fetches key informations. <br />
 • Also integrated an interactive map feature<br />
 • Maintained code quality by following best practices such as semantic HTML, modularization, and clean CSS.<br />
 • Immersive experience, allowing users to visualize each country's location in real time.<br />
        </p>
      </>
    ),
    link:"https://countries-explorer-frontend.vercel.app/",
  
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQFwQ9Tcwfh25w/feedshare-shrink_800/feedshare-shrink_800/0/1728799799392?e=1749081600&v=beta&t=XkQ99RVjAYAECEZsTuEbIwyyzYRWFwEmTsqvi6JKdWU",
  },
];

export default Work;
