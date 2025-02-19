"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "..... MeSsss🤫.....",
    description: "Mess Manager | Django",
    image: "images/projects/7.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MFReshad/Mess-Manager",
    previewUrl: "",
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Portfolio with NextJs",
    image: "images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MFReshad/mfreshad-portfolio",
    previewUrl: "https://mfreshad.vercel.app/",
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
    id: 4,
    title: "CheckInn | Desktop Application",
    description: "Hotel Management System | Java | JavaFx | MySql",
    image: "images/projects/3.jpg",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/MFReshad/CheckInn",
    previewUrl: "https://youtu.be/P7E23oxghlQ",
  },
  {
    id: 5,
    title: "My Tiimeline",
    description: "time for entertainment",
    image: "images/projects/4.JPG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MFReshad/timeline",
    previewUrl: "https://mfreshad.github.io/timeline/",
  },
  {
    id: 6,
    title: "Contact Me",
    description: "All my link's list ",
    image: "images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MFReshad/contact",
    previewUrl: "https://mfreshad.github.io/contact",
  }
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
    <section id="projects">
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
    </section>
  );
};

export default ProjectSection;
