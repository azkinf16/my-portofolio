import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className="md:mt-16 mt-36 mb-7 md:px-40">
        <div className="md:flex md:justify-between">
          <div className="left-footer md:w-1/2">
            <h1 className="text-white text-center md:text-left font-extrabold md:text-7xl text-6xl mb-2">
              Thank&#39;s
            </h1>
            <h1 className="text-white font-[100] text-center md:text-left md:text-5xl text-4xl">
              for coming in !
            </h1>
            <p className="mt-5 text-gray-600 text-xs text-center md:text-left md:w-[62%] mx-[45px] md:mx-0">
              This is a simple project that I made from my previous learning
              period, I hope you can provide criticism and suggestions or convey
              anything to me by clicking the{" "}
              <a
                href="#hero"
                className="text-gray-500 cursor-pointer hover:text-white duration-500"
              >
                &uml;Say Hello&uml;
              </a>{" "}
              button above &#128513;
            </p>
          </div>
          <div className="right-footer my-20 md:mt-0">
            <div className="flex md:justify-between justify-center items-center h-full gap-10">
              <a
                href="https://web.facebook.com/azkinf/"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook className="text-white text-3xl cursor-pointer hover:scale-150 duration-500" />
              </a>
              <a
                href="https://www.instagram.com/s_keyyyyy/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram className="text-white text-3xl cursor-pointer hover:scale-150 duration-500" />
              </a>
              <a
                href="https://github.com/azkinf16"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="text-white text-3xl cursor-pointer hover:scale-150 duration-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/azkinurulfajri"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="text-white text-3xl cursor-pointer hover:scale-150 duration-500" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:mt-10 w-full">
          <div className="md:flex md:justify-center md:items-center grid place-content-center">
            <h6 className="text-white mr-3">Fully Created by</h6>
            <p className="text-2xl text-gray-400 cursor-default tracking-[5px]">
              <span className="font-black">Azki</span>Fajri
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
