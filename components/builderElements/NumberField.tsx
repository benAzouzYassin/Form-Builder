import { useState } from "react"

type Props = {
    id: string
    isEditing?: boolean
    label?: string
    helperText?: string
    placeholder?: string
    required?: boolean
    max?: number
    min?: number
}
export default function NumberField(props: Props) {
    const [label, setLabel] = useState("")
    const [placeHolder, setPlaceHolder] = useState("")
    const [helperText, setHelperText] = useState("")
    const [required, setRequired] = useState(false)
    const [max, setMax] = useState(99)
    const [min, setMin] = useState(1)
    const [hovering, setHovering] = useState(false)
    return <div onMouseOver={() => setHovering(true)} onMouseLeave={(() => setHovering(false))} className=" relative z-50 hover:bg-transparent hover:cursor-pointer flex-col h-[110px] justify-center bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all hover:text-opacity-50">
        <p className="w-full text-left ml-[24px] text-sm font-semibold mb-[2px] opacity-80 ">Number label</p>
        <div className=" h-[40px] w-[95%] mx-auto rounded-[2px] ring-1 ring-foreground/5  ring-inset bg-foreground/5 text-left text-sm text-foreground/40 pt-[6px] pl-2">0</div>


        <p className="text-xs text-left text-foreground/50 font-medium ml-6 mt-1">Helper text</p>

    </div>
}