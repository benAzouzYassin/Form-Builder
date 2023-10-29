"use client"

import { useState } from "react"
import { DeleteIcon } from "../icons/Delete"


export default function SubTitle() {
    const [text, setText] = useState("Sub title")
    const [hovering, setHovering] = useState(false)

    return <div className="relative h-[100px]">
        <div onMouseOver={() => setHovering(true)} onMouseLeave={(() => setHovering(false))} className=" z-50 hover:bg-transparent     h-full bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all hover:text-opacity-50 "><p style={{ opacity: hovering ? 0.3 : 1 }} className="text-2xl font-medium m-auto">{text}</p>
            {
                hovering &&
                <div onClick={() => console.log("Delete")} className="  bg-red-500/80 h-full hover:z-0 top-0 hover:bg-foreground/10 hover:cursor-pointer absolute w-[9%] right-0  rounded-r-sm ring-inset ring-accent ring-2 transition-all" ><DeleteIcon className="fill-foreground/80 w-9 mx-auto" /></div>

            }

        </div>
    </div>
}