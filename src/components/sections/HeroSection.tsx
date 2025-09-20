
const HeroSection = () => {
    return (
        <section className="min-h-screen bg-[#FFF8F1] flex flex-col lg:flex-row relative pt-24 ">
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-24 lg:pt-0">
                <button className="mb-6 bg-[#F89938] w-full sm:w-[224px] h-[44px] rounded-full text-white font-medium text-[14px] flex items-center justify-center">
                    Moving Business Forward
                </button>

                <h1 className="text-[#003164] text-[28px] sm:text-[48px] lg:text-[64px] leading-snug sm:leading-tight lg:leading-[72px] font-semibold mb-6 max-w-full sm:max-w-xl">
                    Your Trusted <br />
                    Partner for Global <br />
                    Shipping Solutions
                </h1>

                <p className="text-[#8F9092] text-[14px] sm:text-[16px] leading-[160%] max-w-full sm:max-w-md mb-6">
                    Delivery Panda is a logistics start up based in Dubai, we make <br />
                    E-commerce logistics simplified and economical.
                </p>

                <div className="flex flex-col sm:flex-row w-full max-w-full sm:max-w-[625px] bg-white p-3 rounded shadow gap-3">
                    <input
                        type="text"
                        placeholder="Enter your parcel number"
                        className="flex-1 outline-none text-gray-700 px-3 py-2 rounded"
                    />
                    <button className="flex items-center justify-center bg-[#003164] text-white px-6 py-3 rounded gap-2">
                        Track my parcel
                        <span className="inline-block h-6 w-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M14.43 5.92999L20.5 12L14.43 18.07"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M3.5 12H20.33"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            <div className="flex-1 relative mt-12  ">
                <div className="absolute top-[-20%] right-[5%] w-[20%]  h-auto z-40 mr-[50px]">
                    <img
                        src="/images/exportPic.png"
                        alt="Hero Image"
                        className="w-full h-full object-contain"
                    />
                </div>

                <img
                    src="/images/mapbase.svg"
                    alt="Map Base"
                    className="absolute top-[20%] left-[5%] w-[90%] sm:w-[60%] h-auto z-0"
                />

                <img
                    src="/images/pattern-group.png"
                    alt="Pattern"
                    className="absolute bottom-0   z-30"
                />

                <img
                    src="/images/Man.png"
                    alt="Man"
                    className="absolute bottom-0 left-45 w-[60%]  h-auto z-30"
                />

                <img
                    src="/images/Boxes.svg"
                    alt="Boxes"
                    className="absolute top-[40%] right-[30%] w-[15%] h-auto z-20"
                />

                <img
                    src="/images/Frame.svg"
                    alt="Frame"
                    className="absolute top-[60%] right-[35%] w-[15%] h-auto z-20"
                />

                <div className="absolute top-[55%] left-[40%] w-[8%] sm:w-[5%] z-20">
                </div>
            </div>


        </section>
    );
};

export default HeroSection;
