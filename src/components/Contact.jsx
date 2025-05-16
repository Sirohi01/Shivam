    import React, { useRef } from 'react';
    import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
    import { FiSend } from 'react-icons/fi';
    import '../styles/Contact.css';

    const Contact = () => {
    // Form refs
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const subject = subjectRef.current.value;
        const message = messageRef.current.value;

        // Construct WhatsApp message
        const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

        // Your WhatsApp number in international format (without + sign)
        const whatsappNumber = '8368858147';

        const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp chat in new tab
        window.open(whatsappURL, '_blank');

        // Optionally, reset the form after sending
        e.target.reset();
    };

    return (
        <section className="contact-section" id="contact">
        <div className="contact-container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
            Have a project in mind or want to connect? Feel free to reach out!
            </p>

            <div className="contact-content">
            <div className="contact-info-wrapper">
                <div className="contact-info">
                <div className="contact-info-item">
                    <div className="contact-info-icon">
                    <FaPhone />
                    </div>
                    <div className="contact-info-content">
                    <h4>Phone</h4>
                    <a href="tel:8368858147">+91 8368858147</a>
                    </div>
                </div>

                <div className="contact-info-item">
                    <div className="contact-info-icon">
                    <FaEnvelope />
                    </div>
                    <div className="contact-info-content">
                    <h4>Email</h4>
                    <a href="mailto:shivamrajora24@gmail.com">shivamrajora24@gmail.com</a>
                    </div>
                </div>

                <div className="contact-info-item">
                    <div className="contact-info-icon">
                    <FaMapMarkerAlt />
                    </div>
                    <div className="contact-info-content">
                    <h4>Location</h4>
                    <span>Ghaziabad, Uttar Pradesh, India</span>
                    </div>
                </div>
                </div>

                <div className="social-links">
                <a
                    href="https://www.linkedin.com/in/shivam-rajora-61888464/"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                
                </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                    type="text"
                    id="name"
                    ref={nameRef}
                    className="form-input"
                    placeholder="Enter your name"
                    required
                />
                </div>

                <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                    type="email"
                    id="email"
                    ref={emailRef}
                    className="form-input"
                    placeholder="Enter your email"
                    required
                />
                </div>

                <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                    type="text"
                    id="subject"
                    ref={subjectRef}
                    className="form-input"
                    placeholder="What's this about?"
                    required
                />
                </div>

                <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                    id="message"
                    ref={messageRef}
                    className="form-textarea"
                    placeholder="Hi Shivam, I'd like to talk about..."
                    required
                ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                <FiSend className="submit-icon" />
                Send Message
                </button>
            </form>
            </div>

            <div className="copyright">
            &copy; {new Date().getFullYear()} Shivam Rajora. All rights reserved.
            </div>
        </div>
        </section>
    );
    };

    export default Contact;
