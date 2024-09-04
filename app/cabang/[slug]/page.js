import Image from "next/image";
import Link from "next/link";
import { notFound } from 'next/navigation'
import Feature from '../../sections/feature';
import Persayaratan from '../../sections/persyaratan';
import Service from '../../sections/service';
import Proses from '../../sections/proses';
import Simulasi from '../../sections/simulasi';
import Faq from '../../sections/faq';
import { GrLocation, GrPhone, GrMailOption } from "react-icons/gr";
import { LocalBusinessJsonLd } from 'next-seo';

async function fetchBranch(slug) {
    const res = await fetch(`${process.env.BACKEND_URL}/api/branch/slug/${slug}`)
    const branch = await res.json()
    if (branch.data.branchId == 0) return undefined
    return branch.data
}

export async function generateMetadata({ params }) {
    const branch = await fetchBranch(params.slug)

    if (!branch) {
        notFound()
    }

    return {
        title: `${branch.name} | Gadai BPKB Mobil & Motor`,
        description: `Butuh dana cepat? Gadai BPKB mobil & motor Anda di ${branch.name}. Proses mudah, aman, dan terpercaya.`,
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        openGraph: {
            title: `${branch.name} | Gadai BPKB Mobil & Motor`,
            description: `Butuh dana cepat? Gadai BPKB mobil & motor Anda di ${branch.name}. Proses mudah, aman, dan terpercaya.`,
            url: `${process.env.APP_URL}/cabang/${branch.slug}`,
            siteName: 'Adiracabang.id',
            images: [
                {
                    url: `${process.env.BACKEND_URL}/uploads/branches/${branch.image}`,
                    width: 800,
                    height: 600,
                },
            ],
            locale: 'id_ID',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${branch.name} | Gadai BPKB Mobil & Motor`,
            description: `Butuh dana cepat? Gadai BPKB mobil & motor Anda di ${branch.name}. Proses mudah, aman, dan terpercaya.`,
            creator: '@AdiraFinanceID',
            images: [
                `${process.env.BACKEND_URL}/uploads/branches/${branch.image}`
            ],
        },
        alternates: {
            canonical: `${process.env.APP_URL}/cabang/${branch.slug}`,
        },
    }
}

export default async function Page({ params }) {
    const branch = await fetchBranch(params.slug)

    if (!branch) {
        notFound()
    }

    return (
        <>
            <LocalBusinessJsonLd
                useAppDir={true}
                type="Konsultan Keuangan"
                id={`${process.env.APP_URL}/cabang/${branch.slug}`}
                name={branch.name}
                description={branch.description}
                url={`${process.env.APP_URL}/cabang/${branch.slug}`}
                telephone={branch.telp1}
                address={{
                    streetAddress: branch.address,
                    addressLocality: branch.region.district.district,
                    addressRegion: branch.region.province.province,
                    postalCode: branch.postalCode,
                    addressCountry: 'ID',
                }}
                geo={{
                    latitude: branch.latitude,
                    longitude: branch.longitude,
                }}
                images={[
                    `${process.env.BACKEND_URL}/uploads/branches/${branch.image}`
                ]}
            />

            <section className="wrapper !bg-[#edf2fc]">
                <div className="container pt-10 pb-20 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24 !text-center">
                    <div className="flex flex-wrap mx-[-15px]">
                        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                            <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-3">
                                {branch.name}
                            </h1>
                            <p>
                                Gadai BPKB mobil dan motor Anda di {branch.name} dengan proses cepat dan aman. 
                                Nikmati layanan terpercaya di lokasi strategis {branch.region.district.district} untuk solusi dana tunai tanpa ribet.
                            </p>
                            <div className="flex justify-center mt-5">
                                <Link 
                                    href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB"
                                    target="_blank" 
                                    className="md:w-1/2 w-full btn btn-primary text-white !bg-[#3362fc] border-[#3362fc] hover:text-white hover:bg-[#3362fc] hover:border-[#3362fc] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3362fc] active:border-[#3362fc] disabled:text-white disabled:bg-[#3362fc] disabled:border-[#3362fc] !rounded-[50rem]">
                                    <span className="text-wrap">
                                        Ajukan Gadai BPKB Sekarang Juga di {branch.name}
                                    </span>
                                </Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="wrapper !bg-[#ffffff] ">
                <div className="container pt-10 xl:pt-14 lg:pt-14 md:pt-14 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                    <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-50px] items-center">
                        <div className="md:w-8/12 lg:w-6/12 xl:w-5/12 lg:!ml-0 xl:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full !relative">
                            <div 
                                className="shape bg-dot primary rellax !w-[7rem] !h-[12.5rem] !bg-[radial-gradient(#fcd733_2px,transparent_2.5px)] absolute z-[1] opacity-50"
                                data-rellax-speed="1" style={{ top: '-2rem', left: '-1.4rem' }}>
                            </div>
                            <figure className="!rounded-[.4rem] relative z-[2]">
                                <Image 
                                    className="!rounded-[.4rem] w-full max-w-full !h-auto"
                                    width={480}
                                    height={550}
                                    src={`${process.env.BACKEND_URL}/uploads/branches/${branch.image}`} 
                                    alt={branch.name} 
                                />
                            </figure>
                        </div>
                        <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
                            <h2 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-8">
                                Ajukan dana tunai dengan gadai BPKB sekarang juga
                            </h2>
                            <div className="flex flex-row">
                                <div>
                                    <div className="icon text-[#fcd733]  xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-[-0.25rem]">
                                        <GrLocation className="before:content-['\ebd8']" />
                                        {/* <i className="uil uil-location-pin-alt before:content-['\ebd8']"></i>  */}
                                    </div>
                                </div>
                                <div>
                                    <h5 className="!mb-1">Alamat</h5>
                                    <address className=" not-italic leading-[inherit] mb-4">
                                        {branch.address}
                                        <br className="hidden xl:block lg:block md:block" />
                                        {branch.region.subDistrict.subDistrict}, 
                                        {branch.region.district.district}, 
                                        {branch.region.province.province}
                                    </address>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div>
                                    <div className="icon text-[#fcd733]  xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-[-0.25rem]">
                                        <GrPhone className="before:content-['\ec50']" />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="!mb-1">Phone</h5>
                                    <p>
                                        {branch.telp1}<br className="hidden xl:block lg:block md:block" />
                                        {branch.telp2}<br className="hidden xl:block lg:block md:block" />
                                        {branch.telp3}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div>
                                    <div className="icon text-[#fcd733]  xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-[-0.25rem]">
                                        <GrMailOption className="before:content-['\eac8']" />
                                    </div>
                                </div>
                                <div>
                                    <h5 className="!mb-1">Fax</h5>
                                    <p className="!mb-0">
                                        {branch.fax1}<br className="hidden xl:block lg:block md:block" />
                                        {branch.fax2}<br className="hidden xl:block lg:block md:block" />
                                        {branch.fax3}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <Link 
                            href="https://wa.me/62895424249065?text=Halo%20saya%20ingin%20mengajukan%20Gadai%20BPKB"
                            target="_blank" 
                            className="md:w-1/2 w-full btn btn-primary text-white !bg-[#3362fc] border-[#3362fc] hover:text-white hover:bg-[#3362fc] hover:border-[#3362fc] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3362fc] active:border-[#3362fc] disabled:text-white disabled:bg-[#3362fc] disabled:border-[#3362fc] !rounded-[50rem]">
                            <span className="text-wrap">Ajukan Gadai BPKB Sekarang di {branch.name}</span>
                        </Link> 
                    </div>
                </div>
            </section>

            <Feature />
			<Service />
			<Persayaratan />
			<Proses />
			<Simulasi />
			<Faq />
        </>
    )
}