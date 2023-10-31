import H1Icon from "@/components/icons/H1Icon";
import H2Icon from "@/components/icons/H2Icon";
import { DraggableElement } from "./DraggableElement";
import ParagraphField from "@/components/icons/ParagraphField";
import SeparatorField from "@/components/icons/SeparatorField";
import SpacerField from "@/components/icons/SpacerField";
import TextInput from "@/components/icons/TextInput";
import NumberInput from "@/components/icons/NumberInput";
import TextareaInput from "@/components/icons/TextareaInput";
import DateInput from "@/components/icons/DateInput";
import SelectInput from "@/components/icons/SelectInput";
import CheckField from "@/components/icons/CheckFIeld";
import { RefObject } from "react";



export default function SideBar() {
    return <aside className=" max-w-[20%]  ml-auto  px-10 pt-5 h-fit overflow-hidden" >
        <p className="text-foreground/70 border-b-[1px] py-1 ">Drag and drop elements</p>

        <p className="text-foreground/70  mt-3" >Layout elements</p>
        <div className="flex flex-wrap gap-5 pt-5">
            <DraggableElement text="Title field" ><H1Icon /></DraggableElement>
            <DraggableElement text="Sub title field" ><H2Icon /></DraggableElement>
            <DraggableElement text="Paragraph field" ><ParagraphField /></DraggableElement>
            <DraggableElement text="Separator field" ><SeparatorField /></DraggableElement>
            <DraggableElement text="Spacer field" ><SpacerField /></DraggableElement>
            <div className="w-24"></div>
        </div>
        <p className="text-foreground/70  mt-5" >Form elements</p>
        <div className="flex flex-wrap gap-5 pt-5">
            <DraggableElement text="Text field" ><TextInput /></DraggableElement>
            <DraggableElement text="Number field" ><NumberInput /></DraggableElement>
            <DraggableElement text="Textarea field" ><TextareaInput /></DraggableElement>
            <DraggableElement text="Date field" ><DateInput /></DraggableElement>
            <DraggableElement text="Select field" ><SelectInput /></DraggableElement>
            <DraggableElement text="Checkbox field" ><CheckField /></DraggableElement>
            <div className="w-24"></div>
        </div>
    </aside>
}