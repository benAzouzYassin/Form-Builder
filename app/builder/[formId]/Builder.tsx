"use client"

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Editor from "./Editor";
import SideBar from "./SideBar";
import { useContext } from "react";
import { FormContext } from "@/context/FormContext";



export default function Builder() {

    const formContext = useContext(FormContext)

    const handleDragEnd = (event: DragEndEvent) => {
        const { over, active } = event;
        if (over) {
            const newElementName = active.id.toString()
            const newElementId = newElementName + formContext.previewFormElements.length.toString()
            formContext.addBuilderElement({ id: newElementId, elementName: newElementName })
            formContext.addPreviewElement(newElementName)
        }
    }

    return <div className="flex max-w-[100vw]  overflow-hidden   ">
        <DndContext onDragEnd={handleDragEnd} autoScroll={false}  >
            <Editor />
            <SideBar />
        </DndContext>

    </div>
}
