import Image from "next/image"

export default function Faq() {
    return (
        <section class="wrapper !bg-[#ffffff] ">
            <div class="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                <div class="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px]">
                    <div class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px]  px-[15px] max-w-full mt-[50px]">
                        <figure class="m-0 p-0">
                            <Image 
                                class="w-auto" 
                                src="/img/faq.png"
                                width={800}
                                height={590}
                                alt="FAQ" 
                            />
                        </figure>
                    </div>
                    <div class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px]  px-[15px] max-w-full mt-[50px]">
                        <h2 class="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3">
                            Common Questions
                        </h2>
                        <p class="lead text-[1rem] !mb-6 xxl:pr-10">
                            If you don't see an <span class="relative z-[2] whitespace-nowrap after:content-[''] after:block after:absolute after:w-[102.5%] after:h-[30%] after:left-[-1.5%] after:z-[-1] after:transition-all after:duration-[0.2s] after:ease-in-out after:mt-0 after:rounded-[5rem] after:bottom-[9%] motion-reduce:after:transition-none after:bg-[rgba(63,120,224,.12)]">
                                answer to your question</span>, 
                                you can send us an email from our contact form.</p>
                        <div class="accordion accordion-wrapper" id="accordionExample-2">
                            <div class="card plain accordion-item">
                                <div class="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit" id="headingOne-2">
                                    <button 
                                        class="hover:!text-[#3f78e0] accordion-button" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne-2" 
                                        aria-expanded="true" 
                                        aria-controls="collapseOne-2"> 
                                        Can I cancel my subscription?
                                    </button>
                                </div>
                                <div 
                                    id="collapseOne-2" 
                                    class="accordion-collapse collapse show" 
                                    aria-labelledby="headingOne-2"
                                    data-bs-parent="#accordionExample-2">
                                    <div class="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                                        <p>
                                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                                            massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.
                                            Praesent commodo cursus magna, vel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card plain accordion-item">
                                <div class="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit" id="headingTwo-2">
                                    <button 
                                        class="hover:!text-[#3f78e0] collapsed" 
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo-2" 
                                        aria-expanded="false" 
                                        aria-controls="collapseTwo-2">
                                        Which payment methods do you accept? 
                                    </button>
                                </div>
                                <div 
                                    id="collapseTwo-2" class="accordion-collapse collapse" 
                                    aria-labelledby="headingTwo-2"
                                    data-bs-parent="#accordionExample-2">
                                    <div class="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                                        <p>
                                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                                            massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.
                                            Praesent commodo cursus magna, vel.
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