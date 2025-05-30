import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

import Modal from "../Modal";
import "./hero.css";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (userName === "" || userEmail === "" || message === "") {
      setUserName("");
      setUserEmail("");
      setMessage("");

      Swal.fire({
        icon: "warning",
        title: "Heyy!",
        text: "Please input all the field!!",
      });
    } else {
      setTimeout(() => {
        setUserName("");
        setUserEmail("");
        setMessage("");
      }, 1500);

      emailjs
        .sendForm(
          "service_ty6kiwd",
          "template_ze7046q",
          form.current,
          "6dxoE96fDocYC4rOk"
        )
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire({
              icon: "success",
              title: "Yayyy",
              text: "Success to Send the Message!",
            });
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Message Error!! Try to Send it again!!",
            });
          }
        );
    }
  };

  return (
    <motion.div
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero md:flex md:h-screen h-full items-center justify-center md:pt-24 pt-40 px-3 md:px-40 md:pb-0 pb-10">
        <motion.div
          className="heroProfile -mt-14 mx-auto lg:order-3"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        ></motion.div>

        <motion.div
          className="md:mr-40 md:ml-4 flex md:grid my-16 justify-center gap-10 md:gap-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.a
            href="https://web.facebook.com/azkinf/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.5 }}
          >
            <BsFacebook className="text-white mb-9 text-4xl md:text-lg cursor-pointer" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/skkeyyyyy/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.5 }}
          >
            <BsInstagram className="text-white mb-9 text-4xl md:text-lg cursor-pointer" />
          </motion.a>
          <motion.a
            href="https://github.com/azkinf16"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.5 }}
          >
            <BsGithub className="text-white mb-9 text-4xl md:text-lg cursor-pointer" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/azkinurulfajri"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.5 }}
          >
            <BsLinkedin className="text-white text-4xl md:text-lg cursor-pointer" />
          </motion.a>
        </motion.div>

        <motion.div
          className="-mt-7 md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-white md:text-6xl text-4xl mb-3 font-medium text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I&#39;m
          </motion.h2>
          <motion.h1
            className="text-white md:text-7xl text-6xl font-extrabold text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Azki Nurul Fajri
          </motion.h1>
          <motion.div
            className="md:w-[80%] px-12 md:px-0 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-white/75 text-sm text-center md:text-left">
              A Person who was interested to Web Development.
            </p>
          </motion.div>
          <motion.div
            className="mt-12 flex md:justify-start justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-b from-[#1b1b31] to-[#22222d] text-white py-3 px-4 rounded-xl group hover:scale-110 duration-300 flex items-center font-bold"
            >
              Say Hello <span className="ml-2 animate-wave">👋</span>
            </button>
          </motion.div>
        </motion.div>

        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className="md:m-5">
            <h2 className="text-white/40 text-xl font-thin">Get in touch</h2>
            <h1 className="text-white text-md font-extrabold mt-2">
              Write any message for me 😊
            </h1>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 mt-6"
            >
              <input
                className="md:w-[300px] w-[250px] p-2 rounded-lg border border-gray-700 bg-[#171723] text-white placeholder:text-white/20 text-sm placeholder:text-xs"
                type="text"
                name="user_name"
                id="user_name"
                autoComplete="off"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                placeholder=" Input your name"
              />
              <input
                className="md:w-[300px] w-[250px] p-2 rounded-lg border border-gray-700 bg-[#171723] text-white placeholder:text-white/20 text-sm placeholder:text-xs"
                type="email"
                name="user_email"
                id="user_email"
                autoComplete="off"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
                placeholder=" Input your email"
              />
              <textarea
                className="md:w-[300px] w-[250px] p-2 rounded-lg border border-gray-700 bg-[#171723] text-white placeholder:text-white/20 text-sm placeholder:text-xs"
                name="message"
                id="message"
                cols="30"
                rows="5"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Write your message here ✍️"
              ></textarea>
              <button
                type="submit"
                className="md:w-[300px] w-[250px] bg-gradient-to-b from-[#171723] to-[#0d0d1d] py-2 px-3 font-bold rounded-lg hover:scale-90 duration-300 text-white"
              >
                Send
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </motion.div>
  );
}
