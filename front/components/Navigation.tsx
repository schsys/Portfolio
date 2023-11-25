'use client'

import Image from "next/image";
import closeIcon from "@/public/close.svg";
import menuIcon from "@/public/menu.svg";
import { useState } from "react";


const Navigation = () => {
  return (
    <nav className="py-4 text-white md:text-platinum-200">
      <div className="flex flex-row justify-between items-center py-2 mx-12 md:mx-8">
        <div>
          <Image src="/logo.png"
            alt="SCH Sistemas"
            title="SCH Sistemas"
            width={150}
            height={25}
            className="h-auto"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center">

          <div id='menu' className="hidden md:flex">
            <ul className="flex flex-col sm:flex-row my-2 sm:mr-4 gap-8 md:text-xs font-semibold text-center">
              <li className="hover:text-platinum-400 cursor-pointer">Home</li>
              <li className="hover:text-platinum-400 cursor-pointer">About Us</li>
              <li className="hover:text-platinum-400 cursor-pointer">Services</li>
              <li className="hover:text-platinum-400 cursor-pointer">Projects</li>
              <li className="hover:text-platinum-400 cursor-pointer">Blog</li>
            </ul>
            <button className="bg-platinum-200 text-white sm:text-sm font-bold rounded-md px-6 py-3 sm:px-4 sm:py-1 hover:bg-gunmetal-600 hover:text-platinum-400">
              Contact us!
            </button>
          </div>
          <div className="block md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation