import React from "react";

import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { IoHandRight } from "react-icons/io5";
import "./hero.css";

function Hero() {
  return (
    <>
      <div className="hero flex h-screen pt-28 items-center px-40">
        <div className="heroProfile -mt-14 mx-auto lg:order-3"></div>
        <div className="mr-40 ml-4">
          <BsFacebook className="text-white mb-9 text-lg cursor-pointer hover:scale-150 duration-500" />
          <BsInstagram className="text-white mb-9 text-lg cursor-pointer hover:scale-150 duration-500" />
          <BsGithub className="text-white mb-9 text-lg cursor-pointer hover:scale-150 duration-500" />
          <BsLinkedin className="text-white text-lg cursor-pointer hover:scale-150 duration-500" />
        </div>
        <div className="-mt-7 w-1/2">
          <h2 className="text-white text-6xl mb-3 font-medium">Helo, I'm</h2>
          <h1 className="text-white text-7xl font-extrabold">
            Azki Nurul Fajri
          </h1>
          <div className="w-[80%] mt-6">
            <p className="text-white/75 text-sm">
              A College Student who was interested to Web
              Development, especially being a Front End Developer.
            </p>
          </div>
          <div className="mt-12">
            <button className="bg-gradient-to-b from-[#1b1b31] to-[#22222d] text-white py-3 px-4 rounded-xl group hover:scale-110 duration-300 flex items-center font-bold">Say Hello <IoHandRight className="ml-2 group-hover:rotate-45 group-hover:text-sky-300 duration-300"/></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
