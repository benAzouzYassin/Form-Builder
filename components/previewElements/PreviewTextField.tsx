import { FormElement } from "@/utils/globalTypes";
import { Input } from "@/components/ui/input"

type Props = {} & FormElement

export default function PreviewTextField(props: Props) {
    return <div className="flex flex-col mt-1">
        <label htmlFor={props.id} className=" mb-1 ml-2 text-md"> {props.label}</label>
        <Input required={props.required} id={props.id} className="z-50 " type="text" placeholder={props.placeHolder} />
        <p className="ml-3 text-sm mt-1 text-foreground/70">{props.helperText}</p>
    </div>
}