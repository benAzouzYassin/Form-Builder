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
import { useContext } from "react";
import { SettingsContext } from "@/context/ElementSettingsContext";
import Settings from "./Settings";
import SideLoadingItem from "./SideLoadingItem";



export default function SideBar() {
    const settingsContext = useContext(SettingsContext)
    return <aside style={{ position: settingsContext.isOpen ? "relative" : "static" }} className="mx-auto px-2  pt-5 h-fit overflow-hidden" >


        {settingsContext.isOpen && <Settings />}

        <p className="text-foreground/70 border-b-[1px] py-1 ">Drag and drop elements</p>

        <p className="text-foreground/70  mt-3" >Layout elements</p>
        <div className="grid grid-cols-2 items-start  gap-4 pt-5">
            <DraggableElement text="Title field" ><H1Icon /></DraggableElement>
            <DraggableElement text="Sub title field" ><H2Icon /></DraggableElement>
            <DraggableElement text="Paragraph field" ><ParagraphField /></DraggableElement>
            <DraggableElement text="Separator field" ><SeparatorField /></DraggableElement>
            <DraggableElement text="Spacer field" ><SpacerField /></DraggableElement>
            <div className="w-24"></div>
        </div>
        <p className="text-foreground/70  mt-5" >Form elements</p>
        <div className="grid grid-cols-2 gap-4 pt-5">
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