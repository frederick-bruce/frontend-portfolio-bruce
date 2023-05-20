import React from "react";
import ProjectItem from "@/components/Portfolio/ProjectItem";

const ProfessionalProjects = ({ projects }) => {
  return (
    <section className="professional-projects">
      <h2 className="section-title">Professional Work</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProfessionalProjects;