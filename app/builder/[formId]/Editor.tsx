"use client"

import { useTheme } from "next-themes"
import { useDroppable } from '@dnd-kit/core';

type Props = {
    formElements: string[]

}

export default function Editor(props: Props) {
    const { theme } = useTheme()
    const { isOver, setNodeRef, active } = useDroppable({
        id: 'droppable',

    });
    const style = {};




    return <div className="w-[80%] border-2 border-white z-10 " style={{ background: theme != "light" ? "url(/paper-dark.svg" : "url(/paper.svg)" }} >
        <div style={style} ref={setNodeRef} className="flex bg-background max-w-[900px] h-[750px] mt-[2%] rounded-md shadow-md m-auto  " id="droppable" >
            <p className="self-center mx-auto text-5xl font-semibold text-muted-foreground">Drop here</p>
            {props.formElements.map(elem => <p key={elem} >{elem}</p>)}
        </div>
    </div>
}