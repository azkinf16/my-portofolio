import { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "antd";

import projects from "../../projects.json";

import { HiArrowLongRight } from "react-icons/hi2";
import { SlGlobe } from "react-icons/sl";
import { BsGithub } from "react-icons/bs";
import { MdOutlineDoubleArrow } from "react-icons/md";

import Modal from "../Modal";

export default function Project() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(false);

  const tooltipDemo = <p className="font-semibold text-sm">Demo</p>;
  const tooltipRepo = <p className="font-semibold text-sm">Repository</p>;

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="projects md:py-24 pt-36 md:px-40"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-14"
      >
        <h6 className="text-white/50 text-center font-thin text-xs">
          My Recent
        </h6>
        <h1 className="text-white text-center font-bold text-3xl tracking-widest">
          Projects
        </h1>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 place-items-center mx-10">
        {projects &&
          projects.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="cursor-pointer shadow-md"
              onClick={() => {
                setShowModal(true);
                setModalData(data);
              }}
            >
              <div className="bg-gradient-to-b from-[#18182a] via-[#22222e] to-[#1e1e28] pt-4 px-5 pb-5 rounded-lg transition-transform duration-200 group hover:scale-[1.05]">
                <img
                  src={data.image}
                  alt="imgProjects"
                  className="rounded-lg w-full object-cover h-[180px]"
                />
                <div className="flex justify-between items-center mt-4">
                  <h1 className="text-gray-200 font-semibold">{data.title}</h1>
                  <span className="text-white/50 text-xs flex items-center group-hover:text-white transition-all duration-300">
                    More{" "}
                    <HiArrowLongRight className="text-white/50 ml-2 group-hover:rotate-[360deg] group-hover:text-white duration-300" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Modal */}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:flex"
        >
          <img
            src={modalData.image2}
            alt="img2-4"
            width={300}
            height={300}
            className="rounded-lg hidden md:block"
          />
          <div className="relative md:ml-10 md:py-2 h-[300px]">
            <div className="mb-6">
              <h1 className="text-white font-bold text-2xl mb-3">
                {modalData.title}
              </h1>
              <p className="text-white/60 font-thin text-[15px] w-[250px]">
                {modalData.desc}
              </p>
            </div>
            <p className="text-white/80 font-semibold text-[15px] mb-3">
              Created at {modalData.created}
            </p>
            <div className="flex items-center gap-12 bottom-1 absolute">
              <div className="left">
                <p className="text-white/70 font-bold text-[10px] flex items-center">
                  Check Demo and Repository
                  <MdOutlineDoubleArrow className="ml-2" />
                </p>
              </div>
              <div className="right flex">
                <a href={modalData.demo} target="_blank" rel="noreferrer">
                  <Tooltip title={tooltipDemo} color="#1A1A2B">
                    <SlGlobe
                      size={25}
                      className="text-white/30 mr-4 hover:text-white hover:scale-110 duration-300 cursor-pointer"
                    />
                  </Tooltip>
                </a>
                <a href={modalData.repo} target="_blank" rel="noreferrer">
                  <Tooltip title={tooltipRepo} color="#1A1A2B">
                    <BsGithub
                      size={25}
                      className="text-white/30 -mr-6 hover:text-white hover:scale-110 duration-300 cursor-pointer"
                    />
                  </Tooltip>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Modal>
    </motion.div>
  );
}
