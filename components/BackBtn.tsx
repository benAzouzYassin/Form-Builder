"use client"

import { RightArrow } from "./icons/RightArrow"

export default function BackBtn() {
    return <button className="w-fit h-fit my-auto " onClick={() => window.history.back()}>
        <RightArrow className="rotate-180 lg:hidden block w-7 h-7 ml-1 fill-foreground/70" />
    </button>
}