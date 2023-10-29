import { useState } from "react"

export default function TextareaField() {
    const [label, setLabel] = useState("")
    const [placeHolder, setPlaceHolder] = useState("")
    const [helperText, setHelperText] = useState("")
    const [required, setRequired] = useState(false)
    const [rowsNumber, setRowsNumber] = useState(1)
    return <div>this is text area</div>
}