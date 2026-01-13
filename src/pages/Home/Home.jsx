import React from 'react';
import { Link } from 'react-router-dom';
import {
    FileText,
    Globe,
    Award,
    BookOpen,
    Shield,
    Clock,
    CheckCircle,
    ArrowRight,
    Star,
    Zap,
    Target,
    Sparkles
} from 'lucide-react';
import Button from '../../components/UI/Button';
import SectionTitle from '../../components/UI/SectionTitle';
import ServiceCard from '../../components/UI/ServiceCard';
import HeroBg from '../../assets/w3.jpg';
import './Home.css';

const Home = () => {
    const services = [
        {
            icon: FileText,
            title: 'Conference Publishing',
            description: 'Publish your research papers in IEEE-indexed conferences with global recognition and impact.',
            featured: true
        },
        {
            icon: Shield,
            title: 'Peer Review Management',
            description: 'Rigorous double-blind peer review process ensuring quality and authenticity of research.',
        },
        {
            icon: Globe,
            title: 'Global Indexing',
            description: 'Get your papers indexed in Scopus, Web of Science, IEEE Xplore, and other major databases.',
        },
        {
            icon: Award,
            title: 'DOI Assignment',
            description: 'Every published paper receives a unique Digital Object Identifier for permanent citation.',
        },
        {
            icon: Clock,
            title: 'Fast Publication',
            description: 'Streamlined process with quick turnaround times from submission to publication.',
        },
        {
            icon: CheckCircle,
            title: 'Plagiarism Check',
            description: 'Comprehensive plagiarism screening using industry-standard tools before publication.',
        },
    ];

    const whyChooseUs = [
        { icon: Star, title: 'IEEE Partnership', description: 'Official partnership with IEEE for authentic conference publications' },
        { icon: Zap, title: 'Quick Processing', description: 'Fast turnaround from submission to final decision' },
        { icon: Target, title: 'Expert Review', description: 'Thorough peer review with constructive feedback' },
        { icon: Shield, title: 'Quality Assurance', description: 'Multi-level review ensuring research integrity' },
    ];

    const features = [
        { icon: Globe, title: 'Worldwide Reach', description: 'Connect with researchers globally' },
        { icon: Award, title: 'IEEE Indexed', description: 'Publications in IEEE Xplore' },
        { icon: BookOpen, title: 'Scopus Listed', description: 'Indexed in major databases' },
        { icon: Sparkles, title: 'Premium Service', description: 'Dedicated support team' },
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <img src={HeroBg} alt="" className="hero-bg-image" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content container">
                    <div className="hero-text">
                        <span className="hero-badge">IEEE Conference Publishing</span>
                        <h1 className="hero-title">
                            Publish Your Research with <span className="hero-highlight">Global Impact</span>
                        </h1>
                        <p className="hero-description">
                            Exceptionz Research & Conference Services connects researchers worldwide with prestigious IEEE-indexed
                            conferences. Transform your research into recognized publications.
                        </p>
                        <div className="hero-actions">
                            <Button variant="cta" size="lg" icon={ArrowRight} iconPosition="right">
                                <Link to="/contact">Submit Your Paper</Link>
                            </Button>
                            <Button variant="outline-white" size="lg">
                                <Link to="/services">Explore Services</Link>
                            </Button>
                        </div>
                        <div className="hero-trust">
                            <div className="hero-trust-item">
                                <CheckCircle size={18} />
                                <span>IEEE Indexed</span>
                            </div>
                            <div className="hero-trust-item">
                                <CheckCircle size={18} />
                                <span>Scopus Listed</span>
                            </div>
                            <div className="hero-trust-item">
                                <CheckCircle size={18} />
                                <span>Global Citations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Banner */}
            <section className="features-banner">
                <div className="container">
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-icon">
                                    <feature.icon size={24} />
                                </div>
                                <div className="feature-content">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section section">
                <div className="container">
                    <SectionTitle
                        title="Our Services"
                        subtitle="Comprehensive publishing solutions for researchers and academics worldwide"
                    />
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                featured={service.featured}
                            />
                        ))}
                    </div>
                    <div className="services-cta">
                        <Link to="/services">
                            <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                                View All Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-section section bg-surface">
                <div className="container">
                    <div className="why-content">
                        <div className="why-text">
                            <h2 className="why-title">Why Choose Exceptionz Research & Conference Services?</h2>
                            <p className="why-description">
                                We provide end-to-end support for researchers looking to publish their
                                work in prestigious IEEE conferences. Our commitment to quality and
                                integrity ensures your research gets the recognition it deserves.
                            </p>
                            <div className="why-features">
                                {whyChooseUs.map((item, index) => (
                                    <div key={index} className="why-feature">
                                        <div className="why-feature-icon">
                                            <item.icon size={24} />
                                        </div>
                                        <div className="why-feature-content">
                                            <h4 className="why-feature-title">{item.title}</h4>
                                            <p className="why-feature-description">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="why-image">
                            <div className="why-image-card">
                                <div className="why-image-icon">
                                    <Award size={48} />
                                </div>
                                <h3>Your Research</h3>
                                <p className="why-image-stat">Deserves Recognition</p>
                                <span>Let Us Help You Publish</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Overview */}
            <section className="process-overview section">
                <div className="container">
                    <SectionTitle
                        title="Simple Publishing Process"
                        subtitle="From submission to publication in easy steps"
                        light={true}
                    />
                    <div className="process-steps">
                        <div className="process-step-item">
                            <div className="process-number">1</div>
                            <h4>Submit Paper</h4>
                            <p>Upload your manuscript through our portal</p>
                        </div>
                        <div className="process-step-item">
                            <div className="process-number">2</div>
                            <h4>Peer Review</h4>
                            <p>Expert review with constructive feedback</p>
                        </div>
                        <div className="process-step-item">
                            <div className="process-number">3</div>
                            <h4>Revise & Finalize</h4>
                            <p>Address feedback and submit final version</p>
                        </div>
                        <div className="process-step-item">
                            <div className="process-number">4</div>
                            <h4>Publication</h4>
                            <p>Paper published and indexed in IEEE</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Publish Your Research?</h2>
                        <p className="cta-description">
                            Take the first step towards getting your research published in
                            prestigious IEEE conferences. Contact us today to get started.
                        </p>
                        <div className="cta-actions">
                            <Link to="/contact">
                                <Button variant="cta" size="lg" icon={ArrowRight} iconPosition="right">
                                    Submit Your Paper
                                </Button>
                            </Link>
                            <Link to="/for-authors">
                                <Button variant="outline-white" size="lg">
                                    Author Guidelines
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
