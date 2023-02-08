import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex absolute items-center justify-between pt-10 px-40 z-10 w-full">
        <h1 className="text-2xl text-sky-200 cursor-default tracking-[5px] hover:tracking-[6px] duration-300">
          <span className="font-black">Azki</span>Fajri
        </h1>
        <div className="flex justify-end w-full ml-12">
          <p
            onClick={() => navigate("/")}
            className="text-white text-lg tracking-wider cursor-pointer relative after:content-[''] after:bg-slate-400 after:h-[1.5px] after:w-0 after:left-0 after:-bottom-[1.5px] after:rounded-xl after:absolute after:duration-500 after:hover:w-full"
          >
            About
          </p>
          <h5 className="text-white text-lg tracking-wider cursor-pointer relative after:content-[''] after:bg-slate-400 after:h-[1.5px] after:w-0 after:left-0 after:-bottom-[1.5px] after:rounded-xl after:absolute after:duration-500 after:hover:w-full ml-8">
            Experiences
          </h5>
          <h5 className="text-white text-lg tracking-wider cursor-pointer relative after:content-[''] after:bg-slate-400 after:h-[1.5px] after:w-0 after:left-0 after:-bottom-[1.5px] after:rounded-xl after:absolute after:duration-500 after:hover:w-full ml-8">
            Projects
          </h5>
        </div>
        <div className="ml-8">
          <button className="bg-gradient-to-b from-[#1b1b31] to-[#22222d] py-2 px-3 font-bold rounded-full hover:scale-90 duration-300 text-white">
            Contact&nbsp;Me
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
