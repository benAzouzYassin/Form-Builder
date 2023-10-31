import { FormElement } from "@/utils/globalTypes";
import { Textarea } from "@/components/ui/textarea"

type Props = {} & FormElement

export default function PreviewTextarea(props: Props) {
    return <div className="flex flex-col mt-1">
        <label htmlFor={props.id} className=" mb-1 ml-2 text-md"> {props.label}</label>
        <Textarea className="z-50" placeholder={props.placeHolder} rows={props.rows} required={props.required} />
        <p className="ml-3 text-sm mt-1 text-foreground/70">{props.helperText}helper text</p>
    </div>
}