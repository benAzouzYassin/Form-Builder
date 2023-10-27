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

type Props = {
    updateTopScrollVal: (value: number) => void
    scrollTopVal: number
}

export default function SideBar(props: Props) {
    return <aside onScroll={(e) => props.updateTopScrollVal(e.currentTarget.scrollTop)} className=" w-[20%] ml-auto h-[83vh] px-10 pt-5 overflow-y-scroll overflow-x-visible" >
        <p className="text-foreground/70 border-b-[1px] py-1 ">Drag and drop elements</p>

        <p className="text-foreground/70  mt-3" >Layout elements</p>
        <div className="flex flex-wrap gap-5 pt-5">
            <DraggableElement scrollTopVal={props.scrollTopVal} text="Title field" ><H1Icon /></DraggableElement>
            <DraggableElement scrollTopVal={props.scrollTopVal} text="Sub title field" ><H2Icon /></DraggableElement>
            <DraggableElement scrollTopVal={props.scrollTopVal} text="Paragraph field" ><ParagraphField /></DraggableElement>
            <DraggableElement scrollTopVal={props.scrollTopVal} text="Separator field " ><SeparatorField /></DraggableElement>
            <DraggableElement scrollTopVal={props.scrollTopVal} text="Spacer field" ><SpacerField /></DraggableElement>
            <div className="w-24"></div>
        </div>
        <p className="text-foreground/70  mt-5" >Form elements</p>
        <div className="flex flex-wrap gap-5 pt-5">
            <DraggableElement scrollTopVal={props.scrollTopVal} text="Text field" ><TextInput /></DraggableElement>
            <DraggableElement scrollTopVal={props.scrollTopVal} text="Number field" ><NumberInput /></DraggableElement>
            <DraggableElement scrollTopVal={props.scrollTopVal} text="Textarea field" ><TextareaInput /></DraggableElement>
            <DraggableElement scrollTopVal={props.scrollTopVal} text="Date field" ><DateInput /></DraggableElement>
            <DraggableElement scrollTopVal={props.scrollTopVal} text="Select field" ><SelectInput /></DraggableElement>
            <DraggableElement scrollTopVal={props.scrollTopVal} text="Checkbox field" ><CheckField /></DraggableElement>
            <div className="w-24"></div>
        </div>
    </aside>
}