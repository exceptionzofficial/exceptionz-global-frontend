import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import SectionTitle from '../../components/UI/SectionTitle';
import Button from '../../components/UI/Button';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            content: 'exceptionzofficial@gmail.com',
        },
        {
            icon: Phone,
            title: 'Call Us',
            content: '+91 97908 78838',
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            content: 'Erode, Tamil Nadu, India',
        },
        {
            icon: Clock,
            title: 'Business Hours',
            content: 'Mon - Fri: 9:00 AM - 6:00 PM',
        }
    ];

    const subjects = [
        'Paper Submission Inquiry',
        'Conference Information',
        'Publication Status',
        'Technical Support',
        'Partnership Inquiry',
        'General Inquiry'
    ];

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-bg"></div>
                <div className="container">
                    <div className="contact-hero-content">
                        <span className="contact-hero-badge">Contact Us</span>
                        <h1 className="contact-hero-title">Get in Touch</h1>
                        <p className="contact-hero-description">
                            Have questions about paper submission, conferences, or our services?
                            We're here to help. Reach out to us anytime.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2 className="contact-form-title">Send Us a Message</h2>
                            <p className="contact-form-subtitle">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>

                            {isSubmitted ? (
                                <div className="contact-success">
                                    <CheckCircle size={48} />
                                    <h3>Message Sent Successfully!</h3>
                                    <p>Thank you for contacting us. We'll respond to your inquiry shortly.</p>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your Email"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Your Phone Number"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject *</label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select a subject</option>
                                                {subjects.map((subject, index) => (
                                                    <option key={index} value={subject}>{subject}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            placeholder="Tell us about your inquiry..."
                                        />
                                    </div>

                                    <Button type="submit" variant="cta" size="lg" icon={Send} iconPosition="right">
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info-wrapper">
                            <h2 className="contact-info-title">Contact Information</h2>
                            <p className="contact-info-subtitle">
                                Choose the most convenient way to reach us.
                            </p>

                            <div className="contact-info-cards">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="contact-info-card">
                                        <div className="contact-info-icon">
                                            <info.icon size={24} />
                                        </div>
                                        <div className="contact-info-content">
                                            <h4>{info.title}</h4>
                                            <p>{info.content}</p>
                                            <span>{info.subContent}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map Placeholder */}
                            <div className="contact-map">
                                <div className="contact-map-placeholder">
                                    <MapPin size={48} />
                                    <p>Erode, Tamil Nadu, India</p>
                                    <span>Serving researchers worldwide</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
