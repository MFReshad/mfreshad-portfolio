import React from "react";
import GithubIcon from "../../../public/github_icon.svg";
import LinkedinIcon from "../../../public/_linkedin_.svg";
import FacebookIcon from "../../../public/_facebook_.svg";
import YoutubeIcon from "../../../public/_youtube_.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2B7A78] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-wor gap-4 ">
          <Link href="https://github.com/MFReshad">
            <Image src={GithubIcon} alt="Github icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/mfreshad/">
            <Image src={LinkedinIcon} alt="Linkedin icon" />
          </Link>
          <Link href="https://facebook.com/mfreshad">
            <Image src={FacebookIcon} alt="Facebook icon" />
          </Link>
          <Link href="https://www.youtube.com/@mfreshad/playlists">
            <Image src={YoutubeIcon} alt="Youtube icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col ">
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-white block mb-2 text-sm font-medium "
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder:-[#9CA2A9] text-gray-100 text-sm rouded-lg block w-full p-2.5 "
              placeholder="reshad5646@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block  mb-2 text-sm font-medium "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder:-[#9CA2A9] text-gray-100 text-sm rouded-lg block w-full p-2.5 "
              placeholder="Just say hi"
            />
          </div>
          <div className="mb-6 ">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg black w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-[#2B7A78] hover:bg-[#3AAFA9] text-white font-medium py-2.5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
