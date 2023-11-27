"use client";

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function NavBarItem({title, param}) {
    const searchParams = useSearchParams();
    var type = searchParams.get("type");

    if (type == null) {
        type = "movie";
    }

    return (
        <div>
            <Link className={
                `m-4 hover:text-gray-300 font-semibold p-2 ${
                    type && type === param && "text-[#2196F3] rounded-full underline underline-offset-8 decoration-4 decoration-[#2196F3]"
                }`
            } href={`/?type=${param}`}>
                {title}
            </Link>
        </div>
    )
}
