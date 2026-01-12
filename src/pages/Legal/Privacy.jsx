import React from 'react';
import './Legal.css';

const Privacy = () => {
    return (
        <div className="legal-page">
            <section className="legal-hero">
                <div className="legal-hero-bg"></div>
                <div className="container">
                    <div className="legal-hero-content">
                        <h1>Privacy Policy</h1>
                        <p>Last updated: January 2024</p>
                    </div>
                </div>
            </section>

            <section className="legal-content section">
                <div className="container">
                    <div className="legal-container">
                        <div className="legal-section">
                            <h2>1. Information We Collect</h2>
                            <p>We collect information that you provide directly to us, including:</p>
                            <ul>
                                <li>Name, email address, phone number, and affiliation</li>
                                <li>Paper submissions and associated metadata</li>
                                <li>Payment information for registration</li>
                                <li>Communication records with our team</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>2. How We Use Your Information</h2>
                            <p>We use the collected information to:</p>
                            <ul>
                                <li>Process paper submissions and manage the review process</li>
                                <li>Communicate with you about your submissions and our services</li>
                                <li>Process payments and send confirmations</li>
                                <li>Publish accepted papers and conference proceedings</li>
                                <li>Improve our services and user experience</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. Information Sharing</h2>
                            <p>We may share your information with:</p>
                            <ul>
                                <li>Peer reviewers for the purpose of reviewing your submission</li>
                                <li>IEEE and other partners for publication and indexing</li>
                                <li>Service providers who assist in our operations</li>
                                <li>Legal authorities when required by law</li>
                            </ul>
                            <p>We do not sell your personal information to third parties.</p>
                        </div>

                        <div className="legal-section">
                            <h2>4. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal
                                information against unauthorized access, alteration, disclosure, or destruction. However,
                                no method of transmission over the Internet is 100% secure.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>5. Data Retention</h2>
                            <p>
                                We retain your personal information for as long as necessary to fulfill the purposes for
                                which it was collected, including to satisfy legal, accounting, or reporting requirements.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>6. Your Rights (GDPR Compliance)</h2>
                            <p>If you are in the European Economic Area, you have the right to:</p>
                            <ul>
                                <li>Access your personal data</li>
                                <li>Correct inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Object to processing of your data</li>
                                <li>Request data portability</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>7. Cookies</h2>
                            <p>
                                We use cookies and similar technologies to enhance your experience on our website.
                                You can control cookie preferences through your browser settings. Essential cookies
                                are required for the website to function properly.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>8. Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party websites. We are not responsible for
                                the privacy practices of these external sites. We encourage you to review their
                                privacy policies.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>9. Children's Privacy</h2>
                            <p>
                                Our services are not directed to individuals under 18 years of age. We do not
                                knowingly collect personal information from children.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>10. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy periodically. We will notify you of any material
                                changes by posting the new policy on this page with an updated revision date.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>11. Contact Us</h2>
                            <p>
                                For questions about this Privacy Policy or your personal data, contact us at
                                <a href="mailto:privacy@exceptionzglobal.com"> privacy@exceptionzglobal.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
