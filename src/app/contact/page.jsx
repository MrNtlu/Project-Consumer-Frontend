'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        type: 'question',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.subject || !formData.message) {
            setError('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    type: 'question',
                    subject: '',
                    message: ''
                });
            } else {
                throw new Error('Failed to submit message');
            }
        } catch (err) {
            setError('Failed to submit message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Have a question or feature request? We would love to hear from you.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                    {!isSubmitted ? (
                        <>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                        What can we help you with? *
                                    </label>
                                    <div className="space-y-3">
                                        <div>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="type"
                                                    value="question"
                                                    checked={formData.type === 'question'}
                                                    onChange={handleInputChange}
                                                    className="mr-2"
                                                />
                                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                                    I have a question
                                                </span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="type"
                                                    value="feature-request"
                                                    checked={formData.type === 'feature-request'}
                                                    onChange={handleInputChange}
                                                    className="mr-2"
                                                />
                                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                                    I want to request a feature
                                                </span>
                                            </label>
                                        </div>
                                        <div>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="type"
                                                    value="feedback"
                                                    checked={formData.type === 'feedback'}
                                                    onChange={handleInputChange}
                                                    className="mr-2"
                                                />
                                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                                    I want to provide feedback
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                        placeholder={
                                            formData.type === 'question' ? 'What do you need help with?' :
                                                formData.type === 'feature-request' ? 'What feature would you like to see?' :
                                                    'What would you like to tell us?'
                                        }
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={6}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                        placeholder={
                                            formData.type === 'question' ? 'Describe your question in detail. Include any relevant information about your device, browser, or the issue you\'re experiencing.' :
                                                formData.type === 'feature-request' ? 'Describe your feature request in detail. What would you like to see added or improved? How would this feature benefit you and other users?' :
                                                    'Tell us what you think about Watchlistfy. What do you like? What could be improved?'
                                        }
                                        required
                                    />
                                </div>

                                {error && (
                                    <div className="text-red-600 dark:text-red-400 text-sm">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>

                            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                    Tips for better responses
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>• Be specific and detailed in your message</li>
                                    <li>• For questions: Include device/browser info and error messages</li>
                                    <li>• For feature requests: Explain why it would be useful</li>
                                    <li>• For feedback: Be constructive and specific</li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Message Sent
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Your message has been sent successfully. We will review it and get back to you if needed.
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-500">
                                Thank you for reaching out to us!
                            </p>
                        </div>
                    )}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        We appreciate your feedback and questions.
                        <br />
                        App: Watchlistfy | Developer: Watchlistfy
                    </p>
                </div>
            </div>
        </div>
    );
}