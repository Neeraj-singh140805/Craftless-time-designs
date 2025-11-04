import React from "react";
import { useParams, Link } from "react-router-dom";

const projectsData = [
  { 
    id: 1, 
    title: "Project 1", 
    category: "Web Design", 
    img: "/image2.png", 
    year: "2024",
    tools: ["HTML5", "CSS3", "React", "Figma"],
    description: [
      "Designed a responsive website with modern layouts",
      "Implemented mobile-first design principles",
      "Focused on accessibility and cross-browser support",
      "Created interactive UI elements using React"
    ]
  },
  { 
    id: 2, 
    title: "Project 2", 
    category: "UI/UX", 
    img: "/image3.png", 
    year: "2023",
    tools: ["Figma", "Adobe XD", "InVision"],
    description: [
      "Redesigned an e-commerce app for better user flow",
      "Improved checkout process to reduce cart abandonment",
      "Introduced a fresh color palette and iconography",
      "Enhanced usability with intuitive navigation"
    ]
  },
  { 
    id: 3, 
    title: "Project 3", 
    category: "Branding", 
    img: "/image4.png", 
    year: "2024",
    tools: ["Illustrator", "Photoshop", "Canva"],
    description: [
      "Developed a complete brand identity system",
      "Created logo, typography, and color palette",
      "Designed social media and print templates",
      "Ensured consistency across brand guidelines"
    ]
  },
  { 
    id: 4, 
    title: "Project 4", 
    category: "Illustration", 
    img: "/image5.png", 
    year: "2022",
    tools: ["Procreate", "Illustrator", "Photoshop"],
    description: [
      "Created digital illustrations for storytelling",
      "Designed characters with unique visual styles",
      "Explored vibrant color schemes and shading",
      "Prepared assets for social media campaigns"
    ]
  },
  { 
    id: 5, 
    title: "Project 5", 
    category: "Photography", 
    img: "/image6.png", 
    year: "2023",
    tools: ["DSLR", "Lightroom", "Photoshop"],
    description: [
      "Captured nature, portraits, and urban lifestyle",
      "Applied composition techniques like rule of thirds",
      "Edited photos for lighting and color balance",
      "Built a portfolio collection for exhibitions"
    ]
  },
  { 
    id: 6, 
    title: "Project 6", 
    category: "Graphic Design", 
    img: "/image7.png", 
    year: "2024",
    tools: ["Illustrator", "Photoshop", "Canva"],
    description: [
      "Designed marketing materials including posters and flyers",
      "Focused on bold typography and strong visuals",
      "Ensured brand consistency across all assets",
      "Created templates for future campaigns"
    ]
  },
  { 
    id: 7, 
    title: "Project 7", 
    category: "Animation", 
    img: "/image8.png", 
    year: "2022",
    tools: ["Adobe Animate", "After Effects", "Premiere Pro"],
    description: [
      "Produced a 2D animation short film",
      "Worked on character design and smooth motion",
      "Used frame-by-frame techniques for storytelling",
      "Added sound effects and background music"
    ]
  },
  { 
    id: 8, 
    title: "Project 8", 
    category: "Motion Graphics", 
    img: "/image9.png", 
    year: "2023",
    tools: ["After Effects", "Premiere Pro", "Illustrator"],
    description: [
      "Created motion graphics for social media ads",
      "Used kinetic typography and dynamic transitions",
      "Synced visuals with background music",
      "Delivered engaging content for marketing campaigns"
    ]
  },
  { 
    id: 9, 
    title: "Project 9", 
    category: "Print Design", 
    img: "/image10.png", 
    year: "2022",
    tools: ["InDesign", "Illustrator", "Photoshop"],
    description: [
      "Designed brochures, business cards, and posters",
      "Focused on minimal layouts with strong typography",
      "Applied effective use of color theory",
      "Created a unified brand identity across print media"
    ]
  },
];

function ProjectPage() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) return <h2>Project not found!</h2>;

  return (
    <div className="ProjectPage">
      <Link to="/projects" className="backBtn">← Back to Projects</Link>
      
      <img src={project.img} alt={project.title} className="ProjectPageImg" />
      
      <h1>{project.title}</h1>
      <h3>{project.category}</h3>
      
      <p><strong>Year:</strong> {project.year}</p>
      <p><strong>Tools:</strong> {project.tools.join(", ")}</p>
      
      <h4>Description:</h4>
      <ul>
        {project.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectPage;
