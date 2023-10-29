import { useState } from "react"


export default function TextField() {

    const [label, setLabel] = useState("")
    const [placeHolder, setPlaceHolder] = useState("")
    const [helperText, setHelperText] = useState("")
    const [required, setRequired] = useState(false)
    return <div><input type="text" /></div>
}