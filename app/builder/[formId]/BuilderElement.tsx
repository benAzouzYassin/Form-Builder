import { CheckboxField } from "@/components/builderElements/CheckboxField";
import DateField from "@/components/builderElements/DateField";
import NumberField from "@/components/builderElements/NumberField";
import Paragraph from "@/components/builderElements/Paragraph";
import SelectField from "@/components/builderElements/SelectField";
import Separator from "@/components/builderElements/Separator";
import Spacer from "@/components/builderElements/Spacer";
import SubTitle from "@/components/builderElements/SubTitle";
import TextField from "@/components/builderElements/TextField";
import TextareaField from "@/components/builderElements/TextareaField";
import Title from "@/components/builderElements/Title"
import { FormElementName } from "@/utils/globalTypes";
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import DeleteBtn from "@/components/DeleteBtn";
import { ReactElement, useState } from "react";

// this will only get the element name and will put 
type Props = {
    elementName: FormElementName
    elementId: string
}


export default function BuilderElement(props: Props) {


    switch (props.elementName) {
        case "Title field":
            return <SortableProvider elementId={props.elementId}><Title id={props.elementId} /></SortableProvider>
        case "Sub title field":
            return <SortableProvider elementId={props.elementId}><SubTitle id={props.elementId} /></SortableProvider>
        case "Paragraph field":
            return <SortableProvider elementId={props.elementId}><Paragraph id={props.elementId} /></SortableProvider>
        case "Separator field":
            return <SortableProvider elementId={props.elementId}><Separator id={props.elementId} /></SortableProvider>
        case "Spacer field":
            return <SortableProvider elementId={props.elementId}><Spacer id={props.elementId} /></SortableProvider>
        case "Text field":
            return <SortableProvider elementId={props.elementId}><TextField id={props.elementId} /></SortableProvider>
        case "Textarea field":
            return <SortableProvider elementId={props.elementId}><TextareaField id={props.elementId} /></SortableProvider>
        case "Number field":
            return <SortableProvider elementId={props.elementId}><NumberField id={props.elementId} /></SortableProvider>
        case "Date field":
            return <SortableProvider elementId={props.elementId}><DateField id={props.elementId} /></SortableProvider>
        case "Select field":
            return <SortableProvider elementId={props.elementId}><SelectField id={props.elementId} /></SortableProvider>
        case "Checkbox field":
            return <SortableProvider elementId={props.elementId}><CheckboxField id={props.elementId} /></SortableProvider>

        default:
            break;
    }

    return <div>{props.elementName}</div>
}
function SortableProvider({ children, elementId }: { elementId: string, children: ReactElement }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
        isSorting
    } = useSortable({ id: elementId });
    // @ts-ignore
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    const [hovering, setHovering] = useState(false)

    return <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="relative">
        {hovering && !isDragging && !isSorting && <DeleteBtn id={elementId} />}
        {/*        <div onClick={() => console.log("drag")} className=" h-full   bg-background/70  w-[91%] absolute  left-0 text-foreground/60  " ><span className="animate-pulse absolute text-center left-0    w-full top-[40px] ">Click for properties or drag to move</span></div> */}

        <div id={elementId} style={style} ref={setNodeRef} {...attributes} {...listeners} onClick={(e) => console.log("hello world")} className="w-[870px] relative" >{children}</div>
    </div>
}