import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "SEO",
      "Content Marketing",
      "Social Media Marketing",
      "Video Marketing",
      "Email Marketing",
      "Display Advertising",
      "Simple Web Development",
      "Advanced Web Development",
      "Mobile Web Development",
      "E-Commerce Web Development",
      "CMS",
      "SEM",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="bg-gradient-to-b from-[#00c46c] to-black w-screen h-[50vh] text-center flex flex-col items-center justify-center space-y-10">
      {/* LOGO */}
      <div>
        <h1 className="text-7xl text-white font-extrabold roboto drop-shadow-lg shadow-black">
          DIGITAL ELEVATION
        </h1>
      </div>

      {/* SERVICES */}
      <div className="flex text-2xl drop-shadow-lg">
        <h1 className="text-white roboto font-semibold">{text}</h1>
        <Cursor cursorColor="#FFFFFF" />
      </div>
    </div>
  );
}

export default Hero;
