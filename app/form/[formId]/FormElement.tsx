"use client"

import PreviewCheckboxField from "@/components/previewElements/PreviewCheckboxField"
import PreviewDateField from "@/components/previewElements/PreviewDateField"
import PreviewNumberField from "@/components/previewElements/PreviewNumberField"
import PreviewParagraph from "@/components/previewElements/PreviewParagraph"
import PreviewSelect from "@/components/previewElements/PreviewSelect"
import PreviewSeparator from "@/components/previewElements/PreviewSeparator"
import PreviewSpacer from "@/components/previewElements/PreviewSpacer"
import PreviewSubTitle from "@/components/previewElements/PreviewSubTitle"
import PreviewTextField from "@/components/previewElements/PreviewTextField"
import PreviewTextarea from "@/components/previewElements/PreviewTextarea"
import PreviewTitle from "@/components/previewElements/PreviewTitle"
import { BuilderElementType } from "@/utils/globalTypes"

export default function FormElement({ element }: { element: BuilderElementType }) {
    switch (element.elementName) {
        case "Title field":
            return < PreviewTitle element={element.elementName} {...element} />
        case "Sub title field":
            return < PreviewSubTitle element={element.elementName} {...element} />
        case "Paragraph field":
            return <PreviewParagraph element={element.elementName} {...element} />
        case "Separator field":
            return <PreviewSeparator element={element.elementName} {...element} />
        case "Spacer field":
            return <PreviewSpacer element={element.elementName} {...element} />
        case "Text field":
            return <PreviewTextField element={element.elementName} {...element} />
        case "Textarea field":
            return <PreviewTextarea element={element.elementName} {...element} />
        case "Number field":
            return <PreviewNumberField element={element.elementName} {...element} />
        case "Date field":
            return <div><PreviewDateField element={element.elementName} {...element} /></div>
        case "Select field":
            return <PreviewSelect element={element.elementName} {...element} />
        case "Checkbox field":
            return <PreviewCheckboxField element={element.elementName} {...element} />
        default:
            break;
    }
    return <div>


        {element.elementName}
    </div>
}