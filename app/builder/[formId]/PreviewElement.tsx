import PreviewCheckboxField from "@/components/previewElements/PreviewCheckboxField";
import PreviewDateField from "@/components/previewElements/PreviewDateField";
import PreviewNumberField from "@/components/previewElements/PreviewNumberField";
import PreviewParagraph from "@/components/previewElements/PreviewParagraph";
import PreviewSelect from "@/components/previewElements/PreviewSelect";
import PreviewSeparator from "@/components/previewElements/PreviewSeparator";
import PreviewSpacer from "@/components/previewElements/PreviewSpacer";
import PreviewSubTitle from "@/components/previewElements/PreviewSubTitle";
import PreviewTextField from "@/components/previewElements/PreviewTextField";
import PreviewTextarea from "@/components/previewElements/PreviewTextarea";
import PreviewTitle from "@/components/previewElements/PreviewTitle";
import { FormElement } from "@/utils/globalTypes"

type Props = {} & FormElement


export default function PreviewElement(props: Props) {

    switch (props.element) {
        case "Title field":
            return <PreviewTitle {...props} />
        case "Sub title field":
            return <PreviewSubTitle {...props} />
        case "Paragraph field":
            return <PreviewParagraph {...props} />
        case "Separator field":
            return <PreviewSeparator {...props} />
        case "Spacer field":
            return <PreviewSpacer {...props} />
        case "Text field":
            return <PreviewTextField {...props} />
        case "Textarea field":
            return <PreviewTextarea {...props} />
        case "Number field":
            return <PreviewNumberField  {...props} />
        case "Date field":
            return <PreviewDateField  {...props} />
        case "Select field":
            return <PreviewSelect {...props} />
        case "Checkbox field":
            return <PreviewCheckboxField {...props} />

        default:
            break;
    }


    return <div>this is {props.element}</div>
}