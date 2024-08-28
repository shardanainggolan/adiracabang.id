export default function About() {
    return (
        <section className="wrapper !bg-[#ffffff]">
            <div className="container py-[4.5rem] xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
                <div
                    className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-70px] items-center mb-10 xl:!mb-16 lg:!mb-16 md:!mb-16">
                    <div
                        className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[70px] !relative">
                        <div className="btn btn-circle btn-violet text-white !bg-[#a07cc5] border-[#a07cc5] hover:text-white hover:bg-[#a07cc5] hover:border-[#a07cc5] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#a07cc5] active:border-[#a07cc5] disabled:text-white disabled:bg-[#a07cc5] disabled:border-[#a07cc5]  pointer-events-none !absolute counter-wrapper  flex-col sm:!hidden xsm:!hidden xl:flex lg:flex md:flex !items-center !justify-center !text-[1rem] !leading-none !p-0 !rounded-[100%]"
                            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 170, height: 170 }}>
                            <h3 className="text-white mb-1 mt-[-0.5rem] relative z-[3]"><span
                                    className="counter counter-lg text-[calc(1.345rem_+_1.14vw)] tracking-[normal] leading-none mb-2 xl:text-[2.2rem] ">20+</span>
                            </h3>
                            <p className="text-[0.8rem] font-medium mb-0">Year Experience</p>
                        </div>
                        <div className="flex flex-wrap mx-[-12.5px] mt-[-25px] items-center">
                            <div
                                className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full mt-[25px]">
                                <div
                                    className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
                                    <div
                                        className="xl:w-10/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[16.66666667%] md:w-10/12 md:!ml-[16.66666667%] w-full flex-[0_0_auto] px-[12.5px] max-w-full mt-[25px]">
                                        <figure className="rounded-[0.4rem]">
                                            <img className="!rounded-[0.4rem]"
                                                src="/img/photos/ab1.jpg"
                                                srcSet="/img/photos/ab1@2x.jpg 2x" alt="image" /></figure>
                                    </div>
                                    <div className="w-full flex-[0_0_auto] px-[12.5px] max-w-full mt-[25px]">
                                        <figure className="rounded-[0.4rem]"><img className="!rounded-[0.4rem]"
                                                src="/img/photos/ab2.jpg"
                                                srcSet="/img/photos/ab2@2x.jpg 2x" alt="image" /></figure>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full mt-[25px]">
                                <figure className="rounded-[0.4rem]"><img className="!rounded-[0.4rem]"
                                        src="/img/photos/ab3.jpg" srcSet="/img/photos/ab3@2x.jpg 2x"
                                        alt="image" /></figure>
                            </div>
                        </div>
                    </div>
                    <div
                        className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[70px]">
                        <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] !leading-[1.2] font-DMSerif font-normal tracking-normal mb-[1.25rem]">
                            We bring solutions to make life easier for our customers.
                        </h3>
                        <p className="!mb-7">
                            Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed
                            consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum
                            id ligula porta felis euismod semper. Vestibulum id ligula.
                        </p>

                        <div className="flex flex-wrap mx-[-15px] mt-[-15px]">
                            <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] px-[15px] max-w-full">
                                <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                                    <li className="relative pl-6">
                                        <span>
                                            <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#eee7f5] text-[#a07cc5] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"></i>
                                        </span>
                                        <span>
                                            Aenean quam ornare curabitur blandit consectetur.
                                        </span>
                                    </li>
                                    <li className="relative pl-6 mt-3">
                                        <span>
                                            <i className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#eee7f5] text-[#a07cc5] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"></i>
                                        </span>
                                        <span>
                                            Nullam quis risus eget urna mollis ornare aenean leo.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] px-[15px] max-w-full">
                                <ul className="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                                    <li className="relative pl-6"><span><i
                                                className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#eee7f5] text-[#a07cc5] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"></i></span><span>Etiam
                                            porta euismod malesuada mollis nisl ornare sem.</span></li>
                                    <li className="relative pl-6 mt-3"><span><i
                                                className="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-[#eee7f5] text-[#a07cc5] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"></i></span><span>Vivamus
                                            sagittis lacus augue rutrum maecenas.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-40px]">
                    <div
                        className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[40px] max-w-full">
                        <div className="flex flex-row">
                            <div>
                                <img src="./assets/img/icons/lineal/telephone-3.svg"
                                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#a07cc5] text-violet !mr-4"
                                    alt="image" />
                            </div>
                            <div>
                                <h4 className="!mb-1">24/7 Support</h4>
                                <p className="!mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget
                                    lacinia odio sem aget elit nullam quis risus eget.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[40px] max-w-full">
                        <div className="flex flex-row">
                            <div>
                                <img src="./assets/img/icons/lineal/shield.svg"
                                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#a07cc5] text-violet !mr-4"
                                    alt="image" />
                            </div>
                            <div>
                                <h4 className="!mb-1">Secure Payments</h4>
                                <p className="!mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget
                                    lacinia odio sem aget elit nullam quis risus eget.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[40px] max-w-full">
                        <div className="flex flex-row">
                            <div>
                                <img src="./assets/img/icons/lineal/cloud-computing-3.svg"
                                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#a07cc5] text-violet !mr-4"
                                    alt="image" />
                            </div>
                            <div>
                                <h4 className="!mb-1">Daily Updates</h4>
                                <p className="!mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget
                                    lacinia odio sem aget elit nullam quis risus eget.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[40px] max-w-full">
                        <div className="flex flex-row">
                            <div>
                                <img src="./assets/img/icons/lineal/analytics.svg"
                                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#a07cc5] text-violet !mr-4"
                                    alt="image" />
                            </div>
                            <div>
                                <h4 className="!mb-1">Market Research</h4>
                                <p className="!mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget
                                    lacinia odio sem aget elit nullam quis risus eget.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[40px] max-w-full">
                        <div className="flex flex-row">
                            <div>
                                <img src="./assets/img/icons/lineal/settings.svg"
                                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#a07cc5] text-violet !mr-4"
                                    alt="image" />
                            </div>
                            <div>
                                <h4 className="!mb-1">System Integration</h4>
                                <p className="!mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget
                                    lacinia odio sem aget elit nullam quis risus eget.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[40px] max-w-full">
                        <div className="flex flex-row">
                            <div>
                                <img src="./assets/img/icons/lineal/earth.svg"
                                    className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  text-[#a07cc5] text-violet !mr-4"
                                    alt="image" />
                            </div>
                            <div>
                                <h4 className="!mb-1">SEO Services</h4>
                                <p className="!mb-0">Duis mollis gravida commodo id luctus erat porttitor ligula, eget
                                    lacinia odio sem aget elit nullam quis risus eget.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-14 xl:!my-28 lg:!my-28 md:!my-28" />
                <div
                    className="flex flex-wrap mx-[-15px] xsm:mt-[-50px] mt-[-80px] xl:mx-[-20px] lg:mx-[-20px] items-center">
                    <div
                        className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] px-[15px] mt-[80px] max-w-full xl:!order-2 lg:!order-2">
                        <div
                            className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
                            <div
                                className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[16.66666667%] !self-end mt-[25px]">
                                <figure className="rounded-[0.4rem]"><img className="rounded-[0.4rem]"
                                        src="/img/photos/g1.jpg" srcSet="/img/photos/g1@2x.jpg 2x"
                                        alt="image" /></figure>
                            </div>
                            <div
                                className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full !self-end mt-[25px]">
                                <figure className="rounded-[0.4rem]"><img className="rounded-[0.4rem]"
                                        src="/img/photos/g2.jpg" srcSet="/img/photos/g2@2x.jpg 2x"
                                        alt="image" /></figure>
                            </div>
                            <div
                                className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%] mt-[25px]">
                                <figure className="rounded-[0.4rem]"><img className="rounded-[0.4rem]"
                                        src="/img/photos/g3.jpg" srcSet="/img/photos/g3@2x.jpg 2x"
                                        alt="image" /></figure>
                            </div>
                            <div
                                className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full !self-start mt-[25px]">
                                <figure className="rounded-[0.4rem]"><img className="rounded-[0.4rem]"
                                        src="/img/photos/g4.jpg" srcSet="/img/photos/g4@2x.jpg 2x"
                                        alt="image" /></figure>
                            </div>
                        </div>
                    </div>
                    <div
                        className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] px-[15px] mt-[80px] max-w-full">
                        <h3
                            className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] !leading-[1.2] font-DMSerif font-normal tracking-normal mb-[1.75rem]">
                            A few reasons why our valued customers choose us.</h3>
                        <div className="accordion accordion-wrapper" id="accordionExample">
                            <div className="card plain accordion-item">
                                <div className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit" id="headingOne">
                                    <button
                                        className="before:!text-[#a07cc5] hover:!text-[#a07cc5] !p-[0_0_0_1.1rem] !text-[.85rem] accordion-button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne"> Professional Design </button>
                                </div>
                                <div id="collapseOne" className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div
                                        className="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                            fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                                            fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                            et. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card plain accordion-item">
                                <div className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit" id="headingTwo">
                                    <button
                                        className="before:!text-[#a07cc5] hover:!text-[#a07cc5] !p-[0_0_0_1.1rem] !text-[.85rem] collapsed"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo"> Top-Notch Support </button>
                                </div>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div
                                        className="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                            fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                                            fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                            et. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card plain accordion-item">
                                <div className="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit" id="headingThree">
                                    <button
                                        className="before:!text-[#a07cc5] hover:!text-[#a07cc5] !p-[0_0_0_1.1rem] !text-[.85rem] collapsed"
                                        data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree"> Header and Slider Options </button>
                                </div>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div
                                        className="card-body flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                                        <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                            fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                                            fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                            et. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
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