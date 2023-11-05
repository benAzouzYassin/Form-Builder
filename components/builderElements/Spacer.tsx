import { useState } from "react"
import { DeleteIcon } from "../icons/Delete"
import DeleteBtn from "../DeleteBtn"

export default function Spacer({ id, height }: { height: number, id: string, isEditing: false }) {
    return <div style={{ height: `${height}px` }} className="hover:cursor-pointer relative z-50 hover:bg-transparent  h-[60px] bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all  hover:text-opacity-50" >

    </div>
}