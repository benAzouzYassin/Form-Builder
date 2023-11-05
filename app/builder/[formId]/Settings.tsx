import LabelSettings from "@/components/settingsComponent/LabelSettings"
import { SettingsContext } from "@/context/ElementSettingsContext"
import { FormContext } from "@/context/FormContext"
import { useContext } from "react"

export default function Settings() {
    const settingsContext = useContext(SettingsContext)
    const settings = Object.keys(settingsContext.currentSettings)

    const formContext = useContext(FormContext)

    const renderSettingsComponent = (settingName: string) => {
        //TODO repeat the label thing and make it using formContext.update
        switch (settingName) {
            case "label":
                return <LabelSettings onChangeCb={(newLabel) => {
                    console.log({ ...settingsContext.currentSettings, label: newLabel })
                }} />
            case "helperText":
                return <div><input type="text" name="" id="" /></div>
            case "required":
                return <div><input type="text" name="" id="" /></div>
            case "placeHolder":
                return <div><input type="text" name="" id="" /></div>
            case "rows":
                return <div><input type="text" name="" id="" /></div>
            case "options":
                return <div><input type="text" name="" id="" /></div>
            case "text":
                return <div><input type="text" name="" id="" /></div>
            case "height":
                return <div><input type="text" name="" id="" /></div>
            case "max":
                return <div><input type="text" name="" id="" /></div>
            case "min":
                return <div><input type="text" name="" id="" /></div>

            default:
                return <div></div>;
        }
    }

    return <div className="absolute bg-background w-[85%] h-full flex flex-col ">
        {settings.map(setting => {
            return renderSettingsComponent(setting)
        })}
        <span onClick={settingsContext.closeSettings} className=" ml-auto mr-2   w-fit  hover:bg-muted hover:cursor-pointer transition-all ease-in  border-2 py-1 p-3 rounded-lg font-semibold text-foreground/80 " >X</span>
    </div>
}