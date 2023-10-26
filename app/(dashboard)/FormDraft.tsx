import { EditIcon } from "@/components/icons/EditIcon"
import { RightArrow } from "@/components/icons/RightArrow"


type Props = {
    name: string
    createdAt: string
    description: string
    id: string
    totalVisits: number
    totalSubmissions: number
    status: "published" | "editing"
}

export default function FormDraft(props: Props) {
    return <div className="relative w-80 h-44 border-2 p-4 border-muted  rounded-md ">
        <div className="absolute top-3 right-3  text-sm font-semibold ">{props.status === "editing" ? <span className="w-full rounded-md py-1 px-2 bg-destructive text-white ">Draft</span> : <span className="w-full rounded-md py-1 px-2 bg-foreground text-background">Published</span>}</div>
        <p className="font-bold text-foreground opacity-90  text-2xl">{props.name}</p>
        <div className="flex w-full">
            <p className="text-gray-500  mt-1 ">{props.createdAt}</p>
            {props.status === "published" && <span className="flex ml-auto items-center text-sm text-muted-foreground font-medium mt-[-30px] "><img className="mr-[2px]" src="/icons/visits.svg" />{props.totalVisits} <img className="ml-2 mr-[2px]" src="/icons/submissions.svg" />{props.totalSubmissions} </span>}

        </div>
        <p className="mt-2 text-sm text-gray-400">{props.description.length > 0 ? props.description : "No description"}</p>
        {props.status === "editing" ? <EditButton /> : <ViewButton />}
    </div>
}
function EditButton() {
    return <button className="flex w-full bg-muted  hover:opacity-80  rounded-sm py-1 mt-4"><span className="mx-auto flex items-center ">Edit form <EditIcon className="ml-3" /></span> </button>
}
function ViewButton() {
    return <button className="flex w-full  bg-foreground text-background hover:opacity-80  rounded-sm py-1 mt-4"><span className="mx-auto flex items-center ">View submissions<RightArrow className="ml-1 my-auto" /> </span> </button>

}