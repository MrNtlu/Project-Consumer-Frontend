export default function robots() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://watchlistfy.vercel.app'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
} 