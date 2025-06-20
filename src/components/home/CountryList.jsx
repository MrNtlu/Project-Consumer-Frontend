'use client'

import { MoviePopularCountries, TVPopularCountries } from '../../constants/homeConstants'

export default function CountryList({ contentType = 'movie' }) {
    const getCountryList = () => {
        switch (contentType) {
            case 'tv':
                return TVPopularCountries
            default:
                return MoviePopularCountries
        }
    }

    const countries = getCountryList()

    return (
        <div className="overflow-x-auto">
            <div className="flex space-x-3 px-4 py-2">
                {countries.map((country, index) => (
                    <button
                        key={index}
                        className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        {country.name}
                    </button>
                ))}
            </div>
        </div>
    )
} 