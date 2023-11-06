import { SettingsContext } from "@/context/ElementSettingsContext"
import { useContext } from "react"


export default function HelperTextSetting({ onChangeCb }: { onChangeCb: (newValue: string) => void }) {
    const { currentSettings } = useContext(SettingsContext)

    return <div>
        <label >Helper Text : </label>
        <input key={currentSettings.elementName} className="bg-background ring-1 ring-foreground/30 mt-2 w-[90%] rounded-sm h-8 pl-1 text-sm focus-within:outline-none focus-within:ring-foreground/50" onChange={(e) => onChangeCb(e.target.value)} placeholder="Helper text.." type="text" />
        <p className="text-sm pl-1 text-foreground/60 mt-2">The helper text of the field</p>
        <p className="text-sm pl-1 text-foreground/60">It will be displayed under the field</p>
    </div>
}