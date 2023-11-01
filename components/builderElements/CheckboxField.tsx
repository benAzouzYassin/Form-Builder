import { useState } from "react"
import DeleteBtn from "../DeleteBtn"

export function CheckboxField({ id }: { id: string }) {
    const [label, setLabel] = useState("")
    const [helperText, setHelperText] = useState("")
    const [required, setRequired] = useState(false)
    const [hovering, setHovering] = useState(false)
    return <div onMouseOver={() => setHovering(true)} onMouseLeave={(() => setHovering(false))} className=" relative z-50 hover:bg-transparent hover:cursor-pointer flex-col h-[80px] justify-center bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all hover:text-opacity-50">
        <div className="flex ml-5 gap-2 items-center">
            <div className="w-4 h-4 ring-2 rounded ring-foreground/30"></div>
            <p className="w-full text-left text-sm  font-medium   opacity-80">Checkbox field...</p>
        </div>


        {
            hovering &&
            <>
                <DeleteBtn id={id} />
                <div onClick={() => console.log("drag")} className=" h-full   bg-background/70  w-[91%] absolute  left-0 text-foreground/60  " ><span className="animate-pulse absolute text-center left-0    w-full top-[40px] ">Click for properties or drag to move</span></div>
            </>

        }
    </div>
}