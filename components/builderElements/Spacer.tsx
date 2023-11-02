import { useState } from "react"
import { DeleteIcon } from "../icons/Delete"
import DeleteBtn from "../DeleteBtn"

export default function Spacer({ id }: { id: string }) {
    const [height, setHeight] = useState(60)
    const [hovering, setHovering] = useState(false)
    return <div style={{ height: `${height}px` }} onMouseOver={() => setHovering(true)} onMouseLeave={(() => setHovering(false))} className="hover:cursor-pointer relative z-50 hover:bg-transparent  h-[60px] bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all  hover:text-opacity-50" >

    </div>
}