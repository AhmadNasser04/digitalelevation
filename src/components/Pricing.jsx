import React from "react";
import PriceCard from "./PriceCard";

function Pricing() {
  const services = [
    { name: "SEO", price: "500 USD" },
    { name: "Content Marketing", price: "2500 USD" },
    { name: "Social Media Marketing", price: "2000 USD" },
    { name: "Video Marketing", price: "1500 USD" },
    { name: "Email Marketing", price: "500 USD" },
    { name: "Display Advertising", price: "CONTACT" },
    { name: "Simple Web Development", price: "450 USD" },
    { name: "Advanced Web Development", price: "550 USD" },
    { name: "Mobile Web Development", price: "1000 USD" },
    { name: "E-Commerce Web Development", price: "800 USD" },
    { name: "CMS", price: "800 USD" },
    { name: "SEM", price: "500 USD" },
  ];
  return (
    <div className="text-white flex flex-col justify-center items-center space-y-10">
      <h1 className="text-center font-semibold roboto text-4xl">
        SERVICES PRICING
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {services.map((service) => (
          <PriceCard
            key={service.name}
            name={service.name}
            price={service.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Pricing;
