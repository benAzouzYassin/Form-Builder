"use client"

import { submitFormAction } from "@/actions/formActions"
import FormElement from "./FormElement"
import { BuilderElementType } from "@/utils/globalTypes"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Form({ formSchema, formId }: { formSchema: string, formId: string }) {
    const schema: BuilderElementType[] = JSON.parse(formSchema ?? "[]")

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const router = useRouter()
    async function clientAction(formData: FormData) {

        try {
            const { success } = await submitFormAction(formData)
            if (success) {
                setIsLoading(false)
                router.replace(`/thanks/${formId}`)
            }
        } catch (error: any) {
            setIsLoading(false)
            setError(error?.message)
        }
    }

    return <form action={clientAction} className=" w-[600px]  gap-4 shadow-xl rounded-lg p-5 border-2 flex flex-col  mx-auto min-h-[70vh] h-fit">
        <input type="text" className="hidden" name="formId" value={formId} />
        {schema.map((elem, index) => <FormElement element={elem} key={index} />)}
        {error && <p className="text-red-500">something wrong happened. </p>}
        <button className="bg-white py-1 text-bold text-md text-black w-full mt-auto shadow  shadow-foreground/50 rounded-sm hover:bg-slate-200 hover:scale-[101%] transition-all  ">Submit</button >

    </form>
}