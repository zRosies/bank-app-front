import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-secondary text-white px-5 pt-4 pb-1">
        <div className="flex gap-2 justify-end self-end">
          <a href="www.instagram.com">
            {/* @ts-ignore */}
            <FaInstagram className="w-6 h-6" />
          </a>
          <a>
            {/* @ts-ignore */}
            <FaYoutube className="w-6 h-6" />
          </a>
          <a>
            {/* @ts-ignore */}
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-center my-2 text-[0.7rem]">
          S7 Bank | 2024 © | All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
