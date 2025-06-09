import { motion } from "framer-motion";
import { BsCalendarCheckFill } from "react-icons/bs";

import "./experience.css";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

// DATA PENGALAMAN KERJA
const experiences = [
  {
    company: "Astana Group",
    logo: (
      <img
        src="/images/astana.png"
        alt="Astana Group"
        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain rounded-xl bg-white p-2"
      />
    ),
    role: "IT Programmer",
    period: "Aug 2024 - June 2025 · 10 months",
    location: "Jakarta Selatan, Jakarta Raya, Indonesia",
    status: "Internship", // <-- Tambahkan status
    details: [
      "Maintaining project with different stack which is Single Sign On and Driving Range App (Javascript Stack) and AR AP Monitoring App (Laravel Stack).",
      "Refined user interfaces to ensure a seamless and intuitive user experience.",
      "Enhanced application performance by optimizing both frontend interfaces and backend services.",
      "Improved backend services for better reliability, scalability, and efficiency.",
      "Identified and resolved issues in both frontend and backend components to ensure smooth application operation.",
      "Refactored existing code to improve maintainability and readability.",
      "Worked closely with cross-functional teams to implement changes and ensure alignment with project goals.",
    ],
  },
  {
    company: "M-Knows Consulting",
    logo: (
      <img
        src="/images/mknows.png"
        alt="M-Knows Consulting"
        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain rounded-xl bg-white p-2"
      />
    ),
    role: "Frontend Web Developer",
    period: "Aug 2023 - Dec 2023 · 5 months",
    location: "Tangerang Selatan, Banten, Indonesia",
    status: "Internship", // <-- Tambahkan status
    details: [
      "Developed the kampusgratis.id Learning Management System (LMS) website and developed kampusgratis admin website using NextJS and TypeScript.",
      "Integrated Nx monorepo for enhanced efficiency in development.",
      "Employed Recoil and React Query for state management in the application.",
      "Utilized Tailwind, Headless UI, and shadcn UI as CSS frameworks to enhance the front-end user experience.",
      "Implemented appropriate sitemap and meta tags to enhance SEO performance.",
    ],
  },
  {
    company: "Binar Academy",
    logo: (
      <img
        src="/images/binar.png"
        alt="Binar Academy"
        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain rounded-xl bg-white p-2"
      />
    ),
    role: "Front End Javascript",
    period: "Aug 2022 - Dec 2022 · 5 months",
    location: "Study Independent Program on MSIB Kampus Merdeka Batch 3",
    status: "Study Independent", // <-- Tambahkan status
    details: [
      "Learn about Introduction to Web Developer such as HTML, CSS, Javascript, Layouting, Responsive Design, CSS Framework and also learn how to use GIT in work cycle programming.",
      "Learn about Data Structure, Operator & Expression, Basic Algorithm, and DOM in Javascript.",
      "Learn to understand the concept of Object Oriented Programming in Node.js script.",
      "Learn about React.js from basic, styling, function & class components, asynchronous, and how to consume APIs.",
      "Learn about authentication and authorization.",
      "Learn about Redux State Management and implementation into APIs.",
      "Learn how to deploy projects and also an introduction to web sockets and containerization.",
      "Complete the final project in making a website based on the React.js Framework.",
    ],
  },
];

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
        {experiences.map((exp, index) => (
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
              <div className="absolute md:h-[450px] h-[400px] md:w-[350px] w-[280px] bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] pt-16 px-7 rounded-xl flex flex-col items-center justify-start">
                <div className="flex flex-col items-center justify-center">
                  {exp.logo}
                  <h1 className="text-white font-bold text-2xl md:text-3xl mt-6 text-center">
                    {exp.company}
                  </h1>
                  <h2 className="text-white/80 font-semibold text-lg md:text-xl mt-2 text-center">
                    {exp.role}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    <BsCalendarCheckFill className="text-gray-400" />
                    <span className="text-xs text-gray-200">{exp.period}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1 text-center">
                    {exp.location}
                  </div>
                  {/* Badge hanya di front */}
                  <span
                    className={`absolute bottom-6 px-3 py-1 rounded-full text-xs font-bold shadow-md ${
                      exp.status === "Internship"
                        ? "bg-blue-600 text-white"
                        : "bg-green-600 text-white"
                    }`}
                  >
                    {exp.status}
                  </span>
                </div>
              </div>
              {/* BACK */}
              <div className="md:h-[450px] h-[400px] md:w-[350px] w-[280px] bg-gradient-to-b from-[#121221] via-[#22222e] to-[#1e1e28] pt-6 px-7 rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto scrollbar-custom flex flex-col">
                <h2 className="text-white font-bold text-lg mb-2 text-center">
                  {exp.role}
                </h2>
                <h3 className="text-white/80 font-semibold text-base mb-2 text-center">
                  {exp.company}
                </h3>
                <ul className="list-disc ml-4 mt-2 mb-5 text-xs text-gray-300 space-y-2">
                  {exp.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
