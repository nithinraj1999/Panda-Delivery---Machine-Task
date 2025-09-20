const AboutUsSection = () => {
    return (
        <section className="relative flex flex-col items-center w-full">
            {/* Two Row Layout */}
            <div className="h-[700px] w-full flex flex-col w-full">
                {/* Orange Row */}


                <div className="h-3/3 w-full bg-orange-500 flex flex-col items-start justify-end px-[150px] pb-8 space-y-4">
                    <button className="flex items-center justify-center gap-2 rounded-full bg-[#FCF3EA] text-black font-bold px-6 py-3 w-[161px] text-sm">
                        <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 4.14294V8.14294C15 8.27555 14.9474 8.40273 14.8536 8.4965C14.7598 8.59027 14.6326 8.64294 14.5 8.64294C14.3674 8.64294 14.2402 8.59027 14.1465 8.4965C14.0527 8.40273 14 8.27555 14 8.14294V5.34982L8.85378 10.4967C8.80735 10.5432 8.7522 10.5801 8.6915 10.6052C8.63081 10.6304 8.56574 10.6433 8.50003 10.6433C8.43433 10.6433 8.36926 10.6304 8.30856 10.6052C8.24786 10.5801 8.19272 10.5432 8.14628 10.4967L6.00003 8.34982L1.85378 12.4967C1.75996 12.5905 1.63272 12.6432 1.50003 12.6432C1.36735 12.6432 1.2401 12.5905 1.14628 12.4967C1.05246 12.4029 0.999756 12.2756 0.999756 12.1429C0.999756 12.0103 1.05246 11.883 1.14628 11.7892L5.64628 7.28919C5.69272 7.24271 5.74786 7.20583 5.80856 7.18066C5.86926 7.1555 5.93433 7.14255 6.00003 7.14255C6.06574 7.14255 6.13081 7.1555 6.1915 7.18066C6.2522 7.20583 6.30735 7.24271 6.35378 7.28919L8.50003 9.43607L13.2932 4.64294H10.5C10.3674 4.64294 10.2402 4.59027 10.1465 4.4965C10.0527 4.40273 10 4.27555 10 4.14294C10 4.01034 10.0527 3.88316 10.1465 3.78939C10.2402 3.69562 10.3674 3.64294 10.5 3.64294H14.5C14.6326 3.64294 14.7598 3.69562 14.8536 3.78939C14.9474 3.88316 15 4.01034 15 4.14294Z"
                                fill="#F89938"
                            />
                        </svg>
                        <span>About Us</span>
                    </button>

                    <h1 className="text-white text-[48px] font-bold leading-tight">
                        Tracking Our Growth <br />
                        Through Key Stats <br />
                        of Our Achievements
                    </h1>
                </div>
                {/* White Row */}
                <div className="h-2/3 w-full bg-white flex items-center justify-center px-[150px]">
                    <p className="text-gray-800 font-semibold">Row 2 (White)</p>
                </div>


                {/* Overlapping Image */}
                <div className="absolute left-[50%] top-[25%]">
                    <img
                        src="/images/containers.jpg"
                        alt="Shipping containers"
                        className="w-[588px] h-[392px] object-cover rounded-xl"
                    />
                </div>
            </div>

            {/* Stats grid below */}
            <div className="mt-28 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl w-full px-6">
                {[
                    { title: 'Innovative Logistics', value: '20+ Yrs', img: '/images/innovative.jpg' },
                    { title: 'Experts', value: '15+', img: '/images/experts.jpg' },
                    { title: 'Happy Clients', value: '50K+', img: '/images/clients.jpg' },
                    { title: 'Google Reviews', value: '2200+', img: '/images/reviews.jpg' },
                    { title: 'Top Rated', value: '⭐', img: '/images/star.jpg' },
                ].map((stat, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center bg-[#F7F8FA] rounded-2xl shadow-md p-4"
                    >
                        <img
                            src={stat.img}
                            alt={stat.title}
                            className="w-full h-32 object-cover rounded-xl mb-3"
                        />
                        <p className="text-[#003164] text-lg font-semibold">{stat.value}</p>
                        <span className="text-gray-600 text-sm mt-1 text-center">{stat.title}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutUsSection
