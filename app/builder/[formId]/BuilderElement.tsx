import { CheckboxField } from "@/components/builderElements/CheckboxField";
import DateField from "@/components/builderElements/DateField";
import NumberField from "@/components/builderElements/NumberField";
import Paragraph from "@/components/builderElements/Paragraph";
import SelectField from "@/components/builderElements/SelectField";
import Separator from "@/components/builderElements/Separator";
import Spacer from "@/components/builderElements/Spacer";
import SubTitle from "@/components/builderElements/SubTitle";
import TextField from "@/components/builderElements/TextField";
import TextareaField from "@/components/builderElements/TextareaField";
import Title from "@/components/builderElements/Title"
import { FormElementName } from "@/utils/globalTypes";

// this will only get the element name and will put 
type Props = {
    elementName: FormElementName
    elementId: string
}


export default function builderElement(props: Props) {

    switch (props.elementName) {
        case "Title field":
            return <Title id={props.elementId} />
        case "Sub title field":
            return <SubTitle id={props.elementId} />
        case "Paragraph field":
            return <Paragraph id={props.elementId} />
        case "Separator field":
            return <Separator id={props.elementId} />
        case "Spacer field":
            return <Spacer id={props.elementId} />
        case "Text field":
            return <TextField id={props.elementId} />
        case "Textarea field":
            return <TextareaField id={props.elementId} />
        case "Number field":
            return <NumberField id={props.elementId} />
        case "Date field":
            return <DateField id={props.elementId} />
        case "Select field":
            return <SelectField id={props.elementId} />
        case "Checkbox field":
            return <CheckboxField id={props.elementId} />

        default:
            break;
    }

    return <div>{props.elementName}</div>
}