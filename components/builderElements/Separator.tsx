import { useState } from "react"

export default function Separator({ id }: { id: string, isEditing: false }) {
    return <div className="hover:cursor-pointer relative z-50 h-[20px] hover:bg-transparent   bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all  hover:text-opacity-50" >

    </div>
}