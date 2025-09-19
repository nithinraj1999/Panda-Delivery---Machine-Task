import Logo from "../myLogo/Logo"
import { useState } from "react"
const Navbar = () => {


  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className=" hidden xl:flex justify-between py-[40px] px-[80px] bg-white fixed shadow-[0_0_36px_0_rgba(0,0,0,0.06)] w-full h-[100px] max-width-[1440px] z-50">
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

      <nav className="xl:hidden flex justify-between items-center py-4 px-6 bg-white fixed w-full shadow z-50">
        <div className="text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-400 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <div className="px-6 py-6 border-b">
          <Logo />
        </div>

        <ul className="flex flex-col mt-6 space-y-6 px-6 text-lg text-left">
          <li><a href="#" className="text-[#F89938]">Home</a></li>
          <li><a href="#">Why Panda</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Track Shipment</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <div className="mt-10 px-6">
          <a
            href="#"
            className="bg-[#F89938] block w-full py-3 text-white font-semibold rounded-full text-center"
          >
            Client Portal
          </a>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  )
}

export default Navbar
