import Link from "next/link"
import Image from "next/image"
import { DM_Serif_Display } from "next/font/google";

const dm_serif_display = DM_Serif_Display({ 
	subsets: ["latin"],
	weight: ["400"],
	display: 'swap', 
});

export default function Hero() {
    return (
        <section className="wrapper !bg-[#ffffff] !relative min-h-[70vh] xl:flex lg:flex items-center">
            <Image 
                src="/img/bg/hero.webp"
                width={575}
                height={628}
                alt="Adiracabang.id"
                className="lg:!block md:hidden hidden rounded-4-lg-start xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] max-w-full xl:!order-2 xl:!absolute top-0 lg:!order-2 lg:!absolute !right-0 image-wrapper bg-image bg-cover !h-full min-h-[50vh] bg-[center_center] bg-no-repeat !bg-scroll z-0 lg:rounded-tl-[0.8rem] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-[0.8rem] xl:rounded-tl-[0.8rem] xl:rounded-tr-none xl:rounded-br-none xl:rounded-bl-[0.8rem]"
            />
            <div className="container">
                <div className="flex flex-wrap mx-[-15px]">
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                        {/* <div 
                            className="mt-10 md:!mt-12 xl:mt-[-2.5rem] lg:mt-[-2.5rem] px-10 md:!px-12 xl:!pl-0 lg:!pl-0 xl:pr-16 lg:pr-16 text-center lg:text-left xl:text-left"
                            data-cues="slideInDown" 
                            data-group="page-title" 
                            data-delay="600"> */}
                        {/* <div className="mt-10 md:!mt-12 xl:mt-[-2.5rem] lg:mt-[-2.5rem] px-10 md:!px-12 xl:!pl-0 lg:!pl-0 xl:pr-16 lg:pr-16 text-center lg:text-left xl:text-left"> */}
                        <div className="mt-10 md:!mt-12 xl:mt-[-2.5rem] lg:mt-[-2.5rem] px-2 md:!px-12 xl:!pl-0 lg:!pl-0 xl:pr-16 lg:pr-16 text-center lg:text-left xl:text-left">
                            {/* <h1 className="text-[calc(1.385rem_+_1.62vw)] !leading-[1.1] font-DMSerif !tracking-normal font-normal xl:text-[2.6rem] mb-5">
                                Butuh Dana Cepat? <br /> Gadaikan BPKB Mobil atau Motor Anda sekarang juga di Adira Finance!
                            </h1> */}
                            {/* <h1 className="text-[calc(1.385rem_+_1.62vw)] !leading-[1.1] font-DMSerif !tracking-normal font-normal xl:text-[2.6rem] mb-5"> */}
                            <h1 className={`${dm_serif_display.className} text-[calc(1.385rem_+_1.62vw)] !leading-[1.1] !tracking-normal font-bold xl:text-[2.6rem] mb-5`}>
                                Pinjaman Dana Cepat: Gadai BPKB Mobil & Motor Tanpa Ribet
                            </h1>
                            <p className="lead text-[1.25rem] leading-normal mb-7 xl:!pr-[2.5rem] lg:!pr-[2.5rem] md:!pr-[2.5rem]">
                                {/* Pengajuan akan di proses oleh cabang Adira terdekat sesuai dengan alamat Anda. */}
                                Dapatkan pinjaman hingga 80% dari nilai kendaraan Anda dalam 1 hari kerja. Proses mudah, syarat ringan, dan bunga kompetitif. Solusi finansial terpercaya dengan Adira.
                            </p>
                            <div 
                                className="flex md:!flex-row flex-col items-center justify-center lg:!justify-start" 
                                data-cues="slideInDown"
					            data-group="page-title-buttons" 
                                data-delay="900">
                                <span>
                                    <Link 
                                        href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB"
                                        target="_blank" 
                                        className="mr-3 lg:!mb-0 mb-3 btn btn-lg btn-grape !text-black !bg-[#fcd733] border-[#fcd733] hover:text-black hover:bg-[#fcd733] hover:border-[#fcd733] focus:shadow-[rgba(92,140,229,1)] active:text-black active:bg-[#fcd733] active:border-[#fcd733] disabled:text-black disabled:bg-[#fcd733] disabled:border-[#fcd733] rounded">
                                        Ajukan Sekarang
                                    </Link>
                                </span>
                                <span>
                                    <Link 
                                        href="#persyaratan"
                                        className="btn scroll btn-lg btn-outline-grape !text-black bg-[#fcd733] !border-[#fcd733] !border-[2px] hover:!text-black hover:bg-[#fcd733] hover:border-[#fcd733] focus:shadow-[rgba(96,93,186,1)] active:!text-white active:bg-[#fcd733] active:border-[#fcd733] disabled:!text-white disabled:bg-transparent disabled:border-[#fcd733] rounded">
                                        Lihat Persayaratan
                                    </Link>
                                </span>
                            </div>
                            
                            {/* <div className="flex md:flex-row flex-col">
                                <div className="!mr-2">
                                    <Link 
                                        href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB"
                                        target="_blank" 
                                        className="btn btn-lg btn-grape !text-black !bg-[#fcd733] border-[#fcd733] hover:text-black hover:bg-[#fcd733] hover:border-[#fcd733] focus:shadow-[rgba(92,140,229,1)] active:text-black active:bg-[#fcd733] active:border-[#fcd733] disabled:text-black disabled:bg-[#fcd733] disabled:border-[#fcd733] rounded">
                                        Ajukan Sekarang
                                    </Link>
                                </div>
                                <div className="">
                                    <Link 
                                        href="#persyaratan"
                                        className="btn scroll btn-lg btn-outline-grape !text-black bg-[#fcd733] !border-[#fcd733] !border-[2px] hover:!text-black hover:bg-[#fcd733] hover:border-[#fcd733] focus:shadow-[rgba(96,93,186,1)] active:!text-white active:bg-[#fcd733] active:border-[#fcd733] disabled:!text-white disabled:bg-transparent disabled:border-[#fcd733] rounded">
                                        Lihat Persayaratan
                                    </Link>
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}