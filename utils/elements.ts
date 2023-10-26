

//layout elements

type HeaderText = {
    text: String

}
type Paragraph = {
    text: String

}
type separator = {}

type Spacer = {
    height: 1 | 2 | 3 | 4
}

//form elements 

type FormElement = {
    label: string
    helperText: string
    required: boolean
}

type inputText = {
    placeHolder: string
} & FormElement

type InputNumber = {
    placeHolder: string
} & FormElement

type InputTextarea = {
    rows: number
    placeHolder: string
} & FormElement

type InputDate = {
    placeHolder: string
} & FormElement

type InputCheckbox = {
    options: string[]
} & FormElement

type InputRadio = {
    options: string[]
} & FormElement

type InputSelect = {
    placeHolder: string
    options: string[]
} & FormElement