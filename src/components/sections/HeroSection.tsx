const HeroSection = () => {
    return (
        <section className="font-atypdisplay min-h-screen max-h-screen bg-[#FFF8F1] flex flex-col lg:flex-row relative pt-24">
            <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-24 lg:pt-0">
                <button className="mb-6 bg-[#F89938] w-full sm:w-[224px] h-[44px] rounded-full text-white font-medium text-[14px] flex items-center justify-center">
                    Moving Business Forward
                </button>

                <h1 className="text-[#003164] font-semibold text-[28px] sm:text-[48px] lg:text-[64px] leading-snug sm:leading-tight lg:leading-[72px]  mb-6 max-w-full sm:max-w-xl">
                    Your Trusted <br />
                    Partner for Global <br />
                    Shipping Solutions
                </h1>

                <p className="text-[#8F9092] font-normal text-[14px] sm:text-[16px] leading-[160%] max-w-full sm:max-w-md mb-6">
                    Delivery Panda is a logistics start up based in Dubai, we make <br />
                    E-commerce logistics simplified and economical.
                </p>

                <div className="flex flex-col sm:flex-row w-full max-w-full sm:max-w-[625px] bg-white p-3 rounded shadow gap-3">
                    <input
                        type="text"
                        placeholder="Enter your parcel number"
                        className="flex-1 outline-none text-gray-700 px-3 py-2 rounded"
                    />
                    <button className="flex font-normal items-center justify-center bg-[#003164] text-white px-6 py-3 rounded gap-2">
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

            <div className="flex-1 relative mt-12 lg:mt-0 hidden xl:block">
                <div className="absolute -top-[40px] right-5 lg:w-1/5 w-1/3 h-auto z-40">
                    <img
                        src="/images/exportPic.png"
                        alt="Hero Image"
                        className="w-full h-full object-contain"
                    />
                </div>

                <img
                    src="/images/mapbase.svg"
                    alt="Map Base"
                    className="absolute top-1/5 left-5 w-[90%] sm:w-3/5 h-auto z-10"
                />

                <div className="relative z-20 flex justify-center lg:justify-start">
                    <svg className="w-full max-w-lg h-auto" viewBox="0 0 701 589" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                </div>

                <img
                    src="/images/Man.png"
                    alt="Man"
                    className="absolute bottom-0 left-1/4 lg:left-[30%] w-3/5 lg:w-[50%] h-auto z-30"
                />

                <img
                    src="/images/Boxes.svg"
                    alt="Boxes"
                    className="absolute top-[31%] right-1/3 lg:right-[62%] w-1/6 lg:w-[15%] h-auto z-20"
                />

                <img
                    src="/images/Frame.svg"
                    alt="Frame"
                    className="absolute top-[67%] right-1/6 lg:right-[71%] w-1/3 lg:w-[30%] h-auto z-20"
                />

                <svg
                    width="998"
                    height="708"
                    viewBox="0 0 769 588"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 w-full h-auto z-0"
                >
                    <path d="M607.831 346.566C611.525 336.734 620.927 330.222 631.429 330.222H779.917C797.523 330.222 809.705 347.812 803.515 364.294L726.662 568.897C722.969 578.729 713.567 585.241 703.064 585.241H554.577C536.971 585.241 524.788 567.651 530.979 551.169L607.831 346.566Z" fill="#56CCF2" />
                    <line x1="623.532" y1="426.154" x2="565.47" y2="587.484" stroke="url(#paint2_linear_2_3619)" strokeWidth="0.84026" />
                    <path d="M424.749 207.308C428.379 197.359 437.84 190.739 448.43 190.739H597.107C614.611 190.739 626.787 208.142 620.788 224.586L494.495 570.773C490.865 580.722 481.404 587.342 470.814 587.342H322.137C304.633 587.342 292.457 569.939 298.456 553.495L424.749 207.308Z" fill="#E97F3E" />
                    <line x1="582.356" y1="191.811" x2="473.039" y2="477.418" stroke="url(#paint3_linear_2_3619)" strokeWidth="0.84026" />
                    <path d="M84.181 362.512C87.8794 352.69 97.2766 346.187 107.772 346.187H210.189C227.804 346.187 239.987 363.793 233.78 380.278L162.435 569.756C158.737 579.578 149.34 586.081 138.844 586.081H36.4271C18.8125 586.081 6.62914 568.475 12.8362 551.991L84.181 362.512Z" fill="#F2C94C" />
                    <line x1="110.047" y1="416.077" x2="45.3469" y2="587.148" stroke="url(#paint4_linear_2_3619)" strokeWidth="0.84026" />
                    <defs>
                        <linearGradient id="paint0_linear_2_3619" x1="378.957" y1="112.595" x2="378.957" y2="339.465" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3E82E9" stopOpacity="0.1" />
                            <stop offset="1" stopColor="#EFF2F8" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_2_3619" x1="233.592" y1="196.621" x2="233.592" y2="-30.2494" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3E82E9" stopOpacity="0.1" />
                            <stop offset="1" stopColor="#EFF2F8" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_2_3619" x1="622.808" y1="426.039" x2="565.263" y2="587.908" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.7" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_2_3619" x1="581.596" y1="191.781" x2="474.06" y2="478.694" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.7" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_2_3619" x1="109.322" y1="415.959" x2="45.2092" y2="587.631" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.7" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;