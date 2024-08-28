import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="relative wrapper mb-2 pt-1">
            <nav className="navbar navbar-expand-lg center-nav transparent navbar-light caret-none xl:!pt-0 lg:!pt-0">
                <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center">
                    <div className="navbar-brand w-full">
                        <Link href="/">
                            <Image
                                src="/img/logo-new.png"
                                width={134}
                                height={37}
                                alt="adiracabang.id"
                            />
                        </Link>
                    </div>
                    <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                        <div className="offcanvas-header xl:hidden lg:hidden flex items-center justify-between flex-row p-6">
                            <h3 className="text-white xl:text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                                Adira Cabang
                            </h3>
                            <button 
                                type="button"
                                className="btn-close btn-close-white mr-[-0.75rem] m-0 p-0 leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0"
                                data-bs-dismiss="offcanvas" 
                                aria-label="Close">
                            </button>
                        </div>
                        <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex flex-col !h-full">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link dropdown-toggle font-bold !tracking-[-0.01rem] hover:!text-[#a07cc5]"
                                        href="#" 
                                        data-bs-toggle="dropdown">
                                        Pengajuan
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link 
                                                className="dropdown-item hover:!text-[#a07cc5]"
                                                href="./pricing.html">
                                                Gadai BPKB Mobil
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link 
                                                className="dropdown-item hover:!text-[#a07cc5]"
                                                href="./pricing.html">
                                                Gadai BPKB Motor
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link 
                                                className="dropdown-item hover:!text-[#a07cc5]"
                                                href="./pricing.html">
                                                Pembiayaan Kredit Mobil Bekas
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link 
                                                className="dropdown-item hover:!text-[#a07cc5]"
                                                href="./pricing.html">
                                                Take Over dari leasing lain
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link 
                                                className="dropdown-item hover:!text-[#a07cc5]"
                                                href="./pricing.html">
                                                Top Up Gadai (Khusus debitur aktif Adira)
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link 
                                                className="dropdown-item hover:!text-[#a07cc5]"
                                                href="./pricing.html">
                                                Cross Produk dari kendaraan ke Gadai BPKB
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link dropdown-toggle font-bold !tracking-[-0.01rem] hover:!text-[#a07cc5]"
                                        href="#" >
                                        Persyaratan
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link dropdown-toggle font-bold !tracking-[-0.01rem] hover:!text-[#a07cc5]"
                                        href="#" >
                                        Cara Pengajuan
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link dropdown-toggle font-bold !tracking-[-0.01rem] hover:!text-[#a07cc5]"
                                        href="#" >
                                        Cari Cabang
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link dropdown-toggle font-bold !tracking-[-0.01rem] hover:!text-[#a07cc5]"
                                        href="#" >
                                        Tentang Adira
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link dropdown-toggle font-bold !tracking-[-0.01rem] hover:!text-[#a07cc5]"
                                        href="#" >
                                        Artikel
                                    </Link>
                                </li>
                            </ul>
                            <div className="offcanvas-footer xl:hidden lg:hidden">
                                <div>
                                    <Link 
                                        href="/" 
                                        className="link-inverse btn btn-sm btn-violet text-white !bg-[#a07cc5] border-[#a07cc5] hover:text-white hover:bg-[#a07cc5] hover:border-[#a07cc5] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#a07cc5] active:border-[#a07cc5] disabled:text-white disabled:bg-[#a07cc5] disabled:border-[#a07cc5]  !text-[.85rem] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">
                                        Ajukan Sekarang
                                    </Link>
                                    <nav className="nav social social-white mt-4">
                                        <Link 
                                            className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                                            href="#">
                                            <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]"></i>
                                        </Link>
                                        <Link 
                                            className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                                            href="#">
                                            <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]"></i>
                                        </Link>
                                        <Link 
                                            className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                                            href="#">
                                            <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]"></i>
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-other w-full !flex !ml-auto">
                        <ul className="navbar-nav !flex-row !items-center !ml-auto">
                            <li className="nav-item hidden xl:block lg:block md:block">
                                <Link 
                                    href="/" 
                                    className="btn btn-sm btn-violet text-white !bg-[#a07cc5] border-[#a07cc5] hover:text-white hover:bg-[#a07cc5] hover:border-[#a07cc5] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#a07cc5] active:border-[#a07cc5] disabled:text-white disabled:bg-[#a07cc5] disabled:border-[#a07cc5]  !text-[.85rem] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">
                                    Ajukan Sekarang
                                </Link>
                            </li>
                            <li className="nav-item xl:hidden lg:hidden">
                                <button className="hamburger offcanvas-nav-btn">
                                    <span></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}