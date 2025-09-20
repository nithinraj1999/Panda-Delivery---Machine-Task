import React from "react";

const CtaSection: React.FC = () => {
    return (
        <section className="bg-[#002855] text-white h-[445px] flex pl-[80px]">
            <div className="flex-1 flex items-center justify-center">
                <div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                        Let’s Simplify Your Logistics Journey with Us!
                    </h2>
                    <p className="text-lg mb-6">
                        Experience smooth logistics management with our innovative services
                    </p>
                    <button className="bg-white text-black px-6 py-3 rounded-full font-medium shadow hover:bg-gray-200 transition">
                        Start 14-day Free Trial
                    </button>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center bg-black">
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
