import { useState } from "react"

export default function Separator() {
    const [hovering, setHovering] = useState(false)
    return <div onMouseOver={() => setHovering(true)} onMouseLeave={(() => setHovering(false))} className="hover:cursor-pointer relative z-50 h-[20px] hover:bg-transparent   bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all  hover:text-opacity-50" >
        {
            hovering &&
            <>
                <div onClick={() => console.log("Delete")} className="  bg-red-500  h-full  hover:z-0 top-0 hover:bg-[#8b2e2e]  hover:cursor-pointer absolute w-[9%] right-0  rounded-r-sm ring-inset ring-accent ring-2 transition-all flex items-center text-center justify-center font-semibold text-xs text-foreground/70" >X</div>
                <div onClick={() => console.log("drag")} className="   bg-background/70 h-full  w-[91%] absolute  left-0 text-foreground/60  " ><span className="animate-pulse absolute   flex items-center text-center   w-full top-[20%] left-[30%]"> </span></div>
            </>

        }
    </div>
}