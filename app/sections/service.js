import Image from "next/image"
import Link from "next/link"

export default function Service() {
    return (
        <section className="wrapper !bg-[#ffffff]">
			<div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
				<div className="flex flex-wrap mx-[-15px] !text-center">
					<div
						className="md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
						<h2 className="!text-[.75rem] uppercase text-[#aab0bc] !mb-3 tracking-[0.02rem] !leading-[1.35]">
							Pelayanan
                        </h2>
						<h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-9 xl:!px-12">
							Apa saja yang kami layani?
                        </h3>
					</div>
				</div>
                <div className="flex flex-wrap mx-[-15px] grid-view md:mx-[-20px] lg:mx-[-20px] xl:mx-[-25px] mt-[-40px] xl:mt-0 lg:mt-0">
                    <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]">
                        <div className="!relative">
                            <div 
                                className="shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block absolute"
                                data-rellax-speed="0"
                                style={{ bottom: '-0.75rem', right: '-0.75rem', width: '98%', height: '98%', zIndex: 0, transform: 'translate3d(0px, 0px, 0px)' }}>
                            </div>
                            <div className="card">
                                <figure className="card-img-top">
                                    <Image 
                                        src="/img/services/gadai-bpkb.png"
                                        width={600}
                                        height={600}
                                        className="max-w-full h-auto"
                                        alt="Gadai BPKB Mobil Motor"
                                    />
                                </figure>
                                <div className="card-body px-6 py-5">
                                    <h4 className="!mb-1">Gadai BPKB Mobil atau Motor</h4>
                                    <p className="!mb-0 text-[.85rem]">
                                        Ajukan pinjaman mulai dari 3 juta rupiah dengan 
                                        BPKB Motor atau pinjaman dana mulai dari 20 juta rupiah 
                                        dengan BPKB Mobil.
                                    </p>
                                    <div className="mt-3">
                                        <Link 
                                            href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB" 
                                            target="_blank"
                                            className="btn btn-primary w-full rounded-md text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0]">
                                            Ajukan Sekarang
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]">
                        <div className="!relative">
                            <div 
                                className="shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block absolute"
                                data-rellax-speed="0"
                                style={{ bottom: '-0.75rem', right: '-0.75rem', width: '98%', height: '98%', zIndex: 0, transform: 'translate3d(0px, 0px, 0px)' }}>
                            </div>
                            <div className="card">
                                <figure className="card-img-top">
                                    <Image 
                                        src="/img/services/take-over.png"
                                        width={600}
                                        height={600}
                                        className="max-w-full h-auto"
                                        alt="Gadai BPKB Mobil Motor"
                                    />
                                </figure>
                                <div className="card-body px-6 py-5">
                                    <h4 className="!mb-1">
                                        Take Over dari leasing lain
                                    </h4>
                                    <p className="!mb-0 text-[.85rem]">
                                        Pindahkan kredit kendaraan ke Adira Finance, nikmati cicilan lebih ringan, 
                                        layanan lebih baik, dan kemudahan proses take over BPKB.
                                    </p>
                                    <div className="mt-3">
                                        <Link 
                                            href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Take%20Over"
                                            target="_blank" 
                                            className="btn btn-primary w-full rounded-md text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0]">
                                            Ajukan Sekarang
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]">
                        <div className="!relative">
                            <div 
                                className="shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block absolute"
                                data-rellax-speed="0"
                                style={{ bottom: '-0.75rem', right: '-0.75rem', width: '98%', height: '98%', zIndex: 0, transform: 'translate3d(0px, 0px, 0px)' }}>
                            </div>
                            <div className="card">
                                <figure className="card-img-top">
                                    <Image 
                                        src="/img/services/top-up.png"
                                        width={600}
                                        height={600}
                                        className="max-w-full h-auto"
                                        alt="Gadai BPKB Mobil Motor"
                                    />
                                </figure>
                                <div className="card-body px-6 py-5">
                                    <h4 className="!mb-1">
                                        Top Up Gadai (Khusus debitur aktif Adira)
                                    </h4>
                                    <p className="!mb-0 text-[.85rem]">
                                        Tambahan dana untuk debitur aktif Adira dengan meningkatkan nilai 
                                        gadai BPKB kendaraan tanpa menambah masa tenor kredit.
                                    </p>
                                    <div className="mt-3">
                                        <Link 
                                            href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Top%20Up%20Gadai"
                                            target="_blank" 
                                            className="btn btn-primary w-full rounded-md text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0]">
                                            Ajukan Sekarang
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] xl:px-[25px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full md:mt-[40px] sm:mt-[40px] xsm:mt-[40px]">
                        <div className="!relative">
                            <div 
                                className="shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block absolute"
                                data-rellax-speed="0"
                                style={{ bottom: '-0.75rem', right: '-0.75rem', width: '98%', height: '98%', zIndex: 0, transform: 'translate3d(0px, 0px, 0px)' }}>
                            </div>
                            <div className="card">
                                <figure className="card-img-top">
                                    <Image 
                                        src="/img/services/kredit-mobil-bekas.png"
                                        width={600}
                                        height={600}
                                        className="max-w-full h-auto"
                                        alt="Gadai BPKB Mobil Motor"
                                    />
                                </figure>
                                <div className="card-body px-6 py-5">
                                    <h4 className="!mb-1">
                                        Pembiayaan Kredit Mobil Bekas
                                    </h4>
                                    <p className="!mb-0 text-[.85rem]">
                                        Dapatkan kredit mobil bekas dengan cicilan ringan dan 
                                        tenor fleksibel melalui Adira Finance, solusi terpercaya 
                                        untuk pembiayaan kendaraan.
                                    </p>
                                    <div className="mt-3">
                                        <Link 
                                            href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Pembiayaan%20Kredit%20Mobil%20Bekas"
                                            target="_blank" 
                                            className="btn btn-primary w-full rounded-md text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0]">
                                            Ajukan Sekarang
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-40px]">
                    <div
						className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[40px]">
						<div className="flex flex-row">
							<div>
                                <Image 
                                    src="/img/services/gadai-bpkb.png"
                                    width={104}
                                    height={104}
                                    className="icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#343f52] text-blue mr-5 mt-1"
                                    alt="Gadai BPKB"
                                />
							</div>
							<div>
								<h4 className="text-[1rem] tracking-[-0.03em]">Gadai BPKB Mobil/Motor</h4>
								<p className="!mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget
									lacinia odio sem aget elit nullam quis risus eget.</p>
							</div>
						</div>
					</div>
                </div> */}
			</div>
		</section>
    )
}