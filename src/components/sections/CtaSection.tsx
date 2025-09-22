import React from "react";
import ImageWithFallback from "../Loading/ImageFallBack";

const CtaSection: React.FC = () => {
    return (
        <section className="bg-[#002855] font-manrope text-white min-h-[411px] flex flex-col lg:flex-row px-6 sm:px-10 lg:pl-[80px] py-10">
            <div className="flex-1 flex flex-col justify-center pr-0 lg:pr-[40px]">
                <div className="flex flex-col items-start gap-4">
                    <div>
                        <h2 className="text-[28px] sm:text-[32px] lg:text-4xl font-semibold mb-4 leading-[140%]">
                            Let’s Simplify Your<br /> Logistics Journey with Us!
                        </h2>
                        <p className="text-[16px] sm:text-[18px] mb-6 font-normal">
                            Experience smooth logistics management with our innovative services
                        </p>
                    </div>
                    <button className="bg-[#FAFAFA] text-[#0C0D13] w-max max-w-[209px] h-[50px] rounded-full font-semibold px-8 py-3 text-sm">
                        Start 14-day Free Trial
                    </button>
                </div>
            </div>

            <div className="flex-1 hidden lg:flex items-center justify-center bg-black">
                <ImageWithFallback
                    src="/images/container-cta.jpg"
                    alt="Right Content"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default CtaSection;
