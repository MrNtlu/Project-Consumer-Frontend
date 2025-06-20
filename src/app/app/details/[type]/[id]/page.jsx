'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { MdArrowBack, MdStar, MdAdd, MdBookmark, MdShare, MdPlayArrow, MdAccessTime, MdCalendarToday, MdLanguage } from 'react-icons/md'
import { SiGoogleplay, SiAppstore } from 'react-icons/si'
import LoadingSpinner from '../../../../../components/LoadingSpinner'
import { optimizeImageUrl } from '../../../../../utils/imageOptimizer'

export default function DetailsPage() {
    const params = useParams()
    const { type, id } = params
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [imageError, setImageError] = useState(false)

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await fetch(`/api/${type}/details?id=${id}`)

                if (!response.ok) {
                    throw new Error(`Failed to fetch ${type} details`)
                }

                const result = await response.json()
                setData(result.data)
            } catch (err) {
                console.error('Error fetching details:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        if (type && id) {
            fetchDetails()
        }
    }, [type, id])

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900" data-app-page="true">
                <div className="flex justify-center items-center py-20">
                    <LoadingSpinner text="Loading details" />
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900" data-app-page="true">
                <div className="flex justify-center items-center py-20">
                    <div className="text-center px-4">
                        <p className="text-red-600 dark:text-red-400 mb-2 font-semibold">Error Loading Details</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{error}</p>
                        <button
                            onClick={() => window.history.back()}
                            className="px-4 py-2 bg-[#2196F3] text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    if (!data) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900" data-app-page="true">
                <div className="flex justify-center items-center py-20">
                    <p className="text-gray-600 dark:text-gray-400">No data found</p>
                </div>
            </div>
        )
    }

    // Common data
    const title = data.title_en || data.title_original || data.title || data.name || 'Unknown Title'
    const originalTitle = (data.title_original !== title ? data.title_original : null) || (data.title_jp !== title ? data.title_jp : null)
    const description = data.description || data.overview || 'No description available.'
    const imageUrl = optimizeImageUrl(data.image_url, 'w500')
    const backdropUrl = data.backdrop ? optimizeImageUrl(data.backdrop, 'original') : null
    const status = data.status
    const genres = data.genres || []
    const recommendations = data.recommendations || []
    const streaming = data.streaming || []
    const reviews = data.reviews

    // Type-specific data
    const getTypeSpecificData = () => {
        switch (type) {
            case 'movie':
                return {
                    rating: data.tmdb_vote,
                    voteCount: data.tmdb_vote_count,
                    releaseDate: data.release_date,
                    runtime: data.length,
                    imdbId: data.imdb_id,
                    tmdbId: data.tmdb_id,
                    popularity: data.tmdb_popularity,
                    productionCompanies: data.production_companies || [],
                    videos: data.videos || [],
                    images: data.images || [],
                    cast: data.actors || []
                }
            case 'tv':
                return {
                    rating: data.tmdb_vote || data.vote_average,
                    voteCount: data.tmdb_vote_count,
                    releaseDate: data.release_date || data.first_air_date,
                    runtime: data.length || data.episode_run_time?.[0],
                    totalSeasons: data.total_seasons,
                    totalEpisodes: data.total_episodes,
                    seasons: data.seasons || [],
                    networks: data.networks || [],
                    cast: data.actors || []
                }
            case 'anime':
                return {
                    rating: data.mal_score,
                    scoredBy: data.mal_scored_by,
                    malId: data.mal_id,
                    episodes: data.episodes,
                    year: data.year,
                    season: data.season,
                    type: data.type,
                    source: data.source,
                    ageRating: data.age_rating,
                    aired: data.aired,
                    isAiring: data.is_airing,
                    popularity: data.popularity,
                    studios: data.studios || [],
                    producers: data.producers || [],
                    demographics: data.demographics || [],
                    themes: data.themes || [],
                    characters: data.characters || [],
                    relations: data.relations || [],
                    trailer: data.trailer
                }
            case 'game':
                return {
                    rating: data.rating || data.metacritic,
                    releaseDate: data.released,
                    platforms: data.platforms || data.parent_platforms || [],
                    developers: data.developers || [],
                    publishers: data.publishers || [],
                    esrbRating: data.esrb_rating,
                    playtime: data.playtime,
                    achievements: data.achievements_count,
                    screenshots: data.screenshots || [],
                    stores: data.stores || []
                }
            default:
                return {}
        }
    }

    const typeData = getTypeSpecificData()

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900" data-app-page="true">
            {/* Header */}
            <header className="sticky top-0 z-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex items-center justify-between px-3 sm:px-4 py-3">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center space-x-1 sm:space-x-2 text-gray-600 dark:text-gray-300 hover:text-[#2196F3] transition-colors duration-200"
                    >
                        <MdArrowBack size={20} />
                        <span className="text-xs sm:text-sm font-medium">Back</span>
                    </button>

                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <Image
                            src="/static/images/logo.png"
                            alt="Watchlistfy Logo"
                            width={28}
                            height={28}
                            className="rounded-lg sm:w-8 sm:h-8"
                        />
                        <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Watchlistfy</h1>
                    </div>

                    <div className="flex items-center space-x-1 sm:space-x-2">
                        <button className="p-1.5 sm:p-2 text-gray-600 dark:text-gray-300 hover:text-[#2196F3] transition-colors duration-200">
                            <MdShare size={18} className="sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative">
                {backdropUrl ? (
                    <div className="relative h-64 sm:h-80 md:h-96">
                        <Image
                            src={backdropUrl}
                            alt={title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                ) : (
                    <div className="h-20 sm:h-24 md:h-28 bg-gradient-to-br from-[#2196F3] to-[#1976D2]"></div>
                )}

                <div className={`relative px-4 py-6 z-10 ${backdropUrl ? '-mt-20' : ''}`}>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col sm:flex-row gap-6">
                            {/* Poster */}
                            <div className="flex-shrink-0 mx-auto sm:mx-0">
                                <div className="relative w-48 h-72 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                                    {imageUrl && !imageError ? (
                                        <Image
                                            src={imageUrl}
                                            alt={title}
                                            fill
                                            className="object-cover"
                                            onError={() => setImageError(true)}
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full">
                                            <span className="text-4xl font-bold text-gray-400 dark:text-gray-500">
                                                {title.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Content Info */}
                            <div className="flex-1 text-center sm:text-left">
                                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                        {title}
                                    </h1>

                                    {originalTitle && (
                                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                                            {originalTitle}
                                        </p>
                                    )}

                                    {/* Metadata */}
                                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                                        {typeData.releaseDate && (
                                            <div className="flex items-center space-x-1">
                                                <MdCalendarToday size={16} />
                                                <span>{new Date(typeData.releaseDate).getFullYear()}</span>
                                            </div>
                                        )}
                                        {typeData.year && !typeData.releaseDate && (
                                            <div className="flex items-center space-x-1">
                                                <MdCalendarToday size={16} />
                                                <span>{typeData.year}</span>
                                            </div>
                                        )}
                                        {typeData.runtime && (
                                            <div className="flex items-center space-x-1">
                                                <MdAccessTime size={16} />
                                                <span>{typeData.runtime} min</span>
                                            </div>
                                        )}
                                        {typeData.episodes && (
                                            <div className="flex items-center space-x-1">
                                                <MdAccessTime size={16} />
                                                <span>{typeData.episodes} episodes</span>
                                            </div>
                                        )}
                                        {typeData.totalSeasons && (
                                            <div className="flex items-center space-x-1">
                                                <MdAccessTime size={16} />
                                                <span>{typeData.totalSeasons} seasons</span>
                                            </div>
                                        )}
                                        {typeData.rating && (
                                            <div className="flex items-center space-x-1">
                                                <MdStar className="text-yellow-400" size={16} />
                                                <span>{parseFloat(typeData.rating).toFixed(1)}</span>
                                                {typeData.voteCount && <span className="text-xs">({typeData.voteCount.toLocaleString()})</span>}
                                                {typeData.scoredBy && <span className="text-xs">({typeData.scoredBy.toLocaleString()})</span>}
                                            </div>
                                        )}
                                        {status && (
                                            <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">
                                                {status}
                                            </span>
                                        )}
                                        {typeData.ageRating && (
                                            <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs">
                                                {typeData.ageRating}
                                            </span>
                                        )}
                                        {typeData.type && type === 'anime' && (
                                            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                                                {typeData.type}
                                            </span>
                                        )}
                                    </div>



                                    {/* Overview */}
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Overview</h3>
                                        {type === 'game' ? (
                                            <div
                                                className="text-gray-700 dark:text-gray-300 leading-relaxed prose prose-sm max-w-none dark:prose-invert"
                                                dangerouslySetInnerHTML={{ __html: description }}
                                            />
                                        ) : (
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Genres */}
                                    {genres.length > 0 && (
                                        <div className="mb-6">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Genres</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {genres.map((genre, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                                                    >
                                                        {genre.name || genre}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Additional Details */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Left Column */}
                                        <div className="space-y-4">
                                            {/* Studios/Production Companies */}
                                            {(typeData.studios?.length > 0 || typeData.productionCompanies?.length > 0) && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                                        {type === 'anime' ? 'Studios' : 'Production Companies'}
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {(typeData.studios || typeData.productionCompanies || []).map((company, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                                                            >
                                                                {company.name || company}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Producers (Anime) */}
                                            {typeData.producers?.length > 0 && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Producers</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {typeData.producers.map((producer, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                                                            >
                                                                {producer.name || producer}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Developers/Publishers (Games) */}
                                            {typeData.developers?.length > 0 && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Developers</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {typeData.developers.map((dev, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                                                            >
                                                                {dev.name || dev}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {typeData.publishers?.length > 0 && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Publishers</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {typeData.publishers.map((pub, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                                                            >
                                                                {pub.name || pub}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Platforms (Games) */}
                                            {typeData.platforms?.length > 0 && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Platforms</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {typeData.platforms.map((platform, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm"
                                                            >
                                                                {platform.platform?.name || platform.name || platform}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Column */}
                                        <div className="space-y-4">
                                            {/* Source/Demographics (Anime) */}
                                            {typeData.source && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Source</h4>
                                                    <p className="text-gray-700 dark:text-gray-300 text-sm">{typeData.source}</p>
                                                </div>
                                            )}

                                            {typeData.demographics?.length > 0 && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Demographics</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {typeData.demographics.map((demo, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-sm"
                                                            >
                                                                {demo.name || demo}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {typeData.themes?.length > 0 && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Themes</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {typeData.themes.map((theme, index) => (
                                                            <span
                                                                key={index}
                                                                className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm"
                                                            >
                                                                {theme.name || theme}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Season/Aired (Anime) */}
                                            {typeData.season && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Season</h4>
                                                    <p className="text-gray-700 dark:text-gray-300 text-sm capitalize">{typeData.season} {typeData.year}</p>
                                                </div>
                                            )}

                                            {typeData.aired && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Aired</h4>
                                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                                        {typeData.aired.from && new Date(typeData.aired.from).toLocaleDateString()}
                                                        {typeData.aired.to && ` - ${new Date(typeData.aired.to).toLocaleDateString()}`}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Game specific */}
                                            {typeData.playtime && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Average Playtime</h4>
                                                    <p className="text-gray-700 dark:text-gray-300 text-sm">{typeData.playtime} hours</p>
                                                </div>
                                            )}

                                            {typeData.achievements && (
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Achievements</h4>
                                                    <p className="text-gray-700 dark:text-gray-300 text-sm">{typeData.achievements} achievements</p>
                                                </div>
                                            )}

                                            {/* External IDs */}
                                            <div className="flex flex-wrap gap-2">
                                                {typeData.imdbId && (
                                                    <a
                                                        href={`https://www.imdb.com/title/${typeData.imdbId}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-sm hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors"
                                                    >
                                                        IMDb
                                                    </a>
                                                )}
                                                {typeData.malId && (
                                                    <a
                                                        href={`https://myanimelist.net/anime/${typeData.malId}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                                                    >
                                                        MAL
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cast/Characters */}
            {(typeData.cast?.length > 0 || typeData.characters?.length > 0) && (
                <div className="px-4 py-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            {type === 'anime' ? 'Characters' : 'Cast'}
                        </h2>
                        <div className="flex overflow-x-auto space-x-4 pb-4">
                            {(typeData.cast || typeData.characters || []).slice(0, 10).map((person, index) => (
                                <div key={index} className="flex-shrink-0 w-24 text-center">
                                    <div className="relative w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                                        {person.image && (
                                            <Image
                                                src={person.image}
                                                alt={person.name}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                                        {person.name}
                                    </p>
                                    {person.character && (
                                        <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                            {person.character}
                                        </p>
                                    )}
                                    {person.role && (
                                        <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                                            {person.role}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* TV Seasons */}
            {type === 'tv' && typeData.seasons?.length > 0 && (
                <div className="px-4 py-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Seasons</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {typeData.seasons.map((season, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                                >
                                    <div className="relative h-32 bg-gray-200 dark:bg-gray-700">
                                        {season.image_url && (
                                            <Image
                                                src={optimizeImageUrl(season.image_url, 'w300')}
                                                alt={season.name}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-1 mb-1">
                                            {season.name}
                                        </h3>
                                        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                                            <span>{season.episode_count} episodes</span>
                                            {season.air_date && (
                                                <span>{new Date(season.air_date).getFullYear()}</span>
                                            )}
                                        </div>
                                        {season.season_num && (
                                            <div className="mt-1">
                                                <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                                                    Season {season.season_num}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Related Anime */}
            {type === 'anime' && typeData.relations?.length > 0 && (
                <div className="px-4 py-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Related Anime</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {typeData.relations.slice(0, 6).map((relation, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                                    onClick={() => {
                                        const relationId = relation._id || relation.anime_id
                                        if (relationId) {
                                            window.location.href = `/app/details/anime/${relationId}`
                                        }
                                    }}
                                >
                                    <div className="relative w-16 h-20 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden flex-shrink-0">
                                        {relation.image_url && (
                                            <Image
                                                src={optimizeImageUrl(relation.image_url, 'w200')}
                                                alt={relation.title_en || relation.title_original}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm line-clamp-2">
                                            {relation.title_en || relation.title_original}
                                        </h3>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                            {relation.relation} • {relation.type}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Streaming Providers */}
            {streaming.length > 0 && (
                <div className="px-4 py-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Where to Watch</h2>

                        {type === 'anime' ? (
                            // Anime streaming format: [{ name, url }]
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                {streaming.map((provider, index) => (
                                    <a
                                        key={index}
                                        href={provider.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
                                    >
                                        <div className="w-12 h-12 mb-2 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 rounded-lg text-white font-bold text-lg group-hover:scale-110 transition-transform duration-200">
                                            {provider.name.charAt(0)}
                                        </div>
                                        <span className="text-xs text-center font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">
                                            {provider.name}
                                        </span>
                                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                            Stream
                                        </span>
                                    </a>
                                ))}
                            </div>
                        ) : (
                            // Movie/TV streaming format: [{ country_code, streaming_platforms, buy_options, rent_options }]
                            (() => {
                                const usStreaming = streaming.find(s => s.country_code === 'US') || streaming[0]
                                const allProviders = [
                                    ...(usStreaming?.streaming_platforms || []).map(p => ({ ...p, type: 'stream' })),
                                    ...(usStreaming?.buy_options || []).map(p => ({ ...p, type: 'buy' })),
                                    ...(usStreaming?.rent_options || []).map(p => ({ ...p, type: 'rent' }))
                                ]

                                // Remove duplicates based on name
                                const uniqueProviders = allProviders.filter((provider, index, self) =>
                                    index === self.findIndex(p => p.name === provider.name)
                                )

                                if (uniqueProviders.length === 0) return null

                                return (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                            {uniqueProviders.slice(0, 12).map((provider, index) => (
                                                <div
                                                    key={index}
                                                    className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
                                                >
                                                    {provider.logo && (
                                                        <div className="relative w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-200">
                                                            <Image
                                                                src={provider.logo}
                                                                alt={provider.name}
                                                                fill
                                                                className="object-contain rounded"
                                                            />
                                                        </div>
                                                    )}
                                                    <span className="text-xs text-center font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">
                                                        {provider.name}
                                                    </span>
                                                    <span className={`text-xs px-2 py-1 rounded-full ${provider.type === 'stream' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                                        provider.type === 'buy' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                                                            'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
                                                        }`}>
                                                        {provider.type === 'stream' ? 'Stream' : provider.type === 'buy' ? 'Buy' : 'Rent'}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        {usStreaming?.country_code && (
                                            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                                Availability shown for {usStreaming.country_code}
                                            </p>
                                        )}
                                    </div>
                                )
                            })()
                        )}
                    </div>
                </div>
            )}

            {/* Recommendations */}
            {recommendations.length > 0 && (
                <div className="px-4 py-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">You might also like</h2>
                        <div className="flex overflow-x-auto space-x-4 pb-4 px-4">
                            {recommendations.slice(0, 10).map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-32 cursor-pointer transform hover:scale-105 transition-transform duration-200 origin-center"
                                    onClick={() => {
                                        const itemId = item._id || item.id || item.tmdb_id || item.mal_id
                                        if (itemId) {
                                            window.history.pushState(null, '', `/app/details/${type}/${itemId}`)
                                            window.location.href = `/app/details/${type}/${itemId}`
                                        }
                                    }}
                                >
                                    <div className="relative h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden mb-2">
                                        {item.image_url && (
                                            <Image
                                                src={optimizeImageUrl(item.image_url, 'w300')}
                                                alt={item.title_en || item.title_original}
                                                fill
                                                className="object-cover"
                                            />
                                        )}
                                    </div>
                                    <p className="text-xs font-semibold text-gray-900 dark:text-white line-clamp-2">
                                        {item.title_en || item.title_original}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile App Promotion */}
            <div className="bg-gradient-to-r from-[#2196F3] to-[#1976D2] text-white py-6 px-4 mt-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-lg font-bold mb-2">Get the Full Experience</h3>
                    <p className="text-blue-100 mb-4 text-sm">
                        Download our mobile app for personalized lists, offline access, and AI recommendations
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.mrntlu.localstorage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-3 bg-black bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all duration-200 w-full sm:w-auto"
                        >
                            <SiGoogleplay size={20} />
                            <span className="text-sm font-medium">Get on Google Play</span>
                        </a>
                        <a
                            href="https://apps.apple.com/app/watchlistfy/id6446774935"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-3 bg-black bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all duration-200 w-full sm:w-auto"
                        >
                            <SiAppstore size={20} />
                            <span className="text-sm font-medium">Get on App Store</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
} 