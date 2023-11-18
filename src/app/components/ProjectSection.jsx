import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 desc",
    image: "images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mfreshad",
    previewUrl: "https://youtube.com/@mfreshad",
  },
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 desc",
    image: "images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mfreshad",
    previewUrl: "https://youtube.com/@mfreshad",
  },
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 desc",
    image: "images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mfreshad",
    previewUrl: "https://youtube.com/@mfreshad",
  },
];
const ProjectSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div>
        <button>All</button>
        <button>Web</button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {" "}
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
