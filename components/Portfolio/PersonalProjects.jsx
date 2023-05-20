// PersonalProjects.js
import React from "react";
import ProjectItem from "@/components/Portfolio/ProjectItem";

const PersonalProjects = ({ projects }) => {
  return (
    <section className="personal-projects">
      <h2 className="section-title">Personal Work</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PersonalProjects;