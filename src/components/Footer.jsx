import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="bg-black w-screen h-[300px] flex flex-col justify-center items-center text-center space-y-5">
      <h1 className="text-white text-lg font-semibold">Our Social Networks</h1>
      {/* NETWORKS */}
      <div>
        <SocialIcon
          url="https://www.instagram.com/"
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </div>
  );
}

export default Footer;
