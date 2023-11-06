import { FormElement } from "@/utils/globalTypes";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

type Props = {} & FormElement

export default function PreviewSelect(props: Props) {
    return <div className="flex flex-col mt-1">
        <label htmlFor={props.id} className=" mb-1 ml-2 text-md"> {props.label}</label>
        <Select required={props.required}>
            <SelectTrigger className="w-full z-50">
                <SelectValue placeholder={props.placeHolder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {props.options?.map((option, index) => <SelectItem key={index} value={option}>{option}</SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
        <p className="ml-3 text-sm mt-1 text-foreground/70">{props.helperText}</p>
    </div>
}