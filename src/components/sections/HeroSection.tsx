
const HeroSection = () => {
    return (
        <div className="h-[700px] bg-[#FFF8F1] flex ">
            <div className="flex-1 relative pl-[80px]">
                <button
                    className="absolute gap-[8px] top-[198px] bg-[#F89938] w-[224px] h-[32px] px-[16px] py-[12px] rounded-[100px] flex items-center justify-center text-white font-medium text-[14px]"
                >
                    Moving Business Forward
                </button>

                <h1
                    className="absolute top-[250px] w-[620px]   h-[216px]  flex items-center justify-center text-[#003164]  text-[64px] leading-[72px] font-semibold"
                >
                    Your Trusted Partner for Global Shipping Solutions
                </h1>
                <div className="h-[52px] absolute top-[498px] w-[468px]">
                    <p
                        className=" text-[#8F9092]  text-[16px] leading-[160%]  font-normal"
                    >
                        Delivery Panda is a logistics start up based in Dubai, we make <br />
                        E commerce logistics simplified and economical.
                    </p>

                </div>


            </div>

            <div className="flex-1  relative flex items-center justify-center">
                <div className="absolute top-[46px] right-[80px] w-[113px] h-[187px]">
                    <img src="/images/exportPic.png" alt="Hero Image" className="w-full h-full object-contain" />
                </div>
            </div>

        </div>
    )
}

export default HeroSection
