import { useState } from "react"
import DeleteBtn from "../DeleteBtn"
type Props = {
    id: string
    isEditing?: boolean
    label?: string

}

export function CheckboxField(props: Props) {
    const [label, setLabel] = useState("")

    return <div className=" relative z-50 hover:bg-transparent hover:cursor-pointer flex-col h-[80px] justify-center bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all hover:text-opacity-50">
        <div className="flex ml-5 gap-2 items-center">
            <div className="w-4 h-4 ring-2 rounded ring-foreground/30"> </div>
            <p className="w-full text-left text-sm  font-medium   opacity-80">{props.label}</p>
        </div>
    </div>
}