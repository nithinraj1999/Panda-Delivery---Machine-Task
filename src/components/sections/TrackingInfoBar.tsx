const TrackingInfoBar = () => {
  return (
    <section
      className="flex font-atypdisplay  flex-col lg:flex-row bg-[#003164] px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] py-[32px] text-white h-auto lg:h-[196px] items-center justify-center gap-y-6 lg:gap-x-6"
    >
      <div className="flex-1 flex items-center justify-center lg:justify-start px-6 lg:px-12 py-6 lg:py-0 text-center lg:text-left">
        <h2 className="text-2xl font-medium">
          Easy <br /> Tracking
        </h2>
      </div>

      <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start gap-4 pl-6 lg:pl-12 py-6 lg:py-0 ">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44 24C44 35.04 35.04 44 24 44C12.96 44 4 35.04 4 24C4 12.96 12.96 4 24 4C35.04 4 44 12.96 44 24Z" fill="white" fillOpacity="0.1" stroke="#F89938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M31.42 30.36L25.22 26.66C24.14 26.02 23.26 24.48 23.26 23.22V15.02" stroke="#F89938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div>
          <h4 className="font-medium text-[20px]">Anti Lagging System</h4>
          <p className="text-[15px] font-noraml">Let's take this conversation teams were able.</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start gap-3 px-6 lg:px-12 py-6 lg:py-0 border-t lg:border-t-0 lg:border-l border-white/30">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.98 4.46L11 8.22C8.7 9.08 6.82 11.8 6.82 14.24V29.1C6.82 31.46 8.38 34.56 10.28 35.98L18.88 42.4C21.7 44.52 26.34 44.52 29.16 42.4L37.76 35.98C39.66 34.56 41.22 31.46 41.22 29.1V14.24C41.22 11.78 39.34 9.06 37.04 8.2L27.06 4.46C25.36 3.84 22.64 3.84 20.98 4.46Z" fill="white" fillOpacity="0.1" stroke="#F89938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div>
          <h4 className="font-medium text-[20px]">Safe and Secure</h4>
          <p className="text-[15px] font-noraml">Let's take this conversation teams were able.</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start gap-3 px-6 lg:px-12 py-6 lg:py-0 border-t lg:border-t-0 lg:border-l border-white/30">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="white" fillOpacity="0.1" stroke="#F89938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 6H18C14.1 17.68 14.1 30.32 18 42H16" stroke="#F89938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 6C33.9 17.68 33.9 30.32 30 42" stroke="#F89938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 32V30C17.68 33.9 30.32 33.9 42 30V32" stroke="#F89938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 18C17.68 14.1 30.32 14.1 42 18" stroke="#F89938" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div>
          <h4 className="font-medium text-[20px]">World Wide Support</h4>
          <p className="text-[15px] font-noraml">Let's take this conversation teams were able.</p>
        </div>
      </div>
    </section>
  );
};

export default TrackingInfoBar;
