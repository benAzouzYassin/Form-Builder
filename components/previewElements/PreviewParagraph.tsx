import { FormElement } from "@/utils/globalTypes";

type Props = {} & FormElement

export default function PreviewParagraph(props: Props) {
    return <p className=" text-sm ">{props.text}</p>
}