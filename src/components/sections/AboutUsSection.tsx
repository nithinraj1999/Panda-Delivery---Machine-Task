import ImageWithFallback from "../Loading/ImageFallBack";

const AboutUsSection = () => {
    return (
        <section className="relative flex flex-col items-center w-full">
            <div className="w-full flex flex-col">
                <div className="w-full font-atypdisplay bg-orange-500 flex flex-col items-start justify-end
                        px-6 sm:px-10 md:px-20 lg:px-[150px]
                        pb-8 pt-24 sm:pt-32 lg:pt-[120px] space-y-4">
                    <button className="flex items-center justify-center gap-2 rounded-full bg-[#FCF3EA] text-[#F89938] px-4 sm:px-6 py-2 w-[140px] sm:w-[161px] text-sm">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 4.14294V8.14294C15 8.27555 ..." fill="#F89938" />
                        </svg>
                        <span>About Us</span>
                    </button>

                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold leading-snug sm:leading-tight lg:leading-tight">
                        Tracking Our Growth <br />
                        Through Key Stats <br />
                        of Our Achievements
                    </h1>
                </div>

                <div className="font-manrope w-full bg-white flex flex-col items-start justify-start
                        px-6 sm:px-10 md:px-20 lg:px-[150px] pt-6">
                    <p className="text-[#8F9092] font-normal text-sm sm:text-base md:text-lg leading-relaxed">
                        We offer warehousing and fulfilment service for SMEs, integrated <br />
                        e-fulfilment with complete visibility of your stock movements<br />
                        digitally. Cross-border cash on delivery service and cheapest<br />
                        import rates from China with least delivery lead time.
                    </p>
                </div>

                <div className="absolute right-[90px] top-36 hidden 2xl:block">
                    <ImageWithFallback
                        src="/images/containers.jpg"
                        alt="Shipping containers"
                        className="w-[400px] sm:w-[500px] lg:w-[588px] h-auto rounded-xl object-cover"
                    />
                </div>



                <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-8 md:px-12 lg:px-[150px] w-full mt-24">

                    <div className="bg-white shadow w-full h-64 sm:h-72 rounded-2xl relative overflow-hidden">
                        <ImageWithFallback
                            src="/images/flight.jpg"
                            alt="Column 1 Image"
                            className="absolute top-0 left-0 w-full h-full object-cover object-center scale-110"
                        />
                    </div>

                    <div className="bg-[#FFF8F1] shadow w-full h-64 sm:h-72 rounded-2xl relative overflow-hidden">
                        <div className="absolute bottom-4 left-6">
                            <p className="text-3xl sm:text-4xl md:text-[45px] font-semibold text-gray-800">20+ Yrs</p>
                        </div>
                        <div className="absolute top-6 left-6 z-10">
                            <p className="text-lg sm:text-xl md:text-[22px] font-normal leading-snug text-gray-800">
                                Innovative <br /> Logistics
                            </p>
                        </div>
                        <div className="absolute top-0 right-0">
                            <svg width="84" height="102" viewBox="0 0 84 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.9883 102C18.7836 102 0 83.3956 0 60.4641L84 60.4641C83.9766 83.3956 65.193 102 41.9883 102Z" fill="#FFE7CF" />
                                <path d="M41.9883 60.4643C23.0175 60.4643 7.64911 45.2615 7.64911 26.4951L76.3509 26.4951C76.3275 45.2383 60.959 60.4643 41.9883 60.4643Z" fill="#FFE7CF" />
                                <path d="M41.9883 26.4719C27.2047 26.4719 15.2281 14.6243 15.2281 0L68.7719 0C68.7486 14.6243 56.7719 26.4719 41.9883 26.4719Z" fill="#FFE7CF" />
                            </svg>
                        </div>
                    </div>

                    <div className="bg-white shadow w-full h-64 sm:h-72 rounded-2xl relative overflow-hidden">
                        <ImageWithFallback
                            src="/images/delivery.jpg"
                            alt="Column 3 Image"
                            className="absolute top-0 left-0 w-full h-full object-cover object-center scale-110"
                        />
                    </div>

                    <div className="bg-[#F1F6FF] shadow w-full h-64 sm:h-72 rounded-2xl relative overflow-hidden">
                        <div className="absolute bottom-4 left-6">
                            <p className="text-3xl sm:text-4xl md:text-[45px] font-semibold text-gray-800">15+</p>
                        </div>
                        <div className="absolute top-6 left-6 z-10">
                            <p className="text-lg sm:text-xl md:text-[22px] font-normal text-gray-800">Experts</p>
                        </div>
                        <div className="absolute top-0 right-0">
                            <svg width="84" height="102" viewBox="0 0 84 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.9883 102C18.7836 102 0 83.3956 0 60.4641L84 60.4641C83.9766 83.3956 65.193 102 41.9883 102Z" fill="#D7E5FF" />
                                <path d="M41.9883 60.4643C23.0175 60.4643 7.64911 45.2615 7.64911 26.4951L76.3509 26.4951C76.3275 45.2383 60.959 60.4643 41.9883 60.4643Z" fill="#D7E5FF" />
                                <path d="M41.9883 26.4719C27.2047 26.4719 15.2281 14.6243 15.2281 0L68.7719 0C68.7486 14.6243 56.7719 26.4719 41.9883 26.4719Z" fill="#D7E5FF" />
                            </svg>
                        </div>
                    </div>

                    <div className="bg-[#F1F6FF] shadow w-full h-64 sm:h-72 rounded-2xl relative overflow-hidden">
                        <div className="absolute bottom-4 left-6">
                            <p className="text-3xl sm:text-4xl md:text-[45px] font-semibold text-gray-800">50K+</p>
                        </div>
                        <div className="absolute top-6 left-6 z-10">
                            <p className="text-lg sm:text-xl md:text-[22px] font-normal text-gray-800">
                                Happy <br /> Clients
                            </p>
                        </div>
                        <div className="absolute top-0 right-0">
                            <svg width="84" height="102" viewBox="0 0 84 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.9883 102C18.7836 102 0 83.3956 0 60.4641L84 60.4641C83.9766 83.3956 65.193 102 41.9883 102Z" fill="#D7E5FF" />
                                <path d="M41.9883 60.4643C23.0175 60.4643 7.64911 45.2615 7.64911 26.4951L76.3509 26.4951C76.3275 45.2383 60.959 60.4643 41.9883 60.4643Z" fill="#D7E5FF" />
                                <path d="M41.9883 26.4719C27.2047 26.4719 15.2281 14.6243 15.2281 0L68.7719 0C68.7486 14.6243 56.7719 26.4719 41.9883 26.4719Z" fill="#D7E5FF" />
                            </svg>
                        </div>
                    </div>

                    <div className="bg-white shadow w-full h-64 sm:h-72 rounded-2xl relative overflow-hidden">
                        <ImageWithFallback
                            src="/images/women.jpg"
                            alt="Column 6 Image"
                            className="absolute top-0 left-0 w-full h-full object-cover object-center"
                        />
                    </div>

                    <div className="bg-[#FFF8F1] shadow w-full h-64 sm:h-72 rounded-2xl relative overflow-hidden">
                        <div className="absolute bottom-4 left-6">
                            <p className="text-3xl sm:text-4xl md:text-[45px] font-semibold text-gray-800">2200+</p>
                        </div>
                        <div className="absolute top-6 left-6 z-10">
                            <p className="text-lg sm:text-xl md:text-[22px] font-normal text-gray-800">
                                Google <br /> Reviews
                            </p>
                        </div>
                        <div className="absolute top-0 right-0">
                            <svg width="84" height="102" viewBox="0 0 84 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.9883 102C18.7836 102 0 83.3956 0 60.4641L84 60.4641C83.9766 83.3956 65.193 102 41.9883 102Z" fill="#FFE7CF" />
                                <path d="M41.9883 60.4643C23.0175 60.4643 7.64911 45.2615 7.64911 26.4951L76.3509 26.4951C76.3275 45.2383 60.959 60.4643 41.9883 60.4643Z" fill="#FFE7CF" />
                                <path d="M41.9883 26.4719C27.2047 26.4719 15.2281 14.6243 15.2281 0L68.7719 0C68.7486 14.6243 56.7719 26.4719 41.9883 26.4719Z" fill="#FFE7CF" />
                            </svg>
                        </div>
                    </div>

                    <div className="bg-white shadow w-full h-64 sm:h-72 rounded-2xl relative overflow-hidden">
                        <ImageWithFallback
                            src="/images/star.jpg"
                            alt="Column 8 Image"
                            className="absolute top-0 left-0 w-full h-full object-cover object-center"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
