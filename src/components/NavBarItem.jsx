"use client";

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function NavBarItem({title, param}) {
    const searchParams = useSearchParams();
    const type = searchParams.get("type");

    return (
        <div>
            <Link className={
                `m-4 hover:text-gray-300 font-semibold p-2 ${
                    type && type === param && "rounded-full underline underline-offset-8 decoration-4 decoration-white"
                }`
            } href={`/?type=${param}`}>
                {title}
            </Link>
        </div>
    )
}
