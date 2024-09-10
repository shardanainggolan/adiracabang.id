import Link from "next/link"
import { RiTwitterXFill, RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="!bg-[#edf2fc] mt-16">
            <div className="container pt-8">
                <div className="flex flex-wrap mx-[-15px]">
                    <div className="xl:w-11/12 xxl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                        <div 
                            className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 text-white  -translate-y-2/4 mb-[-1.25rem] xl:!mt-0 lg:!mt-0  xl:-translate-y-2/4 lg:-translate-y-2/4  mb-lg-n50p border-radius-lg-top !bg-cover [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0" 
                            data-image-src="/img/bg/bg3.webp"
                            style={{ backgroundImage : '/img/bg/bg3.webp' }}>
                            <div
                                className="card-body p-6 flex-row text-center xl:!justify-between lg:!justify-between md:!justify-between xl:flex xl:!items-center lg:flex lg:!items-center xl:!p-12 lg:!p-12 md:!p-12 xl:!text-left lg:!text-left">
                                <h3 className="text-[calc(1.265rem_+_0.18vw)] font-bold xl:text-[1.4rem] !leading-[1.35] xl:pr-20 lg:pr-20 xxl:pr-32 text-white mb-[1.5rem] lg:!mb-0 xl:!mb-0">
                                    Tunggu apalagi? segera ajukan pinjaman di Adira dengan
                                    Gadai BPKB Mobil atau Motor
                                </h3>
                                <Link 
                                    href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB"
                                    target="_blank" 
                                    className="btn btn-white !rounded-[50rem]  !mb-0 whitespace-nowrap">
                                    Ajukan Sekarang
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-14 text-center">
                <div className="flex flex-wrap mx-[-15px] mt-[-2.5rem] lg:!mt-0 xl:!mt-0">
                    <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                        <div className="flex flex-wrap mx-[-15px] !mb-3">
                            <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                                <div className="widget">
                                    <h4 className="widget-title">
                                        Kantor Pusat Adira Finance
                                    </h4>
                                    <address className="not-italic leading-[inherit] mb-4">
                                        Gedung Millenium Centennial Center Lt. 53-61
                                        Jl. Jend. Sudirman Kav. 25 Karet Setiabudi
                                        Jakarta Selatan, DKI Jakarta 12920
                                    </address>
                                </div>
                            </div>
                            <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                                <div className="widget">
                                    <h4 className="widget-title">Call Center</h4>
                                    <p>1500511</p>
                                </div>
                            </div>
                            <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                                <div className="widget">
                                    <h4 className="widget-title">E-mail</h4>
                                    <p>
                                        customercare@adira.co.id
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p>
                            <strong>Magdalena ID AXI 011824001203</strong> <br />
                            © {new Date().getFullYear()} Adira Finance Berizin dan Diawasi oleh OTORITAS JASA KEUANGAN
                        </p>
                        <nav className="nav social justify-center">
                            <Link 
                                className="m-[0_.35rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                                href="https://x.com/AdiraFinanceID"
                                target="_blank"
                                aria-label="Adira Twitter">
                                <RiTwitterXFill className="before:content-['\ed59'] text-[1rem] text-black" />
                            </Link>
                            <Link 
                                className="m-[0_.35rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                                href="https://www.facebook.com/adirafinanceid/"
                                target="_blank"
                                aria-label="Adira Facebook">
                                <RiFacebookCircleFill className="before:content-['\ed59'] text-[1rem] text-[#4470cf]" />
                            </Link>
                            <Link 
                                className="m-[0_.35rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                                href="https://www.instagram.com/adirafinanceid/?hl=en"
                                target="_blank"
                                aria-label="Adira Instagram">
                                <RiInstagramFill className="before:content-['\ed59'] text-[1rem] text-[#d53581]" />
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}