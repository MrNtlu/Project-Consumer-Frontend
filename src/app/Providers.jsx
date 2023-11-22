"use client";

import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-[#212121] dark:text-white text-black transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  )
}
