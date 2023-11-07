"use client"

import { useState } from "react"


export default function SubTitle({ id, text }: { text?: string, id: string }) {
    const [hovering, setHovering] = useState(false)

    return <div className="relative h-[100px]">
        <div onMouseOver={() => setHovering(true)} onMouseLeave={(() => setHovering(false))} className=" z-50 hover:bg-transparent     h-full bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all hover:text-opacity-50 "><p style={{ opacity: hovering ? 0.3 : 1 }} className="text-xl font-semibold my-auto ml-5">{text}</p>
        </div>
    </div>
}