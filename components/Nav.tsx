"use client";
import Link from "next/link";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import BackBtn from "./BackBtn";
import { cn } from "@/lib/utils";


export default function Nav() {
    const userData = useUser()
    const userName = userData.user?.username ?? userData.user?.emailAddresses[0].emailAddress.split("@")[0]

    return (
        <nav className="flex  w-full bg-background  shadow-sm shadow-muted h-[8vh] overflow-hidden lg:px-14">
            <BackBtn />
            <Link href="/" className="mt-2">
                <img
                    className="w-64 lg:block hidden mt-1 ml-3"
                    src="/logo.svg"
                    alt="Form Builder logo"
                />
            </Link>
            <p
                className={cn(
                    "ml-auto h-full text-center hidden lg:flex items-center  font-extrabold mr-[40px] "
                )}>
                {userName && `Hello, ${userName}`}{" "}
            </p>{" "}
            <div className="h-fit my-auto lg:ml-[-10px] ml-auto scale-125 pr-5 hover:scale-[135%] transition-transform ">
                <UserButton afterSignOutUrl="/signin" />
            </div>
        </nav>
    );
}
