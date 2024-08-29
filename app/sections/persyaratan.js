import Image from "next/image"
import Link from "next/link"

export default function Persayaratan() {
    return (
        <section className="wrapper bg-[rgba(246,247,249,1)]">
			<div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
				<div className="flex flex-wrap mx-[-15px] !text-center">
					<div
						className="md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
						<h2 className="!text-[.75rem] uppercase text-[#aab0bc] !mb-3 tracking-[0.02rem] !leading-[1.35]">
							Persyaratan
                        </h2>
						<h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-9 xl:!px-12">
							Apa saja harus disiapkan untuk mengajukan Gadai BPKB Mobil atau Motor?
                        </h3>
					</div>
				</div>
				{/* <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-40px]">
					<div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] mt-[40px]">
						<div className="flex flex-row">
							<div>
								<img 
                                    src="./assets/img/icons/lineal/telephone-3.svg"
									className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#343f52] text-blue mr-5 mt-1"
									alt="image" 
                                />
							</div>
							<div>
								<h4 className="text-[1rem] tracking-[-0.03em]">24/7 Support</h4>
								<p className="!mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget
									lacinia odio sem aget elit nullam quis risus eget.</p>
							</div>
						</div>
					</div>
					
				</div> */}
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] process-wrapper !text-center mt-9">
                    {/* <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mb-4"> */}
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-1/2 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mb-4">
                        <Image 
                            src="/img/persyaratan/ktp.png"
                            width={300}
                            height={200}
                            alt="KTP"
                            className="text-[#3362fc] mb-3 w-2/3 m-[0_auto] rounded"
                        />
                        <h4 className="!mb-1 md:text-base text-xs">
                            KTP (Kartu Tanda Penduduk)
                        </h4>
                    </div>
                    {/* <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mb-4"> */}
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-1/2 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mb-4">
                        <Image 
                            src="/img/persyaratan/kartu-keluarga.png"
                            width={300}
                            height={200}
                            alt="Kartu Keluarga"
                            className="text-[#3362fc] mb-3 w-2/3 m-[0_auto] rounded"
                        />
                        <h4 className="!mb-1 md:text-base text-xs">
                            Kartu Keluarga
                        </h4>
                    </div>
                    {/* <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mb-4"> */}
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-1/2 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mb-4">
                        <Image 
                            src="/img/persyaratan/bukti-penghasilan.png"
                            width={300}
                            height={200}
                            alt="Bukti Penghasilan"
                            className="text-[#3362fc] mb-3 w-2/3 m-[0_auto] rounded"
                        />
                        <h4 className="!mb-1">
                            Bukti Penghasilan
                        </h4>
                    </div>
                    {/* <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mb-4"> */}
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-1/2 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mb-4">
                        <Image 
                            src="/img/persyaratan/bpkb.png"
                            width={300}
                            height={200}
                            alt="BPKB"
                            className="text-[#3362fc] mb-3 w-2/3 m-[0_auto] rounded"
                        />
                        <h4 className="!mb-1">
                            BPKB
                        </h4>
                        <p>(Gadai BPKB Motor atau Mobil)</p>
                    </div>
                    {/* <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mb-4"> */}
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-1/2 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mb-4">
                        <Image 
                            src="/img/persyaratan/stnk.png"
                            width={300}
                            height={200}
                            alt="STNK"
                            className="text-[#3362fc] mb-3 w-2/3 m-[0_auto] rounded"
                        />
                        <h4 className="!mb-1">
                            STNK
                        </h4>
                        <p>(Gadai BPKB Motor atau Mobil)</p>
                    </div>
                    {/* <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mb-4"> */}
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-1/2 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mb-4">
                        <Image 
                            src="/img/persyaratan/npwp.png"
                            width={300}
                            height={200}
                            alt="NPWP"
                            className="text-[#3362fc] mb-3 w-2/3 m-[0_auto] rounded"
                        />
                        <h4 className="!mb-1">
                            NPWP
                        </h4>
                        <p>(Diatas 50 Juta)</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link 
                        href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB"
                        target="_blank" 
                        className="w-72 btn btn-primary text-white !bg-[#3362fc] border-[#3362fc] hover:text-white hover:bg-[#3362fc] hover:border-[#3362fc] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3362fc] active:border-[#3362fc] disabled:text-white disabled:bg-[#3362fc] disabled:border-[#3362fc] !rounded-[50rem]">
                        Ajukan Gadai BPKB Sekarang
                    </Link> 
                </div>
			</div>
		</section>
    )
}