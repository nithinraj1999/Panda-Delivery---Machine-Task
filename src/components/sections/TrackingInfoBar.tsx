const TrackingInfoBar = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#003164] px-[80px] py-[32px] gap-6 text-white">
      <div className="flex-1 flex items-center justify-center lg:justify-start">
        <h2 className="text-2xl font-bold">Easy <br /> Tracking</h2>
      </div>
      <div className="w-px bg-[#135497] mx-4 "></div>
      <div className="flex-1 flex items-start gap-3">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44 24C44 35.04 35.04 44 24 44C12.96 44 4 35.04 4 24C4 12.96 12.96 4 24 4C35.04 4 44 12.96 44 24Z" fill="white" fill-opacity="0.1" stroke="#F89938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M31.42 30.36L25.22 26.66C24.14 26.02 23.26 24.48 23.26 23.22V15.02" stroke="#F89938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <div>
          <h4 className="font-semibold">Anti Lagging System</h4>
          <p className="text-sm">Let's take this conversation teams were able.</p>
        </div>
      </div>
      <div className="w-px bg-[#135497] mx-4 "></div>

      <div className="flex-1 flex items-start gap-3">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.98 4.46L11 8.22C8.70001 9.08 6.82001 11.8 6.82001 14.24V29.1C6.82001 31.46 8.38001 34.56 10.28 35.98L18.88 42.4C21.7 44.52 26.34 44.52 29.16 42.4L37.76 35.98C39.66 34.56 41.22 31.46 41.22 29.1V14.24C41.22 11.78 39.34 9.06 37.04 8.2L27.06 4.46C25.36 3.84 22.64 3.84 20.98 4.46Z" fill="white" fill-opacity="0.1" stroke="#F89938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div>
          <h4 className="font-semibold">Safe and Secure</h4>
          <p className="text-sm">Let's take this conversation teams were able.</p>
        </div>
      </div>

      <div className="w-px bg-[#135497] mx-4 "></div>

      <div className="flex-1 flex items-start gap-3">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="white" fill-opacity="0.1" stroke="#F89938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 6H18C14.1 17.68 14.1 30.32 18 42H16" fill="white" fill-opacity="0.1" />
          <path d="M16 6H18C14.1 17.68 14.1 30.32 18 42H16" stroke="#F89938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M30 6C33.9 17.68 33.9 30.32 30 42V6Z" fill="white" fill-opacity="0.1" />
          <path d="M30 6C33.9 17.68 33.9 30.32 30 42" stroke="#F89938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M6 32V30C17.68 33.9 30.32 33.9 42 30V32" fill="white" fill-opacity="0.1" />
          <path d="M6 32V30C17.68 33.9 30.32 33.9 42 30V32" stroke="#F89938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M6 18C17.68 14.1 30.32 14.1 42 18H6Z" fill="white" fill-opacity="0.1" />
          <path d="M6 18C17.68 14.1 30.32 14.1 42 18" stroke="#F89938" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div>
          <h4 className="font-semibold">World Wide Support</h4>
          <p className="text-sm">Let's take this conversation teams were able.</p>
        </div>
      </div>
    </div>
  );
};

export default TrackingInfoBar;
