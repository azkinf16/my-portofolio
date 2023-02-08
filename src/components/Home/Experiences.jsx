import React from "react";

import { Timeline } from "antd";

import { HiLightBulb } from "react-icons/hi";
import { IoIosSchool } from "react-icons/io";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FcIdea, FcGraduationCap } from "react-icons/fc";

import "./experiences.css";

function Experiences() {
  return (
    <div id="exp">
      <div className="exp h-screen py-20 px-40">
        <div className="mb-14">
          <h1 className="text-white text-center font-bold text-3xl mb-3 tracking-widest">
            Experiences
          </h1>
          <h6 className="text-white/50 text-center font-thin text-xs">
            My Learning and Educational Experiences
          </h6>
        </div>
        <div className="grid grid-cols-2 place-items-center gap-5 px-10">
          <div className="group left-exp ml-5 px-14 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xln shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute h-[450px] w-[400px] bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] pt-6 px-7 rounded-xl">
                <div className="grid grid-cols-1 place-items-center mt-16">
                  <FcIdea size={180}/>
                  <h1 className="text-white font-bold text-3xl mt-10">Learning</h1>
                </div>
              </div>
              <div className="h-[450px] w-[400px] bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] pt-6 px-7 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="mb-10 flex items-center justify-center">
                  <HiLightBulb size={32} className="text-gray-400 mr-3" />
                  <h2 className="text-white font-normal text-lg">
                    Learning Experiences
                  </h2>
                </div>
                <Timeline style={{ fontFamily: "Poppins" }}>
                  <Timeline.Item color={"gray"}>
                    <div className="ml-3 mb-2">
                      <h2 className="text-white font-semibold text-md">
                        Magang Studi Independen Bersertifikat
                      </h2>
                      <p className="text-white/50 text-xs mt-2 mb-2">
                        at Binar Academy - Front End JavaScript
                      </p>
                      <div className="flex items-center">
                        <BsCalendarCheckFill
                          size={18}
                          className="text-gray-200/80 mr-2"
                        />
                        <p className="text-gray-200/80 text-xs font-semibold">
                          August - December 2022
                        </p>
                      </div>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item color={"gray"}>
                    <div className="ml-3 mb-2">
                      <h2 className="text-white font-semibold text-md">
                        Bootcamp OrangSiber X Progate
                      </h2>
                      <p className="text-white/50 text-xs mt-2 mb-2">
                        Web Developer Path
                      </p>
                      <div className="flex items-center">
                        <BsCalendarCheckFill
                          size={18}
                          className="text-gray-200/80 mr-2"
                        />
                        <p className="text-gray-200/80 text-xs font-semibold">
                          July - August 2021
                        </p>
                      </div>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item color={"gray"}>
                    <div className="ml-3">
                      <h2 className="text-white font-semibold text-md">
                        Competition “Mile Zero Project Competition : Driving
                        Economic Innovation and Sustainabilitiy in Challenging
                        Times With Al”
                      </h2>
                      <p className="text-white/50 text-xs mt-2 mb-2">
                        Competition Participant
                      </p>
                      <div className="flex items-center">
                        <BsCalendarCheckFill
                          size={18}
                          className="text-gray-200/80 mr-2"
                        />
                        <p className="text-gray-200/80 text-xs font-semibold">
                          December 2020 - January 2021
                        </p>
                      </div>
                    </div>
                  </Timeline.Item>
                </Timeline>
              </div>
            </div>
          </div>
          <div className="group right-exp [perspective:1000px]">
          <div className="relative h-full w-full rounded-xln shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
              <div className="absolute h-[450px] w-[400px] bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] pt-6 px-7 rounded-xl">
                <div className="grid grid-cols-1 place-items-center mt-16">
                  <FcGraduationCap size={180}/>
                  <h1 className="text-white font-bold text-3xl mt-10">Education</h1>
                </div>
              </div>
              <div className="h-[450px] w-[400px] bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] pt-6 px-7 rounded-xl [transform:rotateY(-180deg)] [backface-visibility:hidden]">
              <div className="mb-10 flex items-center justify-center">
                <IoIosSchool size={32} className="text-gray-400 mr-3" />
                <h2 className="text-white font-normal text-lg">Education</h2>
              </div>
              <Timeline style={{ fontFamily: "Poppins" }}>
                <Timeline.Item color={"gray"}>
                  <div className="ml-3 mb-2">
                    <h2 className="text-white font-semibold text-md">
                      University of Singaperbangsa Karawang
                    </h2>
                    <p className="text-white/50 text-xs my-2">
                      Information System
                    </p>
                    <div className="flex items-center">
                      <BsCalendarCheckFill
                        size={18}
                        className="text-gray-200/80 mr-2"
                      />
                      <p className="text-gray-200/80 text-xs font-semibold">
                        2020 - Present
                      </p>
                    </div>
                  </div>
                </Timeline.Item>
                <Timeline.Item color={"gray"}>
                  <div className="ml-3">
                    <h2 className="text-white font-semibold text-md">
                      SMAN 1 Citeureup
                    </h2>
                    <p className="text-white/50 text-xs my-2">Science Class</p>
                    <div className="flex items-center">
                      <BsCalendarCheckFill
                        size={18}
                        className="text-gray-200/80 mr-2"
                      />
                      <p className="text-gray-200/80 text-xs font-semibold">
                        2017 - 2020
                      </p>
                    </div>
                  </div>
                </Timeline.Item>
                <Timeline.Item color={"gray"}>
                  <div className="ml-3">
                    <h2 className="text-white font-semibold text-md mb-2">
                      SMPN 3 Citeureup
                    </h2>
                    <div className="flex items-center">
                      <BsCalendarCheckFill
                        size={18}
                        className="text-gray-200/80 mr-2"
                      />
                      <p className="text-gray-200/80 text-xs font-semibold">
                        2014 - 2017
                      </p>
                    </div>
                  </div>
                </Timeline.Item>
                <Timeline.Item color={"gray"}>
                  <div className="ml-3">
                    <h2 className="text-white font-semibold text-md mb-2">
                      SDN 1 Leuwinutug
                    </h2>
                    <div className="flex items-center">
                      <BsCalendarCheckFill
                        size={18}
                        className="text-gray-200/80 mr-2"
                      />
                      <p className="text-gray-200/80 text-xs font-semibold">
                        2008 - 2014
                      </p>
                    </div>
                  </div>
                </Timeline.Item>
              </Timeline>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
