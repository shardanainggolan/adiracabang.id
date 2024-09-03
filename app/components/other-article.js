import Image from 'next/image';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import { id } from 'date-fns/locale'

export default function OtherArticle({ articles }) {
    return (
        <>
            <h3 className="!mb-6">Artikel Lainnya</h3>
            <div 
                className="swiper-container blog grid-view mb-24 relative z-10" 
                data-margin="30"
                data-dots="true" 
                data-items-md="2" 
                data-items-xs="1">
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {articles.map((article) => {
                            const date = parseISO(article.date);

                            return (
                                <div key={article.id} className="swiper-slide">
                                    <article>
                                        <figure className="overlay overlay-1 hover-scale group rounded !mb-5">
                                            <Link href={'/artikel/' + article.slug}> 
                                                <Image
                                                    className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                                                    src={article._embedded['wp:featuredmedia']?.[0].source_url} 
                                                    width={358}
                                                    height={250}
                                                    alt={article.title.rendered} 
                                                />
                                            </Link>
                                            <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2">
                                                <h5 className="from-top  !mb-0 absolute w-full translate-y-[-80%] p-[.75rem_1rem] left-0 top-2/4">
                                                    Lanjut Baca
                                                </h5>
                                            </figcaption>
                                        </figure>
                                        <div className="post-header !mb-[.9rem]">
                                            <h2 className="post-title h3 !mt-1 !mb-3">
                                                <Link
                                                    className="text-[#343f52] hover:text-[#3f78e0]"
                                                    href={'/artikel/' + article.slug}>
                                                    {article.title.rendered}
                                                </Link>
                                            </h2>
                                        </div>
                                        <div className="post-footer">
                                            <ul className="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none  !mb-0">
                                                <li className="post-date inline-block">
                                                    <i className="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i>
                                                    <span>{ format(date, 'd LLLL yyyy', { locale: id }) }</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}