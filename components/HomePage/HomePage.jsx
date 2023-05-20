"use client";
import Image from "next/image";
import SocialMediaLinks from "@/components/SocialMediaLinks/SocialMediaLinks";
import "@/styles/globals.css";
import ProfileImage from "@/public/profile.jpg";
import TechStack from "@/components/TechStack/TechStack";
import { AiFillStar } from "react-icons/ai";

const star = AiFillStar;
const HomePage = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto h-screen flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:w-full lg:text-center">
          <h1 className="text-5xl font-bold mb-4">Front End React Developer</h1>
          <h2 className="text-xl mb-8">
            Hello, I&apos;m Frederick Bruce. A Dynamic Front-end React Developer
            based in Portland, Maine.
          </h2>{" "}
          <div className="container my-2 text-lg text-primary">
            <SocialMediaLinks />
            <br />
            Tech Stack 
            <TechStack />
          </div>
        </div>
        <div className="photo-container flex items-center">
          <Image
            className="object-cover object-center rounded-lg p-2"
            alt="hero"
            src={ProfileImage}
            width={300}
            height={300}
          />
          <figcaption className="caption ml-2 text-lg">
            Designing the future, one <AiFillStar color="#51C4D3"/> at a time.
          </figcaption>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
