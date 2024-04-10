"use client"
import { Dropdownlink , NavLinks } from "@/constants";
import Link from "next/link"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { FcMusic } from "react-icons/fc";
import { FaBookOpenReader } from "react-icons/fa6";
import React from "react";
import M_NavBar from "@/components/mobileNav";

export const NavBar = () => {
    // HeaderNavbar    
    const[open, setOpen] = useState(false);
    const currentPath =usePathname();
    const isActive = (path: string) => {
        return currentPath === path;
    }

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
    });



  return (
    <><M_NavBar /><div className={header ? "ease-linear md:flex hidden duration-500 z-50 fixed w-full top-0 bg-red-500 bg-opacity-5 shadow-sm backdrop-blur-sm border-b border-opacity-25 border-width-1 border-white" : "w-full md:flex hidden shadow-sm absolute z-50  backdrop-blur-sm"}>
          <div className="header z-50 flex w-[80%] mx-auto justify-between py-[15px]">
              {/* Logo */}
              <div className="logo md:flex hidden">
                  <Link href="/">
                      <img src="/F_logo.svg" alt="logo" width={30} height={30} />
                  </Link>
              </div>
              {/* Menu */}

              <div className="menu md:flex hidden justify-center items-center">
                  {NavLinks.map((link) => (
                      <Link key={link.key} href={link.path}>
                          <span className={isActive(link.path) ? 'active' : '' + header ? "link ease-in-out duration-300 gap-6 text-md text-zinc-800" : "link text-zinc-800 text-md gap-6 items-center text-center justify-center"}>
                              <span className="link">{link.text}</span>
                          </span>

                      </Link>
                  ))}
                  {/* Dropdown */}
                  {Dropdownlink.map((link,index) => (
                      <div key={link.title} className="weight-500 py-1 px-2 group gap-5 justify-center  transition-all ">
                          <p className="text-zinc-800 text-md flex gap-2 justify-center group-hover:scale-105 items-center text-center group-hover:text-red-500">
                              <span className="">{link.title}</span>
                              <IoIosArrowDown className=" rotate-180 group-hover:scale-105 group-hover:rotate-0 transition-all" />
                          </p>
                          <div key={link.key[index]} className={"z-99 Dropdown absolute text-zinc-800 text-md py-3 px-5 shadow-md  top-15 rounded-md w-auto grid-col-1 hidden gap-1 bg-white bg-opacity-75 border-white border-opacity-50 transition-all  group-hover:grid"}>
                              <Link key={link.key[0]} href={link.links[0]} className="hub items-center whitespace-nowrap py-1"><FaBlog className="text-3xl px-1 text-red-500" />{link.text[0]} </Link>
                              <Link key={link.key[1]} href={link.links[1]} className="hub items-center whitespace-nowrap py-1"><BiMoviePlay className="text-3xl px-1 text-red-500" />{link.text[1]} </Link>
                              <Link key={link.key[2]} href={link.links[2]} className="hub items-center whitespace-nowrap py-1"><FcMusic className="text-3xl px-1 text-red-500" />{link.text[2]} </Link>
                              <Link key={link.key[3]} href={link.links[3]} className="hub items-center whitespace-nowrap py-1"><FaBookOpenReader className="text-3xl px-1 text-red-500" />{link.text[3]} </Link>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div></>
  )
}
