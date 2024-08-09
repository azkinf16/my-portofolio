import person from "../../assets/IMG-20191222-baru.jpg";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLocationSharp, IoSchoolSharp } from "react-icons/io5";

export default function About() {
  return (
    <div id="about">
      <div className="md:py-24 pt-36 md:px-40">
        <div className="mb-14">
          <h6 className="text-white/50 text-center font-thin text-xs">
            My Introduction
          </h6>
          <h1 className="text-white text-center font-bold text-3xl tracking-widest">
            About Me
          </h1>
        </div>
        <div className="md:grid md:grid-cols-2 md:mx-16 mx-7">
          <div className="left-about flex justify-center md:justify-start pt-10 pb-16 md:pb-0 md:pt-0">
            <div className="md:w-[360px] w-[270px] md:h-[360px] h-[270px] aspect-square rounded-3xl bg-gradient-to-r from-[#1b1b31] via-[#22222d] to-transparent">
              <img
                src={person}
                alt="azki"
                width={360}
                height={360}
                className="rounded-3xl rotate-[10deg] hover:rotate-0 duration-300"
              />
            </div>
          </div>
          <div className="right-about">
            <div className="mt-10">
              <div className="flex flex-wrap md:flex-nowrap md:justify-between justify-center gap-6 md:gap-[40px]">
                <div className="flex items-center justify-between md:justify-center px-8 md:px-0 md:grid bg-gradient-to-b from-[#1b1b31] to-[#22222d] text-white py-7 md:w-[10rem] w-full rounded-3xl hover:scale-110 duration-200 cursor-default">
                  <div className="flex justify-center">
                    <FaBirthdayCake className="text-gray-400 mb-3 md:text-[32px] text-[50px]" />
                  </div>
                  <div className="md:hidden ml-6 md:ml-0">
                    <h1 className="md:text-sm text-2xl font-semibold text-gray-300 text-center mb-1">
                      Sept, 16th
                    </h1>
                    <p className="md:text-xs text-xl font-thin text-gray-300 text-center">
                      2001
                    </p>
                  </div>
                  <h1 className="hidden md:block text-sm font-semibold text-gray-300 text-center mb-1">
                    Sept, 16th
                  </h1>
                  <p className="hidden md:block text-xs font-thin text-gray-300 text-center">
                    2001
                  </p>
                </div>
                <div className="flex items-center justify-between md:justify-center px-8 md:px-0 md:grid bg-gradient-to-b from-[#1b1b31] to-[#22222d] text-white py-7 md:w-[10rem] w-full rounded-3xl hover:scale-110 duration-200 cursor-default">
                  <div className="flex justify-center">
                    <IoLocationSharp className="text-gray-400 mb-3 md:text-[32px] text-[50px]" />
                  </div>
                  <div className="md:hidden ml-6 md:ml-0">
                    <h1 className="md:text-sm text-2xl font-semibold text-gray-300 text-center mb-1">
                      Indonesia
                    </h1>
                    <p className="md:text-[10px] text-sm font-thin text-gray-300 text-center">
                      Bogor - Karawang
                    </p>
                  </div>
                  <h1 className="hidden md:block text-sm font-semibold text-gray-300 text-center mb-1">
                    Indonesia
                  </h1>
                  <p className="hidden md:block text-[10px] font-thin text-gray-300 text-center">
                    Bogor - Karawang
                  </p>
                </div>
                <div className="flex items-center justify-between px-8 md:px-0 md:grid bg-gradient-to-b from-[#1b1b31] to-[#22222d] text-white p-5 md:w-[10rem] w-full rounded-3xl hover:scale-110 duration-200 cursor-default">
                  <div className="flex justify-center">
                    <IoSchoolSharp className="text-gray-400 mb-3 md:text-[32px] text-[50px]" />
                  </div>
                  <div className="md:hidden ml-6">
                    <h1 className="md:text-sm text-[10px] font-semibold text-gray-300 text-center mb-1">
                      University Of Singaperbangsa
                    </h1>
                    <p className="md:text-[10px] text-[12px] font-thin text-gray-300 text-center">
                      Karawang
                    </p>
                  </div>
                  <h1 className="hidden md:block text-sm font-semibold text-gray-300 text-center mb-1">
                    University Of Singaperbangsa
                  </h1>
                  <p className="hidden md:block text-[10px] font-thin text-gray-300 text-center">
                    Karawang
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-white/75 font-thin text-base md:text-justify text-center">
                I am a fresh graduate from Singaperbangsa Karawang University
                with strong leadership, initiative, responsibility, and social
                skills. With a keen interest in Front End Development, I am
                passionate about creating user-friendly and visually appealing
                web applications. My solid foundation in Information Systems
                drives my eagerness to apply my skills and knowledge to
                real-world projects and grow in the web development field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
