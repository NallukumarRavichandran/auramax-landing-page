import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Modern Twin Residence',
      category: 'Residential',
      location: 'Chennai, India',
      area: '4,200 sq ft',
      status: 'Completed',
      image: '🏠',
    },
    {
      id: 2,
      title: 'Sunset Pool Villa',
      category: 'Luxury Villa',
      location: 'Coimbatore, India',
      area: '6,800 sq ft',
      status: 'Completed',
      image: '🏡',
    },
    {
      id: 3,
      title: 'Horizon Office Complex',
      category: 'Commercial',
      location: 'Bangalore, India',
      area: '25,000 sq ft',
      status: 'In Progress',
      image: '🏢',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Portfolio</h2>
        <h3>Featured Projects</h3>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">{project.image}</div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h4>{project.title}</h4>
                <p className="project-location">{project.location}</p>
                <p className="project-area">{project.area}</p>
                <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-secondary">View All Work</button>
      </div>
    </section>
  );
}
