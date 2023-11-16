"use client"

import Preview from "@/components/icons/Preview";
import Publish from "@/components/icons/Publish";
import Save from "@/components/icons/Save";
import { Button } from "@/components/ui/button";
import { FormContext } from "@/context/FormContext";
import { useSearchParams, useRouter } from "next/navigation";

import { useContext, useState } from "react";


type Props = {
    name: string
    startPreview: () => void
    formId: string
}

export function TopBar(props: Props) {
    const searchParams = useSearchParams()
    const formName = searchParams.get("formName") ?? ""
    const formDesc = searchParams.get("formDesc") ?? ""
    const formCtx = useContext(FormContext)
    const [isPublishing, setIsPublishing] = useState(false)

    const router = useRouter()

    const publishingCb = () => {
        router.push(`/form/${props.formId}`)
    }

    const handlePublishBtn = () => {
        formCtx.publishForm(props.formId, formName, formDesc, publishingCb)
        setIsPublishing(true)
    }
    return <div className="  bg-background mb-1  gap-5 h-[8vh] w-full border-b-2 px-20 shadow-background shadow-sm flex items-center">
        <p><span className="text-xl font-semibold opacity-90">Form</span> : {formName}</p>
        <button onClick={() => props.startPreview()} className="hover:bg-muted  rounded-md py-2 px-4 border-2  ml-auto flex  items-center"><Preview className="" /> Preview</button>
        <button onClick={() => formCtx.saveElements(props.formId, formName, formDesc)} className="hover:bg-muted flex  items-center  rounded-md py-2 px-5 border-2"><Save className="" /> Save</button>
        <Button disabled={isPublishing} onClick={handlePublishBtn} className="flex  items-center text-white scale-105 font-medium rounded-md py-2 px-5 border-2  bg-gradient-to-r from-[#7C90F8] to-[#2ACDEF] hover:from-[#5768c0] hover:to-[#29a9c3]  "><Publish className="" /> Publish</Button>
    </div>
}