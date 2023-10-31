import { FormElement } from "@/utils/globalTypes";

type Props = {} & FormElement

export default function PreviewSeparator(props: Props) {
    return <div className="h-4  w-full">{props.text}</div>
}