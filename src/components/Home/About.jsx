import { motion } from "framer-motion";
import { FcGraduationCap, FcConferenceCall } from "react-icons/fc";
import { BsCalendarCheckFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLocationSharp, IoSchoolSharp } from "react-icons/io5";
import {
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaLaravel,
} from "react-icons/fa";
import {
  SiRedux,
  SiReactquery,
  SiNx,
  SiTypescript,
  SiNextdotjs,
  SiNuxtdotjs,
  SiExpress,
  SiSequelize,
  SiPostgresql,
  SiMysql,
  SiDbeaver,
  SiPostman,
  SiAntdesign,
  SiTailwindcss,
  SiShadcnui,
  SiAxios,
  SiFirebase,
  SiJest,
  SiZod, // Tambahkan Zod
  SiBootstrap, // Tambahkan Bootstrap
  SiPhp, // Tambahkan PHP
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb"; // Tambahkan Framer Motion
import { VscVscodeInsiders } from "react-icons/vsc";
import person from "../../assets/IMG-20191222-baru.jpg";

const educationData = [
  {
    title: "University of Singaperbangsa Karawang",
    org: "Majoring Information System, GPA: 3.91",
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
];

const organizationData = [
  {
    title: "HIMSIKA Universitas Singaperbangsa Karawang",
    org: "Head of Dept. Keahlian at Edukasi Division",
    desc: [
      "Responsible for managing the Association's activities in accommodating the interests and talents of students' scientific talents within the scope of Information Systems.",
      "In charge of implementing the Work Program that is involved in accommodating the interests and talents of scientific talents of students within the scope of Information Systems.",
      'Became the Chief Executive of the Event called "Education Fair 2022".',
      "Responsible for the entire series of implementation of the Education Fair 2022 event.",
      "Responsible for creating the overall concept of the Education Fair 2022 event.",
      "In charge of directing the committee members of the Education Fair 2022 event.",
    ],
    date: "February 2022 - November 2022",
  },
  {
    title: "Sports Extracurricular of SMAN 1 Citeureup",
    org: "Branch Badminton Coordinator",
    desc: [
      "Responsible for organizing training activities in Badminton",
      "Responsible for organizing the participation of members in several competitions",
      "Responsible for directing active members in Badminton",
    ],
    date: "June 2018 - June 2019",
  },
];

const techStack = [
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "React.js", icon: <FaReact className="text-sky-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "React Query", icon: <SiReactquery className="text-pink-500" /> },
  { name: "Monorepo", icon: <SiNx className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Vue.js", icon: <FaVuejs className="text-green-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "Nuxt.js", icon: <SiNuxtdotjs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "Sequelize.js", icon: <SiSequelize className="text-blue-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-yellow-500" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-500" /> }, // Tambahkan PHP di sini
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Shadcn UI", icon: <SiShadcnui className="text-gray-200" /> },
  { name: "Ant Design", icon: <SiAntdesign className="text-blue-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-400" /> },
  { name: "Axios", icon: <SiAxios className="text-sky-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "Jest", icon: <SiJest className="text-red-500" /> },
  { name: "Zod", icon: <SiZod className="text-lime-400" /> },
  {
    name: "Framer Motion",
    icon: <TbBrandFramerMotion className="text-pink-400" />,
  }, // Framer Motion
];

const toolsStack = [
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Github", icon: <FaGithub className="text-gray-200" /> },
  { name: "Vscode", icon: <VscVscodeInsiders className="text-blue-500" /> },
  { name: "DBeaver", icon: <SiDbeaver className="text-stone-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
];

const Calendar = ({ text }) => (
  <div className="flex items-center mt-3">
    <BsCalendarCheckFill size={16} className="text-gray-400 mr-2" />
    <span className="text-gray-100 text-xs">{text}</span>
  </div>
);

const infoCards = [
  {
    icon: <FaBirthdayCake className="text-pink-300 mb-2 text-3xl" />,
    title: "Sept, 16th",
    subtitle: "2001",
  },
  {
    icon: <IoLocationSharp className="text-blue-300 mb-2 text-3xl" />,
    title: "Indonesia",
    subtitle: "Bogor",
  },
  {
    icon: <IoSchoolSharp className="text-yellow-300 mb-2 text-3xl" />,
    title: "Bachelor",
    subtitle: "Information Systems",
  },
];

export default function About() {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="md:py-24 pt-36 md:px-40 px-6"
    >
      <div className="mb-14 text-center">
        <h6 className="text-white/50 font-light text-sm">My Introduction</h6>
        <h1 className="text-white font-bold text-4xl mt-1">About Me</h1>
      </div>

      <div className="md:grid md:grid-cols-2 gap-12 items-start">
        {/* Image and Tech Stack */}

        <div className="flex flex-col items-center gap-10 mx-3 md:mx-10">
          <motion.div
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-[270px] md:w-[360px] aspect-square rounded-3xl overflow-hidden shadow-lg border-4 border-[#1b1b31]">
              <img
                src={person}
                alt="Azki Nurul Fajri"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-white/75 font-light text-sm md:text-justify text-center"
          >
            A proactive and driven individual with a strong sense of leadership,
            initiative, and responsibility. Passionate about Web Development
            with a focus on building user-friendly, visually appealing, and
            functional web applications. Eager to apply knowledge from
            Information Systems to real-world projects while continuously
            growing and learning.
          </motion.p>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold text-center">
              My experienced Tech Stack is . . .
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
            >
              {techStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="w-[70px] h-[70px] flex items-center justify-center rounded-xl bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] shadow-md"
                  title={tech.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.12, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <div className="text-2xl">{tech.icon}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Tools Stack */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold text-center">
              Experienced with various Development Tools was . . .
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
            >
              {toolsStack.map((tool, idx) => (
                <motion.div
                  key={idx}
                  className="w-[70px] h-[70px] flex items-center justify-center rounded-xl bg-gradient-to-b from-[#18182a] via-[#23233a] to-[#1e1e28] shadow-md"
                  title={tool.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.12, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <div className="text-2xl">{tool.icon}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Info & Content */}
        <div className="space-y-10 md:mt-0 mt-14">
          {/* Info Cards */}
          <motion.div
            className="grid gap-4 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] w-full text-white p-4 rounded-xl shadow-md flex md:flex-col items-center md:items-center gap-4"
              >
                <div className="text-3xl">{card.icon}</div>
                <div className="w-full flex flex-col items-center justify-end md:justify-end">
                  <h1 className="text-lg font-semibold leading-tight">
                    {card.title}
                  </h1>
                  <p className="text-xs text-white/70">{card.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] rounded-xl p-6 shadow-md"
          >
            <div className="flex items-center gap-2 mb-3">
              <FcGraduationCap className="text-xl" />
              <h3 className="text-white text-lg font-semibold">Education</h3>
            </div>
            <ul className="space-y-4">
              {educationData.map((edu, idx) => (
                <li key={idx} className="border-l-2 border-gray-700 pl-4">
                  <div className="text-white font-medium">{edu.title}</div>
                  {edu.org && (
                    <div className="text-xs text-gray-400">{edu.org}</div>
                  )}
                  <Calendar text={edu.date} />
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Organization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] rounded-xl p-6 shadow-md"
          >
            <div className="flex items-center gap-2 mb-3">
              <FcConferenceCall className="text-xl" />
              <h3 className="text-white text-lg font-semibold">Organization</h3>
            </div>
            <ul className="space-y-4">
              {organizationData.map((org, idx) => (
                <li key={idx} className="border-l-2 border-gray-700 pl-4">
                  <div className="text-white font-medium">{org.title}</div>
                  <div className="text-xs text-gray-400 font-semibold mt-1">
                    {org.org}
                  </div>
                  {org.desc && (
                    <ul className="text-xs text-gray-400 list-disc ml-4 mt-1 space-y-1">
                      {org.desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <Calendar text={org.date} />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
