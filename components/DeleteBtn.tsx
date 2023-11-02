import { FormContext } from "@/context/FormContext";
import { DeleteIcon } from "./icons/Delete";
import { useContext } from "react";



export default function DeleteBtn({ id }: { id: string }) {
    const formContext = useContext(FormContext)
    return <div onClick={(e) => formContext.removeElement(id)} id="delete-btn" className="z-[80] bg-red-500 h-full  hover:z-50 top-0 hover:bg-[#8b2e2e]  hover:cursor-pointer absolute w-[9%] right-0  rounded-r-sm ring-inset ring-accent ring-2 transition-all flex items-center " >{!id.startsWith("Separator") && <DeleteIcon className="fill-foreground/80 w-9 z-[100] mx-auto" />}</div>
}