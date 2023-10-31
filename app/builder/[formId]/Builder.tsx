"use client"

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Editor from "./Editor";
import SideBar from "./SideBar";
import { useContext, useEffect, useState } from "react";
import { FormElementName } from "@/utils/globalTypes";
import { FormContext } from "@/context/FormContext";

export default function Builder() {

    const formContext = useContext(FormContext)
    //TODO making the element setting requires to edit the data in the builderELements
    const [builderElements, setBuilderElements] = useState<FormElementName[]>([])

    const handleDragEnd = (event: DragEndEvent) => {
        const { over, active } = event;
        if (over) {
            addNewElementToState(active.id.toString())
            setBuilderElements([...builderElements, active.id.toString()])
        }
    }


    useEffect(() => {
    }, [builderElements])

    function addNewElementToState(newElementName: string) {

        console.log("adding new element named : " + newElementName)
        switch (newElementName) {
            case "Title field":
                formContext?.addNewElement({ id: "", element: "Title field", text: "Title" })
                break
            case "Sub title field":
                formContext?.addNewElement({ id: "", element: "Sub title field", text: "Sub title" })
                break
            case "Paragraph field":
                formContext?.addNewElement({ id: "", element: "Paragraph field", text: "Paragraph" })
                break
            case "Separator field":
                formContext?.addNewElement({ id: "", element: "Separator field" })
                break
            case "Spacer field":
                formContext?.addNewElement({ id: "", element: "Spacer field", height: 50 })
                break
            case "Text field":
                formContext?.addNewElement({ id: "", element: "Text field", required: true, label: "Text field", placeHolder: "Type here..." })
                break
            case "Textarea field":
                formContext?.addNewElement({ id: "", element: "Textarea field", required: false, label: "Textarea field", placeHolder: "Type here...", rows: 2 })
                break
            case "Number field":
                formContext?.addNewElement({ id: "", element: "Number field", required: false, label: "Number field", placeHolder: "0", max: 99, min: 5 })
                break
            case "Date field":
                formContext?.addNewElement({ id: "", element: "Date field", required: false })
                break
            case "Select field":
                formContext?.addNewElement({ id: "", element: "Select field", options: ["option one ", "option 2"], label: "option" })
                break
            case "Checkbox field":
                formContext?.addNewElement({ id: "", element: "Checkbox field", label: "Do you agree ?" })

                break

            default:
                break;
        }

    }
    return <div className="flex max-w-[100vw]  overflow-hidden   ">
        <DndContext onDragEnd={handleDragEnd} autoScroll={false}  >
            <Editor builderElements={builderElements} />
            <SideBar />
        </DndContext>

    </div>
}
