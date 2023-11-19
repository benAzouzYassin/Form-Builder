"use client"

import { useState } from "react"


export default function Paragraph({ id, text }: { id: string, text?: string }) {
    const [hovering, setHovering] = useState(false)

    return <div className="relative min-h-[100px] h-fit ">
        <div onMouseOver={() => setHovering(true)} onMouseLeave={(() => setHovering(false))} className=" z-50 hover:bg-transparent    min-h-[100px] h-full bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all hover:text-opacity-50 "><p style={{ opacity: hovering ? 0.3 : 1 }} className="overflow-hidden font-medium my-auto ml-5 max-w-[95%] ">{text}</p>

        </div>
    </div>
}