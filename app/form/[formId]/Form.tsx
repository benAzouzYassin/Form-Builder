"use client"

import { submitFormAction } from "@/actions/formActions"
import FormElement from "./FormElement"
import { BuilderElementType } from "@/utils/globalTypes"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Form({ formSchema, formId }: { formSchema: string, formId: string }) {
    console.log(formSchema)
    const schema: BuilderElementType[] = JSON.parse(formSchema ?? "[]")

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const router = useRouter()
    async function clientAction(formData: FormData) {
        setIsLoading(true)

        try {
            const { success } = await submitFormAction(formData)
            if (success) {
                router.replace(`/thanks/${formId}`)
            }
        } catch (error: any) {
            setIsLoading(false)
            setError(error?.message)
        }
    }

    return <form onSubmit={() => setIsLoading(true)} action={clientAction} className="lg:w-[600px] border p-[20px] border-white/20  translate-y-[50px] lg:translate-y-[100px] w-full  lg:mt-0  gap-4 shadow-xl lg:border-2 rounded-lg lg:p-5  flex flex-col  mx-auto min-h-[70vh] h-fit overflow-hidden">
        <input type="text" className="hidden" name="formId" readOnly value={formId} />
        {schema.map((elem, index) => <FormElement element={elem} key={index} />)}
        {error && <p className="text-red-500">something wrong happened. </p>}
        {!isLoading && <button className="bg-white py-1 text-bold text-md text-black w-full mt-auto shadow  shadow-foreground/50 rounded-sm hover:bg-slate-200 hover:scale-[101%] transition-all  ">Submit</button >}
        {isLoading && <div className="bg-foreground/50 h-8 py-1  flex items-center text-bold text-md text-black w-full mt-auto shadow  shadow-foreground/50 rounded-sm  hover:scale-[101%] transition-all  "><div className="flex items-center w-fit  m-auto scale-110"><span className=" w-2 h-2 bg-foreground/60 animate-bounce rounded-full  duration-500 "></span><span className=" ml-[2px] w-2 h-2 bg-foreground/60 animate-bounce rounded-full delay-100  duration-500  "></span><span className="ml-[2px] w-2 h-2 bg-foreground/60 delay-150 duration-500 animate-bounce  rounded-full"></span></div></div>}
    </form>
}