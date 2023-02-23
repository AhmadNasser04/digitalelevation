import React from "react";

function PriceCard({ name, price }) {
  return (
    <div className="w-[200px] h-[200px] bg-[#1f2227] rounded-lg flex flex-col text-center justify-center items-center space-y-5 transition-all hover:translate-y-[-5%] cursor-default">
      {/* NAME */}
      <h1 className="text-3xl roboto">{name}</h1>
      {/* PRICE */}
      <h1 className="text-xl font-bold text-[#00c46c]">{price}</h1>
    </div>
  );
}

export default PriceCard;
