import Link from "next/link"

export default function Simulasi() {
    return (
        <section className="wrapper !bg-[#ffffff]">
            {/* <div className="container py-[4.5rem] xl:!py-28 lg:!py-28 md:!py-28"> */}
            <div className="container py-[4.5rem] xl:!py-14 lg:!py-14 md:!py-14">
                <div className="flex flex-wrap mx-[-15px] !text-center">
                    <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto !relative">
                        {/* <h2 className="text-[0.8rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35]">
                            Tabel Simulasi dan Penawaran
                        </h2> */}
                        <h2 className="text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:text-[2rem] lg:!px-5 xl:!px-0 xxl:!px-3">
                            Tabel Simulasi dan Penawaran  
                        </h2>
                        <p className="lead md:text-xs text-sm !leading-[1.6] mb-7 !text-center italic">
                            * Estimasi nilai pinjaman jaminan BPKB bukan merupakan persetujuan pinjaman dana, 
                            bersifat tidak mengikat, dan dapat disesuaikan berdasarkan penilaian lebih lanjut 
                            serta kebijakan Adira Finance.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap mx-[-15px]">
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full md:mb-3 lg:mb-0 mb-5">
                        <h3 className="text-[1rem] tracking-[-0.03em] text-center">
                            Skema Angsuran Pinjaman Jaminan BPKB Motor
                        </h3>
                        <table className="min-w-full border border-gray-300">
                            <thead className="bg-[#fcd733]">
                                <tr className="border border-gray-300">
                                    <th className="border border-gray-30 p-2 text-center text-xs font-bold text-black tracking-wide">
                                        Pinjaman
                                    </th>
                                    <th className="border border-gray-30 p-2 text-center text-xs font-bold text-black tracking-wide">
                                        Tenor
                                    </th>
                                    <th className="border border-gray-30 p-2 text-center text-xs font-bold text-black tracking-wide">
                                        Jumlah Angsuran
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-50 divide-x divide-y divide-gray-300">
                                <tr className="divide-x divide-y divide-gray-300">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 5.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        12 Bulan
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 593.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 5.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        24 Bulan
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 356.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 5.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        36 Bulan
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 281.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 10.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        12 Bulan	
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 1.093.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 10.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        24 Bulan	
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 648.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 10.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        36 Bulan	
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 507.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 15.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        12 Bulan	
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 1.593.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 15.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        24 Bulan		
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 941.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 15.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        36 Bulan	
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 733.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 20.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        12 Bulan
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 2.101.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 20.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        24 Bulan
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 1.243.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 20.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        36 Bulan
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 969.000
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <h3 className="text-[1rem] tracking-[-0.03em] text-center">
                            Skema Angsuran Pinjaman Jaminan BPKB Mobil
                        </h3>
                        <table className="min-w-full border border-gray-300">
                            <thead className="bg-[#fcd733]">
                                <tr className="border border-gray-300">
                                    <th className="border border-gray-30 p-2 text-center text-xs font-bold text-black tracking-wide">
                                        Pinjaman
                                    </th>
                                    <th className="border border-gray-30 p-2 text-center text-xs font-bold text-black tracking-wide">
                                        Tenor
                                    </th>
                                    <th className="border border-gray-30 p-2 text-center text-xs font-bold text-black tracking-wide">
                                        Jumlah Angsuran
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-50 divide-x divide-y divide-gray-300">
                                <tr className="divide-x divide-y divide-gray-300">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 30.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        12 Bulan
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 2.991.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 30.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        24 Bulan
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 1.648.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 30.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        36 Bulan
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 1.214.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 30.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        48 Bulan	
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 996.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 80.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        12 Bulan	
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 7.551.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 80.000.000	
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        24 Bulan	
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 4.121.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 80.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        36 Bulan
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 2.996.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 80.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        48 Bulan		
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 2.439.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 150.000.000	
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        12 Bulan	
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 13.991.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 150.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        24 Bulan
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 7.633.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 150.000.000	
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        36 Bulan	
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 5.549.000
                                    </td>
                                </tr>
                                <tr className="divide-x divide-y">
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 150.000.000
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        48 Bulan
                                    </td>
                                    <td className="p-2 text-center text-black text-xs whitespace-nowrap">
                                        Rp 5.516.000
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
        </section>
    )
}