import { useState } from "react"
import DeleteBtn from "../DeleteBtn"


export default function TextField({ id }: { id: string }) {

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
                <DeleteBtn id={id} />
                <div onClick={() => console.log("drag")} className=" h-full   bg-background/70  w-[91%] absolute  left-0 text-foreground/60  " ><span className="animate-pulse absolute text-center left-0    w-full top-[40px] ">Click for properties or drag to move</span></div>
            </>

        }
    </div>
}