import React from "react";

import person from "../../assets/IMG-20191222-baru.jpg";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLocationSharp, IoSchoolSharp } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";

function About() {
  return (
    <div id="about">
      <div className="about h-screen py-24 px-40">
        <div className="mb-20">
          <h1 className="text-white text-center font-bold text-3xl mb-3 tracking-widest">
            About Me
          </h1>
          <h6 className="text-white/50 text-center font-thin text-xs">
            My Introduction
          </h6>
        </div>
        <div className="grid grid-cols-2 mx-16">
          <div className="left-about">
            <div className="w-[360px] h-[360px] aspect-square rounded-3xl bg-gradient-to-r from-[#1b1b31] via-[#22222d] to-transparent">
              <img src={person} alt="azki" width={360} height={360} className="rounded-3xl rotate-[10deg] hover:rotate-0 duration-300"/>
            </div>
          </div>
          <div className="right-about">
            <div className="flex justify-between gap-[40px]">
              <div className="bg-gradient-to-b from-[#1b1b31] to-[#22222d] text-white py-7 px-5 w-[10rem] rounded-3xl hover:scale-105 duration-200 cursor-default">
                <div className="flex justify-center">
                  <FaBirthdayCake size={32} className="text-gray-400 mb-3" />
                </div>
                <h1 className="text-sm font-semibold text-gray-300 text-center mb-1">
                  Sept, 16th
                </h1>
                <p className="text-xs font-thin text-gray-300 text-center">
                  21st Old
                </p>
              </div>
              <div className="bg-gradient-to-b from-[#1b1b31] to-[#22222d] text-white py-7 px-5 w-[10rem] rounded-3xl hover:scale-105 duration-200 cursor-default">
                <div className="flex justify-center">
                  <IoLocationSharp size={32} className="text-gray-400 mb-3" />
                </div>
                <h1 className="text-sm font-semibold text-gray-300 text-center mb-1">
                  Indonesia
                </h1>
                <p className="text-[10px] font-thin text-gray-300 text-center">
                  Bogor - Karawang
                </p>
              </div>
              <div className="bg-gradient-to-b from-[#1b1b31] to-[#22222d] text-white p-5 w-[10rem] rounded-3xl hover:scale-105 duration-200 cursor-default">
                <div className="flex justify-center">
                  <IoSchoolSharp size={30} className="text-gray-400 mb-3" />
                </div>
                <h1 className="text-sm font-semibold text-gray-300 text-center mb-1">
                  University Of Singaperbangsa
                </h1>
                <p className="text-[10px] font-thin text-gray-300 text-center">
                  Karawang
                </p>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-white/75 font-thin text-justify">
                I'm an active College Student majoring in Information Systems at
                Singaperbangsa Karawang University with highly dedicated in
                leadership, initiative, responsibility and social skills and was
                interested to Web Development, especially for being a Front End
                Developer.
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <a
                href=""
                className="text-white/50 flex items-center group hover:text-white hover:scale-105 duration-500"
              >
                Download My CV{" "}
                <HiArrowLongRight className="text-white/50 ml-2 group-hover:rotate-[360deg] group-hover:text-white duration-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
