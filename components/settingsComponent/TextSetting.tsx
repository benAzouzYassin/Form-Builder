import { SettingsContext } from "@/context/ElementSettingsContext"
import { useContext } from "react"


export default function TextSetting({ onChangeCb }: { onChangeCb: (newValue: string) => void }) {
    const { currentSettings } = useContext(SettingsContext)
    return <div>
        <label>{currentSettings.elementName}</label>
        <input key={currentSettings.elementName} className=" focus-within:ring-foreground/50 bg-background ring-1 ring-foreground/30 mt-2 w-[90%] rounded-sm h-8 pl-1 text-sm focus-within:outline-none" onChange={(e) => onChangeCb(e.target.value)} placeholder={currentSettings.elementName + "..."} type="text" defaultValue={currentSettings.text?.toString()} /></div>
}