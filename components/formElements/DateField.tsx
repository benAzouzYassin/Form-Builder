import { useState } from "react"

export default function DateField() {
    const [label, setLabel] = useState("")
    const [helperText, setHelperText] = useState("")
    const [required, setRequired] = useState(false)
    return <input type="date" />
}