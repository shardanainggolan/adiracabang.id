import Image from "next/image"
import Link from "next/link"
import { parseISO, format } from 'date-fns';
import { id } from 'date-fns/locale'

export default async function Article() {
    let data = await fetch(`${process.env.CMS_API_URL}/posts?categories=13&_embed`)
    let articles = await data.json()

    if(articles.length == 0) {
        return (
            <></>
        )
    }

    return (
        <section className="wrapper !bg-[#ffffff] ">
            <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                <div className="flex flex-wrap mx-[-15px]">
                    <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                        <h2 className="!text-[.75rem] !leading-[1.35] uppercase text-[#3f78e0]  !text-center">
                            Artikel
                        </h2>
                        <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] !mb-6 !text-center">
                            Dapatkan berita terbaru seputar gadai BPKB mobil dan motor, keuangan hanya
                            di Adiracabang.id
                        </h3>
                    </div>
                </div>
                <div className="!relative">
                    <div 
                        className="shape bg-dot primary rellax !w-[7rem] !h-[10rem] !absolute z-[1] opacity-50 !bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]"
                        data-rellax-speed="1" style={{ top: 0, left: '-1.7rem' }}>
                    </div>
                    <div 
                        className="swiper-container dots-closer blog grid-view" 
                        data-margin="0" 
                        data-dots="true"
                        data-items-xl="3" 
                        data-items-md="2" 
                        data-items-xs="1">
                        <div className="swiper">
                            <div className="swiper-wrapper">
                                {articles.map((v, i) => {
                                    const date = parseISO(v.date);

                                    return (
                                        <div key={i} className="swiper-slide">
                                            <div className="item-inner">
                                                <article>
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
                                                        <div
                                                            className="card-body flex-[1_1_auto] p-[40px] xl:p-[1.75rem_1.75rem_1rem_1.75rem] lg:p-[1.75rem_1.75rem_1rem_1.75rem] md:p-[1.75rem_1.75rem_1rem_1.75rem] sm:pb-4 xsm:pb-4  ">
                                                            <div className="post-header">
                                                                <h2 className="post-title h3 !mb-2">
                                                                    <Link 
                                                                        className="text-[#343f52] hover:text-[#3f78e0]"
                                                                        href={`/artikel/${v.slug}`}>
                                                                        {v.title.rendered}
                                                                    </Link>
                                                                </h2>
                                                            </div>
                                                            <div className="!relative">
                                                                <div dangerouslySetInnerHTML={{ __html: v.excerpt.rendered }}></div>
                                                            </div>
                                                        </div>
                                                        <div className="card-footer xl:p-[1.25rem_1.75rem_1.25rem] lg:p-[1.25rem_1.75rem_1.25rem] md:p-[1.25rem_1.75rem_1.25rem] p-[18px_40px]">
                                                            <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex  !mb-0">
                                                                <li className="post-date inline-block">
                                                                    <span>
                                                                        { format(date, 'd LLLL yyyy', { locale: id }) }
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-center">
                    <Link 
                        href="/artikel" 
                        className="hover-2 more !mr-4 mb-5 relative z-[1] p-[0_.2rem_.05rem] before:content-[''] before:origin-[100%_50%] before:transition-transform before:duration-[0.5s] before:ease-[cubic-bezier(.7,0,0.2,1)] before:absolute before:w-full before:h-full before:pointer-events-none before:z-[-1] before:left-0 before:top-0 before:bg-[#e0e9fa] after:leading-none after:content-['\e94c'] after:text-[0.9rem] after:font-normal after:mr-[-0.25rem] after:inline-block after:pl-[0.05rem] after:font-Unicons after:align-[-3px] hover:before:origin-[0_50%] hover:before:ease-[cubic-bezier(.4,1,0.8,1)]">
                        Lihat Semua
                    </Link>
                </div>
            </div>
        </section>
    )
}