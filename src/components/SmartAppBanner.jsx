'use client'

import { useEffect } from 'react'

export default function SmartAppBanner() {
  useEffect(() => {
    // Add iOS Smart App Banner meta tag
    const iosMetaTag = document.createElement('meta')
    iosMetaTag.name = 'apple-itunes-app'
    iosMetaTag.content = 'app-id=6476311748'
    document.head.appendChild(iosMetaTag)

    // Add mobile web app capable meta tag
    const mobileCapableTag = document.createElement('meta')
    mobileCapableTag.name = 'mobile-web-app-capable'
    mobileCapableTag.content = 'yes'
    document.head.appendChild(mobileCapableTag)

    return () => {
      // Cleanup on unmount
      const existingIosTag = document.querySelector('meta[name="apple-itunes-app"]')
      const existingMobileTag = document.querySelector('meta[name="mobile-web-app-capable"]')
      if (existingIosTag && existingIosTag.parentNode) {
        existingIosTag.parentNode.removeChild(existingIosTag)
      }
      if (existingMobileTag && existingMobileTag.parentNode) {
        existingMobileTag.parentNode.removeChild(existingMobileTag)
      }
    }
  }, [])

  return null // This component doesn't render anything visible
}