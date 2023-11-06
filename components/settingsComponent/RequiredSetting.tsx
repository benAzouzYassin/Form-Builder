import { SettingsContext } from "@/context/ElementSettingsContext"
import { handleClientScriptLoad } from "next/script"
import { useContext, useEffect, useState } from "react"


export default function RequiredSetting({ cb }: { cb: () => void }) {
    const { currentSettings, updateCurrentSettings } = useContext(SettingsContext)
    const handleClick = () => {
        updateCurrentSettings({ ...currentSettings, required: !currentSettings.required })
        cb()
    }
    return <div key={currentSettings.placeHolder} className="flex items-center h-fit mt-4 ">

        <button onClick={handleClick} style={{ backgroundColor: currentSettings.required ? "green" : "", }} className="w-11   bg-white/70 h-5 rounded-full flex pr-1 pl-[3px] p-[2px]" ><span style={{ marginLeft: currentSettings.required ? "auto" : "0px", backgroundColor: currentSettings.required ? "white" : "black", }} className=" w-[21px] rounded-full h-full bg-black"></span></button>
        <p className="text-sm text-foreground/70 ml-2">Required field ?</p>
    </div>
}