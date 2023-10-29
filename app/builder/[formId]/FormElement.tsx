import DateField from "@/components/formElements/DateField";
import NumberField from "@/components/formElements/NumberField";
import Paragraph from "@/components/formElements/Paragraph";
import SelectField from "@/components/formElements/SelectField";
import Separator from "@/components/formElements/Separator";
import Spacer from "@/components/formElements/Spacer";
import SubTitle from "@/components/formElements/SubTitle";
import TextField from "@/components/formElements/TextField";
import TextareaField from "@/components/formElements/TextareaField";
import Title from "@/components/formElements/Title"
import CheckField from "@/components/icons/CheckFIeld";

// this will only get the element name and will put 
type Props = {
    elementName: string
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
        case "Number field":
            return <NumberField />
        case "Date field":
            return <DateField />
        case "Select field":
            return <SelectField />
        case "Checkbox field":
            return <CheckField />


        default:
            break;
    }

    return <div>{props.elementName}</div>
}