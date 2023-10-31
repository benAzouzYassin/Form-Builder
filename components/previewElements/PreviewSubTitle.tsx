import { FormElement } from "@/utils/globalTypes";

type Props = {} & FormElement

export default function PreviewSubTitle(props: Props) {
    return <h3 className="font-bold text-lg text-left ">{props.text}</h3>
}