import "@/styles/globals.css";
import Image from "next/image";

const ProjectItem = ({ project }) => {
  const { title, description, image, technologies } = project;

  return (
    <div className="project-item">
      <Image src={image} width={200} height={200} alt={title} className="project-image" />
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((technology) => (
            <span className="technology" key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
