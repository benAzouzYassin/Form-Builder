import { useState } from "react"

export default function NumberField() {
    const [label, setLabel] = useState("")
    const [placeHolder, setPlaceHolder] = useState("")
    const [helperText, setHelperText] = useState("")
    const [required, setRequired] = useState(false)
    const [max, setMax] = useState(99)
    const [min, setMin] = useState(1)
    return <div>this is Number field</div>
}