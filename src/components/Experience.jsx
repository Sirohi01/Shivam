    import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
    import '../styles/Experience.css';

    const Experience = () => {
    const experiences = [
        {
        title: "Manager - Sales & Channel Sales",
        company: "Inframantra",
        location: "Gurugram",
        date: "Feb 2023 - Present",
        responsibilities: [
            "Retail client handling and relationship management",
            "Channel sales development and strategy implementation",
            "Leading sales team to achieve targets",
            "Market expansion and business growth initiatives"
        ]
        },
        {
        title: "Business Development Executive",
        company: "Sapient Realty Pvt Limited",
        location: "Delhi NCR",
        date: "September 2022 - January 2023",
        responsibilities: [
            "Developed new business opportunities in real estate sector",
            "Client acquisition and retention strategies",
            "Market research and competitive analysis",
            "Sales presentations and pitch development"
        ]
        },
        {
        title: "Talent Acquisition Executive",
        company: "SynergeticIT Compusoft Pvt Ltd",
        location: "Remote",
        date: "August 2022",
        responsibilities: [
            "Recruitment and talent sourcing for IT positions",
            "Candidate screening and interview coordination",
            "Employer branding initiatives",
            "Streamlined hiring processes"
        ]
        }
    ];

    return (
        <section className="experience-section" id="experience">
        <div className="container">
            <h2 className="section-title">
            <FaBriefcase className="section-icon" />
            Professional Experience
            </h2>
            
            <div className="experience-grid">
            {experiences.map((exp, index) => (
                <div className="experience-card" key={index}>
                <div className="experience-header">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-meta">
                    <span className="company-info">
                        <span className="company-name">{exp.company}</span>
                        <span className="company-location">
                        <FaMapMarkerAlt /> {exp.location}
                        </span>
                    </span>
                    <span className="experience-date">
                        <FaCalendarAlt /> {exp.date}
                    </span>
                    </div>
                </div>
                
                <ul className="experience-details">
                    {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default Experience;