import { useState } from "react"

export default function SelectField() {
    const [label, setLabel] = useState("")
    const [placeHolder, setPlaceHolder] = useState("")
    const [helperText, setHelperText] = useState("")
    const [required, setRequired] = useState(false)
    const [options, setOptions] = useState<string[]>([])
    return <div>this is the select</div>
}