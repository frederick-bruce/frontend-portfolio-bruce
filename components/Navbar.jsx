"use client";
import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Projects", href: "/projects" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <nav className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-lg font-semibold">Logo</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary hover:text-secondary"
                  >
                    {link.text}
                  </a>
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
              <RiMenuLine className="h-6 w-6 text-#132c33" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden text-accent">
          <ul className="flex flex-col space-y-4 py-4 px-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-primary hover:text-secondary"
                  onClick={toggleMenu}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
