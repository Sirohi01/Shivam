    import { FaProjectDiagram, FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
    import { SiOpencv, SiPython, SiPandas, SiNumpy } from 'react-icons/si';
    import '../styles/Projects.css';

    const Projects = () => {
    const projects = [
        {
        title: "Vehicle Feature Detection using Image Processing",
        date: "January 2022 - June 2022",
        description: "A computer vision system that analyzes moving vehicles to detect speed, color, direction, and type with high accuracy.",
        tech: [
            { name: "OpenCV", icon: <SiOpencv /> },
            { name: "Python", icon: <SiPython /> },
            { name: "Image Processing" },
            { name: "Computer Vision" }
        ],
        details: [
            "Implemented using OpenCV and Python with real-time processing capabilities",
            "Published in International Journal of Research Publication and Reviews",
            "Achieved 92% accuracy in vehicle type classification",
            "System can process 30+ frames per second on mid-range hardware"
        ],
        links: [
            { url: "#", text: "Code", icon: <FaGithub /> },
            { url: "#", text: "Live Demo", icon: <FaExternalLinkAlt /> },
            { url: "#", text: "Research Paper", icon: <FaExternalLinkAlt /> }
        ]
        },
        {
        title: "Fake News Detection System",
        date: "July 2021 - November 2021",
        description: "Machine learning model that analyzes news content to distinguish between reliable and fake news articles.",
        tech: [
            { name: "Python", icon: <SiPython /> },
            { name: "Scikit-learn" },
            { name: "Pandas", icon: <SiPandas /> },
            { name: "NumPy", icon: <SiNumpy /> },
            { name: "NLP" }
        ],
        details: [
            "Developed using Logistic Regression and Decision Tree algorithms",
            "Trained on dataset of 20,000+ labeled news articles",
            "Implemented TF-IDF for feature extraction",
            "Achieved 89% accuracy in validation testing",
            "Includes web interface for real-time classification"
        ],
        links: [
            { url: "#", text: "Code", icon: <FaGithub /> },
            { url: "#", text: "Demo", icon: <FaExternalLinkAlt /> }
        ]
        },
        {
        title: "Real Estate Analytics Dashboard",
        date: "March 2022 - Present",
        description: "Interactive dashboard for analyzing real estate market trends, property valuations, and investment opportunities.",
        tech: [
            { name: "Power BI" },
            { name: "SQL" },
            { name: "Data Visualization" },
            { name: "Market Analysis" }
        ],
        details: [
            "Integrates with multiple real estate APIs for live data",
            "Includes predictive modeling for property valuations",
            "Features neighborhood comparison tools",
            "Used by local real estate agencies for market analysis"
        ],
        links: [
            { url: "#", text: "View Dashboard", icon: <FaExternalLinkAlt /> }
        ]
        }
    ];

    return (
        <section className="projects-section" id="projects">
        <div className="projects-container">
            <h2 className="section-title">
            <FaProjectDiagram className="section-icon" />
            Featured Projects
            </h2>
            
            <div className="projects-grid">
            {projects.map((project, index) => (
                <div className="project-item" key={index}>
                <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-date">
                    <FaCalendarAlt className="calendar-icon" /> {project.date}
                    </p>
                </div>
                
                <div className="project-tech">
                    {project.tech.map((tech, i) => (
                    <span className="project-tech-item" key={i}>
                        {tech.icon && <span className="tech-icon">{tech.icon}</span>}
                        {tech.name}
                    </span>
                    ))}
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <ul className="project-details">
                    {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                    ))}
                </ul>
                
                
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default Projects;