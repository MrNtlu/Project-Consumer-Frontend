'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

export default function Screenshots() {
    const scrollContainerRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const screenshots = [
        'ss1.png',
        'ss2.png',
        'ss3.png',
        'ss4.png',
        'ss5.png',
        'ss6.png',
        'ss7.png',
        'ss8.png',
        'ss9.png',
        'ss10.png',
        'ss11.png',
    ]

    const updateScrollButtons = useCallback(() => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
        }
    }, [])

    const scroll = useCallback((direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }, [])

    useEffect(() => {
        const container = scrollContainerRef.current
        if (container) {
            updateScrollButtons()
            container.addEventListener('scroll', updateScrollButtons)
            window.addEventListener('resize', updateScrollButtons)

            return () => {
                container.removeEventListener('scroll', updateScrollButtons)
                window.removeEventListener('resize', updateScrollButtons)
            }
        }
    }, [updateScrollButtons])

    return (
        <section id="screenshots" className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-800">
                        See <span className="text-[#2196F3] bg-gradient-to-r from-[#2196F3] to-blue-600 bg-clip-text text-transparent">Watchlistfy</span> in Action
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">Experience the beautiful interface that makes tracking entertainment effortless</p>
                </div>

                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide"
                    >
                        <div className="flex gap-6" style={{ width: 'max-content' }}>
                            {screenshots.map((screenshot, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                    style={{ width: '250px' }}
                                >
                                    <div className="relative w-full rounded-lg overflow-hidden" style={{ height: '540px' }}>
                                        <Image
                                            src={`/static/images/screenshots/${screenshot}`}
                                            alt={`Watchlistfy App Screenshot ${index + 1}`}
                                            fill
                                            className="object-contain"
                                            sizes="250px"
                                            loading={index < 2 ? "eager" : "lazy"}
                                            placeholder="blur"
                                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {canScrollLeft && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                            aria-label="Scroll left"
                        >
                            <MdChevronLeft size={24} />
                        </button>
                    )}

                    {canScrollRight && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
                            aria-label="Scroll right"
                        >
                            <MdChevronRight size={24} />
                        </button>
                    )}

                    {canScrollLeft && (
                        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
                    )}
                    {canScrollRight && (
                        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
                    )}
                </div>

                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500">Use the arrow buttons or scroll horizontally to see more screenshots</p>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
}