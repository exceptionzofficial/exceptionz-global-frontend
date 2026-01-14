import React from 'react';
import './Legal.css';

const Copyright = () => {
    return (
        <div className="legal-page">
            <section className="legal-hero">
                <div className="legal-hero-bg"></div>
                <div className="container">
                    <div className="legal-hero-content">
                        <h1>Copyright Policy</h1>
                        <p>Last updated: January 2024</p>
                    </div>
                </div>
            </section>

            <section className="legal-content section">
                <div className="container">
                    <div className="legal-container">
                        <div className="legal-section">
                            <h2>1. Copyright Ownership</h2>
                            <p>
                                Authors retain full copyright of their original work submitted to Exceptionz Research & Conference Services
                                conferences unless a copyright transfer agreement is signed. Upon acceptance and
                                publication, authors grant Exceptionz Research & Conference Services and IEEE the right to publish and
                                distribute the work.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>2. Copyright Transfer Agreement</h2>
                            <p>
                                For papers published in IEEE conferences, authors may be required to sign a copyright
                                transfer agreement. This agreement grants IEEE the exclusive right to:
                            </p>
                            <ul>
                                <li>Publish and distribute the work in all forms and media</li>
                                <li>Create derivative works for journal publication</li>
                                <li>Authorize third parties to republish the work</li>
                                <li>Include the work in IEEE Xplore and other databases</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. Author Rights Retained</h2>
                            <p>Even after copyright transfer, authors retain the right to:</p>
                            <ul>
                                <li>Use the work for personal, educational, or research purposes</li>
                                <li>Post preprints on personal or institutional websites</li>
                                <li>Include the work in doctoral dissertations or theses</li>
                                <li>Present the work at conferences and workshops</li>
                                <li>Share copies with colleagues for non-commercial purposes</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>4. Open Access Options</h2>
                            <p>
                                Authors may opt for Open Access publication, which allows the work to be freely
                                available to all readers. Open Access options include:
                            </p>
                            <ul>
                                <li>Gold Open Access: Immediate free access with CC license</li>
                                <li>Green Open Access: Self-archiving of accepted manuscript</li>
                            </ul>
                            <p>Additional fees may apply for Open Access publication.</p>
                        </div>

                        <div className="legal-section">
                            <h2>5. Plagiarism Policy</h2>
                            <p>
                                All submissions are screened for plagiarism using industry-standard tools. Papers
                                with similarity index above 15% may be rejected. The following are considered
                                plagiarism violations:
                            </p>
                            <ul>
                                <li>Copying text from other sources without proper citation</li>
                                <li>Self-plagiarism: Reusing substantial portions of own prior work</li>
                                <li>Paraphrasing without attribution</li>
                                <li>Submitting work authored by others</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>6. Consequences of Plagiarism</h2>
                            <p>If plagiarism is detected:</p>
                            <ul>
                                <li>Paper will be immediately rejected or retracted</li>
                                <li>Authors may be banned from future submissions</li>
                                <li>Affiliated institutions may be notified</li>
                                <li>The incident may be reported to relevant academic bodies</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>7. Third-Party Content</h2>
                            <p>
                                Authors are responsible for obtaining permissions for any third-party content
                                included in their submissions, such as:
                            </p>
                            <ul>
                                <li>Images, figures, or diagrams from other sources</li>
                                <li>Substantial quotations from copyrighted works</li>
                                <li>Data or algorithms owned by third parties</li>
                                <li>Code under restrictive licenses</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>8. DMCA Compliance</h2>
                            <p>
                                Exceptionz Research & Conference Services complies with the Digital Millennium Copyright Act (DMCA).
                                If you believe your copyrighted work has been infringed, please contact our
                                designated DMCA agent at <a href="mailto:dmca@exceptionzglobal.com">dmca@exceptionzglobal.com</a>
                                with the required information.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>9. Citation Guidelines</h2>
                            <p>
                                Published papers should be cited using the official citation format provided
                                upon publication. The DOI should be included in all citations for easy reference
                                and tracking.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>10. Contact for Copyright Issues</h2>
                            <p>
                                For copyright-related inquiries or to report infringement, contact:
                                <a href="mailto:exceptionzofficial@gmail.com"> exceptionzofficial@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Copyright;
