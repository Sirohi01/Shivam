    import { FaCertificate, FaAward, FaMedal, FaGraduationCap, FaTrophy } from 'react-icons/fa';
    import '../styles/Certificate.css';

    const Certificates = () => {
    return (
        <section className="certificates-section" id="certificates">
        <div className="certificates-container">
            <h2 className="section-title">
            <FaCertificate className="section-icon" />
            Certifications & Achievements
            </h2>
            
            <div className="certificates-grid">
            <div className="certificate-item">
                <div className="certificate-header">
                <h3 className="certificate-title">Introduction to Programming with MATLAB</h3>
                <h4 className="certificate-issuer">
                    <FaGraduationCap className="issuer-icon" /> 
                    Vanderbilt University, Coursera
                </h4>
                </div>
                <p className="grade">
                <span className="grade-badge">Grade Achieved: 98.80%</span>
                <span className="certificate-link">View Certificate</span>
                </p>
            </div>
            
            <div className="certificate-item">
                <div className="certificate-header">
                <h3 className="certificate-title">Database Management Essentials</h3>
                <h4 className="certificate-issuer">
                    <FaGraduationCap className="issuer-icon" /> 
                    University of Colorado System, Coursera
                </h4>
                </div>
                <p className="grade">
                <span className="grade-badge">Grade Achieved: 97.69%</span>
                <span className="certificate-link">View Certificate</span>
                </p>
            </div>
            </div>
            
            <div className="awards-section">
            <h3 className="awards-title">
                <FaAward className="section-icon" />
                Awards & Recognitions
            </h3>
            
            <ul className="awards-list">
                <li className="award-item">
                <FaMedal className="award-icon" />
                <div className="award-content">
                    <h4>Athletics - Race Medals</h4>
                    <p>Multiple gold and silver medals in regional and national competitions</p>
                </div>
                </li>
                
                <li className="award-item">
                <FaTrophy className="award-icon" />
                <div className="award-content">
                    <h4>Scholar Holder for two years</h4>
                    <p>Awarded for academic excellence and outstanding performance</p>
                </div>
                </li>
                
                <li className="award-item">
                <FaCertificate className="award-icon" />
                <div className="award-content">
                    <h4>Leadership Batch Holder for three consecutive years</h4>
                    <p>Recognized for exceptional leadership qualities and team management</p>
                </div>
                </li>
            </ul>
            </div>
        </div>
        </section>
    );
    };

    export default Certificates;