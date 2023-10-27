"use client"

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Editor from "./Editor";
import SideBar from "./SideBar";
import { useEffect, useRef, useState } from "react";

export default function Builder() {

    const [scrollTopVal, setScrollTopVal] = useState(0)
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


    return <div className="flex ">
        <DndContext onDragEnd={handleDragEnd}>
            <Editor formElements={formElements} />
            <SideBar scrollTopVal={scrollTopVal} updateTopScrollVal={(n) => setScrollTopVal(n)} />
        </DndContext>

    </div>
}
