import { SettingsContext } from "@/context/ElementSettingsContext"
import { useContext } from "react"


export default function OptionsSetting({ onChangeCb }: { onChangeCb: (newValue: string[]) => void }) {
    const { updateCurrentSettings, currentSettings } = useContext(SettingsContext)
    return <div className="" >
        <div className="flex mt-5 items-center"><span className="font-medium ">Options</span><button onClick={() => updateCurrentSettings({ ...currentSettings, options: currentSettings.options?.concat(["newOption"]) })} className="ring-1 ring-foreground/20 ml-auto mr-10 px-2 py-1 rounded-md hover:bg-muted/50" ><span className="text-xl">+</span>  Add</button></div>
        <div className="border-l-2 flex mt-2 flex-col gap-2">
            {currentSettings.options?.map((option, index) => <div key={index} className="flex gap-2  ">
                <input onBlur={(e) => {
                    if (currentSettings.options) {
                        const newOptions = [...currentSettings.options]
                        newOptions[index] = e.target.value
                        updateCurrentSettings({ ...currentSettings, options: newOptions })
                        onChangeCb(newOptions)
                    }
                }} type="text" className=" rounded w-[65%] focus-within:outline-none focus-within:ring-foreground/30 ml-auto  bg-background ring-1 ring-foreground/20 p-1" defaultValue={option} />
                <button className="mr-10 ring-1 px-3 ring-foreground/10 hover:bg-muted/50 text-md rounded-md">x</button>
            </div>)}
        </div>
    </div>
}
