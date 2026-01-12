import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Accordion.css';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className={`accordion-item ${isOpen ? 'accordion-item-open' : ''}`}>
            <button className="accordion-header" onClick={onClick}>
                <span className="accordion-title">{title}</span>
                <ChevronDown className="accordion-icon" size={20} />
            </button>
            <div className="accordion-content">
                <div className="accordion-content-inner">
                    {content}
                </div>
            </div>
        </div>
    );
};

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
