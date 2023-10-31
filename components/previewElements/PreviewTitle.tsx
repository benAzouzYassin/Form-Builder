import { FormElement } from "@/utils/globalTypes";

type Props = {} & FormElement

export default function PreviewTitle(props: Props) {
    return <h1 className="font-semibold text-4xl text-center ">{props.text}</h1>
}