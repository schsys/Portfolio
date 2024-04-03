"use client";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import {
  TbBrandFacebookFilled,
  TbBrandGithubFilled,
  TbBrandInstagram,
  TbBrandTiktokFilled,
  TbBrandWhatsapp,
  TbBrandXFilled,
  TbBrandYoutubeFilled,
} from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleScroll = (e) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    window.scrollTo({
      left: elem?.getBoundingClientRect().left,
      behavior: "smooth",
    });
  };

  return (
    <nav className="flex flex-row md:flex-col md:justify-center md:h-screen">
      {/* logo */}
      <div className="my-3 md:my-6 mx-3 md:mx-0 md:w-full flex justify-center">
        <Image
          src="/logo-sq.png"
          alt="Logo"
          width={90}
          height={90}
          className="hover:bg-active-item hover:scale-110 rounded-md bg-accent-element"
        />
      </div>

      {/* menu desktop */}
      <div className="text-xl md:h-full">
        <ul className="hidden md:block">
          {["home", "about", "work", "skills", "contact"].map((item, index) => (
            <li className="" key={`link-${item}`}>
              <Link
                key={`link${item}`}
                href={`#${index}`}
                className="block w-full py-1 pl-4 hover:bg-active-item hover:text-fondo-1 hover:font-semibold hover:uppercase active:bg-active-item active:uppercase"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* iconos sociales */}
      <div className="text-xl md:h-full relative">
        <div className="md:absolute md:bottom-8 flex flex-col w-full h-full md:h-fit">
          <p className="font-semibold text-2xl md:hidden mt-4 mb-4 pl-1">
            Luciano Schmarsow
          </p>
          <ul className="social-list">
            <Link href={"https://www.facebook.com/schsys"}>
              <li>
                <TbBrandFacebookFilled className="social-icon" />
              </li>
            </Link>
            <Link href={"https://www.instagram.com/schsistemas"}>
              <li className="flex">
                <TbBrandInstagram className="social-icon" />
              </li>
            </Link>
            <Link href={"https://www.youtube.com/@schsys"}>
              <li className="flex">
                <TbBrandYoutubeFilled className="social-icon" />
              </li>
            </Link>
            <Link href={"https://twitter.com/schsys"}>
              <li className="flex">
                <TbBrandXFilled className="social-icon" />
              </li>
            </Link>
            <Link href={"https://github.com/clarkos"}>
              <li className="flex">
                <TbBrandGithubFilled className="social-icon" />
              </li>
            </Link>
            <Link href={"https://api.whatsapp.com/send?phone=351930669714"}>
              <li className="flex">
                <TbBrandWhatsapp className="social-icon" />
              </li>
            </Link>
          </ul>
          <p className="text-center wrap font-semibold text-xs px-3 md:mt-3 md:block hidden">
            <Link href={"https://schsistemas.dev"}>&copy; SCH Sistemas</Link>
          </p>
        </div>
      </div>

      {/* menu mobil */}
      <div className="md:hidden flex justify-center">
        {!toggle ? (
          <HiMenuAlt4
            onClick={() => setToggle(!toggle)}
            className="fixed top-6 right-6 font-bold text-2xl"
          />
        ) : (
          <div className="text-center font-bold text-2xl z-10 w-full bg-fondo-2 bg-opacity-90 absolute top-0 left-0">
            <HiX
              onClick={() => setToggle(!toggle)}
              className="z-20 fixed top-4 right-5 bg-fondo-1 border-4 border-fondo-1 rounded-full text-4xl"
            />
            <div>
              <ul className="flex flex-col">
                {["home", "about", "work", "skills", "contact"].map(
                  (item, index) => (
                    <Link
                      key={item}
                      href={`#${index}`}
                      onClick={() => setToggle(false)}
                    >
                      <li
                        key={item}
                        className="border border-fondo-1 py-4 uppercase active:bg-accent-element"
                      >
                        {item}
                      </li>
                    </Link>
                  )
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
