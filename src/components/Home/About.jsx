import { FaBirthdayCake } from "react-icons/fa";
import { IoLocationSharp, IoSchoolSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import person from "../../assets/IMG-20191222-baru.jpg";

const infoCards = [
  {
    icon: (
      <FaBirthdayCake className="text-gray-400 mb-3 md:text-[32px] text-[50px]" />
    ),
    title: "Sept, 16th",
    subtitle: "2001",
  },
  {
    icon: (
      <IoLocationSharp className="text-gray-400 mb-3 md:text-[32px] text-[50px]" />
    ),
    title: "Indonesia",
    subtitle: "Bogor",
  },
  {
    icon: (
      <IoSchoolSharp className="text-gray-400 mb-3 md:text-[32px] text-[50px]" />
    ),
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
      className="md:py-24 pt-36 md:px-40"
    >
      <div className="mb-14">
        <h6 className="text-white/50 text-center font-thin text-xs">
          My Introduction
        </h6>
        <h1 className="text-white text-center font-bold text-3xl tracking-widest">
          About Me
        </h1>
      </div>

      <div className="md:grid md:grid-cols-2 md:mx-16 mx-7">
        {/* Left: Image */}
        <motion.div
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="left-about flex justify-center md:justify-start pt-10 pb-16 md:pb-0 md:pt-0"
        >
          <div className="md:w-[360px] w-[270px] md:h-[360px] h-[270px] aspect-square rounded-3xl bg-gradient-to-r from-[#1b1b31] via-[#22222d] to-transparent">
            <img
              src={person}
              alt="azki"
              width={360}
              height={360}
              className="rounded-3xl rotate-[10deg] hover:rotate-0 duration-300"
            />
          </div>
        </motion.div>

        {/* Right: Info Cards + Text */}
        <div className="right-about">
          {/* Info Cards */}
          <motion.div
            className="flex flex-wrap md:flex-nowrap md:justify-between justify-center gap-6 md:gap-[40px]"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-between md:justify-center px-8 md:px-0 md:grid bg-gradient-to-b from-[#1b1b31] to-[#22222d] text-white py-7 md:w-[10rem] w-full rounded-3xl cursor-default"
              >
                <div className="flex justify-center">{card.icon}</div>
                <div className="md:hidden ml-6 md:ml-0">
                  <h1 className="md:text-sm text-2xl font-semibold text-gray-300 text-center mb-1">
                    {card.title}
                  </h1>
                  <p className="md:text-xs text-xl font-thin text-gray-300 text-center">
                    {card.subtitle}
                  </p>
                </div>
                <h1 className="hidden md:block text-sm font-semibold text-gray-300 text-center mb-1">
                  {card.title}
                </h1>
                <p className="hidden md:block text-xs font-thin text-gray-300 text-center">
                  {card.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-white/75 font-thin text-base md:text-justify text-center mt-10"
          >
            A proactive and driven individual with a strong sense of leadership,
            initiative, responsibility, and exceptional interpersonal skills.
            Passionate about Web Development, with a focus on designing and
            building user-friendly, visually appealing, and highly functional
            web applications. Equipped with a solid foundation in Information
            Systems and eager to apply technical expertise and problem-solving
            skills to real-world projects. Committed to continuous learning and
            growth, aiming to contribute to innovative web development
            initiatives and deliver impactful solutions.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
