import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Proses() {
    return (
        <section id="cara-pengajuan" className="wrapper !bg-[#ffffff] border-b-[rgba(164,174,198,0.2)] border-b border-solid">
            <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3">
                    Proses Mudah Gadai BPKB di Adira Finance
                </h2>
                <p className="lead !mb-8 !text-[1.05rem] !leading-[1.6]">
                    Ikuti langkah-langkah sederhana ini untuk mengajukan pinjaman 
                    Gadai BPKB Mobil atau Motor Anda. Dari kontak awal hingga pencairan dana, 
                    kami memastikan proses yang cepat dan aman.
                </p>
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-30px] process-wrapper line">
                    <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[30px] max-w-full !relative after:w-full after:absolute after:content-[''] after:h-px after:z-[1] after:border-t-[rgba(164,174,198,0.2)] after:border-t after:border-solid after:left-[3rem] after:top-6 after:bg-inherit md:after:hidden sm:after:hidden xsm:after:hidden">
                        <span className="icon !text-black btn btn-circle btn-lg !bg-[#fcd733] pointer-events-none mb-4 !relative z-[2] xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]">
                            <span className="number table-cell text-center align-middle text-[1.1rem] font-bold mx-auto my-0 !leading-none">
                                01
                            </span>
                        </span>
                        <h3 className="h4 !mb-1">
                            Hubungi Whatsapp adiracabang.id melalui link berikut
                        </h3>
                        <p className="!mb-0">
                            <Link
                                href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB"
                                target="_blank" 
                                className="btn btn-primary !text-white !bg-[#3362fc] border-[#3362fc] hover:text-white hover:bg-[#3362fc] hover:border-[#3362fc] active:text-white active:bg-[#3362fc] active:border-[#3362fc] disabled:text-white disabled:bg-[#3362fc] disabled:border-[#3362fc] btn-icon btn-icon-start rounded">
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
                        <h3 className="h4 !mb-1">
                            Isi Data
                        </h3>
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
                        <h3 className="h4 !mb-1">
                            Menunggu persetujuan Adira
                        </h3>
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
                        <h3 className="h4 !mb-1">
                            Pencairan Dana
                        </h3>
                        <p className="!mb-0">
                            Apabila pengajuan Anda disetujui, maka dana akan dicairkan langsung ke rekening pribadi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}