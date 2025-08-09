'use client'

import { useState, useEffect } from 'react'
import { SiGoogleplay, SiAppstore } from 'react-icons/si'
import { AiOutlineClose } from 'react-icons/ai'

export default function MobileAppBanner() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [platform, setPlatform] = useState(null)

    useEffect(() => {
        // Check if user is on mobile device
        const checkMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera
            const isMobileDevice = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())

            setIsMobile(isMobileDevice)

            if (isMobileDevice) {
                // Determine platform
                if (/android/i.test(userAgent)) {
                    setPlatform('android')
                } else if (/iphone|ipad|ipod/i.test(userAgent)) {
                    setPlatform('ios')
                }

                // Check if banner was dismissed
                const dismissed = localStorage.getItem('mobile-banner-dismissed')
                if (!dismissed) {
                    setIsVisible(true)
                }
            }
        }

        checkMobile()
    }, [])

    const handleDismiss = () => {
        setIsVisible(false)
        localStorage.setItem('mobile-banner-dismissed', 'true')
    }

    if (!isVisible || !isMobile) {
        return null
    }

    const getStoreLink = () => {
        if (platform === 'android') {
            return 'https://play.google.com/store/apps/details?id=com.mrntlu.projectconsumer'
        } else if (platform === 'ios') {
            return 'https://apps.apple.com/us/app/watchlistfy-ai-tracker/id6476311748'
        }
        return 'https://play.google.com/store/apps/details?id=com.mrntlu.projectconsumer'
    }

    const getStoreText = () => {
        if (platform === 'android') {
            return 'Get on Google Play'
        } else if (platform === 'ios') {
            return 'Get on App Store'
        }
        return 'Download App'
    }

    const getStoreIcon = () => {
        if (platform === 'android') {
            return <SiGoogleplay size={16} />
        } else if (platform === 'ios') {
            return <SiAppstore size={16} />
        }
        return <SiGoogleplay size={16} />
    }

    return (
        <div className="fixed h-20 sm:h-24 top-0 left-0 right-0 z-[9999] bg-gradient-to-r from-[#2196F3] to-[#1976D2] text-white shadow-lg mobile-banner-visible">
            <div className="flex items-center justify-center h-full max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between w-full">
                    {/* Left content */}
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                        <div className="flex-shrink-0">
                            <span className="text-xl sm:text-2xl">📱</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm sm:text-base font-medium truncate">
                                Get the full experience
                            </p>
                            <p className="text-xs sm:text-sm opacity-90 truncate">
                                Download our mobile app
                            </p>
                        </div>
                    </div>

                    {/* Right buttons */}
                    <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                        <a
                            href={getStoreLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 sm:space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm"
                        >
                            {getStoreIcon()}
                            <span className="hidden sm:inline">{getStoreText()}</span>
                            <span className="sm:hidden">Get App</span>
                        </a>
                        <button
                            onClick={handleDismiss}
                            className="p-1.5 sm:p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors duration-200 flex-shrink-0"
                            aria-label="Dismiss banner"
                        >
                            <AiOutlineClose size={16} className="sm:w-4 sm:h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 