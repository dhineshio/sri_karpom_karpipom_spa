import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderOne from '@/components/sections/headers/headerOne'
import FooterTwo from '@/components/sections/footers/footerTwo'
import FooterOne from '@/components/sections/footers/footerOne'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'

const LayoutThree = () => {
  return (
    <>
      <HeaderOne />
      <Outlet/>
      <FooterOne/>

      {/* Floating Call Button - Left */}
      <a
        href="tel:+916385460349"
        aria-label="Call us"
        className="fixed bottom-6 left-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <span className="absolute inline-flex w-full h-full rounded-full bg-primary opacity-50 animate-ping"></span>
        <FaPhone className="text-xl relative z-10" />
      </a>

      {/* Floating WhatsApp Button - Right */}
      <a
        href="https://wa.me/916385460349"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-50 animate-ping"></span>
        <FaWhatsapp className="text-2xl relative z-10" />
      </a>
    </>
  )
}

export default LayoutThree