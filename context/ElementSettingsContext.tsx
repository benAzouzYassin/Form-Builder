import { BuilderElementType } from "@/utils/globalTypes";
import { ReactElement, createContext, useState } from "react";


//TODO remove ant accurence for isEditing cuz it is useless

type ContextType = {
    isOpen: boolean
    closeSettings: () => void
    openSettings: (settings: BuilderElementType) => void
    currentSettings: BuilderElementType
    updateCurrentSettings: (settings: BuilderElementType) => void
}

const INITIAL_CONTEXT = {
    isOpen: false,
    closeSettings: () => { },
    openSettings: () => { },
    updateCurrentSettings: () => { },
    currentSettings: { elementName: "", id: "", isEditing: false }
}

export const SettingsContext = createContext<ContextType>(INITIAL_CONTEXT)

export function SettingsContextProvider({ children }: { children: ReactElement[] | ReactElement }) {
    const [currentSettings, setCurrentSettings] = useState<BuilderElementType>({ elementName: "", id: "", isEditing: false })
    const [isOpen, setIsOpen] = useState(false)
    const closeSettings = () => setIsOpen(false)
    const openSettings = (settings: BuilderElementType) => {
        closeSettings()
        setCurrentSettings({ elementName: "", id: "", text: "", })
        setIsOpen(true)
        setCurrentSettings(settings)
    }
    const updateCurrentSettings = (newSettings: BuilderElementType) => {
        setCurrentSettings(newSettings)
    }
    return <SettingsContext.Provider value={{ updateCurrentSettings: updateCurrentSettings, currentSettings: currentSettings, isOpen: isOpen, closeSettings: closeSettings, openSettings: openSettings }}>
        {children}
    </SettingsContext.Provider>
}