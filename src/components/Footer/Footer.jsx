import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import Logo from '../../assets/ez logo 2-01.png';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Conferences', path: '/conferences' },
        { name: 'For Authors', path: '/for-authors' },
        { name: 'Contact', path: '/contact' },
    ];

    const legalLinks = [
        { name: 'Terms & Conditions', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Refund Policy', path: '/refund' },
        { name: 'Copyright Policy', path: '/copyright' },
    ];

    const services = [
        'Conference Publishing',
        'Journal Indexing',
        'Peer Review Management',
        'DOI Assignment',
        'Citation Indexing',
    ];

    return (
        <footer className="footer">
            <div className="footer-main container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div className="footer-section footer-about">
                        <Link to="/" className="footer-logo">
                            <img src={Logo} alt="Exceptionz Global" className="footer-logo-img" />
                        </Link>
                        <p className="footer-description">
                            Exceptionz Global is a leading IEEE conference paper publishing company,
                            connecting researchers worldwide with prestigious academic platforms.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="footer-social-link" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="footer-social-link" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="footer-social-link" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="footer-social-link" aria-label="YouTube">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer-link">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4 className="footer-title">Our Services</h4>
                        <ul className="footer-links">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="footer-link">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h4 className="footer-title">Contact Us</h4>
                        <ul className="footer-contact">
                            <li className="footer-contact-item">
                                <Mail size={18} className="footer-contact-icon" />
                                <a href="mailto:info@exceptionzglobal.com">info@exceptionzglobal.com</a>
                            </li>
                            <li className="footer-contact-item">
                                <Phone size={18} className="footer-contact-icon" />
                                <a href="tel:+1234567890">+1 (234) 567-890</a>
                            </li>
                            <li className="footer-contact-item">
                                <MapPin size={18} className="footer-contact-icon" />
                                <span>Global Operations</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Exceptionz Global. All rights reserved.
                    </p>
                    <ul className="footer-legal">
                        {legalLinks.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path} className="footer-legal-link">{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Scroll to Top */}
            <button className="footer-scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
                <ArrowUp size={20} />
            </button>
        </footer>
    );
};

export default Footer;
