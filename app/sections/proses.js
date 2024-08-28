import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Proses() {
    return (
        <section className="wrapper !bg-[#ffffff] border-b-[rgba(164,174,198,0.2)] border-b border-solid">
            <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3">
                    Proses Pengajuan
                </h2>
                <p className="lead !mb-8 !text-[1.05rem] !leading-[1.6]">
                    Proses Pengajuan Gadai BPKB Mobil atau Motor sangat mudah melalui adiracabang.id 
                    ikuti langkah-langkah di bawah ini
                </p>
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-30px] process-wrapper line">
                    <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[30px] max-w-full !relative after:w-full after:absolute after:content-[''] after:h-px after:z-[1] after:border-t-[rgba(164,174,198,0.2)] after:border-t after:border-solid after:left-[3rem] after:top-6 after:bg-inherit md:after:hidden sm:after:hidden xsm:after:hidden">
                        <span className="icon !text-black btn btn-circle btn-lg !bg-[#fcd733] pointer-events-none mb-4 !relative z-[2] xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                            <span className="number table-cell text-center align-middle text-[1.1rem] font-bold mx-auto my-0 !leading-none">
                                01
                            </span>
                        </span>
                        <h4 className="!mb-1">
                            Hubungi Whatsapp adiracabang.id melalui link berikut
                        </h4>
                        <p className="!mb-0">
                            <Link
                                href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB"
                                target="_blank" 
                                class="btn btn-primary text-white !bg-[#25D366] border-[#25D366] hover:text-white hover:bg-[#075E54] hover:border-[#075E54] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#25D366] active:border-[#25D366] disabled:text-white disabled:bg-[#25D366] disabled:border-[#25D366] btn-icon btn-icon-start rounded">
                                <IoLogoWhatsapp className="mr-1" /> Whatsapp
                            </Link>
                        </p>
                    </div>
                    <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[30px] max-w-full !relative after:w-full after:absolute after:content-[''] after:h-px after:z-[1] after:border-t-[rgba(164,174,198,0.2)] after:border-t after:border-solid after:left-[3rem] after:top-6 after:bg-inherit md:after:hidden sm:after:hidden xsm:after:hidden">
                        <span className="icon !text-black btn btn-circle btn-lg !bg-[#fcd733] pointer-events-none mb-4 !relative z-[2] xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                            <span className="number table-cell text-center align-middle text-[1.1rem] font-bold mx-auto my-0 !leading-none">
                                02
                            </span>
                        </span>
                        <h4 className="!mb-1">
                            Isi Data
                        </h4>
                        <p className="!mb-0">
                            Setelah terhubung dengan Whatsapp adiracabang.id, silahkan
                            isi data yang diperlukan, seperti: Nama, Alamat, Jenis Kendaraan
                        </p>
                    </div>
                    <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[30px] max-w-full !relative after:w-full after:absolute after:content-[''] after:h-px after:z-[1] after:border-t-[rgba(164,174,198,0.2)] after:border-t after:border-solid after:left-[3rem] after:top-6 after:bg-inherit md:after:hidden sm:after:hidden xsm:after:hidden">
                        <span className="icon !text-black btn btn-circle btn-lg !bg-[#fcd733] pointer-events-none mb-4 !relative z-[2] xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                            <span className="number table-cell text-center align-middle text-[1.1rem] font-bold mx-auto my-0 !leading-none">
                                03
                            </span>
                        </span>
                        <h4 className="!mb-1">
                            Menunggu persetujuan Adira
                        </h4>
                        <p className="!mb-0">
                            Data Anda akan direview terlebih dahulu dan Anda akan dihubungi oleh marketing
                            Adira untuk proses selanjutnya.
                        </p>
                    </div>
                    <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[30px] max-w-full !relative after:w-full after:absolute after:content-[''] after:h-px after:z-[1] after:border-t-[rgba(164,174,198,0.2)] after:border-t after:border-solid after:left-[3rem] after:top-6 after:bg-inherit md:after:hidden sm:after:hidden xsm:after:hidden">
                        <span className="icon !text-black btn btn-circle btn-lg !bg-[#fcd733] pointer-events-none mb-4 !relative z-[2] xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                            <span className="number table-cell text-center align-middle text-[1.1rem] font-bold mx-auto my-0 !leading-none">
                                04
                            </span>
                        </span>
                        <h4 className="!mb-1">
                            Pencairan Dana
                        </h4>
                        <p className="!mb-0">
                            Apabila pengajuan Anda disetujui, maka dana akan dicairkan langsung ke rekening pribadi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}