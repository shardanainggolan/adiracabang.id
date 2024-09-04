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
                                src="/img/logo.png"
                                width={134}
                                height={37}
                                alt="Adiracabang.id"
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
                                        className="nav-link dropdown-toggle font-bold !tracking-[-0.01rem] hover:!text-[#fcd733]"
                                        href="#" 
                                        data-bs-toggle="dropdown">
                                        Pengajuan
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link 
                                                className="dropdown-item hover:!text-[#fcd733]"
                                                href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB%20Mobil"
                                                target="_blank">
                                                <span className="text-wrap">
                                                    Gadai BPKB Mobil
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link 
                                                className="dropdown-item hover:!text-[#fcd733]"
                                                href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB%20Motor"
                                                target="_blank">
                                                <span className="text-wrap">
                                                    Gadai BPKB Motor
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link 
                                                className="dropdown-item hover:!text-[#fcd733]"
                                                href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Kredit%20Mobil%20Bekas"
                                                target="_blank">
                                                <span className="text-wrap">
                                                    Pembiayaan Kredit Mobil Bekas
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link 
                                                className="dropdown-item hover:!text-[#fcd733]"
                                                href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Take%20Over"
                                                target="_blank">
                                                <span className="text-wrap">
                                                    Take Over dari leasing lain
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link 
                                                className="dropdown-item hover:!text-[#fcd733]"
                                                href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Top%20Up"
                                                target="_blank">
                                                <span className="text-wrap">
                                                    Top Up Gadai (Khusus debitur aktif Adira)
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link 
                                                className="dropdown-item hover:!text-[#fcd733]"
                                                href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Cross%20Produk"
                                                target="_blank">
                                                <span className="text-wrap">
                                                    Cross Produk dari kendaraan ke Gadai BPKB
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link scroll font-bold !tracking-[-0.01rem] hover:!text-[#fcd733]"
                                        href="#keuntungan-manfaat">
                                        Keuntungan
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link scroll font-bold !tracking-[-0.01rem] hover:!text-[#fcd733]"
                                        href="#persyaratan">
                                        Persyaratan
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link scroll font-bold !tracking-[-0.01rem] hover:!text-[#fcd733]"
                                        href="#cara-pengajuan">
                                        Cara Pengajuan
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link font-bold !tracking-[-0.01rem] hover:!text-[#fcd733]"
                                        href="/cabang">
                                        Cari Cabang
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link 
                                        className="nav-link scroll font-bold !tracking-[-0.01rem] hover:!text-[#fcd733]"
                                        href="#artikel">
                                        Artikel
                                    </Link>
                                </li>
                            </ul>
                            <div className="offcanvas-footer xl:hidden lg:hidden">
                                <div>
                                    <Link 
                                        href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB"
                                        target="_blank" 
                                        className="btn btn-primary text-white !bg-[#3362fc] border-[#3362fc] hover:text-white hover:bg-[#3362fc] hover:border-[#3362fc] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3362fc] active:border-[#3362fc] disabled:text-white disabled:bg-[#3362fc] disabled:border-[#3362fc] !rounded-[50rem]">
                                        <span className="text-wrap">
                                            Ajukan Gadai BPKB Sekarang
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-other w-full !flex !ml-auto">
                        <ul className="navbar-nav !flex-row !items-center !ml-auto">
                            <li className="nav-item hidden xl:block lg:block md:block">
                                <Link 
                                    href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB"
                                    target="_blank" 
                                    className="btn btn btn-primary text-white !bg-[#3362fc] border-[#3362fc] hover:text-white hover:bg-[#3362fc] hover:border-[#3362fc] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3362fc] active:border-[#3362fc] disabled:text-white disabled:bg-[#3362fc] disabled:border-[#3362fc] !rounded-[50rem]">
                                    Ajukan Gadai BPKB Sekarang
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