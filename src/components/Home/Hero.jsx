import { useNavigate } from "react-router-dom";

import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { IoHandRight } from "react-icons/io5";

import "./hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div id="hero">
      <div className="hero md:flex h-screen items-center md:pt-24 pt-52 max-md:mb-52 md:mb-0 md:px-40">
        <div className="heroProfile -mt-14 mx-auto lg:order-3"></div>
        <div className="md:mr-40 md:ml-4 flex md:grid my-16 justify-center gap-10 md:gap-0">
          <a href="https://web.facebook.com/azkinf/" target="_blank" rel="noreferrer">
            <BsFacebook className="text-white mb-9 text-4xl md:text-lg cursor-pointer hover:scale-150 duration-500" />
          </a>
          <a href="https://www.instagram.com/azkinf__/" target="_blank" rel="noreferrer">
            <BsInstagram
              className="text-white mb-9 text-4xl md:text-lg cursor-pointer hover:scale-150 duration-500"
            />
          </a>
          <a href="https://github.com/azkinf16" target="_blank" rel="noreferrer">
            <BsGithub className="text-white mb-9 text-4xl md:text-lg cursor-pointer hover:scale-150 duration-500" />
          </a>
          <a href="https://www.linkedin.com/in/azkinurulfajri" target="_blank" rel="noreferrer">
            <BsLinkedin className="text-white text-4xl md:text-lg cursor-pointer hover:scale-150 duration-500" />
          </a>
        </div>
        <div className="-mt-7 md:w-1/2">
          <h2 className="text-white md:text-6xl text-4xl mb-3 font-medium text-center md:text-left">
            Hello, I&#39;m
          </h2>
          <h1 className="text-white md:text-7xl text-6xl font-extrabold text-center md:text-left">
            Azki Nurul Fajri
          </h1>
          <div className="md:w-[80%] px-12 md:px-0 mt-6">
            <p className="text-white/75 text-sm text-center md:text-left">
              A College Student who was interested to Web Development,
              especially being a Front End Developer.
            </p>
          </div>
          <div className="mt-12 flex md:justify-start justify-center">
            <button
              onClick={() => navigate("/comments")}
              className="bg-gradient-to-b from-[#1b1b31] to-[#22222d] text-white py-3 px-4 rounded-xl group hover:scale-110 duration-300 flex items-center font-bold"
            >
              Say Hello{" "}
              <IoHandRight className="ml-2 group-hover:rotate-45 group-hover:text-sky-300 duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
