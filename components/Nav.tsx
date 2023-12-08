"use client"
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import BackBtn from "./BackBtn";

export default function Nav() {
    return <nav className='flex  w-full bg-background  shadow-sm shadow-muted h-[8vh] overflow-hidden lg:px-14'>
        <BackBtn />
        <Link href="/" className='mt-1'>
            <img className='w-64 scale-125  h-full lg:block hidden  ml-3' src="/icons/new-logo.svg" alt="Form Builder logo" />
        </Link>
        <ThemeSwitcher />
        <div className='h-fit my-auto lg:ml-[-10px] ml-auto scale-125 pr-5 hover:scale-[135%] transition-transform '>
            <UserButton afterSignOutUrl='/signin' />
        </div>
    </nav>
}