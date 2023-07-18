import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { IoHandRight } from "react-icons/io5";

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
    <div id="hero">
      <div className="hero md:flex h-screen items-center md:pt-24 pt-52 max-md:mb-52 md:mb-0 md:px-40">
        <div className="heroProfile -mt-14 mx-auto lg:order-3"></div>
        <div className="md:mr-40 md:ml-4 flex md:grid my-16 justify-center gap-10 md:gap-0">
          <a
            href="https://web.facebook.com/azkinf/"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="text-white mb-9 text-4xl md:text-lg cursor-pointer hover:scale-150 duration-500" />
          </a>
          <a
            href="https://www.instagram.com/azkinf__/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="text-white mb-9 text-4xl md:text-lg cursor-pointer hover:scale-150 duration-500" />
          </a>
          <a
            href="https://github.com/azkinf16"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="text-white mb-9 text-4xl md:text-lg cursor-pointer hover:scale-150 duration-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/azkinurulfajri"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="text-white text-4xl md:text-lg cursor-pointer hover:scale-150 duration-500" />
          </a>
        </div>
        <div className="-mt-7 md:w-1/2">
          <h2 className="text-white md:text-6xl text-4xl mb-3 font-medium text-center md:text-left">
            Hello, I&#39;m
          </h2>
          <h1 className="text-white md:text-7xl text-6xl font-extrabold text-center md:text-left">
            Azki Nurul Fajri
          </h1>
          <div className="md:w-[80%] px-12 md:px-0 mt-6">
            <p className="text-white/75 text-sm text-center md:text-left">
              A College Student who was interested to Web Development,
              especially being a Front End Developer.
            </p>
          </div>
          <div className="mt-12 flex md:justify-start justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-b from-[#1b1b31] to-[#22222d] text-white py-3 px-4 rounded-xl group hover:scale-110 duration-300 flex items-center font-bold"
            >
              Say Hello{" "}
              <IoHandRight className="ml-2 group-hover:rotate-45 group-hover:text-sky-300 duration-300" />
            </button>
          </div>
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
      </div>
    </div>
  );
}
