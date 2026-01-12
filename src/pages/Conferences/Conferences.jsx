import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight, Search, Filter } from 'lucide-react';
import SectionTitle from '../../components/UI/SectionTitle';
import Button from '../../components/UI/Button';
import './Conferences.css';

const Conferences = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const upcomingConferences = [
        {
            id: 1,
            name: 'ICECE 2024',
            fullName: 'International Conference on Electronics & Computer Engineering',
            date: 'March 15-17, 2024',
            location: 'Dubai, UAE',
            deadline: 'Feb 20, 2024',
            topics: ['Electronics', 'Computer Engineering', 'VLSI', 'Embedded Systems'],
            status: 'accepting'
        },
        {
            id: 2,
            name: 'ICSIP 2024',
            fullName: 'International Conference on Signal & Image Processing',
            date: 'April 10-12, 2024',
            location: 'Singapore',
            deadline: 'Mar 15, 2024',
            topics: ['Signal Processing', 'Image Processing', 'Machine Learning', 'Computer Vision'],
            status: 'accepting'
        },
        {
            id: 3,
            name: 'ICIOT 2024',
            fullName: 'International Conference on Internet of Things',
            date: 'May 5-7, 2024',
            location: 'London, UK',
            deadline: 'Apr 10, 2024',
            topics: ['IoT', 'Smart Cities', 'Sensors', 'Edge Computing'],
            status: 'accepting'
        },
        {
            id: 4,
            name: 'ICAI 2024',
            fullName: 'International Conference on Artificial Intelligence',
            date: 'June 20-22, 2024',
            location: 'Tokyo, Japan',
            deadline: 'May 25, 2024',
            topics: ['AI', 'Deep Learning', 'NLP', 'Robotics'],
            status: 'upcoming'
        }
    ];

    const pastConferences = [
        {
            id: 5,
            name: 'ICCN 2023',
            fullName: 'International Conference on Computer Networks',
            date: 'December 10-12, 2023',
            location: 'New York, USA',
            papers: 128,
            topics: ['Networking', 'Security', '5G/6G', 'Cloud Computing']
        },
        {
            id: 6,
            name: 'ICDS 2023',
            fullName: 'International Conference on Data Science',
            date: 'November 5-7, 2023',
            location: 'Berlin, Germany',
            papers: 95,
            topics: ['Data Science', 'Big Data', 'Analytics', 'Visualization']
        },
        {
            id: 7,
            name: 'ICRE 2023',
            fullName: 'International Conference on Renewable Energy',
            date: 'October 15-17, 2023',
            location: 'Sydney, Australia',
            papers: 112,
            topics: ['Solar Energy', 'Wind Power', 'Energy Storage', 'Smart Grid']
        }
    ];

    const subjects = [
        'All Subjects',
        'Computer Science',
        'Electronics',
        'AI & ML',
        'IoT',
        'Data Science',
        'Networking',
        'Renewable Energy'
    ];

    return (
        <div className="conferences-page">
            {/* Hero Section */}
            <section className="conferences-hero">
                <div className="conferences-hero-bg"></div>
                <div className="container">
                    <div className="conferences-hero-content">
                        <span className="conferences-hero-badge">Conferences</span>
                        <h1 className="conferences-hero-title">IEEE Indexed Conferences</h1>
                        <p className="conferences-hero-description">
                            Submit your research to our prestigious IEEE-indexed international
                            conferences and connect with researchers worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Upcoming Conferences */}
            <section className="conferences-section section">
                <div className="container">
                    <SectionTitle
                        title="Upcoming Conferences"
                        subtitle="Submit your papers to these upcoming IEEE conferences"
                    />

                    <div className="conferences-grid">
                        {upcomingConferences.map((conf) => (
                            <div key={conf.id} className="conference-card">
                                <div className="conference-header">
                                    <span className={`conference-status conference-status-${conf.status}`}>
                                        {conf.status === 'accepting' ? 'Accepting Papers' : 'Coming Soon'}
                                    </span>
                                    <h3 className="conference-name">{conf.name}</h3>
                                    <p className="conference-fullname">{conf.fullName}</p>
                                </div>
                                <div className="conference-details">
                                    <div className="conference-detail">
                                        <Calendar size={16} />
                                        <span>{conf.date}</span>
                                    </div>
                                    <div className="conference-detail">
                                        <MapPin size={16} />
                                        <span>{conf.location}</span>
                                    </div>
                                </div>
                                <div className="conference-topics">
                                    {conf.topics.map((topic, idx) => (
                                        <span key={idx} className="conference-topic">{topic}</span>
                                    ))}
                                </div>
                                <div className="conference-footer">
                                    <div className="conference-deadline">
                                        <span className="deadline-label">Submission Deadline:</span>
                                        <span className="deadline-date">{conf.deadline}</span>
                                    </div>
                                    <Link to="/contact">
                                        <Button variant="primary" size="sm" icon={ArrowRight} iconPosition="right">
                                            Submit Paper
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Conferences - Commented out for now
            <section className="past-conferences section bg-surface">
                <div className="container">
                    <SectionTitle
                        title="Past Conferences"
                        subtitle="Archives of our successfully completed conferences"
                    />

                    <div className="past-grid">
                        {pastConferences.map((conf) => (
                            <div key={conf.id} className="past-card">
                                <div className="past-header">
                                    <h3 className="past-name">{conf.name}</h3>
                                    <span className="past-papers">{conf.papers} Papers</span>
                                </div>
                                <p className="past-fullname">{conf.fullName}</p>
                                <div className="past-details">
                                    <div className="past-detail">
                                        <Calendar size={14} />
                                        <span>{conf.date}</span>
                                    </div>
                                    <div className="past-detail">
                                        <MapPin size={14} />
                                        <span>{conf.location}</span>
                                    </div>
                                </div>
                                <div className="past-topics">
                                    {conf.topics.slice(0, 3).map((topic, idx) => (
                                        <span key={idx} className="past-topic">{topic}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            */}

            {/* CTA */}
            <section className="conferences-cta">
                <div className="container">
                    <div className="conferences-cta-content">
                        <h2>Don't See Your Topic?</h2>
                        <p>We organize conferences across various domains. Contact us for custom conference requirements.</p>
                        <Link to="/contact">
                            <Button variant="cta" size="lg" icon={ArrowRight} iconPosition="right">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Conferences;
