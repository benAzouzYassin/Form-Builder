import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";

export default function Nav() {
    return <nav className='flex  w-full bg-background  shadow-sm shadow-muted h-[8vh] overflow-hidden px-14'>
        <Link href="/" className='mt-2'>
            <img className='w-64  mt-1 ml-3' src="/logo.svg" alt="Form Builder logo" />
        </Link>
        <ThemeSwitcher />
        <div className='h-fit my-auto ml-[-10px] scale-125 pr-5 hover:scale-[135%] transition-transform '>
            <UserButton afterSignOutUrl='/signin' />
        </div>
    </nav>
}