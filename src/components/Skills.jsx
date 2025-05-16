    import '../styles/Skills.css';
    import { FaLightbulb, FaChartLine, FaCode } from 'react-icons/fa';
    import { MdBusiness, MdDesignServices } from 'react-icons/md';
    import { GiSkills } from 'react-icons/gi';

    const Skills = () => {
    return (
        <section className="skills-section" id="skills">
        <div className="skills-container">
            <h2 className="section-title">
            <GiSkills className="section-icon" />
            Skills & Expertise
            </h2>
            
            <div className="skills-grid">
            <div className="skill-category">
                <h3><MdBusiness /> Business & Real Estate</h3>
                <ul className="skill-list">
                <li className="skill-item">Business Strategy</li>
                <li className="skill-item">Leadership</li>
                <li className="skill-item">Negotiation</li>
                <li className="skill-item">Real Estate Law</li>
                <li className="skill-item">Market Analysis</li>
                <li className="skill-item">Networking</li>
                <li className="skill-item">Digital Marketing</li>
                <li className="skill-item">Financial Modeling</li>
                <li className="skill-item">Investment Analysis</li>
                </ul>
            </div>
            
            <div className="skill-category">
                <h3><FaCode /> Technical</h3>
                <ul className="skill-list">
                <li className="skill-item">Windows OS</li>
                <li className="skill-item">C/C++</li>
                <li className="skill-item">Python</li>
                <li className="skill-item">SQL</li>
                <li className="skill-item">OOP</li>
                <li className="skill-item">MS Office</li>
                <li className="skill-item">Jupyter</li>
                <li className="skill-item">Git</li>
                <li className="skill-item">Data Structures</li>
                </ul>
            </div>

            <div className="skill-category">
                <h3><FaChartLine /> Soft Skills</h3>
                <ul className="skill-list">
                <li className="skill-item">Communication</li>
                <li className="skill-item">Problem Solving</li>
                <li className="skill-item">Teamwork</li>
                <li className="skill-item">Time Management</li>
                <li className="skill-item">Adaptability</li>
                <li className="skill-item">Critical Thinking</li>
                <li className="skill-item">Creativity</li>
                </ul>
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default Skills;