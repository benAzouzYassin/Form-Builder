"use client"

import { useState } from 'react';
import BackBtn from '../../components/BackBtn';
import Link from 'next/link';

export default function Nav() {
    const [selected, setSelected] = useState(1)
    const selectedClass = "border-[1px] bg-black/30"
    return <nav className='flex items-flex justify-center w-full bg-[#1a1a1a]  shadow-sm shadow-muted h-[8vh] overflow-hidden lg:px-14'>
        <BackBtn />
        <Link href="/home" className=''>
            <img className='h-full scale-125 lg:block hidden mb-auto ml-3' src="/icons/new-logo.svg" alt="Form Builder logo" />
        </Link>

        <ul className='h-fit my-auto text-sm flex justify-center  w-full gap-x-4'>

            <li onClick={() => setSelected(1)} className={`px-3 py-[13px]  border-white/10 rounded-sm  hover:cursor-pointer hover:scale-105 transition-transform ${selected === 1 && selectedClass}  `}>About Us</li>
            <li onClick={() => setSelected(2)} className={`px-3 py-[13px]  border-white/5 rounded-sm  hover:cursor-pointer hover:scale-105 transition-transform  ${selected === 2 && selectedClass} `}>Features</li>
            <li onClick={() => setSelected(3)} className={`px-3 py-[13px]  border-white/5 rounded-sm  hover:cursor-pointer hover:scale-105 transition-transform  ${selected === 3 && selectedClass}`}>Guide</li>
            <li onClick={() => setSelected(4)} className={`px-3 py-[13px]  border-white/5 rounded-sm  hover:cursor-pointer hover:scale-105 transition-transform  ${selected === 4 && selectedClass}`}>Get Started</li>
        </ul>
        <button className={` w-40 px-3  font-medium  border-white/10 rounded-sm  hover:cursor-pointer hover:scale-105 transition-transform my-auto h-11   ${selectedClass} `}>Get started</button>
    </nav>
}