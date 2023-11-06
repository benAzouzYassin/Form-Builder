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
    updateBuilderElement: () => { },
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
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, label: "Text field : ", helperText: "", placeHolder: "Type here...", required: true }])
                break
            case "Textarea field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, label: "Textarea :", helperText: "", rows: 5, placeHolder: "Type here...", required: true }])
                break

            case "Number field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, min: 1, max: 999, label: "Number field :", helperText: "", placeHolder: "Type here...", required: true }])

                break
            case "Date field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, label: "Date :", helperText: "", placeHolder: "Type here...", required: true }])
                break

            case "Select field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, label: "Select an option :", helperText: "", placeHolder: "Type here...", options: [], required: true }])
                break

            case "Checkbox field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, isEditing: false, label: "Ask a question !", }])
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


    const addPreviewElement = (element: BuilderElementType) => {
        const elementId = element.elementName + builderElements.length.toString()
        switch (element.elementName) {
            case "Title field":
                return { id: elementId, element: "Title field", text: element.text }

            case "Sub title field":
                return { id: elementId, element: "Sub title field", text: element.text }

            case "Paragraph field":
                return { id: elementId, element: "Paragraph field", text: element.text }

            case "Separator field":
                return { id: elementId, element: "Separator field" }

            case "Spacer field":
                return { id: elementId, element: "Spacer field", height: element.height }

            case "Text field":
                return { id: elementId, element: "Text field", required: element.required, label: element.label, placeHolder: element.placeHolder, helperText: element.helperText }

            case "Textarea field":
                return { id: elementId, element: "Textarea field", required: element.required, label: element.label, placeHolder: element.placeHolder, rows: element.rows, helperText: element.helperText }

            case "Number field":
                return { id: elementId, element: "Number field", required: element.required, label: element.label, placeHolder: element.placeHolder, max: element.max, min: element.min, helperText: element.helperText }

            case "Date field":
                return { id: elementId, element: "Date field", required: element.required, label: element.label, placeHolder: element.placeHolder, helperText: element.helperText }

            case "Select field":
                return { id: elementId, element: "Select field", placeHolder: element.placeHolder, options: element.options, label: element.label, helperText: element.helperText }

            case "Checkbox field":
                return { id: elementId, element: "Checkbox field", label: element.label }

            default:
                return;
        }

    }



    function getPreviewElements() {
        return builderElements.map(elem => addPreviewElement(elem))
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