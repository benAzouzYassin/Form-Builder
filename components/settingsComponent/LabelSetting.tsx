import { SettingsContext } from "@/context/ElementSettingsContext"
import { useContext } from "react"


export default function LabelSetting({ onChangeCb }: { onChangeCb: (newLabel: string) => void }) {
    const { currentSettings } = useContext(SettingsContext)

    return <div>
        <label>Your label</label>
        <input key={currentSettings.elementName} className="bg-background ring-1 ring-foreground/30 mt-2 w-[90%] rounded-sm h-8 pl-1 text-sm focus-within:outline-none focus-within:ring-foreground/50" onChange={(e) => onChangeCb(e.target.value)} placeholder="Your label..." type="text" defaultValue={currentSettings.label?.toString()} />
        <p className="text-sm pl-1 text-foreground/60 mt-2">The label of the field.</p>
        <p className="text-sm pl-1 text-foreground/60">It will be displayed above the field</p>
    </div>
}