import React from 'react';
import './Legal.css';

const Refund = () => {
    return (
        <div className="legal-page">
            <section className="legal-hero">
                <div className="legal-hero-bg"></div>
                <div className="container">
                    <div className="legal-hero-content">
                        <h1>Refund Policy</h1>
                        <p>Last updated: January 2024</p>
                    </div>
                </div>
            </section>

            <section className="legal-content section">
                <div className="container">
                    <div className="legal-container">
                        <div className="legal-section">
                            <h2>1. Overview</h2>
                            <p>
                                This Refund Policy outlines the terms and conditions under which Exceptionz Global
                                processes refund requests for conference registration and publication fees.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>2. Refund Eligibility</h2>
                            <p>Refunds may be granted in the following circumstances:</p>
                            <ul>
                                <li>Paper rejection after payment (full refund minus processing fees)</li>
                                <li>Conference cancellation by Exceptionz Global (full refund)</li>
                                <li>Duplicate payments (full refund of extra payment)</li>
                                <li>Withdrawal before review completion (partial refund)</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>3. Non-Refundable Situations</h2>
                            <p>Refunds will NOT be provided in the following cases:</p>
                            <ul>
                                <li>Paper accepted but author fails to present/attend</li>
                                <li>Withdrawal after camera-ready submission</li>
                                <li>Violation of submission guidelines or ethical misconduct</li>
                                <li>Change of mind after acceptance</li>
                                <li>Visa rejection (unless proof provided within 30 days)</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h2>4. Refund Amounts</h2>
                            <table className="legal-table">
                                <thead>
                                    <tr>
                                        <th>Situation</th>
                                        <th>Refund Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Paper rejected after payment</td>
                                        <td>100% minus 10% processing fee</td>
                                    </tr>
                                    <tr>
                                        <td>Conference cancelled</td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <td>Withdrawal before review</td>
                                        <td>70%</td>
                                    </tr>
                                    <tr>
                                        <td>Withdrawal during review</td>
                                        <td>50%</td>
                                    </tr>
                                    <tr>
                                        <td>Visa rejection (with proof)</td>
                                        <td>80%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="legal-section">
                            <h2>5. Refund Request Process</h2>
                            <p>To request a refund:</p>
                            <ol>
                                <li>Email your refund request to <a href="mailto:refunds@exceptionzglobal.com">refunds@exceptionzglobal.com</a></li>
                                <li>Include your paper ID, payment receipt, and reason for refund</li>
                                <li>Provide any supporting documentation (e.g., visa rejection letter)</li>
                                <li>Allow 5-7 business days for initial response</li>
                            </ol>
                        </div>

                        <div className="legal-section">
                            <h2>6. Processing Time</h2>
                            <p>
                                Approved refunds will be processed within 15-20 business days. The refund will be
                                credited to the original payment method. International transactions may take
                                additional time depending on your bank.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>7. Currency and Fees</h2>
                            <p>
                                Refunds will be processed in the original currency of payment. Any currency conversion
                                fees or bank charges incurred during the refund process are the responsibility of the
                                recipient.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>8. Exceptions</h2>
                            <p>
                                Exceptional circumstances may be considered on a case-by-case basis. Please contact
                                our support team with detailed information about your situation.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h2>9. Contact for Refunds</h2>
                            <p>
                                For all refund-related inquiries, please contact:
                                <a href="mailto:refunds@exceptionzglobal.com"> refunds@exceptionzglobal.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Refund;
