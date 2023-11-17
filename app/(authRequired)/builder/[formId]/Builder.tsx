"use client"

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Editor from "./Editor";
import SideBar from "./SideBar";
import { useContext, useEffect } from "react";
import { FormContext } from "@/context/FormContext";
import { SettingsContextProvider } from "@/context/ElementSettingsContext";



export default function Builder({ formId }: { formId: string }) {
    const formContext = useContext(FormContext)

    useEffect(() => {
        formContext.loadBuilderElements(formId)
    }, [])



    const handleDragEnd = (event: DragEndEvent) => {
        const { over, active, } = event;
        if (over) {
            const droppedElementName = active.id.toString()
            const newElementId = droppedElementName + formContext.builderElements.length.toString()
            if (active.id !== over.id) {
                formContext.moveBuilderElement(over.id.toString(), active.id.toString())

            }
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
            <SettingsContextProvider>
                <Editor />
                <SideBar />
            </SettingsContextProvider>
        </DndContext>

    </div>
}
