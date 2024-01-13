'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navigation = () => {

  const [navBar, setNavBar] = useState(false);
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const bgTrigger = () => (window.scrollY > 150) ? setNavBg(true) : setNavBg(false);
    window.addEventListener('scroll', bgTrigger)
  }, []);


  return (
    <header className="sm:sticky top-0 z-50" >
      <nav className="dark:text-blue-gray-800 md:text-platinum-600">
        <div id="navigation"
          className={`flex flex-row justify-around items-center w-full md:mb-[-3.8rem] md:py-3 z-50 
            bg-gunmetal-500 md:transition md:duration-300 md:bg-clip-padding  
            ${navBg ? "md:bg-opacity-90 frostedBg" :
              "md:bg-gradient-to-b from-black to-transparent md:bg-opacity-0"}`}>
          <div className="">
            <Link href="/">
              <Image src={"/img/logo.png"}
                alt="SCH Sistemas"
                title="SCH Sistemas"
                width={150}
                height={25}
                className="h-auto shadow-md"
              /></Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center">

            <div id='menu' className="hidden md:flex text-gray-800">
              <ul className="flex flex-col sm:flex-row my-2 mr-8 gap-8 md:text-xs font-semibold text-center">

                <li className="menu-link">
                  <Link href={"/"} >Home</Link></li>
                <li className="menu-link">
                  <Link href={"/about"} >About Us</Link></li>
                <li className="menu-link">
                  <Link href={"/#services"} >Services</Link></li>
                <li className="menu-link">
                  <Link href={"/#projects"} >Projects</Link></li>
                <li className="menu-link">
                  <Link href={"/blog"} >Blog</Link></li>
              </ul>
              <a href="/contact">
                <button className="bg-blue-900 text-white sm:text-sm font-bold rounded-md 
                    px-6 sm:px-4 py-3 sm:py-2 hover:bg-light-blue-900 hover:text-platinum-700 transition duration-300">
                  Contact us!
                </button>
              </a>
            </div>

            {/* MOBILE MENU */}
            <div className="flex items-center md:hidden z-50">
              <div id="mobileMenu" className={`absolute left-0 top-0 w-screen text-white bg-gunmetal-300 bg-opacity-95 ${navBar ? 'block' : 'hidden'}`}>
                <ul className="block font-semibold text-center">
                  <Link onClick={() => setNavBar(!navBar)} href="/"><li className="block">
                    <div className="hover:bg-platinum-200 py-4">Home</div></li></Link>
                  <Link onClick={() => setNavBar(!navBar)} href="/about"><li className="block">
                    <div className="hover:bg-platinum-200 py-4">About Us</div></li></Link>
                  <Link onClick={() => setNavBar(!navBar)} href="#services"><li className="block">
                    <div className="hover:bg-platinum-200 py-4">Services</div></li></Link>
                  <Link onClick={() => setNavBar(!navBar)} href="#projects"><li className="block">
                    <div className="hover:bg-platinum-200 py-4">Projects</div></li></Link>
                  <Link onClick={() => setNavBar(!navBar)} href="/blog"><li className="block">
                    <div className="hover:bg-platinum-200 py-4">Blog</div></li></Link>
                  <Link onClick={() => setNavBar(!navBar)} href="/contact"><li className="block">
                    <div className="bg-gunmetal-600 hover:bg-platinum-200 py-4">Contact Us</div></li></Link>
                </ul>
              </div>
              <button className="mobile-menu-btn z-20 p-4" onClick={() => setNavBar(!navBar)}>
                {navBar ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  </svg>
                )
                }
              </button>

            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navigation