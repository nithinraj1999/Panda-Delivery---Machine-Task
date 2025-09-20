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

            <div className="flex-1 relative flex items-center justify-center">
                <div className="absolute top-[46px] right-[80px] w-[113px] h-[187px]">
                    <img
                        src="/images/exportPic.png"
                        alt="Hero Image"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
