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
}


export default function FormElement(props: Props) {

    switch (props.elementName) {
        case "Title field":
            return <Title />
        case "Sub title field":
            return <SubTitle />
        case "Paragraph field":
            return <Paragraph />
        case "Separator field":
            return <Separator />
        case "Spacer field":
            return <Spacer />
        case "Text field":
            return <TextField />
        case "Textarea field":
            return <TextareaField />
        case "Number field":
            return <NumberField />
        case "Date field":
            return <DateField />
        case "Select field":
            return <SelectField />
        case "Checkbox field":
            return <CheckboxField />

        default:
            break;
    }

    return <div>{props.elementName}</div>
}