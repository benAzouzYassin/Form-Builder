import { SettingsContext } from "@/context/ElementSettingsContext"
import { useContext } from "react"


export default function RowsSetting({ onChangeCb }: { onChangeCb: (newValue: number) => void }) {
    const { currentSettings } = useContext(SettingsContext)

    return <div>
        <label >Textarea rows : </label>
        <input key={currentSettings.elementName} className=" pr-2 focus-within:ring-foreground/50 bg-background ring-1 ring-foreground/30 mt-2 w-[90%] rounded-sm h-8 pl-1 text-sm focus-within:outline-none" type="number" onChange={(e) => onChangeCb(parseInt(e.target.value))} defaultValue={currentSettings.rows?.toString()} /></div>
}