import React from "react";
import aboutIMG from "../resources/about.png";

function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-10">
        <h1 className="text-white text-center font-semibold roboto text-4xl">
          ABOUT US
        </h1>
        <div className="flex flex-col text-center lg:flex-row items-center justify-center space-y-10 lg:text-left lg:space-y-0 lg:space-x-10 lg:w-[1100px] xl:w-[1200px]">
          <img
            src={aboutIMG}
            alt="img"
            className="w-[300px] h-[300px] object-cover rounded-full md:w-[600px] md:h-auto md:rounded-lg"
          />
          <div className="">
            <p className="text-white p-5">
              Looking to take your business's digital presence to the next
              level? Look no further than Digital Elevation! Our team of
              experienced professionals specializes in creating custom digital
              marketing solutions tailored to your unique needs. We're
              passionate about helping businesses succeed in the digital space,
              and we offer a full range of services to help you do just that.
              Whether you're looking to boost your SEO, create engaging content,
              build a social media presence, or launch a killer email marketing
              campaign, we've got you covered. Plus, we offer web development
              services ranging from simple design to complex e-commerce
              solutions, so we can help you create a digital storefront that
              looks great and works even better. At Digital Elevation, we're
              committed to staying ahead of the curve when it comes to digital
              marketing trends and technologies. That's why we're constantly
              refining our strategies and investing in the latest tools and
              resources to help you achieve your goals. So why wait? Let Digital
              Elevation help you elevate your digital game and take your
              business to new heights!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
