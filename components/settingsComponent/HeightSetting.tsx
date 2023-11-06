import { Slider } from "@/components/ui/slider"
import { SettingsContext } from "@/context/ElementSettingsContext"
import { useContext } from "react"


export default function HeightSetting({ onChangeCb, }: { onChangeCb: (newValue: number) => void }) {
    const { currentSettings } = useContext(SettingsContext)

    return <div>
        <label>Spacer height :</label>
        <Slider onPointerUpCapture={(e) => onChangeCb(e.target.ariaValueNow)} defaultValue={[currentSettings.height ?? 30]} max={100} min={10} step={1} className="w-[90%] mt-5 " />
    </div>
}