import React from "react";

const CtaSection: React.FC = () => {
    return (
        <section className="bg-[#002855] text-white h-[411px] flex pl-[80px]">
            <div className="flex-1 flex flex-col justify-center pr-[40px]">
                <div className="flex flex-col items-start gap-4 h-[153px]">
                    <div>
                        <h2 className="text-[36px] lg:text-4xl font-semibold mb-4 leading-[140%]">
                            Let’s Simplify Your<br /> Logistics Journey with Us!
                        </h2>
                        <p className="text-lg mb-6">
                            Experience smooth logistics management with our innovative services
                        </p>
                    </div>
                    <button className="bg-white text-black w-max max-w-[209px] h-[50px] rounded-full font-medium shadow hover:bg-gray-200 transition px-8 py-3 text-[14px]">
                        Start 14-day Free Trial
                    </button>
                </div>
            </div>

            <div className="flex-1 hidden lg:flex items-center justify-center bg-black">
                <img
                    src="/images/container-cta.jpg"
                    alt="Right Content"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
};

export default CtaSection;
