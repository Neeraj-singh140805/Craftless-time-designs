import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const projectsData = [
  { id: 1, title: "Project 1", category: "Web Design", img: "image2.png", description: "A creative web design project" },
  { id: 2, title: "Project 2", category: "UI/UX", img: "image3.png", description: "UI/UX redesign for a mobile app" },
  { id: 3, title: "Project 3", category: "Branding", img: "image4.png", description: "Brand identity and design" },
  { id: 4, title: "Project 4", category: "Illustration", img: "image5.png", description: "Digital illustration artwork" },
  { id: 5, title: "Project 5", category: "Photography", img: "image6.png", description: "Creative photography collection" },
  { id: 6, title: "Project 6", category: "Graphic Design", img: "image7.png", description: "Graphic design for marketing" },
  { id: 7, title: "Project 7", category: "Animation", img: "image8.png", description: "2D animation project" },
  { id: 8, title: "Project 8", category: "Motion Graphics", img: "image9.png", description: "Motion graphics for social media" },
  { id: 9, title: "Project 9", category: "Print Design", img: "image10.png", description: "Print design for branding" },
];

const categories = ["All", "Web Design", "UI/UX", "Branding", "Illustration", "Photography", "Graphic Design", "Animation", "Motion Graphics", "Print Design"];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projectsData.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="ProjectsContainer">
      {/* Category Filter */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="ProjectsGrid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="ProjectCard">
            <img src={project.img} alt={project.title} className="ProjectImg" />
            <div className="overlay">
              <p>{project.description}</p>
              <span>{project.category}</span>
              <Link to={`/projects/${project.id}`} className="viewBtn">View Project</Link>
            </div>
            <div className="ProjectInfo">
              <h2>{project.title}</h2>
              <h3 className="category">{project.category}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
