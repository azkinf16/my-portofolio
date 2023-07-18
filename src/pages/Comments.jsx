import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import emailjs from "@emailjs/browser";

import { HiArrowLongLeft } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io";

import { MdEmail } from "react-icons/md";
import { useEffect } from "react";

function Comments() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const form = useRef();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
    <>
      <div className="arrow-back w-5/6 mx-auto md:mt-[5%] mt-[7%]">
        <button
          onClick={() => navigate("/")}
          className=" flex items-center bg-gradient-to-b from-[#1b1b31] to-[#22222d] py-2 px-3 font-bold rounded-full hover:scale-90 duration-300 text-white"
        >
          <HiArrowLongLeft className="mr-2" />
          Back
        </button>
      </div>
      <div className="mx-12 md:mx-0 md:mt-0 mt-10">
        <h2 className="text-white/40 text-center md:text-2xl text-xl font-thin">
          Get in touch
        </h2>
        <h1 className="text-white text-center md:text-6xl text-3xl font-extrabold md:mt-5 mt-3">
          Write any message for me 😊
        </h1>
        <div className="section-wrapper md:mt-20 mt-10 md:flex">
          <div className="left hidden md:block md:w-1/2">
            <div className="flex flex-col gap-4">
              <p className="text-white text-center md:text-left md:ml-[22.5%] flex flex-col">
                <span className="text-4xl font-semibold">You can also!</span>{" "}
                Contact me with the information below.
              </p>
              <div className="py-5 px-4 bg-gradient-to-b from-[#171723] to-[#0d0d1d] w-[55%] flex items-center rounded-2xl mx-auto">
                <div className="p-2 bg-gray-600 rounded-full">
                  <MdEmail className="text-white text-2xl" />
                </div>
                <p className="text-white text-lg ml-3">azkifajri16@gmail.com</p>
              </div>
              <div className="py-5 px-4 bg-gradient-to-b from-[#171723] to-[#0d0d1d] w-[55%] flex items-center rounded-2xl mx-auto">
                <div className="p-2 bg-gray-600 rounded-full">
                  <IoLogoWhatsapp className="text-white text-2xl" />
                </div>
                <p className="text-white text-lg ml-3">087786469213</p>
              </div>
            </div>
          </div>
          <div className="middle hidden md:block">
            <div className="line h-[250px] absolute border rounded-md border-white/40 mt-10 ml-[-5%]"></div>
          </div>
          <div className="right md:w-1/2">
            <div className="grid gap-4">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-6 md:w-[80%]"
              >
                <input
                  className="p-3 rounded-lg border-none bg-[#171723] text-white placeholder:text-white/20"
                  type="text"
                  name="user_name"
                  id="user_name"
                  autoComplete="off"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  placeholder=" Input your name"
                />
                <input
                  className="p-3 rounded-lg border-none bg-[#171723] text-white placeholder:text-white/20"
                  type="email"
                  name="user_email"
                  id="user_email"
                  autoComplete="off"
                  onChange={(e) => setUserEmail(e.target.value)}
                  value={userEmail}
                  placeholder=" Input your email"
                />
                <textarea
                  className="p-3 rounded-lg border-none bg-[#171723] text-white placeholder:text-white/20"
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
                  className="md:w-1/4 w-full bg-gradient-to-b from-[#171723] to-[#0d0d1d] py-2 px-3 font-bold rounded-lg hover:scale-90 duration-300 text-white"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
