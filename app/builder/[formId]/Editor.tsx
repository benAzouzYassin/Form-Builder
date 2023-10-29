"use client"

import { useTheme } from "next-themes"
import { useDroppable } from '@dnd-kit/core';
import FormElement from "./FormElement";

type Props = {
    formElements: string[]

}

export default function Editor(props: Props) {
    const { theme } = useTheme()
    const { isOver, setNodeRef, active, over } = useDroppable({
        id: 'droppable',

    });



    return <div className="w-[80%] top-[16vh] mt-40  h-[90vh] overflow-auto border-2 " style={{ background: theme != "light" ? "url(/paper-dark.svg" : "url(/paper.svg)" }} >
        <div style={{ border: isOver ? "2px solid white" : "" }} ref={setNodeRef} className=" px-3 gap-2 flex flex-col pt-3 bg-background max-w-[900px] h-[77vh] mt-[2%] rounded-md shadow-md m-auto  " id="droppable" >
            {props.formElements.length <= 0 && isOver && <div className="bg-muted h-[120px] w-full  rounded-md"></div>}
            {props.formElements.length <= 0 && !isOver && < p className=" justify-center pt-[30vh] mx-auto opacity-60  text-5xl text-center font-semibold text-muted-foreground">Drop here</p>}
            {props.formElements.map((elementName, index) => <FormElement elementName={elementName} key={index} />)}
        </div>
    </div >
}