import Link from "next/link"
import Image from "next/image"
import { notFound } from 'next/navigation'
import { parseISO, format } from 'date-fns';
import { id } from 'date-fns/locale'

async function fetchTag(slug) {
    const res = await fetch(`${process.env.CMS_API_URL}/tags?slug=${slug}`)
    if (!res.ok) return undefined
    const tag = await res.json()
    return tag[0]
}

async function fetchArticle(tagId) {
    const res = await fetch(`${process.env.CMS_API_URL}/posts?_embed&tags=${tagId}&categories=13`)
    if (!res.ok) return undefined
    return res.json()
}

export default async function Page({ params }) {
    const tag = await fetchTag(params.slug)

    if (!tag) {
        notFound()
    }

    const articles = await fetchArticle(tag.id)

    if(articles.length == 0) {
        return (
            <>
                <section className="wrapper !bg-[#edf2fc]">
                    <div className="container !pt-10 !pb-12 xl:!pt-[4.5rem] lg:!pt-[4.5rem] md:!pt-[4.5rem] xl:!pb-10 lg:!pb-20 md:!pb-20 !text-center">
                        <div className="flex flex-wrap mx-[-15px]">
                            <div className="md:w-7/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                                <h1 className="capitalize text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-3">
                                    {tag.name}
                                </h1>
                                <p className="lead lg:!px-[1.25rem] xl:!px-[1.25rem] xxl:!px-[2rem] leading-[1.65] text-[0.9rem] font-medium">
                                    Dapatkan berita terbaru seputar gadai BPKB mobil dan motor, keuangan hanya
                                    di Adiracabang.id
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="wrapper !bg-[#ffffff] mt-5">
                    <div className="container py-10">
                        <div className="flex flex-wrap mx-[-15px]">
                            <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                                <h2 className="text-center">
                                    Tidak ada data artikel
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <section className="wrapper !bg-[#edf2fc]">
                <div className="container !pt-10 !pb-12 xl:!pt-[4.5rem] lg:!pt-[4.5rem] md:!pt-[4.5rem] xl:!pb-10 lg:!pb-20 md:!pb-20 !text-center">
                    <div className="flex flex-wrap mx-[-15px]">
                        <div className="md:w-7/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                            <h1 className="capitalize text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-3">
                                {tag.name}
                            </h1>
                            <p className="lead lg:!px-[1.25rem] xl:!px-[1.25rem] xxl:!px-[2rem] leading-[1.65] text-[0.9rem] font-medium">
                                Dapatkan berita terbaru seputar gadai BPKB mobil dan motor, keuangan hanya
                                di Adiracabang.id
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="wrapper !bg-[#ffffff] mt-5">
                <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
                    <div className="flex flex-wrap mx-[-15px]">
                        <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                            <div className="blog itemgrid grid-view">
                                <div className="flex flex-wrap mx-[-15px] isotope xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] mt-[-40px] !mb-8">
                                    {articles.map((v, i) => {
                                        const date = parseISO(v.date);

                                        return (
                                            <article key={i} className="item post xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] md:px-[20px] mt-[40px] px-[15px] max-w-full">
                                                <div className="card">
                                                    <figure className="card-img-top overlay overlay-1 hover-scale group">
                                                        <Link href={`/artikel/${v.slug}`}>
                                                            <Image 
                                                                className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                                                                src={v._embedded['wp:featuredmedia']?.[0].source_url}  
                                                                width={1125}
                                                                height={800}
                                                                alt={v.title.rendered}  
                                                            />
                                                        </Link>
                                                        <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                                                            <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                                                                Lanjut Baca
                                                            </h5>
                                                        </figcaption>
                                                    </figure>
                                                    <div className="card-body flex-[1_1_auto] p-[40px] xl:p-[1.75rem_1.75rem_1rem_1.75rem] lg:p-[1.75rem_1.75rem_1rem_1.75rem] md:p-[1.75rem_1.75rem_1rem_1.75rem] sm:pb-4 xsm:pb-4  ">
                                                        <div className="post-header !mb-[.9rem]">
                                                            <h2 className="post-title h3 !mt-1 !mb-3">
                                                                <Link
                                                                    className="text-[#343f52] hover:text-[#3f78e0]"
                                                                    href={`/artikel/${v.slug}`}>
                                                                    {v.title.rendered}
                                                                </Link>
                                                            </h2>
                                                        </div>
                                                        <div className="!relative" dangerouslySetInnerHTML={{ __html: v.excerpt.rendered }}></div>
                                                    </div>
                                                    <div className="card-footer xl:p-[1.25rem_1.75rem_1.25rem] lg:p-[1.25rem_1.75rem_1.25rem] md:p-[1.25rem_1.75rem_1.25rem] p-[18px_40px]">
                                                        <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex  !mb-0">
                                                            <li className="post-date inline-block">
                                                                <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                                                                <span>{ format(date, 'd LLLL yyyy', { locale: id }) }</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </article>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}