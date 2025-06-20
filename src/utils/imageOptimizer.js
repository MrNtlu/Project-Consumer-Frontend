/**
 * Optimizes image URLs for better performance
 * @param {string} imageUrl - The original image URL
 * @param {string} size - The desired size (default: 'w400')
 * @returns {string} - The optimized image URL
 */
export function optimizeImageUrl(imageUrl, size = 'w400') {
    if (!imageUrl) return null;

    // Handle RAWG.io images (games)
    if (imageUrl.includes('rawg.io')) {
        return imageUrl.replace('/media/games/', '/media/crop/600/400/games/');
    }

    // Handle TMDB images (movies, TV shows)
    if (imageUrl.includes('image.tmdb.org')) {
        return imageUrl.replace('original', size);
    }

    // Handle MyAnimeList images (anime)
    if (imageUrl.includes('cdn.myanimelist.net')) {
        // MyAnimeList already provides optimized sizes, return as is
        return imageUrl;
    }

    // For other images, return as is
    return imageUrl;
}

/**
 * Get optimized image URL with specific dimensions
 * @param {string} imageUrl - The original image URL
 * @param {number} width - Desired width
 * @param {number} height - Desired height (optional)
 * @returns {string} - The optimized image URL
 */
export function getOptimizedImageUrl(imageUrl, width = 400, height = null) {
    if (!imageUrl) return null;

    // Handle RAWG.io images
    if (imageUrl.includes('rawg.io')) {
        const w = Math.min(width, 600);
        const h = height || Math.round(w * 0.67); // 3:2 aspect ratio
        return imageUrl.replace('/media/games/', `/media/crop/${w}/${h}/games/`);
    }

    // Handle TMDB images
    if (imageUrl.includes('image.tmdb.org')) {
        let size = 'w400';
        if (width <= 200) size = 'w200';
        else if (width <= 300) size = 'w300';
        else if (width <= 500) size = 'w500';
        else if (width <= 780) size = 'w780';
        else size = 'w1280';

        return imageUrl.replace('original', size);
    }

    return imageUrl;
} 