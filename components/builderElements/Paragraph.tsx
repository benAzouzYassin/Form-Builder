"use client"

import { useState } from "react"
import DeleteBtn from "../DeleteBtn"


export default function Paragraph({ id }: { id: string }) {
    const [text, setText] = useState("Paragraph")
    const [hovering, setHovering] = useState(false)

    return <div className="relative h-[100px]">
        <div onMouseOver={() => setHovering(true)} onMouseLeave={(() => setHovering(false))} className=" z-50 hover:bg-transparent     h-full bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all hover:text-opacity-50 "><p style={{ opacity: hovering ? 0.3 : 1 }} className=" font-medium my-auto ml-5">{text}</p>


        </div>
    </div>
}