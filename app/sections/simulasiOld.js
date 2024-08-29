import Image from "next/image"
import Link from "next/link"
import { CiZoomIn } from "react-icons/ci";

export default function Simulasi() {
    return (
        <section className="wrapper !bg-[#ffffff]">
            <div className="container py-[4.5rem] xl:!py-28 lg:!py-28 md:!py-28">
                <div className="flex flex-wrap mx-[-15px] !text-center">
                    <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto !relative">
                        <h2 className="text-[0.8rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35]">
                            Tabel Simulasi dan Penawaran
                        </h2>
                        <h3 className="text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:text-[2rem] mb-12 lg:!px-5 xl:!px-0 xxl:!px-3">
                            Lihat dan bandingkan   
                        </h3>
                    </div>
                </div>
                <div className="flex flex-wrap mx-[-15px] xsm:mt-[-50px] mt-[-80px] xl:mx-[-7.5px] lg:mx-[-7.5px] items-center">
                    <div className="mx-auto md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[7.5px] lg:px-[7.5px] px-[15px] max-w-full !relative mt-[80px]">
                        <Link 
                            href="/img/table-referenstatif.webp"
                            className="btn btn-circle btn-purple text-white !bg-transparent border-[#fcd733] hover:text-white hover:bg-[#fcd733] hover:border-[#fcd733] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#fcd733] active:border-[#fcd733] disabled:text-white disabled:bg-[#fcd733] disabled:border-[#fcd733] btn-play ripple !mx-auto mb-5 !absolute xl:text-[2.3rem] text-[calc(1.355rem_+_1.26vw)] w-[3.5rem] h-[3.5rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] before:!bg-[#fcd733] after:!bg-[#fcd733] before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0  after:content-[''] after:block after:absolute after:z-[-1] after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:rounded-[50%] after:inset-0 after:[animation-delay:.5s]"
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 3 }} 
                            data-glightbox>
                            <CiZoomIn 
                                className="icn-caret-right ml-[0.15rem] !relative z-[2] before:content-['\e900'] text-[calc(1.355rem_+_1.26vw)]" 
                            />
                        </Link>
                        <div 
                            className="shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block !absolute z-[1]"
                            data-rellax-speed="0" 
                            style={{ bottom: '-1.8rem', right: '-1.5rem', width: '85%', height: '90%' }}>
                        </div>
                        <figure className="!rounded-[.4rem] relative z-[2]">
                            <Image 
                                className="!rounded-[.4rem]"
                                width={700}
                                height={987}
                                src="/img/table-referenstatif.webp" 
                                alt="Tabel Simulasi dan Penawaran" 
                            />
                        </figure>
                    </div>
                    {/* <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[7.5px] lg:px-[7.5px] px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] mt-[80px]">
                        Headhesive 
                    </div> */}
                </div>
                
            </div>
        </section>
    )
}