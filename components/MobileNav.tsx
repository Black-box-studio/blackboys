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

const MobileNav = ({open, setOpen}) => {
        // HeaderNavbar    
        const currentPath =usePathname();
        const isActive = (path: string) => {
            return currentPath === path;
        }
        const [header, setHeader] = useState(false);
    
    
    return (
        <div className={""}>
        <div className="">
            {/* Menu */}
                
            <div className="">
                {NavLinks.map((link) => (
                    <li>
                        <Link key={link.key} href={link.path} >
                            <span className={isActive(link.path) ? 'active' : "" }>
                                <span className="link">{link.text}</span>
                            </span>
                        </Link>
                    </li>
                ))}
                {/* Dropdown */}
                 {Dropdownlink.map((link) => (
                    <div key={link.title} className="">
                        <p className="">
                            <span className="">{link.title}</span>
                            <IoIosArrowDown className="rotate-180 group-hover:scale-105 group-hover:rotate-0 transition-all" />
                        </p>
                            <li key={link.title} className={""}>
                                <Link href={link.links[0]} className=""><FaBlog  className="text-3xl px-1 text-red-500"/>{link.links[0]} </Link>
                                <Link href={link.links[1]} className=""><BiMoviePlay className="text-3xl px-1 text-red-500"/>{link.links[1]} </Link>
                                <Link href={link.links[2]} className=""><FcMusic className="text-3xl px-1 text-red-500"/>{link.links[2]} </Link>
                                <Link href={link.links[3]} className=""><FaBookOpenReader className="text-3xl px-1 text-red-500"/>{link.links[3]} </Link>
                            </li>
                    </div>    
                ))}
            </div>
        </div>
    </div>
    )
}

export default MobileNav