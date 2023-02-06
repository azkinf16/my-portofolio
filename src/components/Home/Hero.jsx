import React from "react";

import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { IoHandRight } from "react-icons/io5";
import "./hero.css";

function Hero() {
  return (
    <>
      <div className="absolute hero flex top-[40%] px-40">
        <div className="heroProfile -mt-16 mx-auto lg:order-3"></div>
        <div className="mr-40 ml-4">
          <BsFacebook className="text-white mb-10 text-lg cursor-pointer hover:scale-150 duration-500" />
          <BsInstagram className="text-white mb-10 text-lg cursor-pointer hover:scale-150 duration-500" />
          <BsGithub className="text-white mb-10 text-lg cursor-pointer hover:scale-150 duration-500" />
          <BsLinkedin className="text-white text-lg cursor-pointer hover:scale-150 duration-500" />
        </div>
        <div className="-mt-12 w-1/2">
          <h2 className="text-white text-5xl mb-3 font-medium">Helo, I'm</h2>
          <h1 className="text-white text-6xl font-extrabold">
            Azki Nurul Fajri
          </h1>
          <div className="mb-6 mt-1 flex items-center">
            <h1 className="text-white/75 font-light text-xs">
              College Student / Front-End Web Enthusiasm / Weiboo
            </h1>
          </div>
          <div className="w-[70%]">
            <p className="text-white text-md">
              An active student majoring in Information Systems at
              Singaperbangsa Karawang University and has interested to Web
              Development, especially being a Front End Developer.
            </p>
          </div>
          <div className="mt-6">
            <button className="bg-sky-200 py-3 px-4 rounded-xl group hover:scale-110 duration-300 flex items-center">Say Hello <IoHandRight className="ml-2 group-hover:rotate-45 duration-300"/></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
