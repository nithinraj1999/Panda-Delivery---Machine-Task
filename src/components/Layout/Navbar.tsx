import Logo from "../MyLogo/Logo"

const Navbar = () => {
  return (
    <nav className="flex justify-between py-[40px] px-[80px] bg-white fixed shadow-[0_0_36px_0_rgba(0,0,0,0.06)] w-full h-[100px] max-width-[1440px]">
      <div className="flex items-center">
        <Logo />
      </div>
      <ul className="flex items-center space-x-[40px] text-base h-[26px] gap-[8px] leading-[160%]">
        <li><a href="#" className="text-[#F89938]  ">Home</a></li>
        <li><a href="#" >Why Panda</a></li>
        <li className="relative group">
          <button className=" flex items-center">
            Services
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="absolute left-0 mt-2 hidden w-40 bg-white shadow-md group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 1</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Service 2</a>
          </div>
        </li>
        <li><a href="#" >Track Shipment</a></li>
        <li><a href="#" >Gallery</a></li>
        <li><a href="#" >Blog</a></li>
        <li><a href="#" >Contact Us</a></li>
      </ul>

      <div className=" h-[44px]">
        <a
          href="#"
          className="bg-[#F89938]  w-[132px] gap-[12px] text-white font-semibold py-2 px-6 rounded-[9999px]"
        >
          Client Portal
        </a>
      </div>

    </nav>
  )
}

export default Navbar
