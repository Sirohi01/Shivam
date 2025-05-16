    import { FaGraduationCap, FaUniversity, FaAward } from 'react-icons/fa';
    import '../styles/Education.css';

    const Education = () => {
    const educationData = [
        {
        degree: "Master of Business Administration (Business Analyst)",
        institution: "SRM University",
        location: "Kattankulathur, Tamil Nadu",
        year: "2024",
        result: "CGPA: 8.30",
        icon: <FaUniversity />
        },
        {
        degree: "Bachelor of Technology (Computer Science Engineering)",
        institution: "SRM University",
        location: "Kattankulathur, Tamil Nadu",
        year: "2022",
        result: "CGPA: 8.02",
        icon: <FaUniversity />
        },
        {
        degree: "Class 12th (Science - Non-medical)",
        institution: "Nehru Public School",
        location: "Ghaziabad, U.P",
        year: "2018",
        result: "First Distinction",
        icon: <FaAward />
        },
        {
        degree: "Class 10th",
        institution: "Nehru Public School",
        location: "Ghaziabad, U.P",
        year: "2016",
        result: "First Distinction",
        icon: <FaAward />
        }
    ];

    return (
        <section className="education-section" id="education">
        <div className="container">
            <h2 className="section-title">
            <FaGraduationCap className="section-icon" />
            Education
            </h2>
            
            <div className="education-timeline">
            {educationData.map((edu, index) => (
                <div className="education-card" key={index}>
                <div className="education-icon">{edu.icon}</div>
                <div className="education-content">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <div className="education-meta">
                    <span className="education-institution">
                        {edu.institution}
                        <span className="education-location">, {edu.location}</span>
                    </span>
                    </div>
                    <div className="education-details">
                    <span className="education-year">{edu.year}</span>
                    <span className="education-result">{edu.result}</span>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default Education;