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
            return 'https://play.google.com/store/apps/details?id=com.mrntlu.localstorage'
        } else if (platform === 'ios') {
            return 'https://apps.apple.com/app/watchlistfy/id6446774935'
        }
        return 'https://play.google.com/store/apps/details?id=com.mrntlu.localstorage'
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
        <div className="fixed top-0 left-0 right-0 z-60 bg-gradient-to-r from-[#2196F3] to-[#1976D2] text-white shadow-lg mobile-banner-visible">
            <div className="flex items-center justify-between px-3 py-2 max-w-full">
                {/* Left content */}
                <div className="flex items-center space-x-2 flex-1 min-w-0">
                    <div className="flex-shrink-0">
                        <span className="text-lg">📱</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium truncate">
                            Get the full Watchlistfy experience
                        </p>
                    </div>
                </div>

                {/* Right buttons */}
                <div className="flex items-center space-x-2 flex-shrink-0">
                    <a
                        href={getStoreLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 bg-white bg-opacity-20 hover:bg-opacity-30 px-2 py-1 rounded text-xs font-medium transition-all duration-200"
                    >
                        {getStoreIcon()}
                        <span className="hidden xs:inline">{getStoreText()}</span>
                        <span className="xs:hidden">Get App</span>
                    </a>
                    <button
                        onClick={handleDismiss}
                        className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors duration-200 flex-shrink-0"
                        aria-label="Dismiss banner"
                    >
                        <AiOutlineClose size={14} />
                    </button>
                </div>
            </div>
        </div>
    )
} 