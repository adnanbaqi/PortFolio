"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CodeMe",
    description: "An API based AI code Translator capable of, transforming one code langugage to another in a go...!",
    image: "./images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adnanbaqi/CodeMe.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "NLP Engine",
    description: "An NLP engine helps computers understand and process human language, enabling tasks like text breakdown, emotion detection, translation, and answering questions. It's key for tools like chatbots and translation services",
    image: "./images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/anaquib1110/NLP_Engine",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Distributed Tranning ",
    description: "A Distributed GPU Swarm-Based Model Training System is a high-performance computing architecture designed to efficiently train machine learning models using multiple Graphics Processing Units (GPUs) distributed across a network of machines. This system leverages the combined computational power of a &apos;swarm&apos; of GPUs to accelerate the training process, making it suitable for large-scale models and extensive datasets.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adnanbaqi/Distributed-training.git",
    previewUrl: "/",
  }
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

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
          name="BackEnd"
          isSelected={tag === "Web"}
        />

      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
