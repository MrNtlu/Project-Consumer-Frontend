'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

export default function ConditionalHeader() {
    const pathname = usePathname()

    // Hide header on search pages and app pages
    const hideHeader = pathname?.startsWith('/search') || pathname?.startsWith('/app')

    return (
        <div className={hideHeader ? 'hidden' : ''}>
            <Header />
        </div>
    )
} 