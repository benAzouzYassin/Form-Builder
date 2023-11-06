import { FormElement } from "@/utils/globalTypes";

type Props = {} & FormElement

export default function PreviewSpacer(props: Props) {
    return <div style={{ minHeight: "30px", height: props.height + "px" }} className=" w-full"></div>
}