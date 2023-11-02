"use client"

import { useState } from "react"
import DeleteBtn from "../DeleteBtn"

export default function Title({ id }: { id: string }) {
    const [hovering, setHovering] = useState(false)
    const [text, setText] = useState("Your Title")
    return <div className="relative h-[100px]">
        <div onMouseOver={() => setHovering(true)} onMouseLeave={(() => setHovering(false))} className=" z-50 hover:bg-transparent  h-full bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all hover:text-opacity-50 "><p style={{ opacity: hovering ? 0.3 : 1 }} className="text-2xl font-bold my-auto m-auto">{text}</p>

        </div>
    </div>
}