import '../stylesheets/Projects.css'
import data from '../dataset/data.json'

export default function Projects() {
    return (
        <div className="Project-container" id='Projects'>
             <h1 className='projects-start'>My Projects</h1>
            <div className="all-projects">
            {
                data.Projects.map((Project, index) => (
                    <div key={index} className="Project-card">
                        <img src={Project.images} alt={Project.title} className="Project-image pfImage" />
                        <div className="Project-info">
                            <p className="Project-meta">{Project.date} &#10072; <a href={Project.github} id='project-symb'><i className='fa-brands fa-github' id='project-symb'/> GitHub</a></p>
                            <a href={Project.visit} target='_blank' rel='noreferrer' style={{color:"black"}} className="Project-title"><i className='fa fa-external-link'/> {Project.title}</a>
                            <p className="Project-description">{Project.description}</p>
                            <div className="Project-tags">
                                {Project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="Project-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
}