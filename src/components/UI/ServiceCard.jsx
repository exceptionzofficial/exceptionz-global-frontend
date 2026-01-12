import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description, featured = false }) => {
    return (
        <div className={`service-card ${featured ? 'service-card-featured' : ''}`}>
            <div className="service-card-icon">
                <Icon size={28} />
            </div>
            <h3 className="service-card-title">{title}</h3>
            <p className="service-card-description">{description}</p>
        </div>
    );
};

export default ServiceCard;
