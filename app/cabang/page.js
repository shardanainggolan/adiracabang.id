import Link from "next/link";

export const metadata = {
	title: "Cari Cabang Adira Terdekat untuk Gadai BPKB Mobil & Motor",
	description: "Temukan cabang Adira terdekat di seluruh Indonesia untuk gadai BPKB mobil dan motor. Proses cepat, aman, dan mudah hanya di Adiracabang.id.",
    openGraph: {
        title: 'Cari Cabang Adira Terdekat untuk Gadai BPKB Mobil & Motor',
        description: 'Temukan cabang Adira terdekat di seluruh Indonesia untuk gadai BPKB mobil dan motor. Proses cepat, aman, dan mudah hanya di Adiracabang.id.',
        url: `${process.env.APP_URL}/cabang`,
        siteName: 'Adiracabang.id',
        images: [
            {
                url: `${process.env.BACKEND_URL}/img/adira-kuning.webp`,
                width: 1140,
                height: 540,
            },
        ],
        locale: 'id_ID',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cari Cabang Adira Terdekat untuk Gadai BPKB Mobil & Motor',
        description: "Temukan cabang Adira terdekat di seluruh Indonesia untuk gadai BPKB mobil dan motor. Proses cepat, aman, dan mudah hanya di Adiracabang.id.",
        creator: '@AdiraFinanceID',
        images: [
            `${process.env.BACKEND_URL}/img/adira-kuning.webp`
        ],
    },
    alternates: {
        canonical: `${process.env.APP_URL}/cabang`,
    },
};

export default async function Cabang() {
    let data = await fetch(`${process.env.BACKEND_URL}/api/branch`)
    let branches = await data.json()

	return (
		<>
			<section className="wrapper bg-[rgba(246,247,249,1)] ">
                <div className="container py-14 xl:!py-24 lg:!py-24 md:!py-24 !text-center">
                    <div className="flex flex-wrap mx-[-15px]">
                        <div className="lg:w-10/12 xl:w-10/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                            <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-3">
                                Temukan Cabang Adira Terdekat untuk Gadai BPKB Mobil & Motor Anda
                            </h1>
                            <p className="lead !mb-1 leading-[1.65] text-[0.9rem] font-medium">
                                Cari cabang Adira terdekat di seluruh Indonesia dan gadaikan BPKB mobil 
                                atau motor Anda dengan proses yang cepat, aman, dan tanpa ribet. 
                                Dapatkan dana tunai dengan mudah di lokasi yang paling nyaman bagi Anda.
                            </p>
                            <div className="flex justify-center mt-5">
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
            <section className="wrapper !bg-[#ffffff]">
                <div className="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
                    <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
                        {branches.data.map((branch) => (
                            <div key={branch.branchId} className="md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] max-w-full mt-[25px]">
                                <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                                    <div className="card-body flex-[1_1_auto] p-[40px]">
                                        <h4>{branch.name}</h4>
                                        <p className="!mb-2 text-xs">
                                            {branch.address}
                                        </p>
                                        <p className="text-xs">
                                            {branch.region.subDistrict.subDistrict}, {branch.region.district.district}, {branch.region.province.province}
                                        </p>
                                        <Link 
                                            href={`/cabang/${branch.slug}`} 
                                            className="more hover text-[#3362fc] focus:text-[#3362fc] hover:text-[#3362fc]">
                                            Lihat Detail
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
		</>
	);
}
