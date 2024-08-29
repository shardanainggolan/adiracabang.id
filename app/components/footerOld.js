import Link from "next/link"

export default function Footer() {
    return (
        <footer className="!bg-[#f6f3f9]">
            <div className="container">
                <div
                    className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] mt-[-6rem] xl:!mt-[-12.5rem] lg:!mt-[-12.5rem] md:!mt-[-12.5rem] mb-20 xl:!mb-[4.5rem] lg:!mb-[4.5rem] md:!mb-[4.5rem]">
                    <div className="flex flex-wrap mx-0">
                        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full image-wrapper bg-image rounded-t-[0.4rem] rounded-lg-start hidden xl:block lg:block md:block bg-cover bg-[center_center] bg-no-repeat !bg-scroll md:min-h-[25rem]"
                            data-image-src="/img/photos/tm1.jpg">
                        </div>
                        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                            <div className="p-10 md:!p-12 xl:!p-[4rem] lg:!p-[4rem]">
                                <h2 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] !leading-[1.2] font-DMSerif font-normal tracking-normal !mb-3">
                                    Let’s Talk
                                </h2>
                                <p className="lead !text-[1.05rem] !leading-[1.6] font-medium">
                                    Let's make something great
                                    together. We are trusted by over 5000+ clients. Join them by using our services and grow
                                    your business.
                                </p>
                                <p>
                                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas
                                    faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                                    condimentum nibh, ut fermentum massa justo sit amet risus.
                                </p>
                                <Link href="#" className="btn btn-violet text-white !bg-[#a07cc5] border-[#a07cc5] hover:text-white hover:bg-[#a07cc5] hover:border-[#a07cc5] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#a07cc5] active:border-[#a07cc5] disabled:text-white disabled:bg-[#a07cc5] disabled:border-[#a07cc5]  !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">
                                    Join Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pb-14 !text-center">
                <div className="flex flex-wrap mx-[-15px] mt-[-2.5rem] lg:!mt-0 xl:!mt-0">
                    <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                        <div className="flex flex-wrap mx-[-15px] !mb-3">
                            <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                                <div className="widget">
                                    <h4 className="widget-title">Address</h4>
                                    <address className=" not-italic leading-[inherit] mb-4">
                                        Moonshine St. 14/05 
                                        <br className="hidden xl:block lg:block md:block" /> 
                                        Light City, London, UK
                                    </address>
                                </div>
                            </div>
                            <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                                <div className="widget">
                                    <h4 className="widget-title">Phone</h4>
                                    <p>00 (123) 456 78 90 <br />00 (987) 654 32 10</p>
                                </div>
                            </div>
                            <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                                <div className="widget">
                                    <h4 className="widget-title">E-mail</h4>
                                    <p>
                                        <a href="mailto:sandbox@email.com" className="text-[#60697b] hover:!text-[#60697b]">
                                            sandbox@email.com
                                        </a> 
                                        <br className="hidden xl:block lg:block md:block" />
                                        <a href="mailto:help@sandbox.com" className="text-[#60697b] hover:!text-[#60697b]">
                                            help@sandbox.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p>© {new Date().getFullYear()} Adira Cabang. All rights reserved.</p>
                        <nav className="nav social justify-center">
                            <Link 
                                className="m-[0_.35rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                                href="#">
                                <i className="uil uil-twitter before:content-['\ed59'] text-[1rem] text-[#5daed5]"></i>
                            </Link>
                            <Link 
                                className="m-[0_.35rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                                href="#">
                                <i className="uil uil-facebook-f before:content-['\eae2'] text-[1rem] text-[#4470cf]"></i>
                            </Link>
                            <Link 
                                className="m-[0_.35rem] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                                href="#">
                                <i className="uil uil-instagram before:content-['\eb9c'] text-[1rem] text-[#d53581]"></i>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}