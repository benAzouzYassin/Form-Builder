"use client"

import { BuilderElementType, FormElement, FormElementName } from "@/utils/globalTypes"
import { arrayMove } from "@dnd-kit/sortable"
import { ReactElement, createContext, useEffect, useState } from "react"



type ContextType = {
    builderElements: BuilderElementType[]
    removeElement: (id: string) => void
    addBuilderElement: (element: BuilderElementType) => void
    moveBuilderElement: (targetId: string, movingItemId: string) => void
    //TODO remove the any type
    getPreviewElements: () => any
}


const INITIAL_CONTEXT: ContextType = {
    builderElements: [],
    removeElement: () => { },
    addBuilderElement: () => { },
    moveBuilderElement: () => { },
    getPreviewElements: () => { }
}

export const FormContext = createContext<ContextType>(INITIAL_CONTEXT)

export function FormContextProvider({ children }: { children: ReactElement[] | ReactElement }) {

    const [builderElements, setBuilderElements] = useState<BuilderElementType[]>([])

    const addBuilderElement = (element: BuilderElementType) => {
        setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName }])
    }
    const moveBuilderElement = (targetId: string, movingItemId: string) => {
        //case item is not moving
        setBuilderElements((items) => {
            const oldIndex = items.map(item => item.id).indexOf(movingItemId)
            const newIndex = items.map(item => item.id).indexOf(targetId)
            return arrayMove(items, oldIndex, newIndex);
        });
    }


    const addPreviewElement = (elementName: string) => {
        const elementId = elementName + builderElements.length.toString()
        switch (elementName) {
            case "Title field":
                return { id: elementId, element: "Title field", text: "Title" }

            case "Sub title field":
                return { id: elementId, element: "Sub title field", text: "Sub title" }

            case "Paragraph field":
                return { id: elementId, element: "Paragraph field", text: "Paragraph" }

            case "Separator field":
                return { id: elementId, element: "Separator field" }

            case "Spacer field":
                return { id: elementId, element: "Spacer field", height: 50 }

            case "Text field":
                return { id: elementId, element: "Text field", required: true, label: "Text field", placeHolder: "Type here..." }

            case "Textarea field":
                return { id: elementId, element: "Textarea field", required: false, label: "Textarea field", placeHolder: "Type here...", rows: 2 }

            case "Number field":
                return { id: elementId, element: "Number field", required: false, label: "Number field", placeHolder: "0", max: 99, min: 5 }

            case "Date field":
                return { id: elementId, element: "Date field", required: false }

            case "Select field":
                return { id: elementId, element: "Select field", options: ["option one ", "option 2"], label: "option" }

            case "Checkbox field":
                return { id: elementId, element: "Checkbox field", label: "Do you agree ?" }

            default:
                return;
        }

    }



    function getPreviewElements() {
        return builderElements.map(elem => addPreviewElement(elem.elementName))
    }

    const removeElement = (targetId: string) => {
        console.log(targetId)
        setBuilderElements(builderElements.filter(element => element.id != targetId))
    }

    return <FormContext.Provider value={{ getPreviewElements: getPreviewElements, moveBuilderElement: moveBuilderElement, builderElements: builderElements, addBuilderElement: addBuilderElement, removeElement: removeElement, }}>
        {children}
    </FormContext.Provider>
}