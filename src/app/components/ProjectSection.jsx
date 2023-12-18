"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 desc",
    image: "images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mfreshad",
    previewUrl: "https://youtube.com/@mfreshad",
  },
  {
    id: 2,
    title: "MeU | Android Project",
    description: "meU is an android application as a mental assistent.",
    image: "images/projects/2.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/mfreshad/meU",
    previewUrl: "https://youtu.be/ru3QEyvmANs",
  },
  {
    id: 3,
    title: "CheckInn | Desktop Application",
    description: "Hotel Management System | Java | JavaFx | MySql",
    image: "images/projects/3.jpg",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/MFReshad/CheckInn",
    previewUrl: "https://youtu.be/P7E23oxghlQ",
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectData.filter((project) => 
    project.tag.includes(tag)
  );
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
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
