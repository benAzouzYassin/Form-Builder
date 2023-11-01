"use client"

import { BuilderElementType, FormElement, FormElementName } from "@/utils/globalTypes"
import { ReactElement, createContext, useState } from "react"



type ContextType = {
    builderElements: BuilderElementType[]
    previewFormElements: FormElement[]
    addPreviewElement: (e: FormElementName) => void
    removeElement: (id: string) => void
    addBuilderElement: (element: BuilderElementType) => void

}


const INITIAL_CONTEXT: ContextType = {
    previewFormElements: [],
    builderElements: [],
    addPreviewElement: () => { },
    removeElement: () => { },
    addBuilderElement: () => { },
}

export const FormContext = createContext<ContextType>(INITIAL_CONTEXT)

export function FormContextProvider({ children }: { children: ReactElement[] | ReactElement }) {
    // const addNewPreviewElement = (newElement: FormElement) => {
    //     const elementId = newElement.element + previewFormElements.length.toString()
    //     newElement.id = elementId
    //     setPreviewFormElements([...previewFormElements, newElement])
    // }
    //builder
    const [builderElements, setBuilderElements] = useState<BuilderElementType[]>([])

    const addBuilderElement = (element: BuilderElementType) => {
        setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName }])
    }


    const [previewFormElements, setPreviewFormElements] = useState<FormElement[]>([])

    //preview
    const addPreviewElement = (elementName: string) => {
        const elementId = elementName + previewFormElements.length.toString()
        switch (elementName) {
            case "Title field":
                setPreviewFormElements([...previewFormElements, { id: elementId, element: "Title field", text: "Title" }])
                break
            case "Sub title field":
                setPreviewFormElements([...previewFormElements, { id: elementId, element: "Sub title field", text: "Sub title" }])
                break
            case "Paragraph field":
                setPreviewFormElements([...previewFormElements, { id: elementId, element: "Paragraph field", text: "Paragraph" }])
                break
            case "Separator field":
                setPreviewFormElements([...previewFormElements, { id: elementId, element: "Separator field" }])
                break
            case "Spacer field":
                setPreviewFormElements([...previewFormElements, { id: elementId, element: "Spacer field", height: 50 }])
                break
            case "Text field":
                setPreviewFormElements([...previewFormElements, { id: elementId, element: "Text field", required: true, label: "Text field", placeHolder: "Type here..." }])
                break
            case "Textarea field":
                setPreviewFormElements([...previewFormElements, { id: elementId, element: "Textarea field", required: false, label: "Textarea field", placeHolder: "Type here...", rows: 2 }])
                break
            case "Number field":
                setPreviewFormElements([...previewFormElements, { id: elementId, element: "Number field", required: false, label: "Number field", placeHolder: "0", max: 99, min: 5 }])
                break
            case "Date field":
                setPreviewFormElements([...previewFormElements, { id: elementId, element: "Date field", required: false }])
                break
            case "Select field":
                setPreviewFormElements([...previewFormElements, { id: elementId, element: "Select field", options: ["option one ", "option 2"], label: "option" }])
                break
            case "Checkbox field":
                setPreviewFormElements([...previewFormElements, { id: elementId, element: "Checkbox field", label: "Do you agree ?" }])

                break

            default:
                break;
        }

    }




    //all 
    const removeElement = (targetId: string) => {
        setPreviewFormElements(previewFormElements.filter(element => element.id != targetId))
        setBuilderElements(builderElements.filter(element => element.id != targetId))

    }

    return <FormContext.Provider value={{ builderElements: builderElements, addBuilderElement: addBuilderElement, removeElement: removeElement, addPreviewElement: addPreviewElement, previewFormElements: previewFormElements }}>
        {children}
    </FormContext.Provider>
}