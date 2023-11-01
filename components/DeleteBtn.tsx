import { FormContext } from "@/context/FormContext";
import { DeleteIcon } from "./icons/Delete";
import { useContext } from "react";



export default function DeleteBtn({ id }: { id: string }) {
    const formContext = useContext(FormContext)
    return <div onClick={() => formContext.removeElement(id)} className="  bg-red-500 h-full  hover:z-0 top-0 hover:bg-[#8b2e2e]  hover:cursor-pointer absolute w-[9%] right-0  rounded-r-sm ring-inset ring-accent ring-2 transition-all flex items-center " ><DeleteIcon className="fill-foreground/80 w-9  mx-auto" /></div>
}