"use client"

import { SavedFormsType } from "@/utils/globalTypes"
import { useEffect, useState } from "react"
import FormDraft from "./FormDraft"

export default function SavedForms() {
    const [savedForms, setSavedForms] = useState<SavedFormsType[]>([])
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("forms") ?? "[]")
        console.log(localData)
        setSavedForms(localData)
    }, [])
    return <>
        {savedForms.map(formData => <FormDraft key={formData.formId} id={formData.formId} name={formData.formName} description={formData.formDesc} status="editing" />)}
    </>
}