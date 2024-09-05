import Image from "next/image"
import Link from "next/link"
import ktpImg from '../../public/img/persyaratan/ktp.webp'
import kartuKeluargaImg from '../../public/img/persyaratan/kartu-keluarga.webp'
import buktiPenghasilanImg from '../../public/img/persyaratan/bukti-penghasilan.webp'
import bpkbImg from '../../public/img/persyaratan/bpkb.webp'
import stnkImg from '../../public/img/persyaratan/stnk.webp'
import npwpImg from '../../public/img/persyaratan/npwp.webp'

export default function Persayaratan() {
    return (
        <section id="persyaratan" className="wrapper bg-[rgba(246,247,249,1)]">
			<div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
				<div className="flex flex-wrap mx-[-15px] !text-center">
					<div
						className="md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
						<h2 className="!text-[.75rem] uppercase text-[#3362fc] !mb-3 tracking-[0.02rem] !leading-[1.35]">
                            Syarat Gadai BPKB Mobil & Motor di Adira Finance
                        </h2>
						<h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-9 xl:!px-12">
                            Persyaratan Mudah untuk Gadai BPKB Anda
                        </h3>
					</div>
				</div>
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] process-wrapper !text-center mt-9">
                    {/* <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mb-4"> */}
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-1/2 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mb-4">
                        <Image 
                            src={ktpImg}
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
                            src={kartuKeluargaImg}
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
                            src={buktiPenghasilanImg}
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
                            src={bpkbImg}
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
                            src={stnkImg}
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
                            src={npwpImg}
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