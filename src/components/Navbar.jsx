import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="flex items-center justify-between absolute pt-10 px-20 z-10 w-full">
          <h1 className="text-2xl text-sky-200 tracking-[5px] hover:tracking-[6px] duration-300">
            <span className="font-black">Azki</span>Fajri
          </h1>
          <div className="flex justify-end w-full ml-12">
            <h5 className="text-white text-lg tracking-wider cursor-pointer relative after:content-[''] after:bg-slate-400 after:h-[1.5px] after:w-0 after:left-0 after:-bottom-[1.5px] after:rounded-xl after:absolute after:duration-500 after:hover:w-full">
              About
            </h5>
            <h5 className="text-white text-lg tracking-wider cursor-pointer relative after:content-[''] after:bg-slate-400 after:h-[1.5px] after:w-0 after:left-0 after:-bottom-[1.5px] after:rounded-xl after:absolute after:duration-500 after:hover:w-full ml-8">
              Skills
            </h5>
            <h5 className="text-white text-lg tracking-wider cursor-pointer relative after:content-[''] after:bg-slate-400 after:h-[1.5px] after:w-0 after:left-0 after:-bottom-[1.5px] after:rounded-xl after:absolute after:duration-500 after:hover:w-full ml-8">
              Projects
            </h5>
          </div>
          <div className="ml-8">
            <button className="bg-sky-200 py-2 px-3 rounded-full hover:scale-90 duration-300">Contact&nbsp;Me</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
