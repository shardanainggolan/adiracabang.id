import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
    return (
        <section class="wrapper !bg-[#ffffff]">
            <div class="container pt-14 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-[4.5rem] xl:pb-24 lg:pb-24 md:pb-24">
                <div class="flex flex-wrap mx-[-15px]">
                    <div class="lg:w-9/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                        <figure class="!mb-10">
                            <Image 
                                class="max-w-full h-auto" 
                                src="/img/404.png"
                                width={800}
                                height={316}
                                alt="Adiracabang.id" 
                            />
                        </figure>
                    </div>
                    <div class="lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
                        <h1 class="!mb-3">Oops! Halaman Tidak Ditemukan.</h1>
                        <p class="lead !leading-[1.65] text-[0.9rem] font-medium mb-7 md:!px-14 lg:!px-5 xl:!px-7">
                            Halaman yang Anda cari tidak ada <br />
                            Coba halaman lain atau kembali ke halaman utama dengan tombol di bawah ini.
                        </p>
                        <Link 
                            href="/"
                            class="btn btn-primary text-white !bg-[#3362fc] border-[#3362fc] hover:text-white hover:bg-[#3362fc] hover:border-[#3362fc] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3362fc] active:border-[#3362fc] disabled:text-white disabled:bg-[#3362fc] disabled:border-[#3362fc] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">
                            Halaman Utama
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}