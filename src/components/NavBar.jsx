import React, { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("HOME");

  const Links = [
    { name: "HOME", link: "#hero" },
    { name: "ABOUT", link: "#about" },
    { name: "PRICING", link: "#pricing" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <div className="shadow-md w-full top-0 left-0 fixed z-10">
      <div className="md:flex items-center justify-evenly bg-[#1f2227] py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-default flex items-center text-white roboto">
          <span className="text-3xl text-[#00c46c] mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          DIGITAL ELEVATION
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7"
              onClick={() => setSelected(link.name)}
            >
              <a
                href={link.link}
                className={`navItem hover:text-[#00c46c] ${
                  selected === link.name && "text-[#00c46c]"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
