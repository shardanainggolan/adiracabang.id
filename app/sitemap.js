export default async function sitemap() {
    const artikelSlugs = await fetchArtikelSlugs();
    const branchSlugs = await fetchBranchSlugs();
    const tagSlugs = await fetchTagSlugs();

    const staticUrls = [
        { loc: '/', priority: 1 },
        { loc: '/artikel', priority: 0.8 },
        { loc: '/cabang', priority: 0.8 },
        { loc: '/tag', priority: 0.8 },
    ];

    const dynamicUrls = [
        ...artikelSlugs.map(slug => ({ loc: `/artikel/${slug}`, priority: 0.7 })),
        ...branchSlugs.map(slug => ({ loc: `/cabang/${slug}`, priority: 0.7 })),
        ...tagSlugs.map(slug => ({ loc: `/tag/${slug}`, priority: 0.7 })),
    ];

    const urls = [...staticUrls, ...dynamicUrls];

    let sitemap = []
    for(const u of urls) {
        sitemap.push({
            url: `${process.env.APP_URL}${u.loc}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: u.priority,
        })
    }

    return sitemap;
}

async function fetchArtikelSlugs() {
    const response = await fetch(`${process.env.CMS_API_URL}/posts`);
    const data = await response.json();

    return data.map(post => post.slug);
}

async function fetchBranchSlugs() {
    const response = await fetch(`${process.env.BACKEND_URL}/api/branch`);
    const data = await response.json();
    // console.log(data.data)

    return data.data.map(branch => branch.slug);
}

async function fetchTagSlugs() {
    const response = await fetch(`${process.env.CMS_API_URL}/tags`);
    const data = await response.json();

    return data.map(tag => tag.slug);
}