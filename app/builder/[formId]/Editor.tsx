"use client"

import { useTheme } from "next-themes"
import { useDroppable } from '@dnd-kit/core';
import BuilderElement from "./BuilderElement";
import { FormContext } from "@/context/FormContext";
import { useContext } from "react";
import { SortableContext } from "@dnd-kit/sortable";


export default function Editor() {
    const { theme } = useTheme()
    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    });

    const formContext = useContext(FormContext)



    return <div className="w-[80%] overflow-auto border-2 " style={{ background: theme != "light" ? "url(/paper-dark.svg" : "url(/paper.svg)" }} >
        <div style={{ border: isOver ? "2px solid white" : "" }} ref={setNodeRef} className=" px-3 gap-2 flex flex-col pt-3 bg-background max-w-[900px] pb-4 min-h-[77vh] mt-[2%] rounded-md shadow-md m-auto  " id="droppable" >
            {formContext?.builderElements.length <= 0 && isOver && <div className="bg-muted h-[120px] w-full  rounded-md"></div>}
            {formContext?.builderElements.length <= 0 && !isOver && < p className=" justify-center pt-[30vh] mx-auto opacity-60  text-5xl text-center font-semibold text-muted-foreground">Drop here</p>}
            <SortableContext items={formContext.builderElements} >
                {formContext?.builderElements.map((element, index) => <BuilderElement elementId={element.id} elementName={element.elementName} key={index} />)}
            </SortableContext>
        </div>
    </div >
}