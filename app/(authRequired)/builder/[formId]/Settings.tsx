import HeightSetting from "@/components/settingsComponent/HeightSetting"
import HelperTextSetting from "@/components/settingsComponent/HelperTextSetting"
import LabelSetting from "@/components/settingsComponent/LabelSetting"
import MaxSetting from "@/components/settingsComponent/MaxSetting"
import MinSetting from "@/components/settingsComponent/MinSetting"
import OptionsSetting from "@/components/settingsComponent/OptionsSetting"
import PlaceHolderSetting from "@/components/settingsComponent/PlaceholderSetting"
import RequiredSetting from "@/components/settingsComponent/RequiredSetting"
import RowsSetting from "@/components/settingsComponent/RowsSetting"
import TextSetting from "@/components/settingsComponent/TextSetting"
import { SettingsContext } from "@/context/ElementSettingsContext"
import { FormContext } from "@/context/FormContext"
import { useContext } from "react"





export default function Settings() {
    const settingsContext = useContext(SettingsContext)
    const settings = Object.keys(settingsContext.currentSettings)

    const formContext = useContext(FormContext)

    const renderSettingsComponent = (settingName: string) => {
        switch (settingName) {
            case "label":
                return <LabelSetting onChangeCb={(newValue) => {
                    settingsContext.updateCurrentSettings({ ...settingsContext.currentSettings, label: newValue })
                    formContext.updateBuilderElement({ ...settingsContext.currentSettings, label: newValue })
                }} />

            case "helperText":
                return <HelperTextSetting onChangeCb={(newValue) => {
                    settingsContext.updateCurrentSettings({ ...settingsContext.currentSettings, helperText: newValue })
                    formContext.updateBuilderElement({ ...settingsContext.currentSettings, helperText: newValue })
                }} />

            case "required":
                return <RequiredSetting cb={() => {
                    settingsContext.updateCurrentSettings({ ...settingsContext.currentSettings, required: !settingsContext.currentSettings.required })
                    formContext.updateBuilderElement({ ...settingsContext.currentSettings, required: !settingsContext.currentSettings.required })
                }} />
            case "placeHolder":
                return <PlaceHolderSetting onChangeCb={(newValue) => {
                    settingsContext.updateCurrentSettings({ ...settingsContext.currentSettings, placeHolder: newValue })
                    formContext.updateBuilderElement({ ...settingsContext.currentSettings, placeHolder: newValue })
                }} />
            case "rows":
                return <RowsSetting onChangeCb={(newValue) => {
                    settingsContext.updateCurrentSettings({ ...settingsContext.currentSettings, rows: newValue })
                    formContext.updateBuilderElement({ ...settingsContext.currentSettings, rows: newValue })
                }} />
            case "options":
                return <OptionsSetting onChangeCb={(newValue) => {
                    settingsContext.updateCurrentSettings({ ...settingsContext.currentSettings, options: newValue })
                    formContext.updateBuilderElement({ ...settingsContext.currentSettings, options: newValue })
                }} />
            case "text":
                return <TextSetting onChangeCb={(newValue) => {
                    formContext.updateBuilderElement({ ...settingsContext.currentSettings, text: newValue })
                    settingsContext.updateCurrentSettings({ ...settingsContext.currentSettings, text: newValue })
                }} />
            case "height":
                return <HeightSetting onChangeCb={(newValue) => {
                    settingsContext.updateCurrentSettings({ ...settingsContext.currentSettings, height: newValue })
                    formContext.updateBuilderElement({ ...settingsContext.currentSettings, height: newValue })
                }} />
            case "max":
                return <MaxSetting onChangeCb={(newValue) => {
                    settingsContext.updateCurrentSettings({ ...settingsContext.currentSettings, max: newValue })
                    formContext.updateBuilderElement({ ...settingsContext.currentSettings, max: newValue })
                }} />
            case "min":
                return <MinSetting onChangeCb={(newValue) => {
                    formContext.updateBuilderElement({ ...settingsContext.currentSettings, min: newValue })
                    settingsContext.updateCurrentSettings({ ...settingsContext.currentSettings, min: newValue })
                }} />

            default:
                return <div></div>;
        }
    }

    return <div className="absolute bg-background w-full  h-full flex flex-col ">
        <div className="flex items-center border-b-[1px] pb-1 mr-3 ">
            <span className=" text-foreground/50 font-normal mt-2">Element Properties</span>
            <span onClick={settingsContext.closeSettings} className=" ml-auto  scale-90  w-fit  hover:bg-muted text-foreground/60 hover:cursor-pointer transition-all ease-in  border-2 py-1 p-3 rounded-lg font-semibold " >X</span>
        </div>
        <div className=" mt-10">
            {settings.map(setting => {
                return renderSettingsComponent(setting)
            })}
        </div>
    </div>
}
