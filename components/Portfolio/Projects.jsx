import Image from "next/image";
import Link from "next/link";
import React from "react";
import Placeholder from "../../public/placeholder-image.png";
import ProjectItem from "./ProjectItem";
import AISum from "../../public/assets/aisum.png";
import Filmpire from "../../public/assets/filmpire.jpg";
import Property from "../../public/assets/property.jpg";
import Twitch from "../../public/assets/twitch.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2">
        <p className="text-xl tracking-widest uppercase text-primary">
          Projects
        </p>
        <h2 className="py-4 text">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={Property}
            projectUrl="/property"
            tech="React JS"
          />
          <ProjectItem
            title="AI Summarizer"
            backgroundImg={AISum}
            projectUrl="/aisummarize"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={Filmpire}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={Twitch}
            projectUrl="/twitch"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
