import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({
    title,
    subtitle,
    centered = true,
    light = false,
    className = ''
}) => {
    return (
        <div className={`section-title ${centered ? 'section-title-centered' : ''} ${light ? 'section-title-light' : ''} ${className}`}>
            <h2 className="section-title-heading">{title}</h2>
            {subtitle && <p className="section-title-subtitle">{subtitle}</p>}
            <div className="section-title-divider">
                <span className="section-title-line"></span>
                <span className="section-title-dot"></span>
                <span className="section-title-line"></span>
            </div>
        </div>
    );
};

export default SectionTitle;
