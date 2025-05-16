    import { FaPhone, FaEnvelope } from 'react-icons/fa';
    import { FiMenu, FiX } from 'react-icons/fi';
    import { useState, useEffect } from 'react';
    import '../styles/Header.css';

    const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
            <div className="logo">
            <h1>Shivam Rajora</h1>
            <span>Real Estate Professional</span>
            </div>
            
            <button 
            className="nav-toggle" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            
            <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
            
            <div className="header-contact">
                <a href="tel:+918368858147" className="contact-link">
                <FaPhone /> +91 8368858147
                </a>
                
            </div>
            </nav>
        </div>
        </header>
    );
    };

    export default Header;