import React from "react";

const HeroSection = () => {
    return (
        <section className="min-h-screen bg-[#FFF8F1] flex flex-col lg:flex-row relative pt-24">
            {/* Left Content */}
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

            {/* Right Images & SVG */}
            <div className="flex-1 relative mt-12 lg:mt-0 hidden xl:block ">
                {/* Hero Top Image */}
                <div className="absolute -top-[40px] right-5 lg:w-1/5 w-1/3 h-auto z-40">
                    <img
                        src="/images/exportPic.png"
                        alt="Hero Image"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Map Base */}
                <img
                    src="/images/mapbase.svg"
                    alt="Map Base"
                    className="absolute top-1/5 left-5 w-[90%] sm:w-3/5 h-auto z-10"
                />

                {/* Main SVG */}
                <div className="relative z-20 flex justify-center lg:justify-start">
                    <svg className="w-full max-w-lg h-auto" viewBox="0 0 701 589" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Paste your SVG paths and gradients here */}
                    </svg>
                </div>

                {/* Man */}
                <img
                    src="/images/Man.png"
                    alt="Man"
                    className="absolute bottom-0 left-1/4 lg:left-[30%] w-3/5 lg:w-[50%] h-auto z-30"
                />

                {/* Boxes */}
                <img
                    src="/images/Boxes.svg"
                    alt="Boxes"
                    className="absolute top-[31%] right-1/3 lg:right-[62%] w-1/6 lg:w-[15%] h-auto z-20"
                />

                {/* Frame */}
                <img
                    src="/images/Frame.svg"
                    alt="Frame"
                    className="absolute top-[67%] right-1/6 lg:right-[71%] w-1/3 lg:w-[30%] h-auto z-20"
                />
            </div>
        </section>
    );
};

export default HeroSection;
