"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SocialIcons from "../SocialIcons";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#D8E3E7");
  const [linkColor, setLinkColor] = useState("#132C33");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-transparent">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div>
          <SocialIcons
            linkedinUrl="https://www.linkedin.com/in/frederickbruce"
            githubUrl="https://www.github.com/frederick-bruce"
            contactUrl="/contact"
          />
        </div>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex space-x-6 text-xl"
          >
            <li className="cursor-pointer hover:scale-110 ease-in duration-300 hover:text-accent">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:scale-110 ease-in duration-300 hover:text-accent">
              <Link href="/about">About</Link>
            </li>

            <li className="cursor-pointer hover:scale-110 ease-in duration-300 hover:text-accent">
              <Link href="/projects">Projects</Link>
            </li>

            <li className="cursor-pointer hover:scale-110 ease-in duration-300 hover:text-accent">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-primary/70 z-50"
            : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-background p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-accent p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-secondary my-4">
              <p className="w-[85%] md:w-[90%] sm:w-[95%]py-4"></p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="cursor-pointer hover:scale-110 ease-in duration-300 hover:text-accent py-4 text-lg"
                >
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li
                  onClick={() => setNav(false)}
                  className="cursor-pointer hover:scale-110 ease-in duration-300 hover:text-accent py-4 text-lg"
                >
                  About
                </li>
              </Link>

              <Link href="/projects">
                <li
                  onClick={() => setNav(false)}
                  className="cursor-pointer hover:scale-110 ease-in duration-300 hover:text-accent py-4 text-lg"
                >
                  Projects
                </li>
              </Link>

              <Link href="/contact">
                <li
                  onClick={() => setNav(false)}
                  className="cursor-pointer hover:scale-110 ease-in duration-300 hover:text-accent py-4 text-lg"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-lg text-accent">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/frederickbruce/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-accent p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://www.github.com/frederick-bruce"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-accent p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-accent p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
