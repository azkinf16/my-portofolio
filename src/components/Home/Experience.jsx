import { Timeline } from "antd";

import { HiLightBulb } from "react-icons/hi";
import { IoIosSchool } from "react-icons/io";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FcIdea, FcGraduationCap, FcConferenceCall } from "react-icons/fc";

import "./experience.css";

export default function Experience() {
  return (
    <div id="exp">
      <div className="exp md:py-24 pt-36 md:px-40">
        <div className="mb-14">
          <h6 className="text-white/50 text-center font-thin text-xs">
            My Journey
          </h6>
          <h1 className="text-white text-center font-bold text-3xl tracking-widest">
            Experiences
          </h1>
        </div>
        <div className="grid md:grid-cols-3 place-items-center gap-10 md:gap-20 md:px-10">
          <div className="group [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute md:h-[450px] h-[400px] md:w-[350px] w-[280px] bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] pt-6 px-7 rounded-xl">
                <div className="grid grid-cols-1 place-items-center md:mt-16 mt-10">
                  <FcIdea className="text-[160px] md:text-[180px]" />
                  <h1 className="text-white font-bold text-3xl mt-10">
                    Learning
                  </h1>
                </div>
              </div>
              <div className="md:h-[450px] h-[400px] md:w-[350px] w-[280px] bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] pt-6 px-7 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="mb-10 flex items-center justify-center">
                  <HiLightBulb className="text-gray-400 mr-3 text-[20px] md:text-[32px]" />
                  <h2 className="text-white font-normal md:text-lg text-xs">
                    Learning Experiences
                  </h2>
                </div>
                <Timeline
                  style={{ fontFamily: "Poppins" }}
                  items={[
                    {
                      color: "gray",
                      children: (
                        <div className="ml-3 md:mb-2">
                          <h2 className="text-white font-semibold md:text-sm text-[10px]">
                            Kampus Merdeka - Magang Studi Independen
                            Bersertifikat
                          </h2>
                          <p className="text-white/50 md:text-xs text-[10px] mt-2 mb-2">
                            at Binar Academy - Front End JavaScript
                          </p>
                          <div className="flex items-center">
                            <BsCalendarCheckFill
                              size={18}
                              className="text-gray-200/80 mr-2"
                            />
                            <p className="text-gray-200/80 md:text-xs text-[10px] font-semibold">
                              August - December 2022
                            </p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      color: "gray",
                      children: (
                        <div className="ml-3 md:mb-2">
                          <h2 className="text-white font-semibold md:text-sm text-[10px]">
                            Bootcamp OrangSiber X Progate
                          </h2>
                          <p className="text-white/50 md:text-xs text-[10px] mt-2 mb-2">
                            Web Developer Path
                          </p>
                          <div className="flex items-center">
                            <BsCalendarCheckFill
                              size={18}
                              className="text-gray-200/80 mr-2"
                            />
                            <p className="text-gray-200/80 md:text-xs text-[10px] font-semibold">
                              July - August 2021
                            </p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      color: "gray",
                      children: (
                        <div className="ml-3">
                          <h2 className="text-white font-semibold md:text-xs text-[7px]">
                            Competition “Mile Zero Project Competition : Driving
                            Economic Innovation and Sustainabilitiy in
                            Challenging Times With Al”
                          </h2>
                          <p className="text-white/50 md:text-xs text-[10px] mt-2 mb-2">
                            Competition Participant
                          </p>
                          <div className="flex items-center">
                            <BsCalendarCheckFill
                              size={18}
                              className="text-gray-200/80 mr-2"
                            />
                            <p className="text-gray-200/80 md:text-xs text-[8px] font-semibold">
                              December 2020 - January 2021
                            </p>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="group [perspective:1000px]">
            <div className="relative h-full w-full rounded-xln shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
              <div className="absolute md:h-[450px] h-[400px] md:w-[350px] w-[280px] bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] pt-6 px-7 rounded-xl">
                <div className="grid grid-cols-1 place-items-center md:mt-16 mt-10">
                  <FcGraduationCap className="text-[160px] md:text-[180px]" />
                  <h1 className="text-white font-bold text-3xl mt-10">
                    Education
                  </h1>
                </div>
              </div>
              <div className="md:h-[450px] h-[400px] md:w-[350px] w-[280px] bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] pt-6 px-7 rounded-xl [transform:rotateY(-180deg)] [backface-visibility:hidden]">
                <div className="mb-10 flex items-center justify-center">
                  <IoIosSchool className="text-gray-400 mr-3 text-[20px] md:text-[32px]" />
                  <h2 className="text-white font-normal md:text-lg text-xs">
                    Education
                  </h2>
                </div>
                <Timeline
                  style={{ fontFamily: "Poppins" }}
                  items={[
                    {
                      color: "gray",
                      children: (
                        <div className="ml-3 mb-2">
                          <h2 className="text-white font-semibold md:text-sm text-[10px]">
                            University of Singaperbangsa Karawang
                          </h2>
                          <p className="text-white/50 md:text-xs text-[10px] my-2">
                            Information System
                          </p>
                          <div className="flex items-center">
                            <BsCalendarCheckFill
                              size={18}
                              className="text-gray-200/80 mr-2"
                            />
                            <p className="text-gray-200/80 md:text-xs text-[10px] font-semibold">
                              2020 - Present
                            </p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      color: "gray",
                      children: (
                        <div className="ml-3">
                          <h2 className="text-white font-semibold md:text-sm text-[10px]">
                            SMAN 1 Citeureup
                          </h2>
                          <p className="text-white/50 md:text-xs text-[10px] my-2">
                            Science Class
                          </p>
                          <div className="flex items-center">
                            <BsCalendarCheckFill
                              size={18}
                              className="text-gray-200/80 mr-2"
                            />
                            <p className="text-gray-200/80 md:text-xs text-[10px] font-semibold">
                              2017 - 2020
                            </p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      color: "gray",
                      children: (
                        <div className="ml-3">
                          <h2 className="text-white font-semibold md:text-sm text-[10px] mb-2">
                            SMPN 3 Citeureup
                          </h2>
                          <div className="flex items-center">
                            <BsCalendarCheckFill
                              size={18}
                              className="text-gray-200/80 mr-2"
                            />
                            <p className="text-gray-200/80 md:text-xs text-[10px] font-semibold">
                              2014 - 2017
                            </p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      color: "gray",
                      children: (
                        <div className="ml-3">
                          <h2 className="text-white font-semibold md:text-sm text-[10px] mb-2">
                            SDN 1 Leuwinutug
                          </h2>
                          <div className="flex items-center">
                            <BsCalendarCheckFill
                              size={18}
                              className="text-gray-200/80 mr-2"
                            />
                            <p className="text-gray-200/80 md:text-xs text-[10px] font-semibold">
                              2008 - 2014
                            </p>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="group [perspective:1000px]">
            <div className="relative h-full w-full rounded-xln shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute md:h-[450px] h-[400px] md:w-[350px] w-[280px] bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] pt-6 px-7 rounded-xl">
                <div className="grid grid-cols-1 place-items-center md:mt-16 mt-10">
                  <FcConferenceCall className="text-[160px] md:text-[180px]" />
                  <h1 className="text-white font-bold text-3xl mt-10">
                    Organization
                  </h1>
                </div>
              </div>
              <div className="md:h-[450px] h-[400px] md:w-[350px] w-[280px] bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] pt-6 px-7 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="mb-10 flex items-center justify-center">
                  <IoPeopleCircleSharp className="text-gray-400 mr-3 text-[20px] md:text-[32px]" />
                  <h2 className="text-white font-normal md:text-lg text-xs">
                    Organization
                  </h2>
                </div>
                <Timeline
                  style={{ fontFamily: "Poppins" }}
                  items={[
                    {
                      color: "gray",
                      children: (
                        <div className="ml-3 mb-2">
                          <h2 className="text-white font-semibold md:text-sm text-[10px]">
                            Himpunan Mahasiswa Sistem Informasi Universitas
                            Singaperbangsa Karawang (HIMSIKA)
                          </h2>
                          <div className="my-2">
                            <ul className="text-gray-200/50 md:text-[10px] text-[7px]">
                              <li>
                                &#8226; Head of Dept. Keahlian at Edukasi
                                Division
                              </li>
                              <li>
                                &#8226; Chief Executive in Event `Education Fair
                                2022`
                              </li>
                            </ul>
                          </div>
                          <div className="flex items-center">
                            <BsCalendarCheckFill
                              size={18}
                              className="text-gray-200/80 mr-2"
                            />
                            <p className="text-gray-200/80 md:text-xs text-[8px] font-semibold">
                              February 2022 - November 2022
                            </p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      color: "gray",
                      children: (
                        <div className="ml-3">
                          <h2 className="text-white font-semibold md:text-sm text-[10px]">
                            Sports Extracurricular of SMAN 1 Citeureup
                          </h2>
                          <p className="text-white/50 md:text-xs text-[10px] my-2">
                            Branch Badminton Coordinator
                          </p>
                          <div className="flex items-center">
                            <BsCalendarCheckFill
                              size={18}
                              className="text-gray-200/80 mr-2"
                            />
                            <p className="text-gray-200/80 md:text-xs text-[10px] font-semibold">
                              June 2018 - June 2019
                            </p>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
