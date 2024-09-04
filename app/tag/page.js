import Link from "next/link"

export default async function Tag() {
    let data = await fetch(`${process.env.CMS_API_URL}/tags`)
  	let tags = await data.json()

    if(tags.length == 0) {
        return (
            <>
                <section className="wrapper !bg-[#edf2fc]">
                    <div className="container !pt-10 !pb-12 xl:!pt-[4.5rem] lg:!pt-[4.5rem] md:!pt-[4.5rem] xl:!pb-10 lg:!pb-20 md:!pb-20 !text-center">
                        <div className="flex flex-wrap mx-[-15px]">
                            <div className="md:w-7/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                                <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-3">
                                    Artikel Tag
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
                    <div className="container py-12">
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
                            <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-3">
                                Artikel Tag
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
                <div className="container py-12">
                    <div className="flex flex-wrap mx-[-15px]">
                        <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                            <ul className="pl-0 list-none !mb-0">
                                {
                                    tags.map((v, i) => (
                                        <li key={i} className="inline-block mr-1 mb-2">
                                            <Link href={`/tag/${v.slug}`} className="btn btn-soft-ash btn-sm rounded">
                                                #{v.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}