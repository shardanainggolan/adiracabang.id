import Link from "next/link"
import Image from "next/image"

export default function Feature() {
    return (
        <section id="keuntungan-manfaat" className="wrapper">
            <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                <div className="flex flex-wrap mx-[-15px] !text-center">
                    <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto !relative">
                        <h2 className="text-[0.8rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35]">
                            Keuntungan dan Manfaat
                        </h2>
                        <h3 className="text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:text-[2rem] mb-12 lg:!px-5 xl:!px-0 xxl:!px-3">
                            Mengapa Harus Memilih Adira?    
                        </h3>
                    </div>
                </div>
                <div className="flex flex-wrap mx-[-15px]">
                    <div className="xxl:w-11/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                        <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] mt-[-50px] !text-center">
                            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-6/12 flex-[0_0_auto] px-[15px] xl:px-[20px] lg:px-[20px] md:px-[20px] mt-[50px] max-w-full">
                                <div className="svg-bg svg-bg-lg !bg-[#fcd733] !rounded-[0.8rem] mb-4"> 
                                    <Image
                                        src="/img/features/proses-cepat.png"
                                        width={120}
                                        height={120}
                                        className="!w-2/3 !h-auto icon-svg solid text-[#343f52] text-navy" 
                                        alt="Proses Cepat sekitar 1-2 hari kerja" 
                                    /> 
                                </div>
                                <h4 className="text-[1rem]">
                                    Proses Cepat sekitar 1-2 hari kerja
                                </h4>
                            </div>
                            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-6/12 flex-[0_0_auto] px-[15px] xl:px-[20px] lg:px-[20px] md:px-[20px] mt-[50px] max-w-full">
                                <div className="svg-bg svg-bg-lg !bg-[#fcd733] !rounded-[0.8rem] mb-4"> 
                                    <Image
                                        src="/img/features/bunga-ringan.png"
                                        width={120}
                                        height={120}
                                        className="!w-2/3 !h-auto icon-svg solid text-[#343f52] text-navy" 
                                        alt="Bunga & Angsuran Ringan" 
                                    /> 
                                </div>
                                <h4 className="text-[1rem]">
                                    Bunga & Angsuran Ringan
                                </h4>
                            </div>
                            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-6/12 flex-[0_0_auto] px-[15px] xl:px-[20px] lg:px-[20px] md:px-[20px] mt-[50px] max-w-full">
                                <div className="svg-bg svg-bg-lg !bg-[#fcd733] !rounded-[0.8rem] mb-4"> 
                                    <Image
                                        src="/img/features/jumlah-pinjaman.png"
                                        width={120}
                                        height={120}
                                        className="!w-2/3 !h-auto icon-svg solid text-[#343f52] text-navy" 
                                        alt="Jumlah pinjaman 2,5 juta – 2 milyar" 
                                    /> 
                                </div>
                                <h4 className="text-[1rem]">
                                    Jumlah pinjaman 2,5 juta – 2 milyar
                                </h4>
                            </div>
                            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-6/12 flex-[0_0_auto] px-[15px] xl:px-[20px] lg:px-[20px] md:px-[20px] mt-[50px] max-w-full">
                                <div className="svg-bg svg-bg-lg !bg-[#fcd733] !rounded-[0.8rem] mb-4"> 
                                    <Image
                                        src="/img/features/bpkb-aman.png"
                                        width={120}
                                        height={120}
                                        className="!w-2/3 !h-auto icon-svg solid text-[#343f52] text-navy" 
                                        alt="BPKB Anda dijamin aman" 
                                    /> 
                                </div>
                                <h4 className="text-[1rem]">
                                    BPKB Anda dijamin aman
                                </h4>
                            </div>
                            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-6/12 flex-[0_0_auto] px-[15px] xl:px-[20px] lg:px-[20px] md:px-[20px] mt-[50px] max-w-full">
                                <div className="svg-bg svg-bg-lg !bg-[#fcd733] !rounded-[0.8rem] mb-4"> 
                                    <Image
                                        src="/img/features/transfer-langsung.png"
                                        width={120}
                                        height={120}
                                        className="!w-2/3 !h-auto icon-svg solid text-[#343f52] text-navy" 
                                        alt="Transfer langsung ke rekening pribadi" 
                                    /> 
                                </div>
                                <h4 className="text-[1rem]">
                                    Transfer langsung ke rekening pribadi
                                </h4>
                            </div>
                            <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-6/12 flex-[0_0_auto] px-[15px] xl:px-[20px] lg:px-[20px] md:px-[20px] mt-[50px] max-w-full">
                                <div className="svg-bg svg-bg-lg !bg-[#fcd733] !rounded-[0.8rem] mb-4"> 
                                    <Image
                                        src="/img/features/terdaftar-ojk.png"
                                        width={120}
                                        height={120}
                                        className="!w-2/3 !h-auto icon-svg solid text-[#343f52] text-navy" 
                                        alt="Terdaftar di OJK" 
                                    /> 
                                </div>
                                <h4 className="text-[1rem]">
                                    Terdaftar di OJK
                                </h4>
                            </div>
                        </div>
                        <div className="flex justify-center md:mt-5 mt-2">
                            <Link 
                                href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB"
                                target="_blank" 
                                className="w-72 btn btn-primary text-white !bg-[#3362fc] border-[#3362fc] hover:text-white hover:bg-[#3362fc] hover:border-[#3362fc] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3362fc] active:border-[#3362fc] disabled:text-white disabled:bg-[#3362fc] disabled:border-[#3362fc] !rounded-[50rem]">
                                Ajukan Gadai BPKB Sekarang
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}