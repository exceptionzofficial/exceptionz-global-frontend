import React, { useState, useEffect, useRef } from 'react';
import './StatCounter.css';

const StatCounter = ({ value, suffix = '', label, icon: Icon }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const start = 0;
        const end = parseInt(value);
        const increment = end / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
        <div className="stat-counter" ref={ref}>
            {Icon && (
                <div className="stat-counter-icon">
                    <Icon size={32} />
                </div>
            )}
            <div className="stat-counter-value">
                {count.toLocaleString()}{suffix}
            </div>
            <div className="stat-counter-label">{label}</div>
        </div>
    );
};

export default StatCounter;
