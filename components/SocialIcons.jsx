import React from "react";
import Link from "next/link";
import { AiFillStar, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = ({ linkedinUrl, githubUrl, contactUrl }) => {
  return (
    <div className="flex space-x-6 justify-center mt-2">
      <a href={linkedinUrl} target="_blank" rel="noreferrer">
        <div className="rounded-full shadow-lg shadow-accent p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaLinkedinIn />
        </div>
      </a>
      <a href={githubUrl} target="_blank" rel="noreferrer">
        <div className="rounded-full shadow-lg shadow-accent p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaGithub />
        </div>
      </a>
      <Link href={contactUrl}>
        <div className="rounded-full shadow-lg shadow-accent p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <AiOutlineMail />
        </div>
      </Link>
    </div>
  );
};

export default SocialIcons;
