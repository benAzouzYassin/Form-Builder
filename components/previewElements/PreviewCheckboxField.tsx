import { FormElement } from "@/utils/globalTypes";
import { Input } from "@/components/ui/input"

type Props = {} & FormElement

export default function PreviewCheckboxField(props: Props) {
    return <div className="flex  mt-1 items-center gap-3">
        <Input id={props.id} className="z-50 w-4 rounder-md hover:cursor-pointer " type="checkbox" placeholder={props.placeHolder} />
        <label className="hover:cursor-text" htmlFor={props.id}  > {props.label}</label>
    </div>
}

// TODO forgot about required and forgot about the names