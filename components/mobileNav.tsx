"use client"
import { Dropdownlink, NavLinks } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";


export const M_NavBar = () => {
  const [open, setOpen] = useState(false);
  const currentPath = usePathname();

  const isActive = (path: string) => {
    return currentPath === path;
  };

  const [header, setHeader] = useState(false);

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY > 55) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={header ? " w-full mobile-header md:hidden" : " absolute w-full mobile-header md:hidden"}>
      <div className="header flex justify-between items-center px-4 py-2">
        <div className="logo w-[80%] flex justify-between">
          <Link href="/">
            <img src="/F_logo.svg" alt="logo" width={30} height={30} />
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
        <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full h-1"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
        </div>
      </div>
      {open && (
        <div className="mobile-menu justify-center items-center text-center">
          <ul>
            {NavLinks.map((link) => (
              <li key={link.key}>
                <Link href={link.path} className="" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                  <span
                    className={
                      isActive(link.path)
                        ? "active"
                        : "text-gray-600 py-2 hover:text-gray-800"
                    }
                  >
                    {link.text}
                  </span>
                </Link>
              </li>
            ))}
            {Dropdownlink.map((link,index) => (
              <div key={link.title} className="group relative">
                <span className="text-gray-600 group-hover:text-gray-800">
                  {link.title}
                </span>
                <IoIosArrowDown className="h-5 w-5 absolute top-0 right-0 transform -translate-y-1/2 group-hover:rotate-0 transition-transform" />
                <div className="dropdown-menu absolute hidden bg-white shadow-lg rounded-md mt-2 z-10">
                  <ul className="">
                      <li key={link.key[index]}>
                        <Link href={link.links[index]} className="li block px-4 py-5 text-sm text-gray-800 hover:bg-gray-200" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                            {link.text[index]}    
                        </Link>
                      </li>
                     
                  </ul>
                </div>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default M_NavBar;
