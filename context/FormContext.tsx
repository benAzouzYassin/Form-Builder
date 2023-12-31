"use client"

import { publishFormAction } from "@/actions/formActions"
import { BuilderElementType, SavedFormsType } from "@/utils/globalTypes"
import { arrayMove } from "@dnd-kit/sortable"
import { ReactElement, createContext, useState } from "react"



type ContextType = {
    builderElements: BuilderElementType[]
    removeElement: (id: string) => void
    addBuilderElement: (element: BuilderElementType) => void
    moveBuilderElement: (targetId: string, movingItemId: string) => void
    getPreviewElements: () => any
    updateBuilderElement: (newElement: BuilderElementType) => void
    saveElements: (formId: string, formName: string, formDesc: string) => void
    loadBuilderElements: (formId: string) => void
    publishForm: (formId: string, formName: string, formDesc: string, limitErrCb: () => void, cb: (formId: string) => void) => void
}


const INITIAL_CONTEXT: ContextType = {
    builderElements: [],
    removeElement: () => { },
    addBuilderElement: () => { },
    moveBuilderElement: () => { },
    getPreviewElements: () => { },
    updateBuilderElement: () => { },
    saveElements: () => { },
    loadBuilderElements: () => { },
    publishForm: () => { }
}

export const FormContext = createContext<ContextType>(INITIAL_CONTEXT)

export function FormContextProvider({ children }: { children: ReactElement[] | ReactElement }) {

    const [builderElements, setBuilderElements] = useState<BuilderElementType[]>([])

    const addBuilderElement = (element: BuilderElementType) => {
        switch (element.elementName) {
            case "Title field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, text: "Your title" }])
                break

            case "Sub title field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, text: "Your sub title" }])
                break

            case "Paragraph field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, text: "Your paragraph" }])
                break

            case "Separator field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, }])
                break

            case "Spacer field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, height: 50 }])
                break

            case "Text field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, label: "Text field : ", helperText: "", placeHolder: "Type here...", required: true }])
                break
            case "Textarea field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, label: "Textarea :", helperText: "", rows: 5, placeHolder: "Type here...", required: true }])
                break

            case "Number field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, min: 1, max: 999, label: "Number field :", helperText: "", placeHolder: "Type here...", required: true }])

                break
            case "Date field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, label: "Date :", helperText: "", placeHolder: "Select a date...", required: true }])
                break

            case "Select field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, label: "Select an option :", helperText: "", placeHolder: "Select an option...", options: [], required: true }])
                break

            case "Checkbox field":
                setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName, label: "Ask a question !", }])
                break

            default:

                break;
        }

        // setBuilderElements([...builderElements, { id: element.id, elementName: element.elementName }])
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

        setBuilderElements(builderElements.map(elem => {
            if (elem.id == newElement.id) {
                return newElement
            }
            return elem
        }))
    }

    const loadBuilderElements = (formId: string) => {
        const saved: SavedFormsType[] = JSON.parse(localStorage.getItem("forms") ?? "[]")
        saved.forEach(elem => {
            if (elem.formId === formId) {
                setBuilderElements(elem.data)
            }
        })

    }

    const publishForm = (formId: string, formName: string, formDesc: string, limitErrCb: () => void, cb: (formId: string) => void) => {

        publishFormAction(formName, formDesc, JSON.stringify(builderElements))
            .then(res => {

                if (res && res.success) {
                    const savedForms = JSON.parse(localStorage.getItem("forms") ?? "[]")
                    const newForms = savedForms.filter((form: SavedFormsType) => form.formId != formId)
                    localStorage.setItem("forms", JSON.stringify(newForms))
                    cb(res?.formId ?? "")
                }
                if (res && res.success === false && res.message === "forms limit excited") {
                    limitErrCb()
                }

            })
            .catch(err => console.log(err))

    }

    const saveElements = (formId: string, formName: string, formDesc: string) => {
        const oldForms = JSON.parse(localStorage.getItem("forms") ?? "[]")
        const newData: SavedFormsType = { formId: formId, formName: formName, formDesc: formDesc, data: builderElements }
        let savedBefore = false
        for (let i = 0; i < oldForms.length; i++) {

            if (oldForms[i]["formId"] === formId) {
                console.log("found it !!")
                oldForms[i] = newData
                localStorage.setItem("forms", JSON.stringify(oldForms))
                savedBefore = true
                break
            }
        }
        if (!savedBefore) {

            localStorage.setItem("forms", JSON.stringify([...oldForms, newData]))
            console.log([...oldForms, newData])
        }

    }
    return <FormContext.Provider value={{ publishForm: publishForm, loadBuilderElements: loadBuilderElements, saveElements: saveElements, updateBuilderElement: updateBuilderElement, getPreviewElements: getPreviewElements, moveBuilderElement: moveBuilderElement, builderElements: builderElements, addBuilderElement: addBuilderElement, removeElement: removeElement, }}>
        {children}
    </FormContext.Provider>
}