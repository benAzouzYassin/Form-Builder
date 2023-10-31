"use client"

import { FormElement } from "@/utils/globalTypes"
import { ReactElement, createContext, useState } from "react"



type ContextType = {
    formElements: FormElement[]
    addNewElement: (e: FormElement) => void
}

export const FormContext = createContext<ContextType | null>(null)

export function FormContextProvider({ children }: { children: ReactElement[] | ReactElement }) {

    const [formElements, setFormElements] = useState<FormElement[]>([])

    const addNewElement = (newElement: FormElement) => {
        const elementId = newElement.element + formElements.length.toString()
        newElement.id = elementId
        setFormElements([...formElements, newElement])
    }

    return <FormContext.Provider value={{ addNewElement: addNewElement, formElements: formElements }}>
        {children}
    </FormContext.Provider>
}