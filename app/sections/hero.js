import Link from "next/link"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="wrapper !bg-[#ffffff] !relative min-h-[70vh] xl:flex lg:flex items-center">
            <Image 
                src="/img/bg/hero7.webp"
                width={720}
                height={786}
                className="rounded-4-lg-start xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] max-w-full xl:!order-2 xl:!absolute top-0 lg:!order-2 lg:!absolute !right-0 image-wrapper bg-image bg-cover !h-full min-h-[50vh] bg-[center_center] bg-no-repeat !bg-scroll z-0 lg:rounded-tl-[0.8rem] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-[0.8rem] xl:rounded-tl-[0.8rem] xl:rounded-tr-none xl:rounded-br-none xl:rounded-bl-[0.8rem]"
            />
            <div className="container">
                <div className="flex flex-wrap mx-[-15px]">
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div 
                            className="mt-10 md:!mt-12 xl:mt-[-2.5rem] lg:mt-[-2.5rem] px-10 md:!px-12 xl:!pl-0 lg:!pl-0 xl:pr-16 lg:pr-16 text-center lg:text-left xl:text-left"
                            data-cues="slideInDown" 
                            data-group="page-title" 
                            data-delay="600">
                            <h1 className="text-[calc(1.385rem_+_1.62vw)] !leading-[1.1] font-DMSerif !tracking-normal font-normal xl:text-[2.6rem] mb-5">
                                {/* Gadai BPKB Mobil & Motor dengan Proses Cepat di Adira Finance - Solusi Keuangan Terpercaya */}
                                Butuh Dana Cepat? <br /> Gadaikan BPKB Mobil atau Motor Anda sekarang juga di Adira Finance!
                            </h1>
                            <p className="lead text-[1.25rem] leading-normal mb-7 xl:!pr-[2.5rem] lg:!pr-[2.5rem] md:!pr-[2.5rem]">
                                Pengajuan akan di proses oleh cabang Adira terdekat sesuai dengan alamat Anda.
                            </p>
                            <div className="inline-flex !mr-2">
                                <Link 
                                    href="#" 
                                    className="btn btn-lg btn-grape !text-black !bg-[#fcd733] border-[#fcd733] hover:text-black hover:bg-[#fcd733] hover:border-[#fcd733] focus:shadow-[rgba(92,140,229,1)] active:text-black active:bg-[#fcd733] active:border-[#fcd733] disabled:text-black disabled:bg-[#fcd733] disabled:border-[#fcd733] rounded">
                                    Ajukan Sekarang
                                </Link>
                            </div>
                            <div className="inline-flex">
                                <Link 
                                    href="#" 
                                    className="btn btn-lg btn-outline-grape !text-black bg-[#fcd733] !border-[#fcd733] !border-[2px] hover:!text-black hover:bg-[#fcd733] hover:border-[#fcd733] focus:shadow-[rgba(96,93,186,1)] active:!text-white active:bg-[#fcd733] active:border-[#fcd733] disabled:!text-white disabled:bg-transparent disabled:border-[#fcd733] rounded">
                                    Lihat Persayaratan
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}