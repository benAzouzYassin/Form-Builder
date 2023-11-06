import { SettingsContext } from "@/context/ElementSettingsContext"
import { useContext } from "react"


export default function PlaceHolderSetting({ onChangeCb }: { onChangeCb: (newValue: string) => void }) {
    const { currentSettings } = useContext(SettingsContext)
    return <div className="mt-2">
        <label >Place holder :</label>
        <input key={currentSettings.elementName} className="bg-background ring-1 ring-foreground/30 mt-2 w-[90%] rounded-sm h-8 pl-1 text-sm focus-within:outline-none focus-within:ring-foreground/50" onChange={(e) => onChangeCb(e.target.value)} placeholder="Your placeHolder.." type="text" />

    </div>
}