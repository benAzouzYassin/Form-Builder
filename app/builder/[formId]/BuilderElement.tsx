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
import { BuilderElementType, FormElementName } from "@/utils/globalTypes";
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import DeleteBtn from "@/components/DeleteBtn";
import { ReactElement, useContext, useState } from "react";
import { SettingsContext } from "@/context/ElementSettingsContext";

// this will only get the element name and will put 


export default function BuilderElement(props: BuilderElementType) {

    const settingsContext = useContext(SettingsContext)


    switch (props.elementName) {
        case "Title field":
            return <SortableProvider onClickCb={() => settingsContext.openSettings(props)} elementId={props.id}><Title {...props} /></SortableProvider>
        case "Sub title field":
            return <SortableProvider onClickCb={() => settingsContext.openSettings(props)} elementId={props.id}><SubTitle {...props} /></SortableProvider>
        case "Paragraph field":
            return <SortableProvider onClickCb={() => settingsContext.openSettings(props)} elementId={props.id}><Paragraph {...props} /></SortableProvider>
        case "Separator field":
            return <SortableProvider onClickCb={() => settingsContext.openSettings(props)} elementId={props.id}><Separator {...props} /></SortableProvider>
        case "Spacer field":
            return <SortableProvider onClickCb={() => settingsContext.openSettings(props)} elementId={props.id}><Spacer {...props} /></SortableProvider>
        case "Text field":
            return <SortableProvider onClickCb={() => settingsContext.openSettings(props)} elementId={props.id}><TextField {...props} /></SortableProvider>
        case "Textarea field":
            return <SortableProvider onClickCb={() => settingsContext.openSettings(props)} elementId={props.id}><TextareaField {...props} /></SortableProvider>
        case "Number field":
            return <SortableProvider onClickCb={() => settingsContext.openSettings(props)} elementId={props.id}><NumberField {...props} /></SortableProvider>
        case "Date field":
            return <SortableProvider onClickCb={() => settingsContext.openSettings(props)} elementId={props.id}><DateField {...props} /></SortableProvider>
        case "Select field":
            return <SortableProvider onClickCb={() => settingsContext.openSettings(props)} elementId={props.id}><SelectField {...props} /></SortableProvider>
        case "Checkbox field":
            return <SortableProvider onClickCb={() => settingsContext.openSettings(props)} elementId={props.id}><CheckboxField {...props} /></SortableProvider>

        default:
            break;
    }

    return <div>{props.elementName}</div>
}
function SortableProvider({ children, elementId, onClickCb }: { onClickCb: () => void, elementId: string, children: ReactElement }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
        isSorting,
        node
    } = useSortable({ id: elementId });
    // @ts-ignore
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    if (transform?.x == 0 && transform.y == 0 && isDragging) {
        onClickCb()

    }
    const [hovering, setHovering] = useState(false)

    return <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="relative">
        {hovering && !isDragging && !isSorting && <DeleteBtn id={elementId} />}

        <div id={elementId} style={style} ref={setNodeRef} {...attributes} {...listeners} className="w-[870px] relative" >{children}</div>
    </div>
}