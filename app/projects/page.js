import React from "react";
import PersonalProjects from "@/components/Portfolio/PersonalProjects";
import ProfessionalProjects from "@/components/Portfolio/ProfessionalProjects";
import projectsData from "@/components/Portfolio/projectsData";
import "@/styles/globals.css";

const Portfolio = () => {
  const personalProjects = projectsData.filter(
    (project) => project.category === "personal"
  );
  const professionalProjects = projectsData.filter(
    (project) => project.category === "professional"
  );

  return (
    <div
      className="portfolio container flex mt-5 justify-evenly"
    >
      <PersonalProjects projects={personalProjects} />
      <ProfessionalProjects projects={professionalProjects} />
    </div>
  );
};

export default Portfolio;
