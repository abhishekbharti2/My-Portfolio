import React, {useEffect, useState} from 'react';
import '../stylesheets/Projects.css';
import data from '../dataset/data.json';

export default function Projects() {
      const [isLoading, setIsLoading] = useState(<div className="loading-screen"><span className="loader"></span><p>Be Patience</p></div>);
       useEffect(() => {
              const images = document.querySelectorAll(".project-image");
              let loadedImages = 0;
      
              if (images.length === 0) {
                  setIsLoading(null);
                  return;
              }
      
              const handleImageLoad = () => {
                  loadedImages++;
                  if (loadedImages === images.length) {
                      setIsLoading(null);
                  }
              };
      
              images.forEach((img) => {
                  if (img.complete) {
                      handleImageLoad();
                  } else {
                      img.addEventListener("load", handleImageLoad);
                  }
              });
      
              return () => {
                  images.forEach((img) => img.removeEventListener("load", handleImageLoad));
              };
          }, []);

    return (
        <section className="projects-section" id='Projects'>
            {isLoading}
            <div className="projects-container">
                <h1 className="section-title">My <span>Projects</span></h1>

                <div className="projects-grid">
                    {data.Projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image-container">
                                <img
                                    src={project.images}
                                    alt={project.title}
                                    className="project-image"
                                    loading="lazy"
                                />
                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        className="project-link github-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-github"></i> Code
                                    </a>
                                    <a
                                        href={project.visit}
                                        className="project-link live-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fas fa-external-link-alt"></i> Live
                                    </a>
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-meta">
                                    <span className="project-date">{project.date}</span>
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="project-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}