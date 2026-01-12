import React from 'react';
import { Link } from 'react-router-dom';
import {
    FileText,
    Search,
    CheckCircle,
    Globe,
    Award,
    Clock,
    Shield,
    BookOpen,
    Users,
    Zap,
    ArrowRight,
    Check
} from 'lucide-react';
import SectionTitle from '../../components/UI/SectionTitle';
import Button from '../../components/UI/Button';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: FileText,
            title: 'Conference Paper Publishing',
            description: 'Publish your research in IEEE-indexed international conferences with global recognition.',
            features: ['IEEE Xplore Indexing', 'Scopus & WoS Listing', 'DOI Assignment', 'Citation Tracking']
        },
        {
            icon: Search,
            title: 'Peer Review Management',
            description: 'Rigorous double-blind peer review process by domain experts ensuring quality.',
            features: ['Expert Reviewers', 'Constructive Feedback', 'Quick Turnaround', 'Revision Support']
        },
        {
            icon: Globe,
            title: 'Global Indexing Services',
            description: 'Get your papers indexed in major international databases for maximum visibility.',
            features: ['Scopus', 'Web of Science', 'Google Scholar', 'CrossRef']
        },
        {
            icon: Award,
            title: 'DOI Assignment',
            description: 'Every published paper receives a unique DOI for permanent identification and citation.',
            features: ['Permanent Identifier', 'Easy Citation', 'Global Recognition', 'Metadata Management']
        },
        {
            icon: Shield,
            title: 'Plagiarism Checking',
            description: 'Comprehensive plagiarism screening using industry-standard tools before publication.',
            features: ['Turnitin Integration', 'Detailed Reports', 'Pre-submission Check', 'Compliance Assurance']
        },
        {
            icon: BookOpen,
            title: 'Editorial Support',
            description: 'Professional editorial assistance to enhance your manuscript quality.',
            features: ['Language Editing', 'Formatting Help', 'Reference Checking', 'Template Guidance']
        }
    ];

    const processSteps = [
        { step: 1, title: 'Paper Submission', description: 'Submit your manuscript through our online portal' },
        { step: 2, title: 'Initial Screening', description: 'Preliminary quality and scope assessment' },
        { step: 3, title: 'Peer Review', description: 'Double-blind review by domain experts' },
        { step: 4, title: 'Revision', description: 'Authors address reviewer feedback' },
        { step: 5, title: 'Final Approval', description: 'Editorial committee final decision' },
        { step: 6, title: 'Publication', description: 'Paper published and indexed in IEEE' },
    ];



    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="services-hero-bg"></div>
                <div className="container">
                    <div className="services-hero-content">
                        <span className="services-hero-badge">Our Services</span>
                        <h1 className="services-hero-title">Comprehensive Publishing Solutions</h1>
                        <p className="services-hero-description">
                            From submission to publication, we provide end-to-end support for your
                            research journey with world-class academic publishing services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-list section">
                <div className="container">
                    <SectionTitle
                        title="What We Offer"
                        subtitle="Tailored services to meet every research publishing need"
                    />
                    <div className="services-page-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-page-card">
                                <div className="service-page-icon">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="service-page-title">{service.title}</h3>
                                <p className="service-page-description">{service.description}</p>
                                <ul className="service-page-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <Check size={16} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="process-section section bg-black">
                <div className="container">
                    <SectionTitle
                        title="Our Publishing Process"
                        subtitle="A streamlined workflow from submission to publication"
                        light={true}
                    />
                    <div className="process-grid">
                        {processSteps.map((item, index) => (
                            <div key={index} className="process-step">
                                <div className="process-step-number">{item.step}</div>
                                <h4 className="process-step-title">{item.title}</h4>
                                <p className="process-step-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="services-cta-section">
                <div className="container">
                    <div className="services-cta-content">
                        <div className="services-cta-text">
                            <h2>Ready to Publish Your Research?</h2>
                            <p>Contact us today to discuss your publishing needs and get started.</p>
                        </div>
                        <Link to="/contact">
                            <Button variant="cta" size="lg" icon={ArrowRight} iconPosition="right">
                                Contact Us Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
