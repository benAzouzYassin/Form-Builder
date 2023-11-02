"use client"

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Editor from "./Editor";
import SideBar from "./SideBar";
import { useContext } from "react";
import { FormContext } from "@/context/FormContext";



export default function Builder() {

    const formContext = useContext(FormContext)

    const handleDragEnd = (event: DragEndEvent) => {
        const { over, active, collisions } = event;
        if (over) {
            const droppedElementName = active.id.toString()
            const newElementId = droppedElementName + formContext.builderElements.length.toString()
            if (active.id !== over.id) {
                formContext.moveBuilderElement(over.id.toString(), active.id.toString())

            }
            //TODO add if statement so those only work if i am holding non builder element
            if (!isSorting(active.id.toString())) {
                formContext.addBuilderElement({ id: newElementId, elementName: droppedElementName })
            }
        }
    }
    function isSorting(activeId: string) {
        return parseInt(activeId[activeId.length - 1]) >= 0
    }
    return <div className="flex max-w-[100vw]  overflow-hidden   ">
        <DndContext onDragEnd={handleDragEnd} autoScroll={false}  >
            <Editor />
            <SideBar />
        </DndContext>

    </div>
}
