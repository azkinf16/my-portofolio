import { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "./Modal";

import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

export default function Navbar() {
  const [color, setColor] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeColour = () => {
    window.scrollY >= 80 ? setColor(true) : setColor(false);
  };

  window.addEventListener("scroll", changeColour);

  return (
    <div>
      <nav
        className={`${
          color ? "md:bg-[#090912] md:shadow-2xl md:py-3" : "md:bg-transparent"
        } py-7 bg-[#090912] shadow-2xl md:shadow-none fixed md:flex items-center justify-between md:px-40 px-10 z-10 w-full duration-300`}
      >
        <Link
          to="/"
          className="w-max md:text-2xl text-xl text-gray-300 cursor-default tracking-[5px] hover:tracking-[6px] duration-300"
        >
          <span className="font-black">Azki</span>Fajri
        </Link>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute md:hidden right-10 top-8 cursor-pointer"
        >
          {isOpen ? (
            <VscChromeClose className="text-white text-2xl" />
          ) : (
            <BiMenu className="text-white text-2xl" />
          )}
        </div>

        <div
          className={`md:justify-end md:flex grid mt-12 md:mt-0 md:items-center md:py-0 py-6 rounded-xl absolute md:static bg-[#090912] shadow-2xl md:bg-transparent w-[180px] md:w-auto left-0 pl-10 md:pl-0 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "left-[-590px]"
          } opacity-0 md:opacity-100 `}
        >
          <Link
            to="/about"
            className="text-white text-lg md:mt-0 tracking-wider hover:scale-110 duration-200 w-max"
          >
            About
          </Link>
          <Link
            to="/experience"
            className="text-white text-lg md:mt-0 mt-4 tracking-wider hover:scale-110 duration-200 md:ml-8 w-max"
          >
            Experiences
          </Link>
          <Link
            to="/project"
            className="text-white text-lg md:mt-0 mt-4 tracking-wider hover:scale-110 duration-200 md:ml-8 w-max"
          >
            Projects
          </Link>
          <div className="md:ml-8 ml-[-2px] mt-6 md:mt-0">
            <button
              onClick={() => setShowModal2(true)}
              className="bg-gradient-to-b from-[#1b1b31] to-[#22222d] py-2 px-3 font-bold rounded-full hover:scale-90 duration-300 text-white"
            >
              Contact&nbsp;Me
            </button>
          </div>
        </div>
        <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
          <div className="md:p-4 grid grid-cols-2 md:gap-10 gap-5">
            <div>
              <div className="flex justify-center items-center mb-3">
                <HiOutlineMail className="text-gray-300 text-3xl" />
              </div>
              <h1 className="text-gray-300 text-sm text-center">Email</h1>
              <h1 className="text-gray-300/70 text-xs text-center">
                azkifajri16@gmail.com
              </h1>
            </div>
            <div>
              <div className="flex justify-center items-center mb-3">
                <BsWhatsapp className="text-gray-300 text-3xl" />
              </div>
              <h1 className="text-gray-300 text-sm text-center">WhatsApp</h1>
              <h1 className="text-gray-300/70 text-xs text-center">
                087786469213
              </h1>
            </div>
          </div>
        </Modal>
      </nav>
    </div>
  );
}
