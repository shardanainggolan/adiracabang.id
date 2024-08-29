import Image from "next/image"

export default function Faq() {
    return (
        <section class="wrapper !bg-[#ffffff] ">
            <div class="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                <h2 class="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center">
                    FAQ
                </h2>
                <p class="lead text-[0.9rem] font-medium leading-[1.65] !text-center !mb-10 md:!px-24 xl:!px-0 lg:!px-0">
                    Pertanyaan yang sering diajukan
                </p>
                <div class="flex flex-wrap mx-[-15px]">
                    <div class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mb-0">
                        <div id="accordion-1" class="accordion-wrapper">
                            <div class="card accordion-item mb-5">
                                <div class="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit" id="accordion-heading-1-1">
                                    <button 
                                        class="hover:!text-[#3f78e0] collapsed" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-collapse-1-1" 
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-1-1">
                                        Ketentuan Konsumen
                                    </button>
                                </div>
                                <div 
                                    id="accordion-collapse-1-1" 
                                    class="collapse"
                                    aria-labelledby="accordion-heading-1-1" 
                                    data-bs-target="#accordion-1">
                                    <div class="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                                        <p>
                                            Konsumen perorangan yang berprofesi sebagai Karyawan (Swasta/PNS), 
                                            Wiraswasta maupun Profesional, baik yang merupakan nasabah 
                                            Adira Finance (kontrak aktif atau lunas) maupun yang belum menjadi nasabah.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div id="accordion-2" class="accordion-wrapper">
                            <div class="card accordion-item mb-5">
                                <div class="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit" id="accordion-heading-2-1">
                                    <button 
                                        class="hover:!text-[#3f78e0] collapsed" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-collapse-2-1" 
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-2-1">
                                        How do I get my subscription receipt?
                                    </button>
                                </div>
                                <div 
                                    id="accordion-collapse-2-1" 
                                    class="collapse"
                                    aria-labelledby="accordion-heading-2-1" 
                                    data-bs-target="#accordion-2">
                                    <div class="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                                        <p>
                                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                            fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                                            fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                            et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                            ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card accordion-item mb-5">
                                <div class="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit" id="accordion-heading-2-2">
                                    <button 
                                        class="hover:!text-[#3f78e0] collapsed" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-collapse-2-2" 
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-2-2">
                                        Are there any discounts for people in need?
                                    </button>
                                </div>
                                <div 
                                    id="accordion-collapse-2-2" 
                                    class="collapse"
                                    aria-labelledby="accordion-heading-2-2" 
                                    data-bs-target="#accordion-2">
                                    <div class="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                                        <p>
                                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                            fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                                            fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                            et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                            ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card accordion-item mb-5">
                                <div class="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit" id="accordion-heading-2-3">
                                    <button 
                                        class="hover:!text-[#3f78e0] collapsed" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-collapse-2-3" 
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-2-3">
                                        Do you offer a free trial edit?
                                    </button>
                                </div>
                                <div 
                                    id="accordion-collapse-2-3" 
                                    class="collapse"
                                    aria-labelledby="accordion-heading-2-3" 
                                    data-bs-target="#accordion-2">
                                    <div class="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                                        <p>
                                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                            fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                                            fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                            et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                            ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card accordion-item mb-5">
                                <div class="card-header !mb-0 !p-[.9rem_1.3rem_.85rem] !border-0 !bg-inherit" id="accordion-heading-2-4">
                                    <button 
                                        class="hover:!text-[#3f78e0] collapsed" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#accordion-collapse-2-4" 
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-2-4">
                                        How do I reset my Account password?
                                    </button>
                                </div>
                                <div 
                                    id="accordion-collapse-2-4" 
                                    class="collapse"
                                    aria-labelledby="accordion-heading-2-4" 
                                    data-bs-target="#accordion-2">
                                    <div class="card-body flex-[1_1_auto] p-[0_1.25rem_.25rem_2.35rem]">
                                        <p>
                                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                            fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                                            fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                            et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                                            ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}