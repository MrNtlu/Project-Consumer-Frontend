'use client';

import { useState } from 'react';

export default function DeleteAccountPage() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setError('Please enter your email address');
            return;
        }

        if (!email.includes('@')) {
            setError('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/delete-account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setEmail('');
            } else {
                throw new Error('Failed to submit request');
            }
        } catch (err) {
            setError('Failed to submit request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <div className="text-center mb-8">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                            WaLi: Log, Track & Suggestions
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Developer: MrNtlu
                        </p>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Account Deletion Request – WaLi: Log, Track & Suggestions
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Official account deletion page for WaLi: Log, Track & Suggestions by MrNtlu
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                    {!isSubmitted ? (
                        <>
                            <div className="mb-6">
                                <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                                    <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                                        <strong>App:</strong> WaLi: Log, Track & Suggestions (com.mrntlu.projectconsumer)<br />
                                        <strong>Developer:</strong> MrNtlu
                                    </p>
                                    <p className="text-sm text-blue-700 dark:text-blue-300">
                                        This is the official account deletion page for WaLi: Log, Track & Suggestions by MrNtlu.
                                        If you no longer have the app installed, you can still request deletion here.
                                    </p>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    Enter the email associated with your WaLi account. You will receive a confirmation link;
                                    after confirming, we will delete your account and all associated data within 30 days.
                                </p>
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-3 mb-4">
                                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                        <strong>Warning:</strong> This deletion cannot be undone. All watchlists,
                                        ratings, and synced data will be permanently removed from your WaLi account.
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email address associated with your WaLi account
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                                        placeholder="mrntlu@gmail.com"
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
                                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Request Account Deletion'}
                                </button>
                            </form>

                            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                                    What happens next?
                                </h3>
                                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                    <li>• We will review your deletion request</li>
                                    <li>• You will receive a confirmation email within 24 hours</li>
                                    <li>• Your account will be deleted within 30 days</li>
                                    <li>• All your data will be permanently removed</li>
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
                                Request Submitted
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Your WaLi account deletion request has been submitted successfully.
                                You will receive a verification email within 24 hours to confirm the deletion.
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-500">
                                If you have any questions, please contact us at support@watchlistfy.com
                            </p>
                        </div>
                    )}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        This page is provided for compliance with Google Play Store requirements.
                        <br />
                        App: <strong>WaLi: Log, Track & Suggestions</strong> (com.mrntlu.projectconsumer) | Developer: <strong>MrNtlu</strong>
                    </p>
                </div>
            </div>
        </div>
    );
} 