import { Timeline } from "antd";
import { motion } from "framer-motion";

import { HiLightBulb } from "react-icons/hi";
import { IoIosSchool } from "react-icons/io";
import { IoPeopleCircleSharp } from "react-icons/io5";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FcIdea, FcGraduationCap, FcConferenceCall } from "react-icons/fc";

import "./experience.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

export default function Experience() {
  return (
    <motion.div
      id="exp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="exp md:py-24 pt-36 md:px-40"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-14"
      >
        <h6 className="text-white/50 text-center font-thin text-xs">
          My Journey
        </h6>
        <h1 className="text-white text-center font-bold text-3xl tracking-widest">
          Experiences
        </h1>
      </motion.div>

      {/* Card Section */}
      <div className="grid md:grid-cols-3 place-items-center gap-10 md:gap-20 md:px-10">
        {/* 1: Work & Learning */}
        {[FcIdea, FcGraduationCap, FcConferenceCall].map((Icon, index) => (
          <motion.div
            key={index}
            className="group [perspective:1000px]"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* FRONT */}
              <div className="absolute md:h-[450px] h-[400px] md:w-[350px] w-[280px] bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] pt-6 px-7 rounded-xl">
                <div className="grid grid-cols-1 place-items-center md:mt-16 mt-10">
                  <Icon className="text-[160px] md:text-[180px]" />
                  <h1 className="text-white font-bold text-2xl md:text-3xl mt-10">
                    {["Work & Learning", "Education", "Organization"][index]}
                  </h1>
                </div>
              </div>

              {/* BACK */}
              <div className="md:h-[450px] h-[400px] md:w-[350px] w-[280px] bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] pt-6 px-7 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto scrollbar-custom">
                <div className="mb-10 flex items-center justify-center">
                  {[HiLightBulb, IoIosSchool, IoPeopleCircleSharp][index]({
                    className: "text-gray-400 mr-3 text-[20px] md:text-[32px]",
                  })}
                  <h2 className="text-white font-normal md:text-sm text-xs">
                    {
                      [
                        "Work & Learning Experiences",
                        "Education",
                        "Organization",
                      ][index]
                    }
                  </h2>
                </div>
                <Timeline
                  style={{ fontFamily: "Poppins" }}
                  items={getTimelineItems(index)}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function getTimelineItems(index) {
  const calendar = (text) => (
    <div className="flex items-center">
      <BsCalendarCheckFill size={18} className="text-gray-200/80 mr-2" />
      <p className="text-gray-200/80 md:text-xs text-[10px] font-semibold">
        {text}
      </p>
    </div>
  );

  const timelineData = [
    // Work & Learning
    [
      {
        title: "IT Programmer Intern",
        org: "at Astana Group - Full Stack Web Developer",
        date: "August 2024 - March 2025",
      },
      {
        title: "Kampus Merdeka - Magang Bersertifikat",
        org: "at MKnows Consulting - Front End Web Developer",
        date: "August - December 2023",
      },
      {
        title: "Kampus Merdeka - Studi Independen Bersertifikat",
        org: "at Binar Academy - Front End JavaScript",
        date: "August - December 2022",
      },
    ],

    // Education
    [
      {
        title: "University of Singaperbangsa Karawang",
        org: "Majoring Information System",
        date: "2020 - 2024",
      },
      {
        title: "SMAN 1 Citeureup",
        org: "Science Class",
        date: "2017 - 2020",
      },
      {
        title: "SMPN 3 Citeureup",
        org: "",
        date: "2014 - 2017",
      },
      {
        title: "SDN 1 Leuwinutug",
        org: "",
        date: "2008 - 2014",
      },
    ],

    // Organization
    [
      {
        title: "HIMSIKA Universitas Singaperbangsa Karawang",
        org: [
          "• Head of Dept. Keahlian at Edukasi Division",
          "• Chief Executive in Event `Education Fair 2022`",
        ],
        date: "February 2022 - November 2022",
      },
      {
        title: "Sports Extracurricular of SMAN 1 Citeureup",
        org: "Branch Badminton Coordinator",
        date: "June 2018 - June 2019",
      },
    ],
  ];

  return timelineData[index].map((item) => ({
    color: "gray",
    children: (
      <div className="ml-3 mb-2">
        <h2 className="text-white font-semibold md:text-sm text-[10px]">
          {item.title}
        </h2>
        {Array.isArray(item.org) ? (
          <ul className="text-gray-200/50 md:text-[10px] text-[7px] my-2">
            {item.org.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        ) : (
          item.org && (
            <p className="text-white/50 md:text-xs text-[10px] my-2">
              {item.org}
            </p>
          )
        )}
        {calendar(item.date)}
      </div>
    ),
  }));
}
