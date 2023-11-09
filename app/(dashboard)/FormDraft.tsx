import { EditIcon } from "@/components/icons/EditIcon"
import { RightArrow } from "@/components/icons/RightArrow"
import { useRouter } from "next/navigation"
import { useState } from "react"


type Props = {
    name: string
    createdAt?: string
    description: string
    id: string
    totalVisits?: number
    totalSubmissions?: number
    status: "published" | "editing"
}

export default function FormDraft(props: Props) {
    return <div className="relative flex flex-col w-[32%] h-44 border-2 p-4 border-muted  rounded-md ">
        <div className="absolute top-3 right-3  text-sm font-semibold ">{props.status === "editing" ? <span className="w-full rounded-md py-1 px-2 bg-destructive text-white ">Draft</span> : <span className="w-full rounded-md py-1 px-2 bg-foreground text-background">Published</span>}</div>
        <p className="font-bold text-foreground opacity-90  text-2xl">{props.name}</p>
        <div className="flex w-full">
            <p className="text-gray-500  mt-1 ">{props.createdAt}</p>
            {props.status === "published" && <span className="flex ml-auto items-center text-sm text-muted-foreground font-medium mt-[-30px] "><img className="mr-[2px]" src="/icons/visits.svg" />{props.totalVisits} <img className="ml-2 mr-[2px]" src="/icons/submissions.svg" />{props.totalSubmissions} </span>}

        </div>
        <p className="mt-2 text-sm  text-gray-400">{props.description.length > 0 ? props.description : "No description"}</p>
        {props.status === "editing" ? <EditButton formDesc={props.description} formName={props.name} formId={props.id} /> : <ViewButton />}
    </div>
}
function EditButton({ formId, formDesc, formName }: { formId: string, formName: string, formDesc: string }) {
    "use client"
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const handleCLick = () => {
        setIsLoading(true)
        router.push(`/builder/${formId}?formName=${formName}&formDesc=${formDesc}`)
    }
    return <button disabled={isLoading} onClick={handleCLick} className="flex h-8 w-full mt-auto bg-muted  hover:opacity-80  rounded-sm py-1 ">
        {!isLoading && <span className="mx-auto flex items-center ">Edit form <EditIcon className="ml-3" /></span>}
        {isLoading && <div className="flex items-center w-fit m-auto scale-110"><span className=" w-2 h-2 bg-foreground/60 animate-bounce rounded-full  duration-500 "></span><span className=" ml-[2px] w-2 h-2 bg-foreground/60 animate-bounce rounded-full delay-100  duration-500  "></span><span className="ml-[2px] w-2 h-2 bg-foreground/60 delay-150 duration-500 animate-bounce  rounded-full"></span></div>}
    </button>
}
function ViewButton() {
    return <button className="flex w-full  bg-foreground text-background  mt-auto hover:opacity-80  rounded-sm py-1 "><span className="mx-auto flex items-center ">View submissions<RightArrow className="ml-1 my-auto" /> </span> </button>

}