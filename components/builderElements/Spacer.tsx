import { useState } from "react"
import { DeleteIcon } from "../icons/Delete"
import DeleteBtn from "../DeleteBtn"

export default function Spacer({ id }: { id: string }) {
    const [height, setHeight] = useState(60)
    const [hovering, setHovering] = useState(false)
    return <div style={{ height: `${height}px` }} onMouseOver={() => setHovering(true)} onMouseLeave={(() => setHovering(false))} className="hover:cursor-pointer relative z-50 hover:bg-transparent  h-[60px] bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all  hover:text-opacity-50" >
        {
            hovering &&
            <>
                <DeleteBtn id={id} />
                <div onClick={() => console.log("drag")} className="   bg-background/70 h-full  w-[91%] absolute  left-0 text-foreground/60  " ><span className="animate-pulse absolute   flex items-center text-center   w-full top-[20%] left-[30%]">Click for properties or drag to move</span></div>
            </>

        }
    </div>
}