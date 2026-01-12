import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Shield, Users, Award, Globe, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import SectionTitle from '../../components/UI/SectionTitle';
import Button from '../../components/UI/Button';
import './About.css';

const About = () => {
    const values = [
        { icon: Shield, title: 'Integrity', description: 'We uphold the highest standards of academic integrity in every publication.' },
        { icon: Award, title: 'Excellence', description: 'Committed to delivering exceptional quality in research publishing.' },
        { icon: Globe, title: 'Global Reach', description: 'Connecting researchers from around the world.' },
        { icon: Users, title: 'Collaboration', description: 'Fostering partnerships between researchers and institutions.' },
    ];

    const commitments = [
        'IEEE Indexed Publications',
        'Rigorous Peer Review Process',
        'Fast Turnaround Time',
        'Dedicated Support Team',
        'Global Database Indexing',
        'Transparent Publishing Process',
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-bg"></div>
                <div className="container">
                    <div className="about-hero-content">
                        <span className="about-hero-badge">About Us</span>
                        <h1 className="about-hero-title">Empowering Researchers Worldwide</h1>
                        <p className="about-hero-description">
                            Exceptionz Global is a premier IEEE conference paper publishing company dedicated
                            to connecting researchers with prestigious academic platforms globally.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-section section">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-card">
                            <div className="mission-icon">
                                <Target size={32} />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To provide world-class publishing services that enable researchers to share
                                their discoveries with the global academic community while maintaining the
                                highest standards of quality and integrity.
                            </p>
                        </div>
                        <div className="mission-card">
                            <div className="mission-icon vision-icon">
                                <Eye size={32} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be the most trusted bridge between innovative research and global
                                recognition, fostering a community where knowledge transcends boundaries
                                and transforms the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="whatwedo-section section bg-surface">
                <div className="container">
                    <div className="whatwedo-content">
                        <div className="whatwedo-text">
                            <SectionTitle
                                title="What We Do"
                                subtitle="Your partner in academic publishing"
                                centered={false}
                            />
                            <p>
                                At Exceptionz Global, we specialize in facilitating the publication of
                                research papers in IEEE-indexed conferences. Our comprehensive services
                                cover the entire publishing journey – from initial submission to final
                                publication and indexing.
                            </p>
                            <p>
                                We work with researchers, academics, and institutions worldwide to ensure
                                their valuable research reaches the global academic community through
                                reputable channels.
                            </p>
                            <div className="whatwedo-commitments">
                                {commitments.map((item, index) => (
                                    <div key={index} className="commitment-item">
                                        <CheckCircle size={18} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="whatwedo-visual">
                            <div className="whatwedo-card">
                                <Sparkles size={48} />
                                <h3>Premium Publishing</h3>
                                <p>Quality-focused approach to academic publishing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="values-section section">
                <div className="container">
                    <SectionTitle
                        title="Our Core Values"
                        subtitle="The principles that guide everything we do"
                    />
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">
                                    <value.icon size={28} />
                                </div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="workwithus-section section bg-black">
                <div className="container">
                    <SectionTitle
                        title="Why Work With Us"
                        subtitle="Your research deserves the best publishing partner"
                        light={true}
                    />
                    <div className="workwithus-grid">
                        <div className="workwithus-item">
                            <div className="workwithus-number">01</div>
                            <h4>IEEE Partnership</h4>
                            <p>Official affiliation for authentic conference publications</p>
                        </div>
                        <div className="workwithus-item">
                            <div className="workwithus-number">02</div>
                            <h4>Expert Review</h4>
                            <p>Thorough peer review by domain specialists</p>
                        </div>
                        <div className="workwithus-item">
                            <div className="workwithus-number">03</div>
                            <h4>Global Indexing</h4>
                            <p>Papers indexed in Scopus, WoS, and more</p>
                        </div>
                        <div className="workwithus-item">
                            <div className="workwithus-number">04</div>
                            <h4>Dedicated Support</h4>
                            <p>Personalized assistance throughout the process</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta section">
                <div className="container">
                    <div className="about-cta-content">
                        <h2>Ready to Get Started?</h2>
                        <p>Let us help you publish your research in prestigious IEEE conferences.</p>
                        <Link to="/contact">
                            <Button variant="cta" size="lg" icon={ArrowRight} iconPosition="right">
                                Contact Us Today
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
