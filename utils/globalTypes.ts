export type FormType = {
    id: string
    status: "published" | "editing"
    totalVisits: number
    totalSubmissions: number
    totalBounces: number
    name: string
    createdAt: string
    description: string
    elementsList: any[]
    submissionsList: any[]
}
export type FormElementName = "Title field" | "Sub title field" | "Paragraph field" | "Separator field" | "Spacer field" | "Text field" | "Textarea field" | "Number field" | "Date field" | "Select field" | "Checkbox field" | string
export type FormElement = {
    element: FormElementName
    id: string
    label?: string
    helperText?: string
    required?: boolean
    placeHolder?: string
    rows?: number
    options?: string[]
    text?: String
    height?: number
    max?: number
    min?: number
}
