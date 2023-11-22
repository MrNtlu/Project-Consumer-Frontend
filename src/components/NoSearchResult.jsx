import React from 'react'

export default function NoSearchResult({ search }) {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
            <p className="text-6xl font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Not Found 😔</h1>
            <p className="mt-6 text-2xl leading-7">Couldn&apos;t find any result for {search}</p>
        </div>
    </main>
  )
}
