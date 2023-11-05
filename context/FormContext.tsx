"use client"

import { BuilderElementType, FormElement, FormElementName } from "@/utils/globalTypes"
import { arrayMove } from "@dnd-kit/sortable"
import { ReactElement, createContext, useEffect, useState } from "react"



type ContextType = {
    builderElements: BuilderElementType[]
    removeElement: (id: string) => void
    addBuilderElement: (element: BuilderElementType) => void
    moveBuilderElement: (targetId: string, movingItemId: string) => void
    getPreviewElements: () => any
    updateBuilderElement: (newElement: BuilderElementType) => void
}


const INITIAL_CONTEXT: ContextType = {
    builderElements: [],
    removeElement: () => { },
    addBuilderElement: () => { },
    moveBuilderElement: () => { },
    getPreviewElements: () => { },
    updateBuilderElement: () => { }
}

export const FormContext = createContext<ContextType>(INITIAL_CONTEXT)

export function FormContextProvider({ children }: { children: ReactElement[] | ReactElement }) {

    const [builderElements, setBuilderElements] = useState<BuilderElementType[]>([])

    const addBuilderElement = (element: BuilderElementType) => {
        switch (element.elementName) {
            case "Title field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, text: "Your title" }])
                break

            case "Sub title field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, text: "Your sub title" }])
                break

            case "Paragraph field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, text: "Your paragraph" }])
                break

            case "Separator field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, }])
                break

            case "Spacer field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, height: 50 }])
                break

            case "Text field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, label: "your label", helperText: "helper text", placeHolder: "Type here...", required: true }])
                break
            case "Textarea field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, label: "your label", helperText: "helper text", rows: 10, placeHolder: "Type here...", required: true }])
                break

            case "Number field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, min: 10, max: 50, label: "your label", helperText: "helper text", placeHolder: "Type here...", required: true }])

                break
            case "Date field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, label: "your label", helperText: "helper text", placeHolder: "Type here...", required: true }])
                break

            case "Select field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, options: ["option 1 ", "option 2"], label: "your label", helperText: "helper text", placeHolder: "Type here...", required: true }])
                break

            case "Checkbox field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, label: "your label", }])
                break

            default:

                break;
        }

        // setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false }])
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
        setBuilderElements(builderElements.filter(element => element.id != targetId))
    }

    const updateBuilderElement = (newElement: BuilderElementType) => {
        console.log("updateBuilderElement triggered")
        setBuilderElements(builderElements.map(elem => {
            if (elem.id == newElement.id) {
                return newElement
            }
            return elem
        }))
    }

    return <FormContext.Provider value={{ updateBuilderElement: updateBuilderElement, getPreviewElements: getPreviewElements, moveBuilderElement: moveBuilderElement, builderElements: builderElements, addBuilderElement: addBuilderElement, removeElement: removeElement, }}>
        {children}
    </FormContext.Provider>
}