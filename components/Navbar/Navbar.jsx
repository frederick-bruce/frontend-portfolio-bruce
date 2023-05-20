"use client";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import Link from "next/link";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { id: "home", text: "Home", href: "/" },
    { id: "about", text: "About", href: "/about" },
    { id: "projects", text: "Projects", href: "/projects" },
    { id: "contact", text: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 m-2">
      <div className="container mx-auto px-4 -z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-semibold">Freddy.Dev</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {navLinks.map(({ id, text, href }) => (
                <li key={id}>
                  <Link
                    className="text-primary hover:text-secondary"
                    href={href}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="hover:text-accent focus:outline-none"
              onClick={toggleMenu}
            >
              <RiMenuLine className="h-6 w-6 text-accent" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden text-accent">
          <ul className="flex flex-row mb-5 justify-between py-4 px-4">
            {navLinks.map(({ id, text, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="text-primary hover:text-secondary"
                  onClick={toggleMenu}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
