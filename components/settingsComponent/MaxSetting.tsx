import { SettingsContext } from "@/context/ElementSettingsContext"
import { useContext } from "react"


export default function MaxSetting({ onChangeCb }: { onChangeCb: (newValue: number) => void }) {
    const { currentSettings } = useContext(SettingsContext)

    return <div>
        <label >Maximum number :</label>
        <input defaultValue={currentSettings.max} placeholder="maximum..." key={currentSettings.elementName} className="pr-2  focus-within:ring-foreground/50 bg-background ring-1 ring-foreground/30 my-2 w-[90%] rounded-sm h-8 pl-1 text-sm focus-within:outline-none" onChange={(e) => onChangeCb(parseInt(e.target.value))} type="number" />
    </div>
}