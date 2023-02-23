import React from "react";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-5 cursor-default">
      <h1 className="font-semibold roboto text-4xl text-white">CONTACT US</h1>
      {/* CONTACTS */}
      <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5">
        {/* EMAIL */}
        <div className="flex justify-evenly items-center text-2xl text-white bg-[#1f2227] w-[350px] h-[100px] rounded-lg">
          <span className="text-4xl">
            <ion-icon name="mail-outline"></ion-icon>
          </span>
          <h1>example@email.com</h1>
        </div>
        {/* PHONE */}
        <div className="flex justify-evenly items-center text-2xl text-white bg-[#1f2227] w-[350px] h-[100px] rounded-lg">
          <span className="text-4xl">
            <ion-icon name="call-outline"></ion-icon>
          </span>
          <h1>+961 81 811 811</h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
