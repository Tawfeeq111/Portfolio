"use client"
import Link from "next/link"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react"
import Dropdown from "./Dropdown";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
            <nav className="pt-3 pl-3 pr-3 md:p-2 fixed top-0 left-0 right-0 bg-[#121212] bg-opacity-90 z-10">
                <div className="flex justify-between">
                    <Link href={'/'} className="md:pl-10 my-4 text-xl font-semibold block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">{"<Mohammed Tawfeeq/>"}</Link>
                    <div className="block md:hidden">
                        <div className="block md:hidden">
                            {menuOpen ? (
                                <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white" onClick={() => setMenuOpen(!menuOpen)}>
                                    <XMarkIcon className="h-7 w-7" />
                                </button>
                            ) : (
                                <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white" onClick={() => setMenuOpen(!menuOpen)}>
                                    <Bars3Icon className="h-7 w-7" />
                                </button>)}
                        </div>
                    </div>
                    <div className="items-center pr-10 hidden md:flex">
                        <ul className="flex flex-between gap-8">
                            <li className="text-xl text-[#ADB7BF] hover:text-white"><Link href={"#"}>Home</Link></li>
                            <li className="text-xl text-[#ADB7BF] hover:text-white"><Link href={"#"}>About</Link></li>
                            <li className="text-xl text-[#ADB7BF] hover:text-white"><Link href={"#"}>Projects</Link></li>
                            <li className="text-xl text-[#ADB7BF] hover:text-white"><Link href={"#"}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                {
                    menuOpen && <Dropdown />
                }
            </nav>
    )
}

export default Navbar



