import React from 'react';
import './Legal.css';

const Terms = () => {
    return (
        <div className="legal-page">
            <section className="legal-hero">
                <div className="legal-hero-bg"></div>
                <div className="container">
                    <div className="legal-hero-content">
                        <h1>Terms and Conditions</h1>
                        <p>Last updated: January 2024</p>
                    </div>
                </div>
            </section>

            <section className="legal-content section">
                <div className="container">
                    <div className="legal-container">
                        <div className="legal-section">
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the services of Exceptionz Global ("Company," "we," "us," or "our"),
                                you agree to be bound by these Terms and Conditions. If you do not agree to these terms,
                                please do not use our services.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>2. Services Description</h2>
                            <p>
                                Exceptionz Global provides IEEE conference paper publishing services, including but not limited to:
                            </p>
                            <ul>
                                <li>Conference paper submission and publication</li>
                                <li>Peer review management</li>
                                <li>DOI assignment</li>
                                <li>Indexing services</li>
                                <li>Editorial support</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. User Responsibilities</h2>
                            <p>As a user of our services, you agree to:</p>
                            <ul>
                                <li>Provide accurate and complete information during registration and submission</li>
                                <li>Submit only original work that does not infringe on third-party intellectual property rights</li>
                                <li>Not submit papers currently under review at other venues</li>
                                <li>Comply with all applicable laws and regulations</li>
                                <li>Maintain the confidentiality of your account credentials</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>4. Submission Guidelines</h2>
                            <p>
                                All submissions must adhere to our submission guidelines, including formatting requirements,
                                word limits, and ethical standards. Papers that do not meet these requirements may be rejected
                                without review.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>5. Review Process</h2>
                            <p>
                                All submitted papers undergo a rigorous peer review process. We reserve the right to accept
                                or reject any submission based on quality, relevance, and adherence to guidelines. Review
                                decisions are final and not subject to appeal.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>6. Publication and Indexing</h2>
                            <p>
                                Accepted papers will be published in IEEE conferences and submitted for indexing in various
                                databases. While we make every effort to ensure indexing, we cannot guarantee inclusion in
                                any specific database as this is subject to third-party policies.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>7. Payment Terms</h2>
                            <p>
                                Registration fees are required for accepted papers. Fees are non-refundable unless otherwise
                                specified in our Refund Policy. All prices are subject to change without notice.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>8. Intellectual Property</h2>
                            <p>
                                Authors retain copyright of their work unless a copyright transfer agreement is signed.
                                By submitting, authors grant us the right to publish and distribute the work as part of
                                conference proceedings.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>9. Limitation of Liability</h2>
                            <p>
                                Exceptionz Global shall not be liable for any indirect, incidental, special, or consequential
                                damages arising from the use of our services. Our total liability shall not exceed the fees
                                paid by you for the specific service.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>10. Modifications to Terms</h2>
                            <p>
                                We reserve the right to modify these terms at any time. Continued use of our services after
                                such modifications constitutes acceptance of the new terms.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>11. Contact Information</h2>
                            <p>
                                For questions regarding these Terms and Conditions, please contact us at
                                <a href="mailto:info@exceptionzglobal.com"> info@exceptionzglobal.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
