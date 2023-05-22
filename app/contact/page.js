import Image from "next/image";
import React from "react";
import { AiFillStar, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ContactImg from "../../public/profile.jpg";
import "@/styles/globals.css";

const Contact = () => {
  return (
    <div className="w-full flex">
      <div className="max-w-[1240px] m-auto my-12 w-full">
       
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-secondary rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300 justify-center mx-auto"
                  src={ContactImg}
                  alt="/"
                  width={400}
                />
              </div>
              <div>
                <h2 className="py-2 text-5xl">Frederick Bruce</h2>
                <p className="text-2xl">Front-End Developer </p>
                <p className="py-4 text-lg">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-secondary text-lg">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/frederickbruce/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-secondary p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/frederick-bruce"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-secondary p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full shadow-lg shadow-secondary p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="mailto:contact@frederickbruce.me"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiOutlineMail />
                    </a>
                  </div>
                </div>
                <figcaption className="uppercase caption tracking-widest text-primary mt-20">
            Designing the future, one&nbsp; <span className="star-icon"><AiFillStar color="#51C4D3" size={32} /></span>{" "}
            &nbsp;at a time.
          </figcaption>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-secondary rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-accent"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-accent"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-accent"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-accent"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-accent"
                    rows="20"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-primary bg-secondary shadow-accent shadow-lg border-2 rounded-lg hover:text-background border-accent mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
