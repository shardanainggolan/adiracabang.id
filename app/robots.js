export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '',
        },
        sitemap: `${process.env.APP_URL}/sitemap.xml`,
    }
}