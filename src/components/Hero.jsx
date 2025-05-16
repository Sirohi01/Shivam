    import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
    import profileImage from '../assets/profile.jpg';
    import '../styles/Hero.css';

    const Hero = () => {
    return (
        <section className="hero-section" id="about">
        <div className="container">
            <div className="hero-grid">
            <div className="hero-text-content">
                <div className="hero-titles">
                <h1 className="hero-title">Shivam Rajora</h1>
                <h2 className="hero-subtitle">Real Estate Relationship Manager</h2>
                </div>
                
                <p className="hero-summary">
                Looking for a position in a professional environment that fosters growth and innovation, 
                where I can utilize my skills, research, and experience in real estate and business development.
                </p>
                
                <div className="hero-actions">
                <a 
                    href="/resume.pdf" 
                    download 
                    className="btn btn-primary btn-download"
                    aria-label="Download Resume"
                >
                    <FaDownload className="btn-icon" /> Download CV
                </a>
                </div>
            </div>
            
            <div className="hero-image-wrapper">
                <div className="image-frame">
                <img 
                    src={profileImage} 
                    alt="Shivam Rajora" 
                    className="profile-img" 
                    loading="eager"
                />
                </div>
            </div>
            </div>
            
            
        </div>
        </section>
    );
    };

    export default Hero;