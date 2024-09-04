import Image from "next/image";
import Link from "next/link";
import { notFound } from 'next/navigation'
import { ArticleJsonLd } from 'next-seo';
import { parseISO, format } from 'date-fns';
import { id } from 'date-fns/locale'
import OtherArticle from '../../components/other-article';

async function fetchArticle(slug) {
    const res = await fetch(`${process.env.CMS_API_URL}/posts?_embed&slug=${slug}`)
    if (!res.ok) return undefined
    const article = await res.json()
    return article[0]
}

export async function generateMetadata({ params }) {
    const article = await fetchArticle(params.slug)

    if (!article) {
        notFound()
    }

    return {
        title: article.title.rendered,
        description: article.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        openGraph: {
            title: `${article.title.rendered} | Adiracabang.id`,
            description: article.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
            url: `${process.env.APP_URL}/artikel/${article.slug}`,
            siteName: 'Adiracabang.id',
            images: [
                {
                    url: article._embedded['wp:featuredmedia']?.[0].source_url,
                    width: article._embedded['wp:featuredmedia']?.[0].media_details.width,
                    height: article._embedded['wp:featuredmedia']?.[0].media_details.height,
                    alt: article.title.rendered + '- AXI Adira',
                    type: article._embedded['wp:featuredmedia']?.[0].mime_type,
                },
                {
                    url: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium.source_url,
                    width: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium.width,
                    height: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium.height,
                    alt: article.title.rendered + '- AXI Adira',
                    type: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium.mime_type,
                },
                    article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium_large ? {
                    url: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium_large.source_url,
                    width: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium_large.width,
                    height: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium_large.height,
                    alt: article.title.rendered + '- AXI Adira',
                    type: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium_large.mime_type,
                } : {},
                {
                    url: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail.source_url,
                    width: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail.width,
                    height: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail.height,
                    alt: article.title.rendered + '- AXI Adira',
                    type: article._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail.mime_type,
                },
            ],
            locale: 'id_ID',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${article.title.rendered} | Adiracabang.id`,
            description: article.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
            creator: '@AdiraFinanceID',
            images: [
                article._embedded['wp:featuredmedia']?.[0].source_url,
                article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium.source_url,
                article._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail.source_url
            ],
        },
        alternates: {
            canonical: `${process.env.APP_URL}/artikel/${article.slug}`,
        },
    }
}

export default async function Page({ params }) {
    const article = await fetchArticle(params.slug)

    if (!article) {
        notFound()
    }

    const date = parseISO(article.date);

    const tags = []
    if(article.tags) {
        for(const tagId of article.tags) {
            const getTag = await fetch(`${process.env.CMS_API_URL}/tags/${tagId}`)
            const tag = await getTag.json()

            tags.push({
                id: tag.id,
                name: tag.name,
                slug: tag.slug
            })
        }
    }

    const getOtherArticles = await fetch(`${process.env.CMS_API_URL}/posts?categories=12&_embed&per_page=5&exclude=${article.id}`)
    const otherArticles = await getOtherArticles.json()
    
    return (
        <>
            <ArticleJsonLd
                useAppDir={true}
                url={`${process.env.APP_URL}/artikel/${article.slug}`}
                title={article.title.rendered}
                images={[
                    article._embedded['wp:featuredmedia']?.[0].source_url,
                    article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium.source_url,
                    article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium_large ? article._embedded['wp:featuredmedia']?.[0].media_details.sizes.medium_large.source_url : '',
                    article._embedded['wp:featuredmedia']?.[0].media_details.sizes.thumbnail.source_url
                ]}
                datePublished={article.date}
                dateModified={article.modified}
                authorName={[
                    {
                        name: 'Adiracabang.id',
                        url: process.env.APP_URL
                    },
                ]}
                publisherName="Adiracabang.id"
                publisherLogo={process.env.APP_URL + '/img/logo-new.png'}
                description={article.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}
                isAccessibleForFree={true}
            />

            <section className="wrapper !bg-[#edf2fc]">
                <div className="container pt-10 pb-36 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-40 lg:pb-40 md:pb-40 !text-center">
                    <div className="flex flex-wrap mx-[-15px]">
                        <div className="md:w-10/12 lg:w-10/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                            <div className="post-header !mb-[.9rem]">
                                <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-4">
                                    {article.title.rendered}
                                </h1>
                                <ul className="text-[0.8rem] text-[#aab0bc] m-0 p-0 list-none !mb-5">
                                    <li className="post-date inline-block">
                                        <span>{ format(date, 'd LLLL yyyy', { locale: id }) }</span>
                                    </li>
                                    <li className="post-author inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0_.4rem] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
                                        <Link 
                                            className="text-[0.8rem] text-[#aab0bc] hover:text-[#3f78e0] hover:border-[#3f78e0]"
                                            href="/">
                                            <span>Adiracabang.id</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="wrapper !bg-[#ffffff]">
                <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
                    <div className="flex flex-wrap mx-[-15px]">
                        <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                            <div className="blog single !mt-[-7rem]">
                                <div className="card">
                                    <figure className="card-img-top">
                                        <Image 
                                            src={article._embedded['wp:featuredmedia']?.[0].source_url} 
                                            alt={article.title.rendered}
                                            width={750}
                                            height={410} 
                                        />
                                    </figure>
                                    <div
                                        className="card-body flex-[1_1_auto] p-[40px] xl:p-[2.8rem_3rem_2.8rem] lg:p-[2.8rem_3rem_2.8rem] md:p-[2.8rem_3rem_2.8rem]">
                                        <div className="classic-view">
                                            <article className="post mb-8">
                                                <div className="relative mb-5" dangerouslySetInnerHTML={{ __html: article.content.rendered }}></div>
                                                <div className="post-footer xl:flex xl:!flex-row xl:!justify-between lg:flex lg:!flex-row lg:!justify-between md:flex md:!flex-row md:!justify-between !items-center !mt-8">
                                                    <div>
                                                        <ul className="pl-0 list-none tag-list  !mb-0">
                                                            {tags.map((v, i) => (
                                                                <li key={i} className="mt-0 mb-[0.45rem] mr-[0.2rem] inline-block">
                                                                    <Link
                                                                        href={`/tag/${v.slug}`}
                                                                        className="btn btn-soft-ash btn-sm !rounded-[50rem] flex items-center hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,.05)] before:not-italic before:content-['#'] before:font-normal before:pr-[0.2rem]">
                                                                        {v.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="mb-0 xl:!mb-2 lg:!mb-2 md:!mb-2">
                                                        <div className="dropdown share-dropdown btn-group">
                                                            <button
                                                                className="btn btn-sm btn-red text-white !bg-[#e2626b] border-[#e2626b] hover:text-white hover:bg-[#e2626b] hover:border-[#e2626b] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#e2626b] active:border-[#e2626b] disabled:text-white disabled:bg-[#e2626b] disabled:border-[#e2626b] !rounded-[50rem] btn-icon btn-icon-start dropdown-toggle !mb-0 mr-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                                                                data-bs-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false">
                                                                <i
                                                                    className="uil uil-share-alt mr-[0.3rem] text-[0.8rem] before:content-['\ecb0']"></i>
                                                                Share </button>
                                                            <div className="dropdown-menu !shadow-[rgba(30,34,40,0.06)_0px_0px_25px_0px]">
                                                                <Link 
                                                                    className="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]"
                                                                    href="#">
                                                                    <i className="uil uil-twitter w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\ed59']"></i>
                                                                    Twitter
                                                                </Link>
                                                                <Link 
                                                                    className="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]"
                                                                    href="#">
                                                                    <i className="uil uil-facebook-f w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\eae2']"></i>
                                                                    Facebook
                                                                </Link>
                                                                <Link 
                                                                    className="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]"
                                                                    href="#">
                                                                    <i className="uil uil-linkedin w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\ebd1']"></i>
                                                                    Linkedin
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        <hr />
                                        { otherArticles.length > 0 ? <OtherArticle articles={otherArticles} /> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}