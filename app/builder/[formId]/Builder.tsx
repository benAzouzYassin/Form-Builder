"use client"

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Editor from "./Editor";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";

export default function Builder() {

    const [formElements, setFormElements] = useState<string[]>([])

    const handleDragEnd = (event: DragEndEvent) => {
        const { over, active } = event;
        if (over) {
            setFormElements(prev => {
                prev.push(active.id.toString())
                return prev
            })
        }
    }
    useEffect(() => {
        console.log(formElements)
    }, [formElements])


    return <div className="flex max-w-[100vw]  overflow-hidden   ">
        <DndContext onDragEnd={handleDragEnd} autoScroll={false}  >
            <Editor formElements={formElements} />
            <SideBar />
        </DndContext>

    </div>
}
