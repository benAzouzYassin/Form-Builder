import { useState } from "react"
import { DeleteIcon } from "../icons/Delete"


export default function TextField() {

    const [label, setLabel] = useState("")
    const [placeHolder, setPlaceHolder] = useState("")
    const [helperText, setHelperText] = useState("")
    const [required, setRequired] = useState(false)
    const [hovering, setHovering] = useState(false)

    return <div onMouseOver={() => setHovering(true)} onMouseLeave={(() => setHovering(false))} className=" relative z-50 hover:bg-transparent hover:cursor-pointer flex-col h-[110px] justify-center bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all hover:text-opacity-50">
        <p className="w-full text-left ml-[24px] text-sm font-semibold mb-[2px] opacity-80">Text label</p>
        <div className=" h-[40px] w-[95%] mx-auto rounded-[2px] ring-1 ring-foreground/5  ring-inset bg-foreground/5 text-left text-sm text-foreground/40 pt-[6px] pl-2">Place Holder...</div>
        <p className="text-xs text-left text-foreground/50 font-medium ml-6 mt-1">Helper text</p>
        {
            hovering &&
            <>
                <div onClick={() => console.log("Delete")} className="  bg-red-500/80 h-full  hover:z-0 top-0 hover:bg-[#8b2e2e] hover:cursor-pointer absolute w-[9%] right-0  rounded-r-sm ring-inset ring-accent ring-2 transition-all" ><DeleteIcon className="fill-foreground/80 w-9 mx-auto" /></div>
                <div onClick={() => console.log("drag")} className=" h-full   bg-background/70  w-[91%] absolute  left-0 text-foreground/60  " ><span className="animate-pulse absolute text-center left-0    w-full top-[40px] ">Click for properties or drag to move</span></div>
            </>

        }
    </div>
}