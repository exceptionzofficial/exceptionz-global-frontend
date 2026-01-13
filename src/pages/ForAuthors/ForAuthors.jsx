import React from 'react';
import { Link } from 'react-router-dom';
import {
    FileText,
    CheckCircle,
    Download,
    Clock,
    AlertCircle,
    ArrowRight,
    BookOpen,
    PenTool,
    Search,
    Award
} from 'lucide-react';
import SectionTitle from '../../components/UI/SectionTitle';
import Button from '../../components/UI/Button';
import Accordion from '../../components/UI/Accordion';
import './ForAuthors.css';

const ForAuthors = () => {
    const guidelines = [
        {
            icon: FileText,
            title: 'Paper Format',
            description: 'Papers must follow IEEE conference format. Maximum 6 pages including references.'
        },
        {
            icon: PenTool,
            title: 'Original Work',
            description: 'Submissions must be original and not under review elsewhere.'
        },
        {
            icon: BookOpen,
            title: 'Language',
            description: 'All papers must be written in English with proper grammar and formatting.'
        },
        {
            icon: Search,
            title: 'Plagiarism Free',
            description: 'Papers must pass plagiarism check with less than 15% similarity.'
        }
    ];

    const submissionSteps = [
        { step: 1, title: 'Register', description: 'Create your author account on our portal' },
        { step: 2, title: 'Prepare', description: 'Format your paper using IEEE template' },
        { step: 3, title: 'Submit', description: 'Upload your manuscript and details' },
        { step: 4, title: 'Review', description: 'Wait for peer review feedback' },
        { step: 5, title: 'Revise', description: 'Address reviewer comments if needed' },
        { step: 6, title: 'Publish', description: 'Final paper published in IEEE' }
    ];

    const faqs = [
        {
            title: 'What is the paper submission deadline?',
            content: 'Deadlines vary by conference. Check the specific conference page for exact dates. We recommend submitting at least a week before the deadline to avoid last-minute issues.'
        },
        {
            title: 'What is the review process timeline?',
            content: 'The peer review process typically takes 2-4 weeks. You will receive notification of acceptance, revision request, or rejection via email.'
        },
        {
            title: 'Can I submit a paper under review elsewhere?',
            content: 'No, we do not accept papers that are currently under review at other journals or conferences. Your submission must be exclusive to our conference.'
        },
        {
            title: 'What file format should I use?',
            content: 'Submit your paper in PDF format. The source files (Word or LaTeX) will be requested after acceptance for final formatting.'
        },
        {
            title: 'Is there a registration fee?',
            content: 'Yes, accepted papers require at least one author to register for the conference and pay the registration fee for the paper to be published.'
        },
        {
            title: 'Will my paper be indexed in IEEE Xplore?',
            content: 'Yes, all accepted and presented papers will be submitted for inclusion in IEEE Xplore, subject to meeting IEEE quality standards.'
        },
        {
            title: 'Can I make changes after submission?',
            content: 'Minor changes can be made before the review deadline. After review begins, changes are only allowed during the revision phase if requested by reviewers.'
        },
        {
            title: 'How many authors can be listed on a paper?',
            content: 'There is no strict limit on the number of authors, but all listed authors should have made significant contributions to the research.'
        }
    ];



    return (
        <div className="authors-page">
            {/* Hero Section */}
            <section className="authors-hero">
                <div className="authors-hero-bg"></div>
                <div className="container">
                    <div className="authors-hero-content">
                        <span className="authors-hero-badge">For Authors</span>
                        <h1 className="authors-hero-title">Author Guidelines & Resources</h1>
                        <p className="authors-hero-description">
                            Everything you need to know about submitting your research paper
                            to our IEEE conferences. Follow our guidelines for a smooth submission experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Guidelines Section */}
            <section className="guidelines-section section">
                <div className="container">
                    <SectionTitle
                        title="Submission Guidelines"
                        subtitle="Essential requirements for your paper submission"
                    />
                    <div className="guidelines-grid">
                        {guidelines.map((item, index) => (
                            <div key={index} className="guideline-card">
                                <div className="guideline-icon">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="guideline-title">{item.title}</h3>
                                <p className="guideline-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Submission Process */}
            <section className="process-section section bg-surface">
                <div className="container">
                    <SectionTitle
                        title="Submission Process"
                        subtitle="Simple steps to submit your paper"
                    />
                    <div className="submission-steps">
                        {submissionSteps.map((item, index) => (
                            <div key={index} className="submission-step">
                                <div className="submission-step-marker">
                                    <span className="submission-step-number">{item.step}</span>
                                    {index < submissionSteps.length - 1 && <div className="submission-step-line"></div>}
                                </div>
                                <div className="submission-step-content">
                                    <h4 className="submission-step-title">{item.title}</h4>
                                    <p className="submission-step-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* FAQ Section */}
            <section className="faq-section section bg-black">
                <div className="container">
                    <SectionTitle
                        title="Frequently Asked Questions"
                        subtitle="Common questions from authors"
                        light={true}
                    />
                    <div className="faq-container">
                        <Accordion items={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="authors-cta section">
                <div className="container">
                    <div className="authors-cta-content">
                        <h2>Ready to Submit Your Paper?</h2>
                        <p>Start your submission now and join thousands of researchers in our IEEE conferences.</p>
                        <div className="authors-cta-actions">
                            <Link to="/contact">
                                <Button variant="cta" size="lg" icon={ArrowRight} iconPosition="right">
                                    Submit Paper Now
                                </Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="secondary" size="lg">
                                    View Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForAuthors;
