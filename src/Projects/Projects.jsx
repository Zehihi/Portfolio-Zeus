import React, { useState } from "react";
import "./Projects.css";

const projectsData = [
	{
		id: 1,
		title: "Enrollment System",
		description: "A full-stack Enrollment System project during 2nd year of college",
		tech: ["JavaFX", "MySQL", "Java"],
		image: "/src/assets/images/Enrollment System.jpg",
		demo: "https://your-demo-link.com",
		code: "https://github.com/Zehihi/Portfolio-Zeus",
		category: "School Project",
	},
	{
		id: 2,
		title: "Capstone Project",
		description: "A full-stack capstone project for my degree.",
		tech: ["Node.js", "React.js", "MongoDB"],
		image: "/src/assets/images/sch.png",
		demo: "https://www.iskolarblock.app/",
		code: "https://github.com/Zehihi/Capstone-Project",
		category: "Capstone",
	},
	
];

const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];

function Projects() {
	const [selected, setSelected] = useState("All");
	const filtered = selected === "All" ? projectsData : projectsData.filter(p => p.category === selected);

	return (
		<section id="projects" className="projects-section">
			<h2 className="projects-title">Projects</h2>
			<div className="projects-tabs">
				{categories.map(cat => (
					<button
						key={cat}
						className={`projects-tab${selected === cat ? " active" : ""}`}
						onClick={() => setSelected(cat)}
					>
						{cat}
					</button>
				))}
			</div>
			<div className="projects-grid">
				{filtered.map(project => (
					<div className="project-card" key={project.id}>
						<div className="project-image-wrapper">
							<img src={project.image} alt={project.title} className="project-image" />
						</div>
						<div className="project-content">
							<h3 className="project-title">{project.title}</h3>
							<p className="project-desc">{project.description}</p>
							<div className="project-tech">
								{project.tech.map(t => (
									<span className="project-tech-item" key={t}>{t}</span>
								))}
							</div>
							<div className="project-actions">
								<a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-demo">View Demo</a>
								<a href={project.code} target="_blank" rel="noopener noreferrer" className="btn btn-code">View Code</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects;
    