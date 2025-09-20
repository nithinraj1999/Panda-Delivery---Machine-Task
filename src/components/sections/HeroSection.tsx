// HeroSection.jsx
const HeroSection = () => {
    return (
        <div className="h-[800px] bg-[#FFF8F1] flex relative">
            <div className="flex-1 relative pl-[80px] pt-[100px]">
                <button
                    className="absolute gap-[8px] top-[198px] bg-[#F89938] w-[224px] h-[32px] px-[16px] py-[12px] rounded-[100px] flex items-center justify-center text-white font-medium text-[14px]"
                >
                    Moving Business Forward
                </button>

                <h1
                    className=" absolute top-[250px] w-[620px] h-[216px]  text-[#003164] text-[64px] leading-[72px] font-semibold"
                >
                    Your Trusted <br /> Partner for Global<br /> Shipping Solutions
                </h1>

                <div className="h-[52px] absolute top-[498px] w-[468px] ">
                    <p className="text-[#8F9092] text-[16px] leading-[160%] font-normal">
                        Delivery Panda is a logistics start up based in Dubai, we make <br />
                        E commerce logistics simplified and economical.
                    </p>
                </div>

                <div className="absolute top-[639px] left-[80px] flex justify-between 
            w-[625px] h-[74px] 
            p-[12px] pl-[32px] 
            bg-white   ">
                    <input
                        type="text"
                        placeholder="Enter your parcel number"
                        className="flex-1 outline-none  font-normal"
                    />
                    <button className="flex items-center justify-center bg-[#003164]
        w-[201px] h-[50px]
        px-[24px] py-[10px]
        gap-[10px]
        text-white rounded">
                        Track my parcel
                        <span className="inline-block h-[24px] w-[24px]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.43 5.92999L20.5 12L14.43 18.07" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.5 12H20.33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </span>
                    </button>
                </div>

            </div>

            <div className=" relative   ">
                <div className="absolute top-[46px] right-[80px] w-[113px] h-[187px] z-40">
                    <img
                        src="/images/exportPic.png"
                        alt="Hero Image"
                        className="w-full h-full object-contain "
                    />
                </div>
                <div className="  w-[1,108px]    ">
                    <div className="absolute  top-[177px] h-full w-full mr-[598px] z-0">
                        <img
                            src="/images/mapbase.svg"
                            alt="Hero Image"
                            className="w-full h-[360.2411193847656]   "
                        />

                    </div>
                </div>

                <div className="  w-[816.31px]   ">
                    <div className="absolute top-[222.66px] w-full mr-[739px] z-30">
                        <svg
                            viewBox="0 0 701 589"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-[587.34px]"
                            fill="none"
                        >

                            <path d="M607.831 347.224C611.525 337.392 620.927 330.88 631.429 330.88H779.917C797.523 330.88 809.705 348.47 803.515 364.952L726.662 569.555C722.969 579.387 713.567 585.899 703.064 585.899H554.577C536.971 585.899 524.788 568.309 530.979 551.828L607.831 347.224Z" fill="#56CCF2" />
                            <line x1="623.532" y1="426.812" x2="565.47" y2="588.142" stroke="url(#paint2_linear_1_3592)" strokeWidth="0.84026" />
                            <path d="M424.749 207.966C428.379 198.017 437.84 191.397 448.43 191.397H597.107C614.611 191.397 626.787 208.8 620.788 225.244L494.495 571.431C490.865 581.38 481.404 588 470.814 588H322.137C304.633 588 292.457 570.597 298.456 554.153L424.749 207.966Z" fill="#E97F3E" />
                            <line x1="582.356" y1="192.469" x2="473.039" y2="478.076" stroke="url(#paint3_linear_1_3592)" strokeWidth="0.84026" />
                            <path d="M84.181 363.17C87.8794 353.348 97.2766 346.845 107.772 346.845H210.189C227.804 346.845 239.987 364.451 233.78 380.936L162.435 570.414C158.737 580.237 149.34 586.74 138.844 586.74H36.4271C18.8125 586.74 6.62914 569.134 12.8362 552.649L84.181 363.17Z" fill="#F2C94C" />
                            <line x1="110.047" y1="416.736" x2="45.3469" y2="587.807" stroke="url(#paint4_linear_1_3592)" strokeWidth="0.84026" />
                            <defs>
                                <linearGradient id="paint0_linear_1_3592" x1="378.957" y1="113.253" x2="378.957" y2="340.123" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3E82E9" stopOpacity="0.1" />
                                    <stop offset="1" stopColor="#EFF2F8" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1_3592" x1="233.592" y1="197.279" x2="233.592" y2="-29.5911" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3E82E9" stopOpacity="0.1" />
                                    <stop offset="1" stopColor="#EFF2F8" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_1_3592" x1="622.808" y1="426.697" x2="565.263" y2="588.567" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" stopOpacity="0.7" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_1_3592" x1="581.596" y1="192.44" x2="474.06" y2="479.352" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" stopOpacity="0.7" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="paint4_linear_1_3592" x1="109.322" y1="416.617" x2="45.2092" y2="588.289" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" stopOpacity="0.7" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>
                </div>

                <div className="w-full h-full relative z-30">
                    {/* Man */}
                    <div className="absolute top-[263px] right-[100px] w-[488px] h-[566px]">
                        <img
                            src="/images/Man.png"
                            alt="man"
                            className="w-[488px] h-[566px] object-contain z-10"
                        />
                    </div>

                    {/* Boxes */}
                    <div className="absolute top-[299px] right-[492px] w-[156px] h-[131px]">
                        <img
                            src="/images/Boxes.svg"
                            alt="boxes"
                            className="w-[156.66px] h-[130.57px] object-contain z-20"
                        />
                    </div>

                    <div className="absolute top-[602px] w-[190px] h-[137px] right-[558px] ">
                        <img
                            src="/images/Frame.svg"
                            alt="boxes"
                            className="  z-20"
                        />
                    </div>
<div className="absolute top-[554px] left-[617px] w-[51px] h-[108px] z-20 " >
    <svg width="123" height="180" viewBox="0 0 123 180" fill="none" xmlns="http://www.w3.org/2000/svg" >
<g filter="url(#filter0_d_1_5121)">
<rect x="36" y="93" width="51" height="51" rx="25.5" fill="white"/>
<rect x="36.5" y="93.5" width="50" height="50" rx="25" stroke="#38D01F"/>
<path d="M46 134L48.2617 125.787C46.8634 123.376 46.1299 120.646 46.1375 117.856C46.1375 109.11 53.2894 102 62.0688 102C66.3324 102 70.3362 103.65 73.339 106.646C76.3495 109.643 78.0076 113.627 78 117.863C78 126.608 70.8481 133.719 62.0611 133.719H62.0535C59.3868 133.719 56.766 133.049 54.4355 131.787L46 134ZM54.8405 128.92L55.3219 129.209C57.3543 130.411 59.6848 131.042 62.0611 131.049H62.0688C69.3658 131.049 75.3104 125.141 75.3104 117.871C75.3104 114.35 73.935 111.042 71.4365 108.548C68.9379 106.053 65.6065 104.684 62.0688 104.684C54.7717 104.677 48.8271 110.586 48.8271 117.856C48.8271 120.342 49.5224 122.768 50.852 124.867L51.1652 125.369L49.8281 130.228L54.8405 128.92Z" fill="white"/>
<path d="M46.5577 133.445L48.743 125.513C47.3906 123.194 46.68 120.555 46.68 117.863C46.6876 109.422 53.5873 102.555 62.0687 102.555C66.1871 102.555 70.0458 104.152 72.9493 107.042C75.8528 109.932 77.4498 113.78 77.4498 117.871C77.4498 126.312 70.5424 133.179 62.0687 133.179H62.0611C59.4861 133.179 56.957 132.532 54.7105 131.316L46.5577 133.445Z" fill="#25BF0C"/>
<path d="M46 134L48.2617 125.787C46.8634 123.376 46.1299 120.646 46.1375 117.856C46.1375 109.11 53.2894 102 62.0688 102C66.3324 102 70.3362 103.65 73.339 106.646C76.3495 109.643 78.0076 113.627 78 117.863C78 126.608 70.8481 133.719 62.0611 133.719H62.0535C59.3868 133.719 56.766 133.049 54.4355 131.787L46 134ZM54.8405 128.92L55.3219 129.209C57.3543 130.411 59.6848 131.042 62.0611 131.049H62.0688C69.3658 131.049 75.3104 125.141 75.3104 117.871C75.3104 114.35 73.935 111.042 71.4365 108.548C68.9379 106.053 65.6065 104.684 62.0688 104.684C54.7717 104.677 48.8271 110.586 48.8271 117.856C48.8271 120.342 49.5224 122.768 50.852 124.867L51.1652 125.369L49.8281 130.228L54.8405 128.92Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M58.0877 111.224C57.7897 110.563 57.4764 110.548 57.1937 110.54C56.9645 110.532 56.6971 110.532 56.4296 110.532C56.1622 110.532 55.7343 110.631 55.3676 111.027C55.0008 111.422 53.9769 112.38 53.9769 114.335C53.9769 116.281 55.4058 118.167 55.6044 118.433C55.8031 118.7 58.3628 122.829 62.4048 124.418C65.7668 125.741 66.4545 125.475 67.1804 125.407C67.9062 125.338 69.5337 124.449 69.8699 123.521C70.1985 122.593 70.1985 121.802 70.0992 121.635C69.9998 121.468 69.7324 121.369 69.3351 121.171C68.9378 120.973 66.9817 120.015 66.6149 119.878C66.2482 119.749 65.9807 119.681 65.721 120.076C65.4535 120.472 64.6894 121.361 64.4602 121.627C64.231 121.894 63.9941 121.924 63.5968 121.726C63.1995 121.529 61.9158 121.11 60.3953 119.757C59.2109 118.707 58.4086 117.407 58.1794 117.011C57.9502 116.616 58.1565 116.403 58.3551 116.205C58.5309 116.03 58.7525 115.741 58.9511 115.513C59.1498 115.285 59.2186 115.118 59.3485 114.852C59.4784 114.586 59.4172 114.357 59.3179 114.16C59.2186 113.97 58.4392 112.008 58.0877 111.224Z" fill="white"/>
</g>
<g filter="url(#filter1_d_1_5121)">
<rect x="36" y="36" width="51" height="51" rx="25.5" fill="white"/>
<rect x="36.5" y="36.5" width="50" height="50" rx="25" stroke="#38D01F"/>
<path d="M53.7776 60.9424C52.8296 59.2893 52.3718 57.9395 52.0958 56.5712C51.6876 54.5476 52.6218 52.5708 54.1694 51.3095C54.8234 50.7764 55.5732 50.9585 55.96 51.6524L56.8332 53.2189C57.5253 54.4606 57.8713 55.0814 57.8027 55.7396C57.7341 56.3978 57.2674 56.9339 56.334 58.006L53.7776 60.9424ZM53.7776 60.9424C55.6965 64.2883 58.7078 67.3013 62.0576 69.2224M62.0576 69.2224C63.7107 70.1704 65.0605 70.6282 66.4288 70.9042C68.4524 71.3124 70.4292 70.3782 71.6905 68.8306C72.2236 68.1766 72.0415 67.4268 71.3476 67.04L69.7811 66.1668C68.5394 65.4747 67.9186 65.1287 67.2604 65.1973C66.6022 65.2659 66.0661 65.7326 64.994 66.666L62.0576 69.2224Z" stroke="#25BF0C" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M64 52V54.8M68.9502 54.0508L66.9703 56.0307M71 59H68.2" stroke="#25BF0C" stroke-width="1.5" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d_1_5121" x="0" y="57" width="123" height="123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="18"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5121"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5121" result="shape"/>
</filter>
<filter id="filter1_d_1_5121" x="0" y="0" width="123" height="123" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="18"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5121"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5121" result="shape"/>
</filter>
</defs>
</svg>

</div>

                </div>

            </div>
        </div>
    )
}

export default HeroSection
